import { d as defineEventHandler, i as getRouterParams, r as readValidatedBody, c as createError, b as db, v as schoolSession } from '../../../../../nitro/nitro.mjs';
import { eq } from 'drizzle-orm';
import { s as sessionSchema } from '../../../../../_/session.schema.mjs';
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
import 'zod';

const index_put = defineEventHandler(async (event) => {
  const { sessionId } = getRouterParams(event);
  const { success, data, error } = await readValidatedBody(
    event,
    sessionSchema.safeParse
  );
  if (!success) {
    throw createError({
      statusCode: 400,
      statusMessage: error.issues[0].message
    });
  }
  const { name, startYear } = data;
  const existingSession = await db.query.schoolSession.findFirst({
    where: (sesh, { and, ne, eq: eq2 }) => {
      return and(ne(sesh.id, sessionId), eq2(sesh.name, name));
    }
  });
  if (existingSession) {
    throw createError({
      statusCode: 400,
      statusMessage: "A session with this name already exists"
    });
  }
  const updated = await db.update(schoolSession).set({ name, startYear, updatedAt: /* @__PURE__ */ new Date() }).where(eq(schoolSession.id, sessionId)).returning();
  return {
    success: true,
    message: "Academic session updated.",
    session: updated[0]
  };
});

export { index_put as default };
//# sourceMappingURL=index.put.mjs.map
