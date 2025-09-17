import { db } from "~~/server/database/connection";
import { extendedSessionSchema } from "~~/shared/schemas/session.schema";

export default defineEventHandler(async (event) => {
  const result = await getValidatedRouterParams(
    event,
    extendedSessionSchema.partial().safeParse
  );

  if (!result.success) {
    throw createError({
      statusCode: 400,
      statusMessage: result.error.issues[0].message
    });
  }

  const { name, startYear, isCurrent } = result.data;

  const sessions = await db.query.schoolSession.findMany({
    where: (sesh, { and, eq }) => {
      return and(
        name ? eq(sesh.name, name) : undefined,
        startYear ? eq(sesh.startYear, startYear) : undefined,
        isCurrent ? eq(sesh.isCurrent, isCurrent) : undefined
      );
    },
    orderBy: (sesh, { desc }) => desc(sesh.startYear)
  });
  return sessions;
});
