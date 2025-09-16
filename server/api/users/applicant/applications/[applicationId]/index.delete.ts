import { and, eq } from "drizzle-orm";
import { db } from "~~/server/database/connection";
import { application } from "~~/server/database/schema";
import type { EventContextUser } from "~~/types";

export default defineEventHandler(async (event) => {
  const user = event.context.user as EventContextUser;
  const { applicationId } = getRouterParams(event);

  // delete application
  // delete applictaion files
  const currentApplication = await db.query.application.findFirst({
    where: (app, { and, eq }) =>
      and(eq(app.id, applicationId), eq(app.userId, user.id)),
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
    .where(
      and(eq(application.id, applicationId), eq(application.userId, user.id))
    )
    .returning();

  return {
    success: true,
    message: "Application deleted.",
    deleted: deleted[0]
  };
});
