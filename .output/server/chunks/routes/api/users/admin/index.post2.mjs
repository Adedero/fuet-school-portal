import { c as defineEventHandler, r as readValidatedBody, h as createError, i as db, z as schoolSession } from '../../../../_/nitro.mjs';
import { e as extendedSessionSchema } from '../../../../_/session.schema.mjs';
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

const index_post = defineEventHandler(async (event) => {
  const { success, data, error } = await readValidatedBody(
    event,
    extendedSessionSchema.safeParse
  );
  if (!success) {
    throw createError({
      statusCode: 400,
      statusMessage: error.issues[0].message
    });
  }
  const { name, startYear, isCurrent } = data;
  const existingSession = await db.query.schoolSession.findFirst({
    where: (sesh, { eq }) => eq(sesh.name, name)
  });
  if (existingSession) {
    throw createError({
      statusCode: 400,
      statusMessage: "A session with this name already exists"
    });
  }
  const created = await db.insert(schoolSession).values({
    name,
    startYear,
    isCurrent,
    currentYear: (/* @__PURE__ */ new Date()).getFullYear(),
    createdAt: /* @__PURE__ */ new Date(),
    updatedAt: /* @__PURE__ */ new Date()
  }).returning();
  return {
    success: true,
    message: "Academic session created.",
    session: created[0]
  };
});

export { index_post as default };
//# sourceMappingURL=index.post2.mjs.map
