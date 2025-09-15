import { o as useConfirm, m as useRuntimeConfig, a as __nuxt_component_0$1, b as _sfc_main$a, k as authClient, n as navigateTo } from './server.mjs';
import { u as useAuth, _ as __nuxt_component_2$1 } from './use-auth-DTv-XyLU.mjs';
import { defineComponent, computed, mergeProps, withCtx, unref, createVNode, toDisplayString, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { u as useAuthStore } from './auth.store-Dv4Z0WoY.mjs';
import { _ as _sfc_main$2 } from './Separator-BAycmyMV.mjs';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "header",
  __ssrInlineRender: true,
  setup(__props) {
    const config = useRuntimeConfig();
    const { isLoggedIn, user } = useAuth();
    const { confirmAsync } = useConfirm();
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
    const navigateToPortal = async () => {
      if (!isLoggedIn.value) {
        await navigateTo("/login");
        return;
      }
      if (!user.value || !user.value.role) {
        await navigateTo("/login");
        return;
      }
      if (user.value.role === "applicant") {
        await navigateTo("/application/portal");
        return;
      }
      if (user.value.role === "student") {
        await navigateTo("/portal/student");
        return;
      }
      if (user.value.role === "admin") {
        await navigateTo("/portal/admin");
        return;
      }
      if (user.value.role === "staff") {
        await navigateTo("/portal/staff");
        return;
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_AppLogo = __nuxt_component_2$1;
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
      _push(`<div>`);
      if (unref(isLoggedIn)) {
        _push(`<div class="flex items-center gap-2">`);
        _push(ssrRenderComponent(_component_NuxtButton, {
          label: "Logout",
          variant: "link",
          onClick: logout
        }, null, _parent));
        _push(ssrRenderComponent(_component_NuxtButton, {
          label: "Portal",
          onClick: navigateToPortal
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<div class="flex items-center gap-2">`);
        _push(ssrRenderComponent(_component_NuxtButton, {
          to: "/login",
          label: "Login",
          variant: "link"
        }, null, _parent));
        _push(ssrRenderComponent(_component_NuxtButton, {
          to: "/application",
          label: "Apply Now"
        }, null, _parent));
        _push(`</div>`);
      }
      _push(`</div></div></header>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/main/header.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = Object.assign(_sfc_main$1, { __name: "MainHeader" });
const _sfc_main = /* @__PURE__ */ defineComponent({
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
      const _component_NuxtSeparator = _sfc_main$2;
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
      _push(`<p class="text-sm text-muted"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus blanditiis nulla. </p><div class="flex items-center gap-2.5">`);
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
      _push(`<div class="text-xs text-muted flex flex-wrap gap-5 justify-between items-center"><p>© ${ssrInterpolate(unref(config).public.app.name)} 2025. All Rights Reserved.</p><p>Made by <b>Adedero</b></p></div></footer>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/main/footer.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_2 = Object.assign(_sfc_main, { __name: "MainFooter" });

export { __nuxt_component_0 as _, __nuxt_component_2 as a };
//# sourceMappingURL=footer-Cta-C-71.mjs.map
