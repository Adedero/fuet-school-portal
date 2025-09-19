import { eq } from "drizzle-orm";
import { db } from "~~/server/database/connection";
import { application, admissionFeePayment } from "~~/server/database/schema";
import verifyInterswitchPayment from "~~/server/utils/verify-interswitch-payment";
import { admissionFeePaymentSchema } from "~~/shared/schemas/payment.schema";

export default defineEventHandler(async (event) => {
  const { applicationId } = getRouterParams(event);

  //1. Get the settings
  const settings = await db.query.settings.findFirst({
    columns: {
      admissionFee: true
    }
  });

  if (!settings || settings.admissionFee === null) {
    throw createError({
      statusCode: 500,
      statusMessage:
        "Something went wrong and we're working on it. If you have been debited, please lodge a complaint with the admin."
    });
  }

  // 1. Make sure application exists
  const targetApplication = await db.query.application.findFirst({
    where: (app, { eq }) => eq(app.id, applicationId)
  });

  if (!targetApplication) {
    throw createError({
      statusCode: 400,
      statusMessage: "Application not found"
    });
  }

  // 2. Ensure application is accepted
  if (targetApplication.status !== "accepted") {
    throw createError({
      statusCode: 400,
      statusMessage: "Application has not yet been accepted"
    });
  }

  // 3. Validate request body
  const body = await readValidatedBody(
    event,
    admissionFeePaymentSchema.safeParse
  );
  if (!body.success) {
    throw createError({
      statusCode: 400,
      statusMessage: body.error.issues[0].message
    });
  }

  // 4. Verify payment with Interswitch
  const { data } = body;
  const {
    Amount,
    Status,
    MerchantReference,
    PaymentReference,
    ResponseDescription
  } = await verifyInterswitchPayment(data);

  // normalize status (defensive)
  const status = Status;

  if (status === "cancelled") {
    throw createError({
      statusCode: 400,
      statusMessage: "The transaction was cancelled."
    });
  }

  // (Optional) verify the amount matches expected fee
  const expectedFee = settings.admissionFee * 100;
  
  if (Amount !== expectedFee) {
    throw createError({
      statusCode: 400,
      statusMessage:
        "Transaction amount does not match admission fee. Contact the admin for resolution"
    });
  }

  // 5. Save payment & update application in transaction

  const savedPayment = await db.transaction(async (txn) => {
    const date = new Date();

    // idempotent insert
    const inserted = await txn
      .insert(admissionFeePayment)
      .values({
        applicationId: targetApplication.id,
        schoolSessionName: targetApplication.schoolSessionName,
        amount: Amount / 100,
        transactionRef: MerchantReference,
        paymentRef: PaymentReference,
        status,
        createdAt: date,
        updatedAt: date
      })
      .onConflictDoNothing({ target: admissionFeePayment.paymentRef })
      .returning();

    // only mark application if payment was successful
    if (status === "successful") {
      await txn
        .update(application)
        .set({ hasPaidAdmissionFee: true, updatedAt: date })
        .where(eq(application.id, targetApplication.id));
    }

    // if payment already exists, fetch it

    return (
      inserted[0] ??
      (await txn.query.admissionFeePayment.findFirst({
        where: (p, { eq }) => eq(p.paymentRef, PaymentReference)
      }))
    );
  });

  // 6. Respond with clean payload
  return {
    transactionStatus: status,
    response: ResponseDescription,
    payment: savedPayment
  };
});
