import { c as defineEventHandler, m as getRouterParams, i as db, h as createError, r as readValidatedBody, D as verifyInterswitchPayment, o as admissionFeePayment, k as application } from '../../../../../../_/nitro.mjs';
import { eq } from 'drizzle-orm';
import z from 'zod';
import 'nanoid';
import 'node:path';
import 'node:fs/promises';
import 'node:crypto';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:url';
import 'better-auth';
import 'better-auth/adapters/drizzle';
import 'drizzle-orm/libsql';
import 'drizzle-orm/sqlite-core';
import 'ulid';
import 'nodemailer';
import '@iconify/utils';
import 'consola';
import 'ipx';

const admissionFeePaymentSchema = z.object({
  merchantCode: z.string("Merhcant code is required").nonempty("Merchant code is required"),
  transactionRef: z.string("Transaction ref is required").refine((value) => {
    const parts = value.split("-");
    return parts.length === 3;
  }, "Invalid transaction ref"),
  amount: z.number("Invalid amount").gt(0, "Amount must be greater than NGN 0.00")
});

const processAdmissionFee_post = defineEventHandler(async (event) => {
  const { applicationId } = getRouterParams(event);
  const settings = await db.query.settings.findFirst({
    columns: {
      admissionFee: true
    }
  });
  if (!settings || settings.admissionFee === null) {
    throw createError({
      statusCode: 500,
      statusMessage: "Something went wrong and we're working on it. If you have been debited, please lodge a complaint with the admin."
    });
  }
  const targetApplication = await db.query.application.findFirst({
    where: (app, { eq: eq2 }) => eq2(app.id, applicationId)
  });
  if (!targetApplication) {
    throw createError({
      statusCode: 400,
      statusMessage: "Application not found"
    });
  }
  if (targetApplication.status !== "accepted") {
    throw createError({
      statusCode: 400,
      statusMessage: "Application has not yet been accepted"
    });
  }
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
  const { data } = body;
  const {
    Amount,
    Status,
    MerchantReference,
    PaymentReference,
    ResponseDescription
  } = await verifyInterswitchPayment(data);
  const status = Status;
  if (status === "cancelled") {
    throw createError({
      statusCode: 400,
      statusMessage: "The transaction was cancelled."
    });
  }
  const expectedFee = settings.admissionFee * 100;
  if (Amount !== expectedFee) {
    throw createError({
      statusCode: 400,
      statusMessage: "Transaction amount does not match admission fee. Contact the admin for resolution"
    });
  }
  const savedPayment = await db.transaction(async (txn) => {
    var _a;
    const date = /* @__PURE__ */ new Date();
    const inserted = await txn.insert(admissionFeePayment).values({
      applicationId: targetApplication.id,
      schoolSessionName: targetApplication.schoolSessionName,
      amount: Amount / 100,
      transactionRef: MerchantReference,
      paymentRef: PaymentReference,
      status,
      createdAt: date,
      updatedAt: date
    }).onConflictDoNothing({ target: admissionFeePayment.paymentRef }).returning();
    if (status === "successful") {
      await txn.update(application).set({ hasPaidAdmissionFee: true, updatedAt: date }).where(eq(application.id, targetApplication.id));
    }
    return (_a = inserted[0]) != null ? _a : await txn.query.admissionFeePayment.findFirst({
      where: (p, { eq: eq2 }) => eq2(p.paymentRef, PaymentReference)
    });
  });
  return {
    transactionStatus: status,
    response: ResponseDescription,
    payment: savedPayment
  };
});

export { processAdmissionFee_post as default };
//# sourceMappingURL=process-admission-fee.post.mjs.map
