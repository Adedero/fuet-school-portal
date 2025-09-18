import { db } from "~~/server/database/connection";

export default defineEventHandler(async () => {
  const currentSession = await db.query.schoolSession.findFirst({
    where: (sesh, { eq }) => eq(sesh.isCurrent, true),
    columns: {
      id: true,
      name: true
    }
  });

  if (!currentSession) {
    throw createError({
      statusCode: 400,
      statusMessage: "No data for the current school session was found."
    });
  }

  const recents = await db.query.application.findMany({
    where: (app, { eq, and, or }) =>
      and(
        or(
          eq(app.schoolSessionName, currentSession.name),
          eq(app.schoolSessionId, currentSession.id)
        ),
        or(
          eq(app.status, "submitted"),
          eq(app.status, "accepted"),
          eq(app.status, "rejected")
        )
      ),
    columns: {
      id: true,
      firstName: true,
      lastName: true,
      course: true,
      status: true,
      createdAt: true
    },
    orderBy: (app, { desc }) => [desc(app.createdAt)],
    limit: 5
  });

  return recents;
});
