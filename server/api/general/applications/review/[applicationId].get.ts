import { db } from "~~/server/database/connection";

export default eventHandler(async (event) => {
  const { applicationId } = getRouterParams(event);

  const application = await db.query.application.findFirst({
    where: (app, { eq }) => eq(app.id, applicationId),
    with: {
      schoolSession: true,
      user: {
        columns: {
          email: true
        }
      }
    }
  });

  if (!application) {
    throw createError({
      statusCode: 400,
      statusMessage: "Application not found."
    });
  }

  return application;
});
