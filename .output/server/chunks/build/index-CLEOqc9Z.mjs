import { _ as __nuxt_component_0 } from './fetch-error-alert-B8bl2QEk.mjs';
import { b as _sfc_main$a, d as _sfc_main$g, f as _sfc_main$4 } from './server.mjs';
import { _ as _sfc_main$1 } from './Card-HL6icAYQ.mjs';
import { _ as __nuxt_component_5 } from './initiation-form-eFfzDwR2.mjs';
import { S as normalizeException } from '../nitro/nitro.mjs';
import { defineComponent, withAsyncContext, mergeProps, unref, withCtx, createVNode, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { useDateFormat } from '@vueuse/core';
import { u as useFetch } from './fetch-CBnx1667.mjs';
import './Alert-Cl3Q0djP.mjs';
import 'reka-ui';
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
import './Input-CCJ7d-_Y.mjs';
import './Select-C7uJeeGx.mjs';
import './password-BNdafKmy.mjs';
import './calendar-XO0HMjV5.mjs';
import '../_/application-initiation.schema.mjs';
import 'zod';
import '../_/password.schema.mjs';
import '@vue/shared';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { data, error, refresh } = ([__temp, __restore] = withAsyncContext(() => useFetch("/api/general/settings", {
      pick: ["applicationsOpen", "applicationsOpenAt", "applicationsClosedAt"]
    }, "$Wk4shU4JR2")), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_FetchErrorAlert = __nuxt_component_0;
      const _component_NuxtButton = _sfc_main$a;
      const _component_NuxtCard = _sfc_main$1;
      const _component_NuxtIcon = _sfc_main$g;
      const _component_NuxtModal = _sfc_main$4;
      const _component_ApplicationInitiationForm = __nuxt_component_5;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "py-10 px-5" }, _attrs))}>`);
      if (unref(error)) {
        _push(`<div class="min-h-dvh md:min-h-[60dvh] flex-col-center"><div class="max-w-96">`);
        _push(ssrRenderComponent(_component_FetchErrorAlert, {
          message: ("normalizeException" in _ctx ? _ctx.normalizeException : unref(normalizeException))(unref(error)).message,
          "show-retry": "",
          onRetry: unref(refresh)
        }, null, _parent));
        _push(`</div></div>`);
      } else if (unref(data)) {
        _push(`<div>`);
        if (!unref(data).applicationsOpen) {
          _push(`<div class="min-h-dvh md:min-h-[60dvh] flex-col-center gap-5"><h1 class="text-center text-2xl md:text-3xl lg:text-4xl font-semibold text-red-500"> Application Closed! </h1><p class="text-muted max-w-96 text-center"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis autem itaque pariatur quaerat unde? Unde odio aperiam neque cupiditate. Enim excepturi fuga magni assumenda qui amet iusto libero nesciunt non. </p><div class="flex-col-center gap-1 text-center"><p class="font-bold">Application dates</p><p><span>${ssrInterpolate(unref(useDateFormat)(
            new Date(unref(data).applicationsOpenAt ?? Date.now()),
            "MMM DD, YYYY"
          ))}</span> - <span>${ssrInterpolate(unref(useDateFormat)(
            new Date(unref(data).applicationsClosedAt ?? Date.now()),
            "MMM DD, YYYY"
          ))}</span></p></div><div class="flex items-center gap-2.5">`);
          _push(ssrRenderComponent(_component_NuxtButton, {
            label: "Go Back",
            icon: "lucide:arrow-left",
            color: "neutral",
            variant: "soft",
            onClick: ($event) => _ctx.$router.back()
          }, null, _parent));
          _push(ssrRenderComponent(_component_NuxtButton, {
            to: "/login",
            label: "Existing Applications",
            "trailing-icon": "lucide:arrow-right"
          }, null, _parent));
          _push(`</div></div>`);
        } else {
          _push(`<div class="min-h-dvh md:min-h-[70dvh] flex gap-5 flex-col md:flex-row md:items-center md:justify-center flex-wrap"><div class="w-full flex-col-center gap-1 text-center"><h1 class="text-center text-2xl md:text-3xl lg:text-4xl font-semibold"><span class="text-primary-500">Applications</span> Are Welcome! </h1><p class="text-muted max-w-96 text-center"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p><p class="mt-2 font-bold">Application dates</p><p><span>${ssrInterpolate(unref(useDateFormat)(
            new Date(unref(data).applicationsOpenAt ?? Date.now()),
            "MMM DD, YYYY"
          ))}</span> - <span>${ssrInterpolate(unref(useDateFormat)(
            new Date(unref(data).applicationsClosedAt ?? Date.now()),
            "MMM DD, YYYY"
          ))}</span></p></div><div class="w-full md:w-96">`);
          _push(ssrRenderComponent(_component_NuxtCard, null, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<div class="flex-col-center gap-2 text-center"${_scopeId}><div class="bg-muted border border-default p-5 rounded-full flex-center"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_NuxtIcon, {
                  name: "lucide:user-plus",
                  size: "3.5rem"
                }, null, _parent2, _scopeId));
                _push2(`</div><p class="text-2xl font-semibold"${_scopeId}><span class="text-primary"${_scopeId}>New</span> Application </p><p class="text-sm text-muted"${_scopeId}> Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>`);
                _push2(ssrRenderComponent(_component_NuxtModal, {
                  title: "New Application",
                  description: "Fill out the details in the form below.",
                  dismissible: false
                }, {
                  body: withCtx(({ close }, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(ssrRenderComponent(_component_ApplicationInitiationForm, {
                        redirect: "/login",
                        onCancel: () => close()
                      }, null, _parent3, _scopeId2));
                    } else {
                      return [
                        createVNode(_component_ApplicationInitiationForm, {
                          redirect: "/login",
                          onCancel: () => close()
                        }, null, 8, ["onCancel"])
                      ];
                    }
                  }),
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(ssrRenderComponent(_component_NuxtButton, {
                        label: "Start Now",
                        block: "",
                        variant: "soft",
                        class: "mt-2"
                      }, null, _parent3, _scopeId2));
                    } else {
                      return [
                        createVNode(_component_NuxtButton, {
                          label: "Start Now",
                          block: "",
                          variant: "soft",
                          class: "mt-2"
                        })
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
                _push2(`</div>`);
              } else {
                return [
                  createVNode("div", { class: "flex-col-center gap-2 text-center" }, [
                    createVNode("div", { class: "bg-muted border border-default p-5 rounded-full flex-center" }, [
                      createVNode(_component_NuxtIcon, {
                        name: "lucide:user-plus",
                        size: "3.5rem"
                      })
                    ]),
                    createVNode("p", { class: "text-2xl font-semibold" }, [
                      createVNode("span", { class: "text-primary" }, "New"),
                      createTextVNode(" Application ")
                    ]),
                    createVNode("p", { class: "text-sm text-muted" }, " Lorem ipsum, dolor sit amet consectetur adipisicing elit. "),
                    createVNode(_component_NuxtModal, {
                      title: "New Application",
                      description: "Fill out the details in the form below.",
                      dismissible: false
                    }, {
                      body: withCtx(({ close }) => [
                        createVNode(_component_ApplicationInitiationForm, {
                          redirect: "/login",
                          onCancel: () => close()
                        }, null, 8, ["onCancel"])
                      ]),
                      default: withCtx(() => [
                        createVNode(_component_NuxtButton, {
                          label: "Start Now",
                          block: "",
                          variant: "soft",
                          class: "mt-2"
                        })
                      ]),
                      _: 1
                    })
                  ])
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(`</div><div class="w-full md:w-96">`);
          _push(ssrRenderComponent(_component_NuxtCard, null, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<div class="flex-col-center gap-2 text-center"${_scopeId}><div class="bg-muted border border-default p-5 rounded-full flex-center"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_NuxtIcon, {
                  name: "lucide:bookmark-check",
                  size: "3.5rem"
                }, null, _parent2, _scopeId));
                _push2(`</div><p class="text-2xl font-semibold"${_scopeId}><span class="text-primary"${_scopeId}>Existing</span> Application </p><p class="text-sm text-muted"${_scopeId}> Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>`);
                _push2(ssrRenderComponent(_component_NuxtButton, {
                  to: "/login",
                  label: "Continue",
                  block: "",
                  variant: "soft",
                  class: "mt-2"
                }, null, _parent2, _scopeId));
                _push2(`</div>`);
              } else {
                return [
                  createVNode("div", { class: "flex-col-center gap-2 text-center" }, [
                    createVNode("div", { class: "bg-muted border border-default p-5 rounded-full flex-center" }, [
                      createVNode(_component_NuxtIcon, {
                        name: "lucide:bookmark-check",
                        size: "3.5rem"
                      })
                    ]),
                    createVNode("p", { class: "text-2xl font-semibold" }, [
                      createVNode("span", { class: "text-primary" }, "Existing"),
                      createTextVNode(" Application ")
                    ]),
                    createVNode("p", { class: "text-sm text-muted" }, " Lorem ipsum, dolor sit amet consectetur adipisicing elit. "),
                    createVNode(_component_NuxtButton, {
                      to: "/login",
                      label: "Continue",
                      block: "",
                      variant: "soft",
                      class: "mt-2"
                    })
                  ])
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(`</div></div>`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/application/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-CLEOqc9Z.mjs.map
