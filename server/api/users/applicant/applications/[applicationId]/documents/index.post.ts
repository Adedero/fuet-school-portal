import { and, eq } from "drizzle-orm";
import z from "zod";
import { db } from "~~/server/database/connection";
import { application } from "~~/server/database/schema";
import {
  deleteFileFromLocal,
  saveFileToLocal
} from "~~/server/utils/server-file";
import { serverFileSchema } from "~~/shared/schemas/server-file.schema";
import type { EventContextUser } from "~~/types";

const schema = z.object({
  type: z.object({
    label: z
      .string("No document type selected")
      .nonempty("No document type selected"),
    value: z
      .string("No document type selected")
      .nonempty("No document type selected")
  }),
  file: serverFileSchema
});

export default defineEventHandler(async (event) => {
  const user = event.context.user as EventContextUser;
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
  const existingFileUrl = (currentApplication as unknown as any)[
    data.type.value
  ] as string | null;

  if (existingFileUrl) {
    //delete file
    await deleteFileFromLocal(existingFileUrl);
  }

  const { url } = await saveFileToLocal({
    file: data.file,
    path: `upload/applications/${currentApplication.applicationNumber
      .split("/")
      .join("-")}`,
    transform: (file) => ({
      ...file,
      name: `${data.type.label.toUpperCase().split(" ").join("_")}`
    }),
    createUniqueFileName: false
  });

  const updated = await db
    .update(application)
    .set({ [data.type.value]: url, updatedAt: new Date() })
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
