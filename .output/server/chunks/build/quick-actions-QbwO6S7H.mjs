import { a as __nuxt_component_0, r as __nuxt_component_1 } from './server.mjs';
import { defineComponent, mergeProps, withCtx, createVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrRenderClass, ssrInterpolate } from 'vue/server-renderer';
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
  __name: "quick-actions",
  __ssrInlineRender: true,
  props: {
    quickActions: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_Icon = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "py-6 rounded" }, _attrs))}><h3 class="text-lg font-bold mb-6">Quick Actions</h3><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"><!--[-->`);
      ssrRenderList(_ctx.quickActions, (action, index) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          key: index,
          to: action.href,
          class: "p-6 border border-muted rounded hover:shadow-md transition flex flex-col items-center text-center gap-3"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="${ssrRenderClass(["w-12 h-12 rounded-full flex items-center justify-center text-white", action.color])}"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_Icon, {
                name: `lucide:${action.icon}`,
                size: "20"
              }, null, _parent2, _scopeId));
              _push2(`</div><div${_scopeId}><p class="font-bold"${_scopeId}>${ssrInterpolate(action.title)}</p><p class="text-sm text-gray-500"${_scopeId}>${ssrInterpolate(action.description)}</p></div>`);
            } else {
              return [
                createVNode("div", {
                  class: ["w-12 h-12 rounded-full flex items-center justify-center text-white", action.color]
                }, [
                  createVNode(_component_Icon, {
                    name: `lucide:${action.icon}`,
                    size: "20"
                  }, null, 8, ["name"])
                ], 2),
                createVNode("div", null, [
                  createVNode("p", { class: "font-bold" }, toDisplayString(action.title), 1),
                  createVNode("p", { class: "text-sm text-gray-500" }, toDisplayString(action.description), 1)
                ])
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/students/dashboard/quick-actions.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const quickActions = Object.assign(_sfc_main, { __name: "StudentsDashboardQuickActions" });

export { quickActions as default };
//# sourceMappingURL=quick-actions-QbwO6S7H.mjs.map
