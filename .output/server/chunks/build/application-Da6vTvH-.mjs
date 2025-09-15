import { _ as _export_sfc, x as __nuxt_component_1, o as useConfirm, m as useRuntimeConfig, a as __nuxt_component_0$1, b as _sfc_main$a, k as authClient } from './server.mjs';
import { u as useAuth, _ as __nuxt_component_2 } from './use-auth-DTv-XyLU.mjs';
import { _ as _sfc_main$2 } from './DropdownMenu-S-1UpFjl.mjs';
import { defineComponent, computed, mergeProps, withCtx, unref, createVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { u as useAuthStore } from './auth.store-Dv4Z0WoY.mjs';
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
import 'reka-ui';
import '@vueuse/core';
import 'tailwind-variants';
import '@iconify/utils/lib/css/icon';
import 'perfect-debounce';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'reka-ui/namespaced';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "header",
  __ssrInlineRender: true,
  setup(__props) {
    const config = useRuntimeConfig();
    const { confirmAsync } = useConfirm();
    const { user } = useAuth();
    const authStore = useAuthStore();
    const appName = computed(() => {
      const [first, ...rest] = config.public.app.name.split(" ");
      return {
        val1: first,
        val2: rest.join(" ")
      };
    });
    const logout = async () => {
      const confirm = await confirmAsync({
        title: "Log Out",
        description: "Are you sure you want to proceed?",
        acceptProps: {
          label: "Proceed"
        },
        rejectProps: {
          label: "Cancel",
          color: "neutral",
          variant: "soft"
        }
      });
      if (!confirm) return;
      await authClient.signOut({
        fetchOptions: {
          onSuccess: async () => {
            await authClient.revokeSessions();
            authStore.setSession(null);
            authStore.setUser(null);
            (void 0).location.href = "/";
          }
        }
      });
    };
    const items = [
      [
        {
          label: user.value?.name ?? "Anonymous",
          type: "label",
          icon: "lucide:circle-user"
        },
        {
          label: user.value?.email ?? "unverified",
          icon: "lucide:mail"
        }
      ],
      [
        {
          label: "Update email",
          icon: "lucide:mail-plus"
        },
        {
          label: "Change password",
          icon: "lucide:lock"
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
      const _component_AppLogo = __nuxt_component_2;
      const _component_NuxtDropdownMenu = _sfc_main$2;
      const _component_NuxtButton = _sfc_main$a;
      _push(`<header${ssrRenderAttrs(mergeProps({ class: "sticky top-0 z-50 bg-white px-5 md:px-10 lg:px-20 py-2.5 border-b border-b-muted" }, _attrs))}><div class="flex items-center justify-between">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "flex items-end gap-2"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_AppLogo, { width: 28 }, null, _parent2, _scopeId));
            _push2(`<p class="font-extrabold text-xl"${_scopeId}><span class="text-primary-500"${_scopeId}>${ssrInterpolate(unref(appName).val1)}</span><span class="text-muted"${_scopeId}>${ssrInterpolate(unref(appName).val2)}</span></p>`);
          } else {
            return [
              createVNode(_component_AppLogo, { width: 28 }),
              createVNode("p", { class: "font-extrabold text-xl" }, [
                createVNode("span", { class: "text-primary-500" }, toDisplayString(unref(appName).val1), 1),
                createVNode("span", { class: "text-muted" }, toDisplayString(unref(appName).val2), 1)
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
        onClick: logout
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
  const _component_NuxtPage = __nuxt_component_1;
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
//# sourceMappingURL=application-Da6vTvH-.mjs.map
