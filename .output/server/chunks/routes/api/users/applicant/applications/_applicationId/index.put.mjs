import { c as defineEventHandler, k as getRouterParams, r as readValidatedBody, g as createError, h as db, l as deleteFileFromLocal, j as application } from '../../../../../../_/nitro.mjs';
import z from 'zod';
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

const index_put = defineEventHandler(async (event) => {
  const user = event.context.user;
  const { applicationId } = getRouterParams(event);
  const schema = z.object({
    key: z.string("Document type is required").nonempty("Document type is required")
  });
  const body = await readValidatedBody(event, schema.safeParse);
  if (!body.success) {
    throw createError({
      statusCode: 400,
      statusMessage: body.error.issues[0].message
    });
  }
  const { data } = body;
  const currentApplication = await db.query.application.findFirst({
    where: (app, { and: and2, eq: eq2 }) => and2(eq2(app.id, applicationId), eq2(app.userId, user.id)),
    columns: {
      status: true,
      applicationNumber: true,
      passportUrl: true,
      birthCertificateUrl: true,
      stateOfOriginUrl: true,
      oLevelResultUrl: true,
      postUTMESlipUrl: true,
      admissionFormPaymentReceiptUrl: true
    }
  });
  if (!currentApplication) {
    throw createError({
      statusCode: 404,
      statusMessage: "Application not found."
    });
  }
  if (currentApplication.status !== "pending") {
    throw createError({
      status: 400,
      statusMessage: "Application has been submitted and cannot be edited."
    });
  }
  const existingFileUrl = currentApplication[data.key];
  if (typeof existingFileUrl === "undefined") {
    throw createError({
      statusCode: 400,
      statusMessage: "Document type does not exist on the application."
    });
  }
  if (existingFileUrl) {
    await deleteFileFromLocal(existingFileUrl);
  }
  const updated = await db.update(application).set({ [data.key]: null, updatedAt: /* @__PURE__ */ new Date() }).where(
    and(eq(application.id, applicationId), eq(application.userId, user.id))
  ).returning();
  return {
    success: true,
    message: "Application updated",
    application: updated[0]
  };
});

export { index_put as default };
//# sourceMappingURL=index.put.mjs.map
