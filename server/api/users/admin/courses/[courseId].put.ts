import { eq } from "drizzle-orm";
import { db } from "~~/server/database/connection";
import { course } from "~~/server/database/schema";
import { courseEditSchema } from "~~/shared/schemas/course.schema";

export default defineEventHandler(async (event) => {
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
    where: (d, { eq, or }) =>
      or(eq(d.name, dept.label), eq(d.code, dept.value)),
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
    where: (c, { eq, or, ne, and }) =>
      and(
        or(eq(c.title, rest.title), eq(c.code, rest.code)),
        ne(c.id, courseId)
      )
  });

  if (existingCourse) {
    throw createError({
      statusCode: 400,
      statusMessage: "Another course with this code or title already exists"
    });
  }

  const updated = await db
    .update(course)
    .set({
      ...rest,
      departmentId: department.id,
      facultyId: department.faculty.id,
      updatedAt: new Date()
    })
    .where(eq(course.id, courseId))
    .returning();

  return {
    message: "Course updated",
    course: updated[0]
  };
});
