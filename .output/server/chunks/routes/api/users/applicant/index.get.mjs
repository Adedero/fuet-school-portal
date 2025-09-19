import { c as defineEventHandler, i as db } from '../../../../_/nitro.mjs';
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
import 'drizzle-orm';
import 'ulid';
import 'nodemailer';
import '@iconify/utils';
import 'consola';
import 'ipx';

const index_get = defineEventHandler(async (event) => {
  const user = event.context.user;
  const applications = await db.query.application.findMany({
    where: (app, { eq }) => eq(app.userId, user.id),
    columns: {
      id: true,
      course: true,
      applicationNumber: true,
      degreeType: true,
      status: true,
      createdAt: true,
      schoolSessionName: true,
      hasPaidAdmissionFee: true,
      admissionFeePaymentId: true
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

export { index_get as default };
//# sourceMappingURL=index.get.mjs.map
