import { db } from "~~/server/database/connection";
//import { application, schoolSession } from "~~/server/database/schema";
import type { EventContextUser } from "~~/types";

export default eventHandler(async (event) => {
  const user = event.context.user as EventContextUser;
  const { applicationId } = getRouterParams(event);

  const application = await db.query.application.findFirst({
    where: (app, { and, eq }) => {
      return and(eq(app.id, applicationId), eq(app.userId, user.id));
    },
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
