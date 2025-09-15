import { db } from "~~/server/database/connection";
import type { EventContextUser } from "~~/types";

export default defineEventHandler(async (event) => {
  const user = event.context.user as EventContextUser;

  const applications = await db.query.application.findMany({
    where: (app, { eq }) => eq(app.userId, user.id),
    columns: {
      id: true,
      course: true,
      degreeType: true,
      status: true,
      createdAt: true
    },
    with: {
      schoolSession: {
        columns: {
          name: true
        }
      }
    },
    orderBy: (app, { desc }) => desc(app.createdAt)
  });

  return applications;
});
