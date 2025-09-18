import { db } from "~~/server/database/connection";

export default defineEventHandler(async () => {
  const classes = await db.query.studentClass.findMany({});
  return classes;
});
