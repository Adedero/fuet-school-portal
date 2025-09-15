import { c as defineEventHandler, h as db, g as createError } from '../../../_/nitro.mjs';
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
import 'drizzle-orm';
import 'ulid';
import 'nodemailer';
import '@iconify/utils';
import 'node:crypto';
import 'consola';
import 'ipx';
import 'node:path';

const index_get = defineEventHandler(async () => {
  const settings = await db.query.settings.findFirst();
  if (!settings) {
    throw createError({
      statusCode: 400,
      statusMessage: "Something happened and we're working on it. Try again later."
    });
  }
  return settings;
});

export { index_get as default };
//# sourceMappingURL=index.get.mjs.map
