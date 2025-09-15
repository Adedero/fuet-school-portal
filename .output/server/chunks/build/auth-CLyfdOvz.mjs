import { _ as __nuxt_component_0, a as __nuxt_component_2$1 } from './footer-Cta-C-71.mjs';
import { _ as _sfc_main$1 } from './Card-HL6icAYQ.mjs';
import { _ as __nuxt_component_2 } from './use-auth-DTv-XyLU.mjs';
import { _ as _export_sfc, x as __nuxt_component_1 } from './server.mjs';
import { withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import './auth.store-Dv4Z0WoY.mjs';
import './Separator-BAycmyMV.mjs';
import 'reka-ui';
import '@vueuse/core';
import '../nitro/nitro.mjs';
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
import 'vue-router';
import 'better-auth/vue';
import 'better-auth/client/plugins';
import 'tailwindcss/colors';
import '@iconify/vue';
import 'tailwind-variants';
import '@iconify/utils/lib/css/icon';
import 'perfect-debounce';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_MainHeader = __nuxt_component_0;
  const _component_NuxtCard = _sfc_main$1;
  const _component_AppLogo = __nuxt_component_2;
  const _component_NuxtPage = __nuxt_component_1;
  const _component_MainFooter = __nuxt_component_2$1;
  _push(`<main${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_MainHeader, null, null, _parent));
  _push(`<div class="md:h-screen flex-center px-5 py-20 md:py-5">`);
  _push(ssrRenderComponent(_component_NuxtCard, { class: "w-full max-w-96" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div${_scopeId}>`);
        _push2(ssrRenderComponent(_component_NuxtCard, {
          variant: "subtle",
          class: "w-fit aspect-square"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_AppLogo, { size: "36" }, null, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_AppLogo, { size: "36" })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</div><div class="mt-5"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_NuxtPage, null, null, _parent2, _scopeId));
        _push2(`</div>`);
      } else {
        return [
          createVNode("div", null, [
            createVNode(_component_NuxtCard, {
              variant: "subtle",
              class: "w-fit aspect-square"
            }, {
              default: withCtx(() => [
                createVNode(_component_AppLogo, { size: "36" })
              ]),
              _: 1
            })
          ]),
          createVNode("div", { class: "mt-5" }, [
            createVNode(_component_NuxtPage)
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
  _push(ssrRenderComponent(_component_MainFooter, null, null, _parent));
  _push(`</main>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/auth.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const auth = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { auth as default };
//# sourceMappingURL=auth-CLyfdOvz.mjs.map
