import { c as defineEventHandler, m as getRouterParams, r as readValidatedBody, h as createError, i as db, p as deleteFileFromLocal, A as saveFileToLocal, k as application } from '../../../../../../_/nitro.mjs';
import { and, eq } from 'drizzle-orm';
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

const serverFileSchema = z.object({
  name: z.string("Invalid file name"),
  type: z.string("Invalid file type"),
  size: z.number("Invalid file size").nonnegative("File size cannot be negative"),
  ext: z.string("Invalid file extension").nullable(),
  data: z.string("Invalid file data").nonempty("File data cannot be empty")
});

const schema = z.object({
  type: z.object({
    label: z.string("No document type selected").nonempty("No document type selected"),
    value: z.string("No document type selected").nonempty("No document type selected")
  }),
  file: serverFileSchema
});
const index_post = defineEventHandler(async (event) => {
  const user = event.context.user;
  const { applicationId } = getRouterParams(event);
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
  const existingFileUrl = currentApplication[data.type.value];
  if (existingFileUrl) {
    await deleteFileFromLocal(existingFileUrl);
  }
  const { url } = await saveFileToLocal({
    file: data.file,
    path: `upload/applications/${currentApplication.applicationNumber.split("/").join("-")}`,
    transform: (file) => ({
      ...file,
      name: `${data.type.label.toUpperCase().split(" ").join("_")}`
    }),
    createUniqueFileName: false
  });
  const updated = await db.update(application).set({ [data.type.value]: url, updatedAt: /* @__PURE__ */ new Date() }).where(
    and(eq(application.id, applicationId), eq(application.userId, user.id))
  ).returning();
  return {
    success: true,
    message: "Application updated",
    application: updated[0]
  };
});

export { index_post as default };
//# sourceMappingURL=index.post.mjs.map
