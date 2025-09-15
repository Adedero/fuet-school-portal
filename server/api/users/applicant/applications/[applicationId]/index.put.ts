import { and, eq } from "drizzle-orm";
import { db } from "~~/server/database/connection";
import { application } from "~~/server/database/schema";
import { applicationSchema } from "~~/shared/schemas/application.schema";
import type { EventContextUser } from "~~/types";

export default eventHandler(async (event) => {
  const user = event.context.user as EventContextUser;
  const { applicationId } = getRouterParams(event);
  const startedApplication = await db.query.application.findFirst({
    where: (app, { eq }) => eq(app.id, applicationId),
    columns: {
      status: true,
      isSubmitted: true,
      firstName: true,
      lastName: true,
      birthDay: true,
      birthMonth: true,
      birthYear: true
    }
  });

  if (!startedApplication) {
    throw createError({
      statusCode: 404,
      statusMessage: "Application not found."
    });
  }

  if (
    startedApplication.status === "closed" ||
    startedApplication.isSubmitted
  ) {
    throw createError({
      status: 400,
      statusMessage: "Application is closed and cannot be edited."
    });
  }

  const body = await readValidatedBody(
    event,
    applicationSchema.partial().safeParse
  );

  if (!body.success) {
    throw createError({
      statusCode: 400,
      statusMessage: body.error.issues[0].message
    });
  }

  const {
    firstName = startedApplication.firstName,
    lastName = startedApplication.lastName,
    birthDay = startedApplication.birthDay,
    birthMonth = startedApplication.birthMonth,
    birthYear = startedApplication.birthYear,
    ...rest
  } = body.data;

  const updatedApplication = await db
    .update(application)
    .set({ firstName, lastName, birthDay, birthMonth, birthYear, ...rest })
    .where(
      and(eq(application.id, applicationId), eq(application.userId, user.id))
    )
    .returning();

  return {
    success: true,
    message: "Application updated",
    updated: updatedApplication
  };
});
