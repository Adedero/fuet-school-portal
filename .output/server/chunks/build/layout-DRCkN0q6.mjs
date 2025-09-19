import { b as _sfc_main$a, o as _sfc_main$d, a as __nuxt_component_0$2, d as useRuntimeConfig } from './server.mjs';
import { defineComponent, computed, mergeProps, unref, isRef, withCtx, createVNode, renderSlot, ref, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderClass, ssrRenderComponent, ssrRenderSlot, ssrInterpolate } from 'vue/server-renderer';
import { u as useAuthStore } from './auth.store-BfqdJVn0.mjs';
import { _ as _sfc_main$3 } from './Slideover-CXWNYUSs.mjs';
import { _ as __nuxt_component_2 } from './logo-BvkqO1ow.mjs';
import { _ as _sfc_main$4 } from './Separator-Cxtlj3w1.mjs';
import { _ as _sfc_main$5 } from './DropdownMenu-ByJ7aAi2.mjs';
import { u as useLogout } from './use-logout-Ba6pM6E_.mjs';
import { useWindowSize } from '@vueuse/core';

const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "sidebar-header",
  __ssrInlineRender: true,
  setup(__props) {
    const authStore = useAuthStore();
    const userName = computed(() => {
      const names = (authStore.user.value?.name ?? "").split(" ");
      return `${names[0]} ${names.at(-1)}`;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtAvatar = _sfc_main$d;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex-col-center gap-2.5 text-center" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_NuxtAvatar, {
        src: unref(authStore).user.value?.image ?? void 0,
        alt: unref(userName),
        ui: { root: "size-20 text-3xl" }
      }, null, _parent));
      _push(`<div class="flex-col-center text-center"><p class="text-sm font-semibold">${ssrInterpolate(unref(authStore).user.value?.name)}</p><p class="text-xs text-muted">${ssrInterpolate(unref(authStore).user.value?.email)}</p><p class="text-xs font-semibold text-error uppercase">${ssrInterpolate(unref(authStore).user.value?.role)}</p></div></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/portal/sidebar-header.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0$1 = Object.assign(_sfc_main$2, { __name: "PortalSidebarHeader" });
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
      const _component_NuxtLink = __nuxt_component_0$2;
      const _component_AppLogo = __nuxt_component_2;
      const _component_NuxtDropdownMenu = _sfc_main$5;
      const _component_NuxtButton = _sfc_main$a;
      _push(`<header${ssrRenderAttrs(mergeProps({ class: "px-5 py-2.5" }, _attrs))}><div class="flex items-center justify-between">`);
      _push(ssrRenderComponent(_component_NuxtLink, { class: "flex items-center gap-2" }, {
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/portal/header.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_5 = Object.assign(_sfc_main$1, { __name: "PortalHeader" });
function useNavOpen(key) {
  const isOpen = ref(false);
  const setIsOpen = (value) => {
    if (globalThis.localStorage) {
      globalThis.localStorage.setItem(key, `${value}`);
      isOpen.value = value;
    }
  };
  return { isOpen, setIsOpen };
}
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "layout",
  __ssrInlineRender: true,
  setup(__props) {
    const { width } = useWindowSize();
    const { isOpen, setIsOpen } = useNavOpen("nav:open");
    const isLargeScreen = computed(() => width.value >= 1024);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_PortalSidebarHeader = __nuxt_component_0$1;
      const _component_NuxtSlideover = _sfc_main$3;
      const _component_AppLogo = __nuxt_component_2;
      const _component_NuxtSeparator = _sfc_main$4;
      const _component_NuxtButton = _sfc_main$a;
      const _component_PortalHeader = __nuxt_component_5;
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "h-dvh lg:flex" }, _attrs))}><aside class="${ssrRenderClass([
        "hidden overflow-hidden transition-[width] lg:shrink-0 lg:flex lg:flex-col lg:h-full lg:border-r lg:border-r-default",
        unref(isOpen) ? "w-72" : "w-0"
      ])}"><header class="p-5 shrink-0 border-b border-b-default">`);
      _push(ssrRenderComponent(_component_PortalSidebarHeader, null, null, _parent));
      _push(`</header><div class="grow overflow-y-auto p-5">`);
      ssrRenderSlot(_ctx.$slots, "sidebar", {}, null, _push, _parent);
      _push(`</div></aside>`);
      if (!unref(isLargeScreen)) {
        _push(ssrRenderComponent(_component_NuxtSlideover, {
          open: unref(isOpen),
          "onUpdate:open": ($event) => isRef(isOpen) ? isOpen.value = $event : null,
          ui: { content: "max-w-96" }
        }, {
          title: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_AppLogo, { size: "24" }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_AppLogo, { size: "24" })
              ];
            }
          }),
          body: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="space-y-5"${_scopeId}><header${_scopeId}>`);
              _push2(ssrRenderComponent(_component_PortalSidebarHeader, null, null, _parent2, _scopeId));
              _push2(`</header>`);
              _push2(ssrRenderComponent(_component_NuxtSeparator, null, null, _parent2, _scopeId));
              _push2(`<div${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "sidebar", {}, null, _push2, _parent2, _scopeId);
              _push2(`</div></div>`);
            } else {
              return [
                createVNode("div", { class: "space-y-5" }, [
                  createVNode("header", null, [
                    createVNode(_component_PortalSidebarHeader)
                  ]),
                  createVNode(_component_NuxtSeparator),
                  createVNode("div", null, [
                    renderSlot(_ctx.$slots, "sidebar")
                  ])
                ])
              ];
            }
          }),
          _: 3
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<section class="h-dvh lg:h-auto lg:grow overflow-y-auto"><div class="flex sticky top-0 z-50 bg-white border-b border-b-muted w-full"><div class="flex-center pl-5">`);
      _push(ssrRenderComponent(_component_NuxtButton, {
        icon: "lucide:panel-left",
        color: "neutral",
        variant: "ghost",
        onClick: ($event) => unref(setIsOpen)(!unref(isOpen))
      }, null, _parent));
      _push(`</div><div class="w-full lg:grow">`);
      _push(ssrRenderComponent(_component_PortalHeader, null, null, _parent));
      _push(`</div></div><div>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div></section></main>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/portal/layout.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = Object.assign(_sfc_main, { __name: "PortalLayout" });

export { __nuxt_component_0 as _ };
//# sourceMappingURL=layout-DRCkN0q6.mjs.map
