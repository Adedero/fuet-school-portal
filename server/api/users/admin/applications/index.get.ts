import { or, like } from "drizzle-orm";
import { db } from "~~/server/database/connection";
import { applicationQuerySchema } from "~~/shared/schemas/application.schema";

export default defineEventHandler(async (event) => {
  const query = await getValidatedQuery(
    event,
    applicationQuerySchema.partial().safeParse
  );
  if (!query.success) {
    throw createError({
      statusCode: 400,
      statusMessage: `Query validation error: ${query.error.issues[0].message}`
    });
  }

  const {
    schoolSessionName,
    admissionStatus,
    hasPaidAdmissionFee,
    limit,
    offset,
    search
  } = query.data;

  const currentSession = await db.query.schoolSession.findFirst({
    where: (sesh, { eq }) => eq(sesh.isCurrent, true)
  });

  const applications = await db.query.application.findMany({
    where: (app, { and, eq }) => {
      return and(
        schoolSessionName
          ? eq(app.schoolSessionName, schoolSessionName)
          : currentSession
          ? eq(app.schoolSessionName, currentSession.name)
          : undefined,
        admissionStatus
          ? eq(app.status, admissionStatus)
          : or(
              eq(app.status, "submitted"),
              eq(app.status, "accepted"),
              eq(app.status, "rejected")
            ),
        typeof hasPaidAdmissionFee !== "undefined"
          ? eq(app.hasPaidAdmissionFee, hasPaidAdmissionFee)
          : undefined,
        search
          ? or(
              like(app.applicationNumber, `%${search}%`),
              like(app.firstName, `%${search}%`),
              like(app.lastName, `%${search}%`)
            )
          : undefined
      );
    },
    limit,
    offset
  });

  return applications;
});
