import { db } from "~~/server/database/connection";
import { student } from "~~/server/database/schema";
import { studentCreationSchema } from "~~/shared/schemas/student.schema";

export default defineEventHandler(async (event) => {
  const { applicationId = "" } = getRouterParams(event);

  const application = await db.query.application.findFirst({
    where: (app, { eq }) => eq(app.id, applicationId),
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
      status: true
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
      where: (sc, { eq }) => eq(sc.className, studentClass)
    }),
    db.query.department.findFirst({
      where: (dept, { eq }) => eq(dept.name, department)
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

  const newStudent = await db
    .insert(student)
    .values({
      regNumber,
      applicationId: application.id,
      studentClassId: selectedClass.id,
      departmentId: selectedDepartment.id,
      facultyId: selectedDepartment.facultyId
    })
    .returning();

  return {
    message: "Student account created",
    student: newStudent
  };
});
