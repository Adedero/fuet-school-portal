import { p as __nuxt_component_2, b as _sfc_main$a, s as _sfc_main$d, d as useRuntimeConfig, a as __nuxt_component_0$2 } from './server.mjs';
import { defineComponent, withCtx, createVNode, computed, mergeProps, unref, isRef, renderSlot, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderAttrs, ssrRenderClass, ssrRenderSlot, ssrInterpolate } from 'vue/server-renderer';
import { u as useAuthStore } from './auth.store-D2X7Djdw.mjs';
import { _ as _sfc_main$5 } from './Slideover-bZOxFwjx.mjs';
import { _ as __nuxt_component_2$1 } from './logo-BvkqO1ow.mjs';
import { _ as _sfc_main$6 } from './Separator-A-GXspeX.mjs';
import { _ as _sfc_main$7 } from './DropdownMenu-N0o3f2tr.mjs';
import { u as useLogout } from './use-logout-Dvt5zoeI.mjs';
import { useWindowSize, useLocalStorage } from '@vueuse/core';
import { _ as _sfc_main$4 } from './NavigationMenu-B_W-DRU3.mjs';
import '../nitro/nitro.mjs';
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
import 'tailwind-variants';
import '@iconify/utils/lib/css/icon';
import 'perfect-debounce';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'reka-ui/namespaced';
import './Kbd-Bv1QKL9A.mjs';
import './Badge-CB0LwpmB.mjs';
import './Popover-DXpZNoWk.mjs';

const _sfc_main$3 = /* @__PURE__ */ defineComponent({
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
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/portal/sidebar-header.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_0$1 = Object.assign(_sfc_main$3, { __name: "PortalSidebarHeader" });
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "header",
  __ssrInlineRender: true,
  setup(__props) {
    const config = useRuntimeConfig();
    const authStore = useAuthStore();
    const { logout } = useLogout();
    const appName = computed(() => {
      const [first, ...rest] = config.public.app.name.split(" ");
      return {
        val1: first,
        val2: rest.join(" ")
      };
    });
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
      const _component_AppLogo = __nuxt_component_2$1;
      const _component_NuxtDropdownMenu = _sfc_main$7;
      const _component_NuxtButton = _sfc_main$a;
      _push(`<header${ssrRenderAttrs(mergeProps({ class: "px-5 py-2.5" }, _attrs))}><div class="flex items-center justify-between">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "flex items-end gap-2"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_AppLogo, { width: 28 }, null, _parent2, _scopeId));
            _push2(`<p class="font-extrabold text-xl hidden md:block"${_scopeId}><span class="text-primary-500"${_scopeId}>${ssrInterpolate(unref(appName).val1)}</span><span class="text-muted"${_scopeId}>${ssrInterpolate(unref(appName).val2)}</span></p>`);
          } else {
            return [
              createVNode(_component_AppLogo, { width: 28 }),
              createVNode("p", { class: "font-extrabold text-xl hidden md:block" }, [
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
        onClick: unref(logout)
      }, null, _parent));
      _push(`</div></div></div></header>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/portal/header.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_5 = Object.assign(_sfc_main$2, { __name: "PortalHeader" });
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "layout",
  __ssrInlineRender: true,
  setup(__props) {
    const { width } = useWindowSize();
    const open = useLocalStorage("nav:open", false);
    const isLargeScreen = computed(() => width.value >= 1024);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_PortalSidebarHeader = __nuxt_component_0$1;
      const _component_NuxtSlideover = _sfc_main$5;
      const _component_AppLogo = __nuxt_component_2$1;
      const _component_NuxtSeparator = _sfc_main$6;
      const _component_NuxtButton = _sfc_main$a;
      const _component_PortalHeader = __nuxt_component_5;
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "h-dvh lg:flex" }, _attrs))}><aside class="${ssrRenderClass([
        "hidden overflow-hidden transition-[width] lg:shrink-0 lg:flex lg:flex-col lg:h-full lg:border-r lg:border-r-default",
        unref(open) ? "w-72" : "w-0"
      ])}"><header class="p-5 shrink-0 border-b border-b-default">`);
      _push(ssrRenderComponent(_component_PortalSidebarHeader, null, null, _parent));
      _push(`</header><div class="grow overflow-y-auto p-5">`);
      ssrRenderSlot(_ctx.$slots, "sidebar", {}, null, _push, _parent);
      _push(`</div></aside>`);
      if (!unref(isLargeScreen)) {
        _push(ssrRenderComponent(_component_NuxtSlideover, {
          open: unref(open),
          "onUpdate:open": ($event) => isRef(open) ? open.value = $event : null,
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
        onClick: ($event) => open.value = !unref(open)
      }, null, _parent));
      _push(`</div><div class="w-full lg:grow">`);
      _push(ssrRenderComponent(_component_PortalHeader, null, null, _parent));
      _push(`</div></div><div>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div></section></main>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/portal/layout.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = Object.assign(_sfc_main$1, { __name: "PortalLayout" });
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "admin",
  __ssrInlineRender: true,
  setup(__props) {
    const { logout } = useLogout();
    const items = [
      [
        {
          label: "Home",
          type: "label"
        },
        {
          label: "Dashboard",
          icon: "lucide:table-2",
          to: "/portal/admin"
        }
      ],
      [
        {
          label: "Students",
          type: "label"
        },
        {
          label: "Applications",
          icon: "lucide:file-pen",
          to: "/portal/admin/applications"
        },
        {
          label: "Current Students",
          icon: "lucide:users"
        },
        {
          label: "Alumni",
          icon: "lucide:graduation-cap"
        }
      ],
      [
        {
          label: "Staffs",
          type: "label"
        },
        {
          label: "Staffs",
          icon: "lucide:briefcase"
        },
        {
          label: "H.O.Ds",
          icon: "lucide:square-user-round"
        }
      ],
      [
        {
          label: "Payments",
          type: "label"
        },
        {
          label: "Admission Fees",
          icon: "lucide:house-plus"
        },
        {
          label: "School Fees",
          icon: "lucide:credit-card"
        }
      ],
      [
        {
          label: "University",
          type: "label"
        },
        {
          label: "Courses",
          icon: "lucide:book-a"
        },
        {
          label: "Faculties",
          icon: "lucide:university"
        },
        {
          label: "Student Classes",
          icon: "lucide:group"
        },
        {
          label: "Academic Sessions",
          icon: "lucide:calendar",
          to: "/portal/admin/academic-sessions"
        }
      ],
      [
        {
          label: "Settings",
          type: "label"
        },
        {
          label: "Settings",
          icon: "lucide:settings"
        },
        {
          label: "Preferences",
          icon: "lucide:settings-2"
        },
        {
          label: "My Account",
          icon: "lucide:shield-user"
        }
      ],
      [
        {
          label: "Log out",
          icon: "lucide:log-out",
          onSelect: () => {
            logout();
          }
        }
      ]
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_PortalLayout = __nuxt_component_0;
      const _component_NuxtNavigationMenu = _sfc_main$4;
      const _component_NuxtPage = __nuxt_component_2;
      _push(ssrRenderComponent(_component_PortalLayout, _attrs, {
        sidebar: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_NuxtNavigationMenu, {
              items,
              orientation: "vertical"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_NuxtNavigationMenu, {
                items,
                orientation: "vertical"
              })
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_NuxtPage, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_NuxtPage)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/portal/admin.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=admin-WCtws2A7.mjs.map
