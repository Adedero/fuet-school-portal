import { _ as _sfc_main$2, a as _sfc_main$1, b as _sfc_main$3 } from './Input-qaklspGC.mjs';
import { _ as _sfc_main$4 } from './Select-Bdo7U_Ov.mjs';
import { _ as __nuxt_component_3 } from './password-D7_aCKk5.mjs';
import { f as useToast, b as _sfc_main$a, n as navigateTo } from './server.mjs';
import { defineComponent, reactive, mergeProps, unref, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { C as Calendar } from './calendar-XO0HMjV5.mjs';
import { a as applicationInitiationSchema } from '../_/application-initiation.schema.mjs';
import { Y as MIN_AGE, X as normalizeException } from '../_/nitro.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "initiation-form",
  __ssrInlineRender: true,
  props: {
    redirect: { default: () => void 0 }
  },
  emits: ["done", "cancel"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const toast = useToast();
    const state = reactive({
      firstName: "",
      middleName: "",
      otherNames: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      birthDay: 1,
      birthMonth: "January",
      birthYear: (/* @__PURE__ */ new Date()).getFullYear() - MIN_AGE
    });
    const handleSubmit = async (event) => {
      try {
        await $fetch("/api/general/applications/initiate", {
          method: "POST",
          body: event.data
        });
        emit("done", event.data);
        if (__props.redirect) {
          await navigateTo(__props.redirect);
        }
      } catch (error) {
        toast.add({
          color: "error",
          title: "Error",
          description: normalizeException(error).message
        });
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtForm = _sfc_main$2;
      const _component_NuxtFormField = _sfc_main$1;
      const _component_NuxtInput = _sfc_main$3;
      const _component_NuxtSelect = _sfc_main$4;
      const _component_VuePassword = __nuxt_component_3;
      const _component_NuxtButton = _sfc_main$a;
      _push(ssrRenderComponent(_component_NuxtForm, mergeProps({
        state: unref(state),
        schema: unref(applicationInitiationSchema),
        onSubmit: handleSubmit
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="grid md:grid-cols-2 gap-2.5"${_scopeId}><div class="md:col-span-2"${_scopeId}><p class="text-lg font-semibold"${_scopeId}>Name</p></div>`);
            _push2(ssrRenderComponent(_component_NuxtFormField, {
              name: "firstName",
              label: "First Name",
              required: ""
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_NuxtInput, {
                    modelValue: unref(state).firstName,
                    "onUpdate:modelValue": ($event) => unref(state).firstName = $event,
                    size: "lg",
                    class: "w-full"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_NuxtInput, {
                      modelValue: unref(state).firstName,
                      "onUpdate:modelValue": ($event) => unref(state).firstName = $event,
                      size: "lg",
                      class: "w-full"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_NuxtFormField, {
              name: "middleName",
              label: "Middle Name"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_NuxtInput, {
                    modelValue: unref(state).middleName,
                    "onUpdate:modelValue": ($event) => unref(state).middleName = $event,
                    size: "lg",
                    class: "w-full"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_NuxtInput, {
                      modelValue: unref(state).middleName,
                      "onUpdate:modelValue": ($event) => unref(state).middleName = $event,
                      size: "lg",
                      class: "w-full"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_NuxtFormField, {
              name: "lastName",
              label: "Last Name",
              required: ""
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_NuxtInput, {
                    modelValue: unref(state).lastName,
                    "onUpdate:modelValue": ($event) => unref(state).lastName = $event,
                    size: "lg",
                    class: "w-full"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_NuxtInput, {
                      modelValue: unref(state).lastName,
                      "onUpdate:modelValue": ($event) => unref(state).lastName = $event,
                      size: "lg",
                      class: "w-full"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_NuxtFormField, {
              name: "otherNames",
              label: "Other Names"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_NuxtInput, {
                    modelValue: unref(state).otherNames,
                    "onUpdate:modelValue": ($event) => unref(state).otherNames = $event,
                    size: "lg",
                    class: "w-full"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_NuxtInput, {
                      modelValue: unref(state).otherNames,
                      "onUpdate:modelValue": ($event) => unref(state).otherNames = $event,
                      size: "lg",
                      class: "w-full"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="mt-5 md:col-span-2"${_scopeId}><p class="text-lg font-semibold"${_scopeId}>Birth Data</p></div><div class="md:col-span-2 grid sm:grid-cols-3 gap-2.5"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_NuxtFormField, {
              name: "birthDay",
              label: "Day of Birth",
              required: ""
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_NuxtSelect, {
                    modelValue: unref(state).birthDay,
                    "onUpdate:modelValue": ($event) => unref(state).birthDay = $event,
                    items: unref(Calendar).monthDays(),
                    size: "lg",
                    class: "w-full"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_NuxtSelect, {
                      modelValue: unref(state).birthDay,
                      "onUpdate:modelValue": ($event) => unref(state).birthDay = $event,
                      items: unref(Calendar).monthDays(),
                      size: "lg",
                      class: "w-full"
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_NuxtFormField, {
              name: "birthMonth",
              label: "Month of Birth",
              required: ""
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_NuxtSelect, {
                    modelValue: unref(state).birthMonth,
                    "onUpdate:modelValue": ($event) => unref(state).birthMonth = $event,
                    items: unref(Calendar).months().long,
                    size: "lg",
                    class: "w-full"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_NuxtSelect, {
                      modelValue: unref(state).birthMonth,
                      "onUpdate:modelValue": ($event) => unref(state).birthMonth = $event,
                      items: unref(Calendar).months().long,
                      size: "lg",
                      class: "w-full"
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_NuxtFormField, {
              name: "birthYear",
              label: "Day of Birth",
              required: ""
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_NuxtSelect, {
                    modelValue: unref(state).birthYear,
                    "onUpdate:modelValue": ($event) => unref(state).birthYear = $event,
                    items: unref(Calendar).allowedYears(),
                    size: "lg",
                    class: "w-full"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_NuxtSelect, {
                      modelValue: unref(state).birthYear,
                      "onUpdate:modelValue": ($event) => unref(state).birthYear = $event,
                      items: unref(Calendar).allowedYears(),
                      size: "lg",
                      class: "w-full"
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="mt-5 md:col-span-2"${_scopeId}><p class="text-lg font-semibold"${_scopeId}>Credentials</p></div>`);
            _push2(ssrRenderComponent(_component_NuxtFormField, {
              name: "email",
              label: "Email Address",
              required: "",
              class: "md:col-span-2"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_NuxtInput, {
                    modelValue: unref(state).email,
                    "onUpdate:modelValue": ($event) => unref(state).email = $event,
                    size: "lg",
                    class: "w-full"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_NuxtInput, {
                      modelValue: unref(state).email,
                      "onUpdate:modelValue": ($event) => unref(state).email = $event,
                      size: "lg",
                      class: "w-full"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_NuxtFormField, {
              name: "password",
              label: "Password",
              required: ""
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_VuePassword, {
                    modelValue: unref(state).password,
                    "onUpdate:modelValue": ($event) => unref(state).password = $event,
                    size: "lg",
                    class: "w-full"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_VuePassword, {
                      modelValue: unref(state).password,
                      "onUpdate:modelValue": ($event) => unref(state).password = $event,
                      size: "lg",
                      class: "w-full"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_NuxtFormField, {
              name: "confirmPassword",
              label: "Confirm Password",
              required: ""
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_VuePassword, {
                    modelValue: unref(state).confirmPassword,
                    "onUpdate:modelValue": ($event) => unref(state).confirmPassword = $event,
                    size: "lg",
                    class: "w-full"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_VuePassword, {
                      modelValue: unref(state).confirmPassword,
                      "onUpdate:modelValue": ($event) => unref(state).confirmPassword = $event,
                      size: "lg",
                      class: "w-full"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="flex justify-end gap-2.5 mt-2.5"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_NuxtButton, {
              type: "button",
              label: "Cancel",
              color: "neutral",
              variant: "soft",
              size: "lg",
              onClick: ($event) => emit("cancel")
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_NuxtButton, {
              type: "submit",
              label: "Submit",
              size: "lg",
              "loading-auto": ""
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "grid md:grid-cols-2 gap-2.5" }, [
                createVNode("div", { class: "md:col-span-2" }, [
                  createVNode("p", { class: "text-lg font-semibold" }, "Name")
                ]),
                createVNode(_component_NuxtFormField, {
                  name: "firstName",
                  label: "First Name",
                  required: ""
                }, {
                  default: withCtx(() => [
                    createVNode(_component_NuxtInput, {
                      modelValue: unref(state).firstName,
                      "onUpdate:modelValue": ($event) => unref(state).firstName = $event,
                      size: "lg",
                      class: "w-full"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  _: 1
                }),
                createVNode(_component_NuxtFormField, {
                  name: "middleName",
                  label: "Middle Name"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_NuxtInput, {
                      modelValue: unref(state).middleName,
                      "onUpdate:modelValue": ($event) => unref(state).middleName = $event,
                      size: "lg",
                      class: "w-full"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  _: 1
                }),
                createVNode(_component_NuxtFormField, {
                  name: "lastName",
                  label: "Last Name",
                  required: ""
                }, {
                  default: withCtx(() => [
                    createVNode(_component_NuxtInput, {
                      modelValue: unref(state).lastName,
                      "onUpdate:modelValue": ($event) => unref(state).lastName = $event,
                      size: "lg",
                      class: "w-full"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  _: 1
                }),
                createVNode(_component_NuxtFormField, {
                  name: "otherNames",
                  label: "Other Names"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_NuxtInput, {
                      modelValue: unref(state).otherNames,
                      "onUpdate:modelValue": ($event) => unref(state).otherNames = $event,
                      size: "lg",
                      class: "w-full"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  _: 1
                }),
                createVNode("div", { class: "mt-5 md:col-span-2" }, [
                  createVNode("p", { class: "text-lg font-semibold" }, "Birth Data")
                ]),
                createVNode("div", { class: "md:col-span-2 grid sm:grid-cols-3 gap-2.5" }, [
                  createVNode(_component_NuxtFormField, {
                    name: "birthDay",
                    label: "Day of Birth",
                    required: ""
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_NuxtSelect, {
                        modelValue: unref(state).birthDay,
                        "onUpdate:modelValue": ($event) => unref(state).birthDay = $event,
                        items: unref(Calendar).monthDays(),
                        size: "lg",
                        class: "w-full"
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_NuxtFormField, {
                    name: "birthMonth",
                    label: "Month of Birth",
                    required: ""
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_NuxtSelect, {
                        modelValue: unref(state).birthMonth,
                        "onUpdate:modelValue": ($event) => unref(state).birthMonth = $event,
                        items: unref(Calendar).months().long,
                        size: "lg",
                        class: "w-full"
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_NuxtFormField, {
                    name: "birthYear",
                    label: "Day of Birth",
                    required: ""
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_NuxtSelect, {
                        modelValue: unref(state).birthYear,
                        "onUpdate:modelValue": ($event) => unref(state).birthYear = $event,
                        items: unref(Calendar).allowedYears(),
                        size: "lg",
                        class: "w-full"
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                    ]),
                    _: 1
                  })
                ]),
                createVNode("div", { class: "mt-5 md:col-span-2" }, [
                  createVNode("p", { class: "text-lg font-semibold" }, "Credentials")
                ]),
                createVNode(_component_NuxtFormField, {
                  name: "email",
                  label: "Email Address",
                  required: "",
                  class: "md:col-span-2"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_NuxtInput, {
                      modelValue: unref(state).email,
                      "onUpdate:modelValue": ($event) => unref(state).email = $event,
                      size: "lg",
                      class: "w-full"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  _: 1
                }),
                createVNode(_component_NuxtFormField, {
                  name: "password",
                  label: "Password",
                  required: ""
                }, {
                  default: withCtx(() => [
                    createVNode(_component_VuePassword, {
                      modelValue: unref(state).password,
                      "onUpdate:modelValue": ($event) => unref(state).password = $event,
                      size: "lg",
                      class: "w-full"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  _: 1
                }),
                createVNode(_component_NuxtFormField, {
                  name: "confirmPassword",
                  label: "Confirm Password",
                  required: ""
                }, {
                  default: withCtx(() => [
                    createVNode(_component_VuePassword, {
                      modelValue: unref(state).confirmPassword,
                      "onUpdate:modelValue": ($event) => unref(state).confirmPassword = $event,
                      size: "lg",
                      class: "w-full"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  _: 1
                })
              ]),
              createVNode("div", { class: "flex justify-end gap-2.5 mt-2.5" }, [
                createVNode(_component_NuxtButton, {
                  type: "button",
                  label: "Cancel",
                  color: "neutral",
                  variant: "soft",
                  size: "lg",
                  onClick: ($event) => emit("cancel")
                }, null, 8, ["onClick"]),
                createVNode(_component_NuxtButton, {
                  type: "submit",
                  label: "Submit",
                  size: "lg",
                  "loading-auto": ""
                })
              ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/application/initiation-form.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_5 = Object.assign(_sfc_main, { __name: "ApplicationInitiationForm" });

export { __nuxt_component_5 as _ };
//# sourceMappingURL=initiation-form-Fm6AwWTT.mjs.map
