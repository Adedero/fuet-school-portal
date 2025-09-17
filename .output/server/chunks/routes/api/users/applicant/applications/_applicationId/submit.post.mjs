import { h as eventHandler, i as getRouterParams, b as db, c as createError, f as application } from '../../../../../../nitro/nitro.mjs';
import { and, eq } from 'drizzle-orm';
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

const submit_post = eventHandler(async (event) => {
  const user = event.context.user;
  const { applicationId } = getRouterParams(event);
  const settings = await db.query.settings.findFirst();
  if (!settings || !settings.applicationsClosedAt) {
    throw createError({
      statusCode: 400,
      statusMessage: "Something happened and we're working on it. Try again later."
    });
  }
  if (isApplicationClosed(settings.applicationsClosedAt)) {
    throw createError({
      statusCode: 400,
      statusMessage: "Application closed."
    });
  }
  const startedApplication = await db.query.application.findFirst({
    where: (app, { eq: eq2 }) => eq2(app.id, applicationId),
    columns: {
      status: true
    }
  });
  if (!startedApplication) {
    throw createError({
      statusCode: 404,
      statusMessage: "Application not found."
    });
  }
  if (startedApplication.status !== "pending") {
    throw createError({
      status: 400,
      statusMessage: "Application has been submitted and cannot be edited."
    });
  }
  const updatedApplication = await db.update(application).set({
    status: "submitted",
    updatedAt: /* @__PURE__ */ new Date()
  }).where(
    and(eq(application.id, applicationId), eq(application.userId, user.id))
  ).returning();
  return {
    success: true,
    message: "Application submitted",
    updated: updatedApplication
  };
});
function isApplicationClosed(date) {
  const today = /* @__PURE__ */ new Date();
  const closedAt = new Date(date);
  today.setHours(0, 0, 0, 0);
  closedAt.setHours(0, 0, 0, 0);
  return closedAt <= today;
}

export { submit_post as default, isApplicationClosed };
//# sourceMappingURL=submit.post.mjs.map
