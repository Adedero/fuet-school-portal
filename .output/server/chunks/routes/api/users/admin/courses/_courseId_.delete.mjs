import { c as defineEventHandler, m as getRouterParams, i as db, x as course } from '../../../../../_/nitro.mjs';
import { eq } from 'drizzle-orm';
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
import 'ulid';
import 'nodemailer';
import '@iconify/utils';
import 'consola';
import 'ipx';

const _courseId__delete = defineEventHandler(async (event) => {
  const { courseId } = getRouterParams(event);
  const deleted = await db.delete(course).where(eq(course.id, courseId)).returning();
  return {
    message: "Course deleted",
    course: deleted[0]
  };
});

export { _courseId__delete as default };
//# sourceMappingURL=_courseId_.delete.mjs.map
