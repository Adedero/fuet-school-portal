import { c as defineEventHandler, m as getRouterParams, i as db, h as createError, r as readValidatedBody, n as student, o as user } from '../../../../../../_/nitro.mjs';
import { eq } from 'drizzle-orm';
import { s as studentCreationSchema } from '../../../../../../_/student.schema.mjs';
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
import 'zod';

const createStudent_post = defineEventHandler(async (event) => {
  const { applicationId = "" } = getRouterParams(event);
  const application = await db.query.application.findFirst({
    where: (app, { eq: eq2 }) => eq2(app.id, applicationId),
    with: {
      schoolSession: true,
      user: {
        columns: {
          email: true
        }
      },
      admissionFeePayment: true
    },
    columns: {
      id: true,
      status: true,
      userId: true
    }
  });
  if (!application) {
    throw createError({
      statusCode: 400,
      statusMessage: "Application not found."
    });
  }
  if (application.status !== "accepted") {
    throw createError({
      statusCode: 400,
      statusMessage: "Application has not yet been accepted"
    });
  }
  if (!application.admissionFeePayment) {
    throw createError({
      statusCode: 400,
      statusMessage: "Applicant has not paid the admission fee"
    });
  }
  const body = await readValidatedBody(event, studentCreationSchema.safeParse);
  if (!body.success) {
    throw createError({
      statusCode: 400,
      statusMessage: body.error.issues[0].message
    });
  }
  const { regNumber, studentClass, department } = body.data;
  const [selectedClass, selectedDepartment] = await Promise.all([
    db.query.studentClass.findFirst({
      where: (sc, { eq: eq2 }) => eq2(sc.className, studentClass)
    }),
    db.query.department.findFirst({
      where: (dept, { eq: eq2 }) => eq2(dept.name, department)
    })
  ]);
  if (!selectedClass) {
    throw createError({
      statusCode: 404,
      statusMessage: `The student class ${studentClass} was not found.`
    });
  }
  if (!selectedDepartment) {
    throw createError({
      statusCode: 404,
      statusMessage: `The department ${department} was not found.`
    });
  }
  const newStudent = await db.transaction(async (tx) => {
    const ns = await tx.insert(student).values({
      userId: application.userId,
      regNumber,
      applicationId: application.id,
      studentClassId: selectedClass.id,
      departmentId: selectedDepartment.id,
      facultyId: selectedDepartment.facultyId
    }).returning();
    await tx.update(user).set({ role: "student", updatedAt: /* @__PURE__ */ new Date() }).where(eq(user.id, application.userId));
    return ns;
  });
  return {
    message: "Student account created",
    student: newStudent
  };
});

export { createStudent_post as default };
//# sourceMappingURL=create-student.post.mjs.map
