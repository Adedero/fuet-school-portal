import z from "zod";
import { db } from "~~/server/database/connection";
import type { EventContextUser } from "~~/types";
import { and, eq } from "drizzle-orm";
import { application } from "~~/server/database/schema";

export default defineEventHandler(async (event) => {
  const user = event.context.user as EventContextUser;
  const { applicationId } = getRouterParams(event);

  const schema = z.object({
    key: z
      .string("Document type is required")
      .nonempty("Document type is required")
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
    where: (app, { and, eq }) =>
      and(eq(app.id, applicationId), eq(app.userId, user.id)),
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

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const existingFileUrl = (currentApplication as unknown as any)[data.key] as
    | string
    | undefined
    | null;

  if (typeof existingFileUrl === "undefined") {
    throw createError({
      statusCode: 400,
      statusMessage: "Document type does not exist on the application."
    });
  }

  if (existingFileUrl) {
    await deleteFileFromLocal(existingFileUrl);
  }

  const updated = await db
    .update(application)
    .set({ [data.key]: null, updatedAt: new Date() })
    .where(
      and(eq(application.id, applicationId), eq(application.userId, user.id))
    )
    .returning();

  return {
    success: true,
    message: "Application updated",
    application: updated[0]
  };
});
