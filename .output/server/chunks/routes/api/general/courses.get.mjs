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

const courses_get = defineEventHandler(async () => {
  const courses = await db.query.course.findMany({
    with: {
      department: true,
      faculty: true
    }
  });
  return courses;
});

export { courses_get as default };
//# sourceMappingURL=courses.get.mjs.map
