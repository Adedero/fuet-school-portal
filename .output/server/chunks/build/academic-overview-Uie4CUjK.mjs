import { r as __nuxt_component_1 } from './server.mjs';
import { defineComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import '../nitro/nitro.mjs';
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
import 'vue-router';
import 'better-auth/vue';
import 'better-auth/client/plugins';
import 'tailwindcss/colors';
import '@iconify/vue';
import 'reka-ui';
import '@vueuse/core';
import 'tailwind-variants';
import '@iconify/utils/lib/css/icon';
import 'perfect-debounce';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "academic-overview",
  __ssrInlineRender: true,
  props: {
    academicStats: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "grid grid-cols-1 md:grid-cols-4 gap-6" }, _attrs))}><div class="p-6 border border-muted rounded text-center"><p class="text-xs flex items-center justify-center gap-1">`);
      _push(ssrRenderComponent(_component_Icon, { name: "lucide:award" }, null, _parent));
      _push(` Current Level </p><p class="text-3xl font-bold text-primary">${ssrInterpolate(_ctx.academicStats.currentLevel)}</p></div><div class="p-6 border border-muted rounded text-center"><p class="text-xs flex items-center justify-center gap-1">`);
      _push(ssrRenderComponent(_component_Icon, { name: "lucide:book-open" }, null, _parent));
      _push(` Total Credits </p><p class="text-3xl font-bold">${ssrInterpolate(_ctx.academicStats.totalCredits)}</p></div><div class="p-6 border border-muted rounded text-center"><p class="text-xs flex items-center justify-center gap-1">`);
      _push(ssrRenderComponent(_component_Icon, { name: "lucide:file-text" }, null, _parent));
      _push(` Completed Courses </p><p class="text-3xl font-bold">${ssrInterpolate(_ctx.academicStats.completedCourses)}</p></div><div class="p-6 border border-muted rounded text-center"><p class="text-xs flex items-center justify-center gap-1">`);
      _push(ssrRenderComponent(_component_Icon, { name: "lucide:calendar" }, null, _parent));
      _push(` Expected Graduation </p><p class="text-3xl font-bold">${ssrInterpolate(_ctx.academicStats.expectedGraduation)}</p></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/students/dashboard/academic-overview.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const academicOverview = Object.assign(_sfc_main, { __name: "StudentsDashboardAcademicOverview" });

export { academicOverview as default };
//# sourceMappingURL=academic-overview-Uie4CUjK.mjs.map
