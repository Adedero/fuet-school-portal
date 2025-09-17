import { d as defineEventHandler, i as getRouterParams, r as readValidatedBody, c as createError, b as db, f as application } from '../../../../../../nitro/nitro.mjs';
import { eq } from 'drizzle-orm';
import z from 'zod';
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

const updateStatus_post = defineEventHandler(async (event) => {
  const { applicationId = "" } = getRouterParams(event);
  const schema = z.object({
    status: z.enum(
      ["accepted", "rejected"],
      "Application status must either be accepted or rejected"
    )
  });
  const body = await readValidatedBody(event, schema.safeParse);
  if (!body.success) {
    throw createError({
      statusCode: 400,
      statusMessage: body.error.issues[0].message
    });
  }
  const { status } = body.data;
  const currentApplication = await db.query.application.findFirst({
    where: (app, { eq: eq2 }) => eq2(app.id, applicationId),
    columns: {
      id: true
    }
  });
  if (!currentApplication) {
    throw createError({
      statusCode: 400,
      statusMessage: "Application not found."
    });
  }
  await db.update(application).set({ status, updatedAt: /* @__PURE__ */ new Date() }).where(eq(application.id, currentApplication.id));
  return {
    success: true,
    message: "Application status updated"
  };
});

export { updateStatus_post as default };
//# sourceMappingURL=update-status.post.mjs.map
