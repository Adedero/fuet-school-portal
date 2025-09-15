import { d as defineEventHandler, f as getRouterParams } from '../../../../../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
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

const index_delete = defineEventHandler(async (event) => {
  const { applicationId } = getRouterParams(event);
  return {
    success: true,
    message: "Application deleted."
  };
});

export { index_delete as default };
//# sourceMappingURL=index.delete.mjs.map
