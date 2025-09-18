import { db } from "~~/server/database/connection";

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
});
