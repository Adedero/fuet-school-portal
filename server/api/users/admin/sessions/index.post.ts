import { db } from "~~/server/database/connection";
import { schoolSession } from "~~/server/database/schema";
import { extendedSessionSchema } from "~~/shared/schemas/session.schema";

export default defineEventHandler(async (event) => {
  const { success, data, error } = await readValidatedBody(
    event,
    extendedSessionSchema.safeParse
  );
  if (!success) {
    throw createError({
      statusCode: 400,
      statusMessage: error.issues[0].message
    });
  }

  const { name, startYear, isCurrent } = data;


  const existingSession = await db.query.schoolSession.findFirst({
    where: (sesh, { eq }) => eq(sesh.name, name)
  });

  if (existingSession) {
    throw createError({
      statusCode: 400,
      statusMessage: "A session with this name already exists"
    });
  }

  const created = await db
    .insert(schoolSession)
    .values({
      name,
      startYear,
      isCurrent,
      currentYear: new Date().getFullYear(),
      createdAt: new Date(),
      updatedAt: new Date()
    })
    .returning();

  return {
    success: true,
    message: "Academic session created.",
    session: created[0]!
  };
});
