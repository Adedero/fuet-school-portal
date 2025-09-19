import { eq } from "drizzle-orm";
import { db } from "~~/server/database/connection";
import { course } from "~~/server/database/schema";

export default defineEventHandler(async (event) => {
  const { courseId } = getRouterParams(event);

  const deleted = await db
    .delete(course)
    .where(eq(course.id, courseId))
    .returning();

  return {
    message: "Course deleted",
    course: deleted[0]
  };
});
