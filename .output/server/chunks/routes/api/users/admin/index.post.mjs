import { c as defineEventHandler, r as readValidatedBody, h as createError, i as db, v as course } from '../../../../_/nitro.mjs';
import { c as courseEditSchema } from '../../../../_/course.schema.mjs';
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
import 'zod';

const index_post = defineEventHandler(async (event) => {
  const body = await readValidatedBody(event, courseEditSchema.safeParse);
  if (!body.success) {
    throw createError({
      statusCode: 400,
      statusMessage: body.error.issues[0].message
    });
  }
  const { department: dept, ...rest } = body.data;
  const department = await db.query.department.findFirst({
    where: (d, { eq, or }) => or(eq(d.name, dept.label), eq(d.code, dept.value)),
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
    where: (c, { eq, or }) => or(eq(c.title, rest.title), eq(c.code, rest.code))
  });
  if (existingCourse) {
    throw createError({
      statusCode: 400,
      statusMessage: "Another course with this code or title already exists"
    });
  }
  const created = await db.insert(course).values({
    ...rest,
    departmentId: department.id,
    facultyId: department.faculty.id,
    createdAt: /* @__PURE__ */ new Date(),
    updatedAt: /* @__PURE__ */ new Date()
  }).returning();
  return {
    message: "Course created",
    course: created[0]
  };
});

export { index_post as default };
//# sourceMappingURL=index.post.mjs.map
