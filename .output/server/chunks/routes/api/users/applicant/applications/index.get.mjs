import { h as eventHandler, f as getRouterParams, b as db, c as createError } from '../../../../../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
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

const index_get = eventHandler(async (event) => {
  const user = event.context.user;
  const { applicationId } = getRouterParams(event);
  const application = await db.query.application.findFirst({
    where: (app, { and, eq }) => {
      return and(eq(app.id, applicationId), eq(app.userId, user.id));
    },
    with: {
      schoolSession: true,
      user: {
        columns: {
          email: true
        }
      }
    }
  });
  if (!application) {
    throw createError({
      statusCode: 400,
      statusMessage: "Application not found."
    });
  }
  return application;
});

export { index_get as default };
//# sourceMappingURL=index.get.mjs.map
