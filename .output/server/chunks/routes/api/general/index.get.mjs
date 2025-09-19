import { c as defineEventHandler, g as getValidatedRouterParams, h as createError, i as db } from '../../../_/nitro.mjs';
import { e as extendedSessionSchema } from '../../../_/session.schema.mjs';
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
import 'zod';

const index_get = defineEventHandler(async (event) => {
  const result = await getValidatedRouterParams(
    event,
    extendedSessionSchema.partial().safeParse
  );
  if (!result.success) {
    throw createError({
      statusCode: 400,
      statusMessage: result.error.issues[0].message
    });
  }
  const { name, startYear, isCurrent } = result.data;
  const sessions = await db.query.schoolSession.findMany({
    where: (sesh, { and, eq }) => {
      return and(
        name ? eq(sesh.name, name) : void 0,
        startYear ? eq(sesh.startYear, startYear) : void 0,
        isCurrent ? eq(sesh.isCurrent, isCurrent) : void 0
      );
    },
    orderBy: (sesh, { desc }) => desc(sesh.startYear)
  });
  return sessions;
});

export { index_get as default };
//# sourceMappingURL=index.get.mjs.map
