import { d as defineEventHandler, b as db, s as student, o as studentClass, p as staff, q as department, f as application } from '../../../../../nitro/nitro.mjs';
import { count, eq } from 'drizzle-orm';
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

const stats_get = defineEventHandler(async () => {
  const [activeStudents, totalStaffs, totalDepartments, pendingApplications] = await Promise.all([
    db.select({ count: count() }).from(student).innerJoin(studentClass, eq(student.studentClassId, studentClass.id)).where(eq(studentClass.isActive, true)),
    db.select({ count: count() }).from(staff).where(eq(staff.isActive, true)),
    db.select({ count: count() }).from(department),
    db.select({ count: count() }).from(application).where(eq(application.status, "submitted"))
  ]);
  return {
    activeStudents: activeStudents[0].count,
    totalStaffs: totalStaffs[0].count,
    totalDepartments: totalDepartments[0].count,
    pendingApplications: pendingApplications[0].count
  };
});

export { stats_get as default };
//# sourceMappingURL=stats.get.mjs.map
