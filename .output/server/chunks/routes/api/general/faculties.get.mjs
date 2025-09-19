import { c as defineEventHandler, i as db } from '../../../_/nitro.mjs';
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

const faculties_get = defineEventHandler(async () => {
  const faculties = await db.query.faculty.findMany({
    with: {
      departments: true
    }
  });
  return faculties;
});

export { faculties_get as default };
//# sourceMappingURL=faculties.get.mjs.map
