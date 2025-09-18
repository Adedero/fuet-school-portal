import { db } from "~~/server/database/connection";

export default defineEventHandler(async () => {
  const faculties = await db.query.faculty.findMany({
    with: {
      departments: true
    }
  });

  return faculties;
});
