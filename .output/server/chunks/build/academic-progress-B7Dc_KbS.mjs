import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import '../_/nitro.mjs';
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
import 'vue-router';
import 'better-auth/vue';
import 'better-auth/client/plugins';
import 'tailwindcss/colors';
import '@iconify/vue';
import 'reka-ui';
import '@vueuse/core';
import 'tailwind-variants';
import '@iconify/utils/lib/css/icon';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "p-6 border border-muted rounded" }, _attrs))} data-v-cba49f4b><h3 class="text-lg font-bold mb-6" data-v-cba49f4b>Academic Progress</h3><div class="grid grid-cols-1 md:grid-cols-3 gap-6" data-v-cba49f4b><div data-v-cba49f4b><p class="font-bold" data-v-cba49f4b>Level Progress</p><progress class="w-full custom-progress" max="100" value="75" data-v-cba49f4b></progress><p class="text-sm text-gray-500" data-v-cba49f4b>75% completed</p></div><div data-v-cba49f4b><p class="font-bold" data-v-cba49f4b>Credit Hours</p><progress class="w-full custom-progress" max="100" value="60" data-v-cba49f4b></progress><p class="text-sm text-gray-500" data-v-cba49f4b>45/75 credits</p></div><div data-v-cba49f4b><p class="font-bold" data-v-cba49f4b>Overall Performance</p><progress class="w-full custom-progress" max="100" value="85" data-v-cba49f4b></progress><p class="text-sm text-gray-500" data-v-cba49f4b>Excellent</p></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/students/dashboard/academic-progress.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const academicProgress = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-cba49f4b"]]), { __name: "StudentsDashboardAcademicProgress" });

export { academicProgress as default };
//# sourceMappingURL=academic-progress-B7Dc_KbS.mjs.map
