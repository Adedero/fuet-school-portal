import { a as __nuxt_component_0 } from './server.mjs';
import { defineComponent, mergeProps, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderClass } from 'vue/server-renderer';
import '../_/nitro.mjs';
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
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "recent-grades",
  __ssrInlineRender: true,
  props: {
    recentGrades: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex-1 p-6 border border-muted rounded" }, _attrs))}><div class="flex justify-between items-center mb-6"><h3 class="text-lg font-bold">Recent Grades</h3>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/results",
        class: "text-blue-600 text-sm hover:underline"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` View All `);
          } else {
            return [
              createTextVNode(" View All ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="space-y-4"><!--[-->`);
      ssrRenderList(_ctx.recentGrades, (grade, index) => {
        _push(`<div class="flex justify-between items-center p-4 bg-gray-50 rounded"><div><p class="font-bold">${ssrInterpolate(grade.course)}</p><p class="text-sm text-slate-400">${ssrInterpolate(grade.title)}</p><p class="text-xs text-gray-500">${ssrInterpolate(grade.credits)} Credits</p></div><span class="${ssrRenderClass([grade.grade.startsWith("A") ? "bg-green-600" : "bg-blue-600", "px-3 py-1 rounded text-white text-sm"])}">${ssrInterpolate(grade.grade)}</span></div>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/students/dashboard/recent-grades.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const recentGrades = Object.assign(_sfc_main, { __name: "StudentsDashboardRecentGrades" });

export { recentGrades as default };
//# sourceMappingURL=recent-grades-BM_qSWM3.mjs.map
