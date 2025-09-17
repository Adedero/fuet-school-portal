import { i as useRuntimeConfig, a as __nuxt_component_0$1, b as _sfc_main$a } from './server.mjs';
import { _ as __nuxt_component_2$1 } from './logo-BvkqO1ow.mjs';
import { _ as _sfc_main$3 } from './Separator-BsgT9KGg.mjs';
import { defineComponent, computed, mergeProps, withCtx, createVNode, unref, toDisplayString, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { u as useLogout } from './use-logout-MQ1XT9eC.mjs';
import { u as useAuthStore } from './auth.store-DEldkL5P.mjs';
import { ChevronDown } from 'lucide-vue-next';

const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "footer",
  __ssrInlineRender: true,
  setup(__props) {
    const config = useRuntimeConfig();
    const appName = computed(() => {
      const [first, ...rest] = config.public.app.name.split(" ");
      return {
        val1: first,
        val2: rest.join(" ")
      };
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_AppLogo = __nuxt_component_2$1;
      const _component_NuxtButton = _sfc_main$a;
      const _component_NuxtSeparator = _sfc_main$3;
      _push(`<footer${ssrRenderAttrs(mergeProps({ class: "bg-muted section-padding pt-16 pb-10" }, _attrs))}><div class="flex flex-wrap gap-10"><div class="md:w-1/2 space-y-3">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "flex items-end gap-2"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_AppLogo, { width: 40 }, null, _parent2, _scopeId));
            _push2(`<p class="font-extrabold text-2xl"${_scopeId}><span class="text-primary-500"${_scopeId}>${ssrInterpolate(unref(appName).val1)}</span><span class="text-muted"${_scopeId}>${ssrInterpolate(unref(appName).val2)}</span></p>`);
          } else {
            return [
              createVNode(_component_AppLogo, { width: 40 }),
              createVNode("p", { class: "font-extrabold text-2xl" }, [
                createVNode("span", { class: "text-primary-500" }, toDisplayString(unref(appName).val1), 1),
                createVNode("span", { class: "text-muted" }, toDisplayString(unref(appName).val2), 1)
              ])
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
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/main/footer.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_2 = Object.assign(_sfc_main$2, { __name: "MainFooter" });
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "dropdown",
  __ssrInlineRender: true,
  props: {
    label: {},
    items: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative group" }, _attrs))}><button class="font-semibold text-gray-700 hover:text-primary-500 focus:outline-none cursor-pointer flex items-center gap-1">${ssrInterpolate(_ctx.label)} `);
      _push(ssrRenderComponent(unref(ChevronDown), { class: "w-4 h-4 text-gray-500 group-hover:text-primary-500 transition-colors" }, null, _parent));
      _push(`</button><div class="absolute left-0 mt-2 w-56 bg-white border border-gray-200 rounded shadow-lg opacity-0 group-hover:opacity-100 group-hover:pointer-events-auto pointer-events-none transition-opacity z-50"><ul class="py-2"><!--[-->`);
      ssrRenderList(_ctx.items, (item, idx) => {
        _push(`<li>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: item.to,
          class: "block px-4 py-2 hover:bg-gray-100"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(item.label)}`);
            } else {
              return [
                createTextVNode(toDisplayString(item.label), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</li>`);
      });
      _push(`<!--]--></ul></div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/main/dropdown.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const DropdownMenu = Object.assign(_sfc_main$1, { __name: "MainDropdown" });
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "header",
  __ssrInlineRender: true,
  setup(__props) {
    const config = useRuntimeConfig();
    useAuthStore();
    useLogout();
    computed(() => {
      const [first, ...rest] = config.public.app.name.split(" ");
      return { val1: first, val2: rest.join(" ") };
    });
    const units = [
      { label: "Media Unit / Public Relations", to: "/units/media" },
      { label: "Registry", to: "/units/registry" },
      { label: "Finance & Accounts", to: "/units/finance" },
      { label: "Human Resources", to: "/units/hr" },
      { label: "ICT / Information Technology Unit", to: "/units/ict" },
      { label: "Students’ Affairs", to: "/units/students-affairs" },
      { label: "Library", to: "/units/library" },
      { label: "Internal Audit", to: "/units/audit" },
      { label: "Quality Assurance Unit", to: "/units/qa" }
    ];
    const academics = [
      { label: "Undergraduate Programmes", to: "/academics/undergraduate" },
      { label: "Postgraduate Programmes", to: "/academics/postgraduate" },
      { label: "Research Centres & Institutes", to: "/academics/research" },
      { label: "Academic Calendar", to: "/academics/calendar" },
      { label: "Admissions", to: "/admissions" },
      { label: "Scholarships", to: "/academics/scholarships" },
      { label: "Academic Policies", to: "/academics/policies" }
    ];
    const aboutFuet = [
      { label: "Vision & Mission", to: "/about/vision-mission" },
      { label: "History", to: "/about/history" },
      { label: "Leadership / Management", to: "/about/leadership" },
      { label: "Campus & Facilities", to: "/about/facilities" },
      { label: "Accreditation", to: "/about/accreditation" },
      { label: "Contacts", to: "/about/contact" },
      { label: "Location & Maps", to: "/about/location" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_AppLogo = __nuxt_component_2$1;
      const _component_NuxtButton = _sfc_main$a;
      _push(`<header${ssrRenderAttrs(mergeProps({ class: "sticky top-0 z-50 bg-white px-5 md:px-10 lg:px-20 py-4 border-b border-b-muted" }, _attrs))}><div class="flex items-center justify-between">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "flex items-center gap-2"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_AppLogo, { width: 45 }, null, _parent2, _scopeId));
            _push2(`<div${_scopeId}><p class="font-extrabold text-lg text-primary-500"${_scopeId}> Federal University of Engineering and Technology </p><p class="text-muted text-sm hidden md:block"${_scopeId}> Koroma/Saakpenwa, Ogoni </p></div>`);
          } else {
            return [
              createVNode(_component_AppLogo, { width: 45 }),
              createVNode("div", null, [
                createVNode("p", { class: "font-extrabold text-lg text-primary-500" }, " Federal University of Engineering and Technology "),
                createVNode("p", { class: "text-muted text-sm hidden md:block" }, " Koroma/Saakpenwa, Ogoni ")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="flex items-center gap-6">`);
      _push(ssrRenderComponent(DropdownMenu, {
        label: "Units",
        items: units
      }, null, _parent));
      _push(ssrRenderComponent(DropdownMenu, {
        label: "Academic",
        items: academics
      }, null, _parent));
      _push(ssrRenderComponent(DropdownMenu, {
        label: "About FUET",
        items: aboutFuet
      }, null, _parent));
      _push(`<div><div class="flex items-center gap-2">`);
      _push(ssrRenderComponent(_component_NuxtButton, {
        to: "/application",
        label: "Apply Now"
      }, null, _parent));
      _push(`</div></div></div></div></header>`);
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
//# sourceMappingURL=header-BCo5UpP3.mjs.map
