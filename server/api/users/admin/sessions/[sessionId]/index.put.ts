import { eq } from "drizzle-orm";
import { db } from "~~/server/database/connection";
import { schoolSession } from "~~/server/database/schema";
import { sessionSchema } from "~~/shared/schemas/session.schema";

export default defineEventHandler(async (event) => {
  const { sessionId } = getRouterParams(event);
  const { success, data, error } = await readValidatedBody(
    event,
    sessionSchema.safeParse
  );
  if (!success) {
    throw createError({
      statusCode: 400,
      statusMessage: error.issues[0].message
    });
  }

  const { name, startYear } = data;

  const existingSession = await db.query.schoolSession.findFirst({
    where: (sesh, { and, ne, eq }) => {
      return and(ne(sesh.id, sessionId), eq(sesh.name, name));
    }
  });


  if (existingSession) {
    throw createError({
      statusCode: 400,
      statusMessage: "A session with this name already exists"
    });
  }

  const updated = await db
    .update(schoolSession)
    .set({ name, startYear, updatedAt: new Date() })
    .where(eq(schoolSession.id, sessionId))
    .returning();

  return {
    success: true,
    message: "Academic session updated.",
    session: updated[0]!
  };
});
