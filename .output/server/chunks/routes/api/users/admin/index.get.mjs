import { d as defineEventHandler, m as getValidatedQuery, c as createError, b as db } from '../../../../nitro/nitro.mjs';
import { or, like } from 'drizzle-orm';
import { a as applicationQuerySchema } from '../../../../_/application.schema.mjs';
import 'nanoid';
import 'node:path';
import 'node:fs/promises';
import 'node:crypto';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:url';
import 'better-auth';
import 'better-auth/adapters/drizzle';
import 'drizzle-orm/libsql';
import 'drizzle-orm/sqlite-core';
import 'ulid';
import 'nodemailer';
import '@iconify/utils';
import 'consola';
import 'ipx';
import 'zod';

const index_get = defineEventHandler(async (event) => {
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
        schoolSessionName ? eq(app.schoolSessionName, schoolSessionName) : currentSession ? eq(app.schoolSessionName, currentSession.name) : void 0,
        admissionStatus ? eq(app.status, admissionStatus) : or(
          eq(app.status, "submitted"),
          eq(app.status, "accepted"),
          eq(app.status, "rejected")
        ),
        typeof hasPaidAdmissionFee !== "undefined" ? eq(app.hasPaidAdmissionFee, hasPaidAdmissionFee) : void 0,
        search ? or(
          like(app.applicationNumber, `%${search}%`),
          like(app.firstName, `%${search}%`),
          like(app.lastName, `%${search}%`)
        ) : void 0
      );
    },
    limit,
    offset
  });
  return applications;
});

export { index_get as default };
//# sourceMappingURL=index.get.mjs.map
