import { c as defineEventHandler, m as getRouterParams, i as db, h as createError, p as deleteFileFromLocal, k as application } from '../../../../../_/nitro.mjs';
import { eq } from 'drizzle-orm';
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

const index_delete = defineEventHandler(async (event) => {
  const { applicationId } = getRouterParams(event);
  const currentApplication = await db.query.application.findFirst({
    where: (app, { eq: eq2 }) => eq2(app.id, applicationId),
    columns: {
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
  const fileUrls = [
    currentApplication.passportUrl,
    currentApplication.birthCertificateUrl,
    currentApplication.stateOfOriginUrl,
    currentApplication.oLevelResultUrl,
    currentApplication.postUTMESlipUrl,
    currentApplication.admissionFormPaymentReceiptUrl
  ];
  for await (const url of fileUrls) {
    if (!url) {
      continue;
    }
    await deleteFileFromLocal(url, { removeEmptyFiles: true });
  }
  const deleted = await db.delete(application).where(eq(application.id, applicationId)).returning();
  return {
    success: true,
    message: "Application deleted.",
    deleted: deleted[0]
  };
});

export { index_delete as default };
//# sourceMappingURL=index.delete.mjs.map
