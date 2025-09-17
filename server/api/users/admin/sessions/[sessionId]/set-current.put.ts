import { eq } from "drizzle-orm";
import { db } from "~~/server/database/connection";
import { schoolSession } from "~~/server/database/schema";

export default defineEventHandler(async (event) => {
  const { sessionId } = getRouterParams(event);

  const session = await db.query.schoolSession.findFirst({
    where: (sesh, { eq }) => eq(sesh.id, sessionId)
  });

  if (!session) {
    throw createError({
      statusCode: 404,
      statusMessage: "Session not found."
    });
  }

  if (session.isCurrent) {
    throw createError({
      statusCode: 400,
      statusMessage: "Session is already the current session."
    });
  }

  await db
    .update(schoolSession)
    .set({ isCurrent: false, updatedAt: new Date() });

  const updated = await db
    .update(schoolSession)
    .set({ isCurrent: true, updatedAt: new Date() })
    .where(eq(schoolSession.id, sessionId))
    .returning();

  return {
    success: true,
    message: "Academic session set as current.",
    session: updated[0]
  };
});
