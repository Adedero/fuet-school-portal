import { _ as __nuxt_component_6 } from './fetch-error-alert-NcfoVdkM.mjs';
import { _ as _sfc_main$1, a as _sfc_main$2 } from './FormField-D2Q403g3.mjs';
import { _ as _sfc_main$3 } from './Input-BL7KxnW2.mjs';
import { b as _sfc_main$a, f as _sfc_main$4, i as authClient } from './server.mjs';
import { defineComponent, reactive, ref, unref, withCtx, createVNode, createTextVNode, isRef, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { ab as normalizeException } from '../_/nitro.mjs';
import { u as useAuthStore } from './auth.store-BfqdJVn0.mjs';
import z from 'zod';
import './Alert-ZHZvgBf8.mjs';
import 'reka-ui';
import '@vueuse/core';
import 'vue-router';
import 'better-auth/vue';
import 'better-auth/client/plugins';
import 'tailwindcss/colors';
import '@iconify/vue';
import 'tailwind-variants';
import '@iconify/utils/lib/css/icon';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "change-email-form",
  __ssrInlineRender: true,
  setup(__props) {
    const authStore = useAuthStore();
    const schema = z.object({
      newEmail: z.email("Invalid email address")
    });
    const state = reactive({
      newEmail: ""
    });
    function reset() {
      state.newEmail = "";
    }
    const error = ref(null);
    const open = ref(false);
    async function onSubmit(event) {
      error.value = null;
      const { newEmail } = event.data;
      await authClient.changeEmail(
        {
          newEmail,
          callbackURL: "/login"
        },
        {
          onError(ctx) {
            error.value = normalizeException(ctx.error);
          },
          onSuccess() {
            reset();
            open.value = true;
            authStore.setUser(null);
            authStore.setSession(null);
          }
        }
      );
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_FetchErrorAlert = __nuxt_component_6;
      const _component_NuxtForm = _sfc_main$1;
      const _component_NuxtFormField = _sfc_main$2;
      const _component_NuxtInput = _sfc_main$3;
      const _component_NuxtButton = _sfc_main$a;
      const _component_NuxtModal = _sfc_main$4;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      if (unref(error)) {
        _push(`<div class="mb-3">`);
        _push(ssrRenderComponent(_component_FetchErrorAlert, {
          message: unref(error).message
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_component_NuxtForm, {
        schema: unref(schema),
        state: unref(state),
        class: "space-y-4",
        onSubmit
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_NuxtFormField, {
              label: "New Email",
              name: "newEmail"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_NuxtInput, {
                    modelValue: unref(state).newEmail,
                    "onUpdate:modelValue": ($event) => unref(state).newEmail = $event,
                    size: "lg",
                    class: "w-full"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_NuxtInput, {
                      modelValue: unref(state).newEmail,
                      "onUpdate:modelValue": ($event) => unref(state).newEmail = $event,
                      size: "lg",
                      class: "w-full"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_NuxtButton, {
              type: "submit",
              class: "mt-2 w-full flex-center",
              size: "lg",
              icon: "i-lucide:check-circle",
              "loading-auto": ""
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Submit `);
                } else {
                  return [
                    createTextVNode(" Submit ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_NuxtFormField, {
                label: "New Email",
                name: "newEmail"
              }, {
                default: withCtx(() => [
                  createVNode(_component_NuxtInput, {
                    modelValue: unref(state).newEmail,
                    "onUpdate:modelValue": ($event) => unref(state).newEmail = $event,
                    size: "lg",
                    class: "w-full"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                _: 1
              }),
              createVNode(_component_NuxtButton, {
                type: "submit",
                class: "mt-2 w-full flex-center",
                size: "lg",
                icon: "i-lucide:check-circle",
                "loading-auto": ""
              }, {
                default: withCtx(() => [
                  createTextVNode(" Submit ")
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtModal, {
        open: unref(open),
        "onUpdate:open": ($event) => isRef(open) ? open.value = $event : null,
        title: "Success",
        close: false,
        dismissible: false,
        ui: { footer: "justify-end" }
      }, {
        body: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="space-y-3"${_scopeId}><p${_scopeId}> Click the link that has been sent to your current email to continue </p></div>`);
          } else {
            return [
              createVNode("div", { class: "space-y-3" }, [
                createVNode("p", null, " Click the link that has been sent to your current email to continue ")
              ])
            ];
          }
        }),
        footer: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_NuxtButton, {
              to: "/login",
              label: "Continue",
              "trailing-icon": "lucide:circle-arrow-right"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_NuxtButton, {
                to: "/login",
                label: "Continue",
                "trailing-icon": "lucide:circle-arrow-right"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/(auth)/change-email/change-email-form.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=change-email-form-D2KG81zx.mjs.map
