import { d as defineEventHandler, i as getRouterParams, b as db, c as createError, j as readBody, k as admissionFeePayment, f as application, u as user, s as student } from '../../../../../../nitro/nitro.mjs';
import { eq } from 'drizzle-orm';
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

const createPaymentAndStudent = defineEventHandler(async (event) => {
  const { applicationId = "" } = getRouterParams(event);
  const targetApplication = await db.query.application.findFirst({
    where: (app, { eq: eq2 }) => eq2(app.id, applicationId)
  });
  if (!targetApplication) {
    throw createError({
      statusCode: 400,
      statusMessage: "Application not found."
    });
  }
  const body = await readBody(event);
  const [studentClass, department] = await Promise.all([
    db.query.studentClass.findFirst({
      where: (sc, { eq: eq2 }) => eq2(sc.className, body.studentClassName)
    }),
    db.query.department.findFirst({
      where: (dept, { eq: eq2 }) => eq2(dept.name, body.departmentName)
    })
  ]);
  if (!studentClass || !department) {
    throw createError({
      statusCode: 400,
      statusMessage: `${studentClass ? "Department" : "Student class"} not found`
    });
  }
  const paymentRecord = await db.insert(admissionFeePayment).values({
    applicationId: targetApplication.id,
    schoolSessionName: targetApplication.schoolSessionName,
    amount: body.amount,
    transactionRef: body.transactionRef,
    paymentRef: body.paymentRef,
    status: "successful"
  }).returning();
  await db.transaction(async (txn) => {
    await txn.update(application).set({
      hasPaidAdmissionFee: true,
      admissionFeePaymentId: paymentRecord[0].id,
      updatedAt: /* @__PURE__ */ new Date()
    }).where(eq(application.id, targetApplication.id));
    await txn.update(user).set({ role: "student", updatedAt: /* @__PURE__ */ new Date() }).where(eq(user.id, targetApplication.userId));
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

export { createPaymentAndStudent as default };
//# sourceMappingURL=create-payment-and-student.mjs.map
