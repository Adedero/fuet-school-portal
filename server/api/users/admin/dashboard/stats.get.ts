import { count, eq } from "drizzle-orm";
import { db } from "~~/server/database/connection";
import {
  application,
  department,
  staff,
  student,
  studentClass
} from "~~/server/database/schema";

export default defineEventHandler(async () => {
  // active students
  // total staffs
  // total departments
  // pending applications
  const [activeStudents, totalStaffs, totalDepartments, pendingApplications] =
    await Promise.all([
      db
        .select({ count: count() })
        .from(student)
        .innerJoin(studentClass, eq(student.studentClassId, studentClass.id))
        .where(eq(studentClass.isActive, true)),
      db.select({ count: count() }).from(staff).where(eq(staff.isActive, true)),
      db.select({ count: count() }).from(department),
      db
        .select({ count: count() })
        .from(application)
        .where(eq(application.status, "submitted"))
    ]);

  return {
    activeStudents: activeStudents[0].count,
    totalStaffs: totalStaffs[0].count,
    totalDepartments: totalDepartments[0].count,
    pendingApplications: pendingApplications[0].count
  };
});
