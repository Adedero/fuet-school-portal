import { _ as _export_sfc, S as __nuxt_component_2, a as __nuxt_component_0$1, d as useRuntimeConfig, b as _sfc_main$a } from './server.mjs';
import { _ as __nuxt_component_2$1 } from './logo-BvkqO1ow.mjs';
import { _ as _sfc_main$2 } from './DropdownMenu-ByJ7aAi2.mjs';
import { defineComponent, mergeProps, withCtx, unref, createVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { u as useAuthStore } from './auth.store-BfqdJVn0.mjs';
import { u as useLogout } from './use-logout-Ba6pM6E_.mjs';
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
import 'reka-ui/namespaced';
import './Kbd-Bv1QKL9A.mjs';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "header",
  __ssrInlineRender: true,
  setup(__props) {
    const config = useRuntimeConfig();
    const authStore = useAuthStore();
    const { logout } = useLogout();
    const items = [
      [
        {
          label: authStore.user.value?.name ?? "Anonymous",
          type: "label",
          icon: "lucide:circle-user"
        },
        {
          label: authStore.user.value?.email ?? "unverified",
          icon: "lucide:mail"
        }
      ],
      [
        {
          label: "Update email",
          icon: "lucide:mail-plus",
          to: "/change-email"
        },
        {
          label: "Change password",
          icon: "lucide:lock",
          to: "/change-password"
        }
      ],
      [
        {
          label: "Log out",
          icon: "lucide:log-out",
          onSelect() {
            logout();
          }
        }
      ]
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_AppLogo = __nuxt_component_2$1;
      const _component_NuxtDropdownMenu = _sfc_main$2;
      const _component_NuxtButton = _sfc_main$a;
      _push(`<header${ssrRenderAttrs(mergeProps({ class: "sticky top-0 z-50 bg-white px-5 md:px-10 lg:px-20 py-2.5 border-b border-b-muted" }, _attrs))}><div class="flex items-center justify-between">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/application/portal",
        class: "flex items-end gap-2"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_AppLogo, { width: 28 }, null, _parent2, _scopeId));
            _push2(`<div${_scopeId}><p class="leading-5 text-lg font-bold text-primary-500"${_scopeId}>${ssrInterpolate(unref(config).public.schoolNameShort)} Portal </p><p class="text-[0.6rem] text-muted uppercase hidden md:block"${_scopeId}>${ssrInterpolate(unref(config).public.schoolNameLong)}</p></div>`);
          } else {
            return [
              createVNode(_component_AppLogo, { width: 28 }),
              createVNode("div", null, [
                createVNode("p", { class: "leading-5 text-lg font-bold text-primary-500" }, toDisplayString(unref(config).public.schoolNameShort) + " Portal ", 1),
                createVNode("p", { class: "text-[0.6rem] text-muted uppercase hidden md:block" }, toDisplayString(unref(config).public.schoolNameLong), 1)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div><div class="flex items-center gap-2">`);
      _push(ssrRenderComponent(_component_NuxtDropdownMenu, {
        items,
        ui: {
          content: "w-60"
        }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_NuxtButton, {
              color: "neutral",
              variant: "outline",
              icon: "lucide:user-round"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_NuxtButton, {
                color: "neutral",
                variant: "outline",
                icon: "lucide:user-round"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtButton, {
        label: "Logout",
        onClick: unref(logout)
      }, null, _parent));
      _push(`</div></div></div></header>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/application/header.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = Object.assign(_sfc_main$1, { __name: "ApplicationHeader" });
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_ApplicationHeader = __nuxt_component_0;
  const _component_NuxtPage = __nuxt_component_2;
  _push(`<main${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_ApplicationHeader, null, null, _parent));
  _push(ssrRenderComponent(_component_NuxtPage, null, null, _parent));
  _push(`</main>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/application.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const application = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { application as default };
//# sourceMappingURL=application-HfD1fTZb.mjs.map
