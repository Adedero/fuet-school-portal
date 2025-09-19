import { l as eventHandler, m as getRouterParams, i as db, h as createError } from '../../../../../_/nitro.mjs';
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

const _applicationId__get = eventHandler(async (event) => {
  const { applicationId } = getRouterParams(event);
  const application = await db.query.application.findFirst({
    where: (app, { eq }) => eq(app.id, applicationId),
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

export { _applicationId__get as default };
//# sourceMappingURL=_applicationId_.get.mjs.map
