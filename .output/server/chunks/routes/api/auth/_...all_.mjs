import { c as defineEventHandler, e as auth, f as toWebRequest } from '../../../_/nitro.mjs';
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

const ____all_ = defineEventHandler((event) => {
  return auth.handler(toWebRequest(event));
});

export { ____all_ as default };
//# sourceMappingURL=_...all_.mjs.map
