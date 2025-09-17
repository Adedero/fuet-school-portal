import { a as __nuxt_component_0$1, d as useRuntimeConfig, b as _sfc_main$a } from './server.mjs';
import { _ as __nuxt_component_2$1 } from './logo-BvkqO1ow.mjs';
import { _ as _sfc_main$4 } from './Separator-A-GXspeX.mjs';
import { defineComponent, mergeProps, withCtx, unref, createVNode, toDisplayString, ref, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { _ as _sfc_main$2 } from './NavigationMenu-B_W-DRU3.mjs';
import { _ as _sfc_main$3 } from './Slideover-bZOxFwjx.mjs';
import { u as useLogout } from './use-logout-Dvt5zoeI.mjs';
import { u as useAuthStore } from './auth.store-D2X7Djdw.mjs';
import { n as navigateToPortal } from './use-navigate-to-portal-B5FNbniG.mjs';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "footer",
  __ssrInlineRender: true,
  setup(__props) {
    const config = useRuntimeConfig();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_AppLogo = __nuxt_component_2$1;
      const _component_NuxtButton = _sfc_main$a;
      const _component_NuxtSeparator = _sfc_main$4;
      _push(`<footer${ssrRenderAttrs(mergeProps({ class: "bg-muted section-padding pt-16 pb-10" }, _attrs))}><div class="flex flex-wrap gap-10"><div class="md:w-1/2 space-y-3">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "flex items-center gap-1.5"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_AppLogo, { width: 40 }, null, _parent2, _scopeId));
            _push2(`<p class="font-extrabold text-lg text-primary-500 leading-5"${_scopeId}>${ssrInterpolate(unref(config).public.schoolNameLong)}</p>`);
          } else {
            return [
              createVNode(_component_AppLogo, { width: 40 }),
              createVNode("p", { class: "font-extrabold text-lg text-primary-500 leading-5" }, toDisplayString(unref(config).public.schoolNameLong), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<p class="text-sm text-muted"> Pioneering Innovation • Nurturing Sustainability </p><div class="flex items-center gap-2.5">`);
      _push(ssrRenderComponent(_component_NuxtButton, {
        to: "#",
        size: "sm",
        icon: "lucide:facebook",
        variant: "soft",
        class: "rounded-full"
      }, null, _parent));
      _push(ssrRenderComponent(_component_NuxtButton, {
        to: "#",
        size: "sm",
        icon: "lucide:linkedin",
        variant: "soft",
        class: "rounded-full"
      }, null, _parent));
      _push(ssrRenderComponent(_component_NuxtButton, {
        to: "#",
        size: "sm",
        icon: "lucide:twitter",
        variant: "soft",
        class: "rounded-full"
      }, null, _parent));
      _push(`</div></div><div class="md:grow grid md:grid-cols-3"><div class="space-y-2.5"><p class="text-sm font-semibold">Pages</p><div class="grid gap-1 text-xs">`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Home`);
          } else {
            return [
              createTextVNode("Home")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`About`);
          } else {
            return [
              createTextVNode("About")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Contact`);
          } else {
            return [
              createTextVNode("Contact")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="space-y-2.5"><p class="text-sm font-semibold">Admissions</p><div class="grid gap-1 text-xs">`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Apply`);
          } else {
            return [
              createTextVNode("Apply")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Check Status`);
          } else {
            return [
              createTextVNode("Check Status")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="space-y-2.5"><p class="text-sm font-semibold">Account</p><div class="grid gap-1 text-xs">`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Portal`);
          } else {
            return [
              createTextVNode("Portal")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Profile`);
          } else {
            return [
              createTextVNode("Profile")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></div>`);
      _push(ssrRenderComponent(_component_NuxtSeparator, { class: "mt-5 mb-2.5" }, null, _parent));
      _push(`<div class="text-xs text-muted flex flex-wrap gap-5 justify-between items-center"><p>© ${ssrInterpolate(unref(config).public.app.name)} 2025. All Rights Reserved.</p><p>Made by <b>Z1 Technologies</b></p></div></footer>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/main/footer.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_2 = Object.assign(_sfc_main$1, { __name: "MainFooter" });
const links = ref([
  [
    {
      label: "Units",
      icon: "lucide:box",
      children: [
        { label: "Media Unit / Public Relations", to: "/units/media" },
        { label: "Registry", to: "/units/registry" },
        { label: "Finance & Accounts", to: "/units/finance" },
        { label: "Human Resources", to: "/units/hr" },
        { label: "ICT / Information Technology Unit", to: "/units/ict" },
        { label: "Students' Affairs", to: "/units/students-affairs" },
        { label: "Library", to: "/units/library" },
        { label: "Internal Audit", to: "/units/audit" },
        { label: "Quality Assurance Unit", to: "/units/qa" }
      ]
    },
    {
      label: "Academics",
      icon: "lucide:graduation-cap",
      children: [
        { label: "Undergraduate Programmes", to: "/academics/undergraduate" },
        { label: "Postgraduate Programmes", to: "/academics/postgraduate" },
        { label: "Research Centres & Institutes", to: "/academics/research" },
        { label: "Academic Calendar", to: "/academics/calendar" },
        { label: "Admissions", to: "/admissions" },
        { label: "Scholarships", to: "/academics/scholarships" },
        { label: "Academic Policies", to: "/academics/policies" }
      ]
    },
    {
      label: "About FUET",
      icon: "lucide:info",
      children: [
        { label: "Vision & Mission", to: "/about/vision-mission" },
        { label: "History", to: "/about/history" },
        { label: "Leadership / Management", to: "/about/leadership" },
        { label: "Campus & Facilities", to: "/about/facilities" },
        { label: "Accreditation", to: "/about/accreditation" },
        { label: "Contacts", to: "/about/contact" },
        { label: "Location & Maps", to: "/about/location" }
      ]
    }
  ]
]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "header",
  __ssrInlineRender: true,
  setup(__props) {
    const config = useRuntimeConfig();
    const authStore = useAuthStore();
    const { logout } = useLogout();
    const navigate = navigateToPortal();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_AppLogo = __nuxt_component_2$1;
      const _component_NuxtNavigationMenu = _sfc_main$2;
      const _component_NuxtButton = _sfc_main$a;
      const _component_NuxtSlideover = _sfc_main$3;
      _push(`<header${ssrRenderAttrs(mergeProps({ class: "sticky top-0 z-50 bg-white px-5 md:px-10 py-4 border-b border-b-muted" }, _attrs))}><div class="flex items-center justify-between">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "flex items-center gap-2"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_AppLogo, { width: 40 }, null, _parent2, _scopeId));
            _push2(`<div${_scopeId}><p class="font-extrabold text-lg lg:text-base xl:text-lg text-primary-500"${_scopeId}><span class="lg:hidden"${_scopeId}>${ssrInterpolate(unref(config).public.schoolNameShort)}</span><span class="hidden lg:inline"${_scopeId}>${ssrInterpolate(unref(config).public.schoolNameLong)}</span></p><p class="text-muted text-xs hidden md:block"${_scopeId}>${ssrInterpolate(unref(config).public.schoolLocation)}</p></div>`);
          } else {
            return [
              createVNode(_component_AppLogo, { width: 40 }),
              createVNode("div", null, [
                createVNode("p", { class: "font-extrabold text-lg lg:text-base xl:text-lg text-primary-500" }, [
                  createVNode("span", { class: "lg:hidden" }, toDisplayString(unref(config).public.schoolNameShort), 1),
                  createVNode("span", { class: "hidden lg:inline" }, toDisplayString(unref(config).public.schoolNameLong), 1)
                ]),
                createVNode("p", { class: "text-muted text-xs hidden md:block" }, toDisplayString(unref(config).public.schoolLocation), 1)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="flex items-center gap-6"><div class="hidden lg:block">`);
      _push(ssrRenderComponent(_component_NuxtNavigationMenu, { items: unref(links) }, null, _parent));
      _push(`</div><div><div class="flex items-center gap-2">`);
      if (unref(authStore).isLoggedIn()) {
        _push(`<div>`);
        _push(ssrRenderComponent(_component_NuxtButton, {
          label: "Portal",
          onClick: unref(navigate)
        }, null, _parent));
        _push(ssrRenderComponent(_component_NuxtButton, {
          label: "Log out",
          variant: "link",
          onClick: unref(logout)
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<div class="flex items-center gap-2">`);
        _push(ssrRenderComponent(_component_NuxtButton, {
          to: "/application",
          label: "Apply Now"
        }, null, _parent));
        _push(ssrRenderComponent(_component_NuxtButton, {
          to: "/login",
          label: "Log in",
          variant: "link"
        }, null, _parent));
        _push(`</div>`);
      }
      _push(`<div class="lg:hidden">`);
      _push(ssrRenderComponent(_component_NuxtSlideover, { ui: { content: "max-w-96" } }, {
        title: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_AppLogo, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_AppLogo)
            ];
          }
        }),
        body: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_NuxtNavigationMenu, {
              items: unref(links),
              orientation: "vertical"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_NuxtNavigationMenu, {
                items: unref(links),
                orientation: "vertical"
              }, null, 8, ["items"])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_NuxtButton, {
              icon: "lucide:menu",
              color: "neutral",
              variant: "ghost"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_NuxtButton, {
                icon: "lucide:menu",
                color: "neutral",
                variant: "ghost"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></div></div></header>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/main/header.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = Object.assign(_sfc_main, { __name: "MainHeader" });

export { __nuxt_component_0 as _, __nuxt_component_2 as a };
//# sourceMappingURL=header-DAd8WY3b.mjs.map
