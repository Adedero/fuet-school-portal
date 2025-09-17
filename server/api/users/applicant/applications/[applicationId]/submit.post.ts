import { and, eq } from "drizzle-orm";
import { db } from "~~/server/database/connection";
import { application } from "~~/server/database/schema";
import type { EventContextUser } from "~~/types";

export default eventHandler(async (event) => {
  const user = event.context.user as EventContextUser;
  const { applicationId } = getRouterParams(event);

  // Check if applications are open
  const settings = await db.query.settings.findFirst();

  if (!settings || !settings.applicationsClosedAt) {
    throw createError({
      statusCode: 400,
      statusMessage:
        "Something happened and we're working on it. Try again later."
    });
  }

  if (isApplicationClosed(settings.applicationsClosedAt)) {
    throw createError({
      statusCode: 400,
      statusMessage: "Application closed."
    });
  }

  const startedApplication = await db.query.application.findFirst({
    where: (app, { eq }) => eq(app.id, applicationId),
    columns: {
      status: true
    }
  });

  if (!startedApplication) {
    throw createError({
      statusCode: 404,
      statusMessage: "Application not found."
    });
  }

  if (startedApplication.status !== "pending") {
    throw createError({
      status: 400,
      statusMessage: "Application has been submitted and cannot be edited."
    });
  }

  const updatedApplication = await db
    .update(application)
    .set({
      status: "submitted",
      updatedAt: new Date()
    })
    .where(
      and(eq(application.id, applicationId), eq(application.userId, user.id))
    )
    .returning();

  return {
    success: true,
    message: "Application submitted",
    updated: updatedApplication
  };
});

export function isApplicationClosed(date: string | Date): boolean {
  const today = new Date();
  const closedAt = new Date(date);

  today.setHours(0, 0, 0, 0);
  closedAt.setHours(0, 0, 0, 0);

  return closedAt <= today;
}
