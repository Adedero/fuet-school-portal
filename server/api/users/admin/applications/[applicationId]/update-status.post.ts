import { eq } from "drizzle-orm";
import z from "zod";
import { db } from "~~/server/database/connection";
import { application } from "~~/server/database/schema";

export default defineEventHandler(async (event) => {
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
    where: (app, { eq }) => eq(app.id, applicationId),
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

  await db
    .update(application)
    .set({
      status,
      approvedAt: status === "accepted" ? new Date() : null,
      updatedAt: new Date()
    })
    .where(eq(application.id, currentApplication.id));

  return {
    success: true,
    message: "Application status updated"
  };
});
