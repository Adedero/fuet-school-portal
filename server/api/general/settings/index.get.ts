import { db } from "~~/server/database/connection";

export default defineEventHandler(async () => {
  const settings = await db.query.settings.findFirst();

  if (!settings) {
    throw createError({
      statusCode: 400,
      statusMessage:
        "Something happened and we're working on it. Try again later."
    });
  }

  return settings;
});
