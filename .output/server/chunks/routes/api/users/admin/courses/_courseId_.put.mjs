import { c as defineEventHandler, m as getRouterParams, r as readValidatedBody, h as createError, i as db, x as course } from '../../../../../_/nitro.mjs';
import { eq } from 'drizzle-orm';
import { c as courseEditSchema } from '../../../../../_/course.schema.mjs';
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
import 'zod';

const _courseId__put = defineEventHandler(async (event) => {
  const { courseId } = getRouterParams(event);
  const body = await readValidatedBody(event, courseEditSchema.safeParse);
  if (!body.success) {
    throw createError({
      statusCode: 400,
      statusMessage: body.error.issues[0].message
    });
  }
  const { department: dept, ...rest } = body.data;
  const department = await db.query.department.findFirst({
    where: (d, { eq: eq2, or }) => or(eq2(d.name, dept.label), eq2(d.code, dept.value)),
    columns: {
      id: true
    },
    with: {
      faculty: {
        columns: {
          id: true
        }
      }
    }
  });
  if (!department) {
    throw createError({
      statusCode: 404,
      statusMessage: "Course department not found"
    });
  }
  const existingCourse = await db.query.course.findFirst({
    where: (c, { eq: eq2, or, ne, and }) => and(
      or(eq2(c.title, rest.title), eq2(c.code, rest.code)),
      ne(c.id, courseId)
    )
  });
  if (existingCourse) {
    throw createError({
      statusCode: 400,
      statusMessage: "Another course with this code or title already exists"
    });
  }
  const updated = await db.update(course).set({
    ...rest,
    departmentId: department.id,
    facultyId: department.faculty.id,
    updatedAt: /* @__PURE__ */ new Date()
  }).where(eq(course.id, courseId)).returning();
  return {
    message: "Course updated",
    course: updated[0]
  };
});

export { _courseId__put as default };
//# sourceMappingURL=_courseId_.put.mjs.map
