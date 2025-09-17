import { eq } from "drizzle-orm";
import { db } from "~~/server/database/connection";
import { application } from "~~/server/database/schema";

export default defineEventHandler(async (event) => {
  const { applicationId } = getRouterParams(event);

  const currentApplication = await db.query.application.findFirst({
    where: (app, { eq }) => eq(app.id, applicationId),
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

  const deleted = await db
    .delete(application)
    .where(eq(application.id, applicationId))
    .returning();

  return {
    success: true,
    message: "Application deleted.",
    deleted: deleted[0]
  };
});
