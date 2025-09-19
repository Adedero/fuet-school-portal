import { d as defineEventHandler, b as db, c as createError } from '../../../nitro/nitro.mjs';
import 'nanoid';
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
import 'drizzle-orm';
import 'ulid';
import 'nodemailer';
import '@iconify/utils';
import 'consola';
import 'ipx';

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
//# sourceMappingURL=index.get2.mjs.map
