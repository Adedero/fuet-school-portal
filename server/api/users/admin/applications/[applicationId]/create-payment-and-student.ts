import { eq } from "drizzle-orm";
import { db } from "~~/server/database/connection";
import {
  user,
  student,
  admissionFeePayment,
  application
} from "~~/server/database/schema";

export default defineEventHandler(async (event) => {
  // Create payment record
  // modify application.hasPaidAdmissionFee
  //change user role to student
  // create student account
  const { applicationId = "" } = getRouterParams(event);

  const targetApplication = await db.query.application.findFirst({
    where: (app, { eq }) => eq(app.id, applicationId)
  });

  if (!targetApplication) {
    throw createError({
      statusCode: 400,
      statusMessage: "Application not found."
    });
  }

  const body = (await readBody(event)) as {
    amount: number;
    transactionRef: string;
    paymentRef: string;
    regNumber: string;
    studentClassName: string;
    departmentName: string;
  };

  const [studentClass, department] = await Promise.all([
    db.query.studentClass.findFirst({
      where: (sc, { eq }) => eq(sc.className, body.studentClassName)
    }),
    db.query.department.findFirst({
      where: (dept, { eq }) => eq(dept.name, body.departmentName)
    })
  ]);

  if (!studentClass || !department) {
    throw createError({
      statusCode: 400,
      statusMessage: `${
        studentClass ? "Department" : "Student class"
      } not found`
    });
  }

  const paymentRecord = await db
    .insert(admissionFeePayment)
    .values({
      applicationId: targetApplication.id,
      schoolSessionName: targetApplication.schoolSessionName,
      amount: body.amount,
      transactionRef: body.transactionRef,
      paymentRef: body.paymentRef,
      status: "successful"
    })
    .returning();

  await db.transaction(async (txn) => {
    await txn
      .update(application)
      .set({
        hasPaidAdmissionFee: true,
        admissionFeePaymentId: paymentRecord[0].id,
        updatedAt: new Date()
      })
      .where(eq(application.id, targetApplication.id));

    await txn
      .update(user)
      .set({ role: "student", updatedAt: new Date() })
      .where(eq(user.id, targetApplication.userId));

    await txn.insert(student).values({
      userId: targetApplication.userId,
      applicationId: targetApplication.id,
      regNumber: body.regNumber,
      studentClassId: studentClass.id,
      departmentId: department.id,
      facultyId: department.facultyId,
      isExpelled: false
    });
  });

  return {
    message: "Student account created"
  };
});
