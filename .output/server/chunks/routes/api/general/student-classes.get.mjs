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

const studentClasses_get = defineEventHandler(async () => {
  const classes = await db.query.studentClass.findMany({});
  return classes;
});

export { studentClasses_get as default };
//# sourceMappingURL=student-classes.get.mjs.map
