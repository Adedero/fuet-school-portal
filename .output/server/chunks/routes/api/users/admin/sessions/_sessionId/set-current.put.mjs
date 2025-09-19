import { c as defineEventHandler, m as getRouterParams, i as db, h as createError, B as schoolSession } from '../../../../../../_/nitro.mjs';
import { eq } from 'drizzle-orm';
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

const setCurrent_put = defineEventHandler(async (event) => {
  const { sessionId } = getRouterParams(event);
  const session = await db.query.schoolSession.findFirst({
    where: (sesh, { eq: eq2 }) => eq2(sesh.id, sessionId)
  });
  if (!session) {
    throw createError({
      statusCode: 404,
      statusMessage: "Session not found."
    });
  }
  if (session.isCurrent) {
    throw createError({
      statusCode: 400,
      statusMessage: "Session is already the current session."
    });
  }
  await db.update(schoolSession).set({ isCurrent: false, updatedAt: /* @__PURE__ */ new Date() });
  const updated = await db.update(schoolSession).set({ isCurrent: true, updatedAt: /* @__PURE__ */ new Date() }).where(eq(schoolSession.id, sessionId)).returning();
  return {
    success: true,
    message: "Academic session set as current.",
    session: updated[0]
  };
});

export { setCurrent_put as default };
//# sourceMappingURL=set-current.put.mjs.map
