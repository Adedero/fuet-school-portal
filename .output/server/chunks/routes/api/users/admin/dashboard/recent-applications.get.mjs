import { c as defineEventHandler, i as db, h as createError } from '../../../../../_/nitro.mjs';
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
import 'drizzle-orm';
import 'ulid';
import 'nodemailer';
import '@iconify/utils';
import 'consola';
import 'ipx';

const recentApplications_get = defineEventHandler(async () => {
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
    where: (app, { eq, and, or }) => and(
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

export { recentApplications_get as default };
//# sourceMappingURL=recent-applications.get.mjs.map
