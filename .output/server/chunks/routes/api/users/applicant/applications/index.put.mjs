import { n as eventHandler, k as getRouterParams, h as db, g as createError, r as readValidatedBody, j as application } from '../../../../../_/nitro.mjs';
import { and, eq } from 'drizzle-orm';
import { a as applicationSchema } from '../../../../../_/application.schema.mjs';
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

const index_put = eventHandler(async (event) => {
  const user = event.context.user;
  const { applicationId } = getRouterParams(event);
  const startedApplication = await db.query.application.findFirst({
    where: (app, { eq: eq2 }) => eq2(app.id, applicationId),
    columns: {
      status: true,
      firstName: true,
      lastName: true,
      birthDay: true,
      birthMonth: true,
      birthYear: true
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
  const body = await readValidatedBody(
    event,
    applicationSchema.partial().safeParse
  );
  if (!body.success) {
    throw createError({
      statusCode: 400,
      statusMessage: body.error.issues[0].message
    });
  }
  const {
    firstName = startedApplication.firstName,
    lastName = startedApplication.lastName,
    birthDay = startedApplication.birthDay,
    birthMonth = startedApplication.birthMonth,
    birthYear = startedApplication.birthYear,
    ...rest
  } = body.data;
  const updatedApplication = await db.update(application).set({
    firstName,
    lastName,
    birthDay,
    birthMonth,
    birthYear,
    ...rest,
    updatedAt: /* @__PURE__ */ new Date()
  }).where(
    and(eq(application.id, applicationId), eq(application.userId, user.id))
  ).returning();
  return {
    success: true,
    message: "Application updated",
    updated: updatedApplication
  };
});

export { index_put as default };
//# sourceMappingURL=index.put.mjs.map
