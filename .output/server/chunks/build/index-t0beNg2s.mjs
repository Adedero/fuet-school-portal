import { _ as __nuxt_component_6 } from './fetch-error-alert-NcfoVdkM.mjs';
import { _ as _sfc_main$1, a as _sfc_main$2 } from './FormField-D2Q403g3.mjs';
import { _ as _sfc_main$3 } from './Input-BL7KxnW2.mjs';
import { _ as _sfc_main$4 } from './Select-CyiMmXX1.mjs';
import { _ as _sfc_main$5 } from './SelectMenu-Da07R2ba.mjs';
import { h as useToast, b as _sfc_main$a, n as navigateTo } from './server.mjs';
import { a8 as normalizeException } from '../nitro/nitro.mjs';
import { defineComponent, withAsyncContext, computed, reactive, mergeProps, unref, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import handlePreviousClick from './handle-previous-click-DL4mIMND.mjs';
import { f as familySchema } from '../_/application.schema.mjs';
import { save } from './handle-save-click-d4tY2V9Z.mjs';
import { u as useRouteParams } from './use-route-params-BVGD6Lax.mjs';
import { u as useFetch } from './fetch-C9FsSXkc.mjs';
import { V as VueMultiSelectButton } from './multi-select-button-BtiZqFu4.mjs';
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
import 'perfect-debounce';
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
import 'zod';
import '@vue/shared';
import './ButtonGroup-C97pRlqf.mjs';
import './DropdownMenu-ByJ7aAi2.mjs';
import 'reka-ui/namespaced';
import './Kbd-Bv1QKL9A.mjs';

const kinRelationships = [
  "father",
  "mother",
  "brother",
  "sister",
  "son",
  "daughter",
  "foster-parent",
  "step-son",
  "step-daughter",
  "uncle",
  "aunt",
  "cousin",
  "nephew",
  "neice",
  "friend",
  "guardian",
  "ward",
  "grandfather",
  "grandmother",
  "great grandfather",
  "great grandmother",
  "acquaintance",
  "other"
];
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { applicationId = "" } = useRouteParams();
    const toast = useToast();
    const {
      data: app,
      error,
      refresh
    } = ([__temp, __restore] = withAsyncContext(() => useFetch(`/api/users/applicant/applications/${applicationId}`, "$hM69xW_RkK")), __temp = await __temp, __restore(), __temp);
    const initial = computed(() => {
      return {
        firstParentName: app.value?.firstParentName ?? "",
        firstParentAddress: app.value?.firstParentAddress ?? "",
        firstParentStatus: app.value?.firstParentStatus ?? "living",
        secondParentName: app.value?.secondParentName ?? "",
        secondParentAddress: app.value?.secondParentAddress ?? "",
        secondParentStatus: app.value?.secondParentStatus ?? "living",
        nextOfKinName: app.value?.nextOfKinName ?? "",
        nextOfKinAddress: app.value?.nextOfKinAddress ?? "",
        nextOfKinPhoneNumber: app.value?.nextOfKinPhoneNumber ?? "",
        nextOfKinRelationship: app.value?.nextOfKinRelationship ?? ""
      };
    });
    const state = reactive({ ...initial.value });
    const hasUnsavedChanges = computed(() => {
      return JSON.stringify(state) !== JSON.stringify(initial.value);
    });
    const saveProgress = async (successFn) => {
      await save({
        applicationId,
        state,
        schema: familySchema,
        toast,
        onSuccess: () => {
          successFn();
        }
      });
    };
    const items = [
      {
        label: "Save and Continue",
        onSelect: async () => {
          await saveProgress(() => {
            navigateTo(`/application/portal/${applicationId}/academic-info`);
          });
        }
      },
      {
        label: "Save Only",
        onSelect: async () => {
          await saveProgress(() => {
            refresh();
          });
        }
      },
      {
        label: "Save and Exit",
        onSelect: async () => {
          await saveProgress(() => {
            navigateTo(`/application/portal`);
          });
        }
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_FetchErrorAlert = __nuxt_component_6;
      const _component_NuxtForm = _sfc_main$1;
      const _component_NuxtFormField = _sfc_main$2;
      const _component_NuxtInput = _sfc_main$3;
      const _component_NuxtSelect = _sfc_main$4;
      const _component_NuxtSelectMenu = _sfc_main$5;
      const _component_NuxtButton = _sfc_main$a;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full" }, _attrs))}><div class="lg:max-w-[70%] mx-auto"><header><h1 class="text-xl font-bold">Family Information</h1><p class="text-sm muted"> Please provide accurate information about your parents and next of kin. This information is essential for your application process. </p></header><section class="my-5">`);
      if (unref(error)) {
        _push(`<div>`);
        _push(ssrRenderComponent(_component_FetchErrorAlert, {
          message: ("normalizeException" in _ctx ? _ctx.normalizeException : unref(normalizeException))(unref(error)).message,
          "show-retry": "",
          onRetry: unref(refresh)
        }, null, _parent));
        _push(`</div>`);
      } else if (unref(app)) {
        _push(ssrRenderComponent(_component_NuxtForm, {
          state: unref(state),
          schema: unref(familySchema),
          disabled: unref(app).status !== "pending"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="grid md:grid-cols-2 gap-2.5"${_scopeId}><div class="md:col-span-2"${_scopeId}><p class="text-lg font-semibold"${_scopeId}>Parent 1</p></div>`);
              _push2(ssrRenderComponent(_component_NuxtFormField, {
                name: "firstParentName",
                label: "Full Name",
                required: ""
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_NuxtInput, {
                      modelValue: unref(state).firstParentName,
                      "onUpdate:modelValue": ($event) => unref(state).firstParentName = $event,
                      class: "w-full",
                      size: "lg"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_NuxtInput, {
                        modelValue: unref(state).firstParentName,
                        "onUpdate:modelValue": ($event) => unref(state).firstParentName = $event,
                        class: "w-full",
                        size: "lg"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_NuxtFormField, {
                name: "firstParentStatus",
                label: "Status",
                required: ""
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_NuxtSelect, {
                      modelValue: unref(state).firstParentStatus,
                      "onUpdate:modelValue": ($event) => unref(state).firstParentStatus = $event,
                      items: ["living", "deceased"],
                      class: "w-full",
                      size: "lg"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_NuxtSelect, {
                        modelValue: unref(state).firstParentStatus,
                        "onUpdate:modelValue": ($event) => unref(state).firstParentStatus = $event,
                        items: ["living", "deceased"],
                        class: "w-full",
                        size: "lg"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_NuxtFormField, {
                name: "firstParentAddress",
                label: "Address",
                required: "",
                class: "md:col-span-2"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_NuxtInput, {
                      modelValue: unref(state).firstParentAddress,
                      "onUpdate:modelValue": ($event) => unref(state).firstParentAddress = $event,
                      class: "w-full",
                      size: "lg"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_NuxtInput, {
                        modelValue: unref(state).firstParentAddress,
                        "onUpdate:modelValue": ($event) => unref(state).firstParentAddress = $event,
                        class: "w-full",
                        size: "lg"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`<div class="mt-5 md:col-span-2"${_scopeId}><p class="text-lg font-semibold"${_scopeId}>Parent 2</p></div>`);
              _push2(ssrRenderComponent(_component_NuxtFormField, {
                name: "secondParentName",
                label: "Full Name",
                required: ""
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_NuxtInput, {
                      modelValue: unref(state).secondParentName,
                      "onUpdate:modelValue": ($event) => unref(state).secondParentName = $event,
                      class: "w-full",
                      size: "lg"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_NuxtInput, {
                        modelValue: unref(state).secondParentName,
                        "onUpdate:modelValue": ($event) => unref(state).secondParentName = $event,
                        class: "w-full",
                        size: "lg"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_NuxtFormField, {
                name: "secondParentStatus",
                label: "Status",
                required: ""
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_NuxtSelect, {
                      modelValue: unref(state).secondParentStatus,
                      "onUpdate:modelValue": ($event) => unref(state).secondParentStatus = $event,
                      items: ["living", "deceased"],
                      class: "w-full",
                      size: "lg"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_NuxtSelect, {
                        modelValue: unref(state).secondParentStatus,
                        "onUpdate:modelValue": ($event) => unref(state).secondParentStatus = $event,
                        items: ["living", "deceased"],
                        class: "w-full",
                        size: "lg"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_NuxtFormField, {
                name: "secondParentAddress",
                label: "Address",
                required: "",
                class: "md:col-span-2"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_NuxtInput, {
                      modelValue: unref(state).secondParentAddress,
                      "onUpdate:modelValue": ($event) => unref(state).secondParentAddress = $event,
                      class: "w-full",
                      size: "lg"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_NuxtInput, {
                        modelValue: unref(state).secondParentAddress,
                        "onUpdate:modelValue": ($event) => unref(state).secondParentAddress = $event,
                        class: "w-full",
                        size: "lg"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`<div class="mt-5 md:col-span-2"${_scopeId}><p class="text-lg font-semibold"${_scopeId}>Next of Kin</p></div>`);
              _push2(ssrRenderComponent(_component_NuxtFormField, {
                name: "nextOfKinName",
                label: "Full Name",
                required: ""
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_NuxtInput, {
                      modelValue: unref(state).nextOfKinName,
                      "onUpdate:modelValue": ($event) => unref(state).nextOfKinName = $event,
                      class: "w-full",
                      size: "lg"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_NuxtInput, {
                        modelValue: unref(state).nextOfKinName,
                        "onUpdate:modelValue": ($event) => unref(state).nextOfKinName = $event,
                        class: "w-full",
                        size: "lg"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_NuxtFormField, {
                name: "nextOfKinRelationship",
                label: "Relationship",
                required: ""
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_NuxtSelectMenu, {
                      modelValue: unref(state).nextOfKinRelationship,
                      "onUpdate:modelValue": ($event) => unref(state).nextOfKinRelationship = $event,
                      items: unref(kinRelationships),
                      class: "w-full",
                      size: "lg"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_NuxtSelectMenu, {
                        modelValue: unref(state).nextOfKinRelationship,
                        "onUpdate:modelValue": ($event) => unref(state).nextOfKinRelationship = $event,
                        items: unref(kinRelationships),
                        class: "w-full",
                        size: "lg"
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_NuxtFormField, {
                name: "nextOfKinPhoneNumber",
                label: "Phone Number",
                required: ""
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_NuxtInput, {
                      modelValue: unref(state).nextOfKinPhoneNumber,
                      "onUpdate:modelValue": ($event) => unref(state).nextOfKinPhoneNumber = $event,
                      class: "w-full",
                      size: "lg"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_NuxtInput, {
                        modelValue: unref(state).nextOfKinPhoneNumber,
                        "onUpdate:modelValue": ($event) => unref(state).nextOfKinPhoneNumber = $event,
                        class: "w-full",
                        size: "lg"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_NuxtFormField, {
                name: "nextOfKinAddress",
                label: "Address",
                required: ""
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_NuxtInput, {
                      modelValue: unref(state).nextOfKinAddress,
                      "onUpdate:modelValue": ($event) => unref(state).nextOfKinAddress = $event,
                      class: "w-full",
                      size: "lg"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_NuxtInput, {
                        modelValue: unref(state).nextOfKinAddress,
                        "onUpdate:modelValue": ($event) => unref(state).nextOfKinAddress = $event,
                        class: "w-full",
                        size: "lg"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              return [
                createVNode("div", { class: "grid md:grid-cols-2 gap-2.5" }, [
                  createVNode("div", { class: "md:col-span-2" }, [
                    createVNode("p", { class: "text-lg font-semibold" }, "Parent 1")
                  ]),
                  createVNode(_component_NuxtFormField, {
                    name: "firstParentName",
                    label: "Full Name",
                    required: ""
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_NuxtInput, {
                        modelValue: unref(state).firstParentName,
                        "onUpdate:modelValue": ($event) => unref(state).firstParentName = $event,
                        class: "w-full",
                        size: "lg"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_NuxtFormField, {
                    name: "firstParentStatus",
                    label: "Status",
                    required: ""
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_NuxtSelect, {
                        modelValue: unref(state).firstParentStatus,
                        "onUpdate:modelValue": ($event) => unref(state).firstParentStatus = $event,
                        items: ["living", "deceased"],
                        class: "w-full",
                        size: "lg"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_NuxtFormField, {
                    name: "firstParentAddress",
                    label: "Address",
                    required: "",
                    class: "md:col-span-2"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_NuxtInput, {
                        modelValue: unref(state).firstParentAddress,
                        "onUpdate:modelValue": ($event) => unref(state).firstParentAddress = $event,
                        class: "w-full",
                        size: "lg"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode("div", { class: "mt-5 md:col-span-2" }, [
                    createVNode("p", { class: "text-lg font-semibold" }, "Parent 2")
                  ]),
                  createVNode(_component_NuxtFormField, {
                    name: "secondParentName",
                    label: "Full Name",
                    required: ""
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_NuxtInput, {
                        modelValue: unref(state).secondParentName,
                        "onUpdate:modelValue": ($event) => unref(state).secondParentName = $event,
                        class: "w-full",
                        size: "lg"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_NuxtFormField, {
                    name: "secondParentStatus",
                    label: "Status",
                    required: ""
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_NuxtSelect, {
                        modelValue: unref(state).secondParentStatus,
                        "onUpdate:modelValue": ($event) => unref(state).secondParentStatus = $event,
                        items: ["living", "deceased"],
                        class: "w-full",
                        size: "lg"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_NuxtFormField, {
                    name: "secondParentAddress",
                    label: "Address",
                    required: "",
                    class: "md:col-span-2"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_NuxtInput, {
                        modelValue: unref(state).secondParentAddress,
                        "onUpdate:modelValue": ($event) => unref(state).secondParentAddress = $event,
                        class: "w-full",
                        size: "lg"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode("div", { class: "mt-5 md:col-span-2" }, [
                    createVNode("p", { class: "text-lg font-semibold" }, "Next of Kin")
                  ]),
                  createVNode(_component_NuxtFormField, {
                    name: "nextOfKinName",
                    label: "Full Name",
                    required: ""
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_NuxtInput, {
                        modelValue: unref(state).nextOfKinName,
                        "onUpdate:modelValue": ($event) => unref(state).nextOfKinName = $event,
                        class: "w-full",
                        size: "lg"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_NuxtFormField, {
                    name: "nextOfKinRelationship",
                    label: "Relationship",
                    required: ""
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_NuxtSelectMenu, {
                        modelValue: unref(state).nextOfKinRelationship,
                        "onUpdate:modelValue": ($event) => unref(state).nextOfKinRelationship = $event,
                        items: unref(kinRelationships),
                        class: "w-full",
                        size: "lg"
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_NuxtFormField, {
                    name: "nextOfKinPhoneNumber",
                    label: "Phone Number",
                    required: ""
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_NuxtInput, {
                        modelValue: unref(state).nextOfKinPhoneNumber,
                        "onUpdate:modelValue": ($event) => unref(state).nextOfKinPhoneNumber = $event,
                        class: "w-full",
                        size: "lg"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_NuxtFormField, {
                    name: "nextOfKinAddress",
                    label: "Address",
                    required: ""
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_NuxtInput, {
                        modelValue: unref(state).nextOfKinAddress,
                        "onUpdate:modelValue": ($event) => unref(state).nextOfKinAddress = $event,
                        class: "w-full",
                        size: "lg"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  })
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</section>`);
      if (unref(app)) {
        _push(`<footer class="flex items-center gap-2.5 justify-between">`);
        _push(ssrRenderComponent(_component_NuxtButton, {
          label: "Previous",
          color: "neutral",
          variant: "soft",
          onClick: ($event) => unref(handlePreviousClick)(
            unref(hasUnsavedChanges),
            `/application/portal/${unref(applicationId)}/personal-info`
          )
        }, null, _parent));
        if (unref(app).status !== "pending") {
          _push(ssrRenderComponent(_component_NuxtButton, {
            to: `/application/portal/${unref(applicationId)}/academic-info`,
            label: "Next"
          }, null, _parent));
        } else {
          _push(ssrRenderComponent(unref(VueMultiSelectButton), { items }, null, _parent));
        }
        _push(`</footer>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/application/portal/[applicationId]/index/family-info/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-t0beNg2s.mjs.map
