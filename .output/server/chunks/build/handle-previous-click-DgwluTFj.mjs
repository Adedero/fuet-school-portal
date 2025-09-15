import { l as useConfirm, n as navigateTo } from './server.mjs';
import 'vue';
import '../_/nitro.mjs';
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
import 'node:crypto';
import 'consola';
import 'ipx';
import 'node:path';
import 'vue-router';
import 'better-auth/vue';
import 'better-auth/client/plugins';
import 'tailwindcss/colors';
import '@iconify/vue';
import 'vue/server-renderer';
import 'reka-ui';
import '@vueuse/core';
import 'tailwind-variants';
import '@iconify/utils/lib/css/icon';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';

async function handlePreviousClick(hasUnsavedChanges, link) {
  const { confirmAsync } = useConfirm();
  if (!hasUnsavedChanges) {
    await navigateTo(link);
    return;
  }
  const confirm = await confirmAsync({
    title: "Changes not Saved",
    description: "Going back will remove any unsaved changes. Do you want to proceed?"
  });
  if (!confirm) {
    return;
  }
  await navigateTo(link);
}

export { handlePreviousClick as default };
//# sourceMappingURL=handle-previous-click-DgwluTFj.mjs.map
