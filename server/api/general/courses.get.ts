import { db } from "~~/server/database/connection";

export default defineEventHandler(async () => {
  const courses = await db.query.course.findMany({
    with: {
      department: true,
      faculty: true
    }
  });

  return courses;
});
