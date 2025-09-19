import { _ as _sfc_main$5 } from './Badge-6Qx_KqaP.mjs';
import { h as useToast, V as useConfirm, b as _sfc_main$a, n as navigateTo, f as _sfc_main$4$1 } from './server.mjs';
import { _ as _sfc_main$6 } from './Popover-QMcvsMmJ.mjs';
import { defineComponent, ref, withAsyncContext, useTemplateRef, mergeProps, unref, withCtx, createVNode, createBlock, createCommentVNode, openBlock, isRef, mergeModels, useModel, watch, withModifiers, computed, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderSlot } from 'vue/server-renderer';
import { a8 as normalizeException } from '../_/nitro.mjs';
import { _ as _sfc_main$7 } from './Separator-Cxtlj3w1.mjs';
import { _ as __nuxt_component_6 } from './fetch-error-alert-NcfoVdkM.mjs';
import { _ as _sfc_main$8 } from './Alert-ZHZvgBf8.mjs';
import { _ as _sfc_main$1$1, a as _sfc_main$9 } from './FormField-D2Q403g3.mjs';
import { _ as _sfc_main$b } from './Input-BL7KxnW2.mjs';
import { _ as _sfc_main$c } from './SelectMenu-CqB699TC.mjs';
import { u as useFetch } from './fetch-DHT9Ke2D.mjs';
import { _ as __nuxt_component_6$1 } from './faculty-select-D6bTkiA0.mjs';
import { s as studentCreationSchema } from '../_/student.schema.mjs';
import { _ as __nuxt_component_9 } from './index-YGh35Jf-.mjs';
import { u as useRouteParams } from './use-route-params-BVGD6Lax.mjs';
import 'reka-ui';
import 'vue-router';
import 'better-auth/vue';
import 'better-auth/client/plugins';
import 'tailwindcss/colors';
import '@iconify/vue';
import '@vueuse/core';
import 'tailwind-variants';
import '@iconify/utils/lib/css/icon';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';
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
import 'reka-ui/namespaced';
import '@vue/shared';
import 'zod';
import './logo-BvkqO1ow.mjs';
import './Card-CBdj68Ul.mjs';

const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "accepter",
  __ssrInlineRender: true,
  props: {
    applicationId: {}
  },
  emits: ["done"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const toast = useToast();
    const open = ref(false);
    async function acceptApplication() {
      try {
        const { message } = await $fetch(
          `/api/users/admin/applications/${__props.applicationId}/update-status`,
          {
            method: "post",
            body: {
              status: "accepted"
            }
          }
        );
        emit("done");
        open.value = false;
        toast.add({
          color: "success",
          title: "Success",
          description: message
        });
      } catch (error) {
        toast.add({
          color: "error",
          title: "Error",
          description: normalizeException(error).message
        });
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtModal = _sfc_main$4$1;
      const _component_NuxtButton = _sfc_main$a;
      _push(`<div${ssrRenderAttrs(_attrs)}><div>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
      _push(ssrRenderComponent(_component_NuxtModal, {
        open: unref(open),
        "onUpdate:open": ($event) => isRef(open) ? open.value = $event : null,
        title: "Accept Application",
        description: "Are you sure you want to accept this application?",
        dismissible: false,
        close: false
      }, {
        body: withCtx(({ close }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div${_scopeId}><div class="flex items-center justify-end gap-2.5"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_NuxtButton, {
              label: "Cancel",
              color: "neutral",
              variant: "soft",
              onClick: close
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_NuxtButton, {
              label: "Proceed",
              "loading-auto": "",
              onClick: acceptApplication
            }, null, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", null, [
                createVNode("div", { class: "flex items-center justify-end gap-2.5" }, [
                  createVNode(_component_NuxtButton, {
                    label: "Cancel",
                    color: "neutral",
                    variant: "soft",
                    onClick: close
                  }, null, 8, ["onClick"]),
                  createVNode(_component_NuxtButton, {
                    label: "Proceed",
                    "loading-auto": "",
                    onClick: acceptApplication
                  })
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/application/accepter.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_3 = Object.assign(_sfc_main$4, { __name: "ApplicationAccepter" });
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "rejecter",
  __ssrInlineRender: true,
  props: {
    applicationId: {}
  },
  emits: ["done"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const toast = useToast();
    const open = ref(false);
    async function acceptApplication() {
      try {
        const { message } = await $fetch(
          `/api/users/admin/applications/${__props.applicationId}/update-status`,
          {
            method: "post",
            body: {
              status: "rejected"
            }
          }
        );
        emit("done");
        open.value = false;
        toast.add({
          color: "success",
          title: "Success",
          description: message
        });
      } catch (error) {
        toast.add({
          color: "error",
          title: "Error",
          description: normalizeException(error).message
        });
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtModal = _sfc_main$4$1;
      const _component_NuxtButton = _sfc_main$a;
      _push(`<div${ssrRenderAttrs(_attrs)}><div>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
      _push(ssrRenderComponent(_component_NuxtModal, {
        open: unref(open),
        "onUpdate:open": ($event) => isRef(open) ? open.value = $event : null,
        title: "Accept Application",
        description: "Are you sure you want to reject this application?",
        dismissible: false,
        close: false
      }, {
        body: withCtx(({ close }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div${_scopeId}><div class="flex items-center justify-end gap-2.5"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_NuxtButton, {
              label: "Cancel",
              color: "neutral",
              variant: "soft",
              onClick: close
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_NuxtButton, {
              label: "Proceed",
              "loading-auto": "",
              onClick: acceptApplication
            }, null, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", null, [
                createVNode("div", { class: "flex items-center justify-end gap-2.5" }, [
                  createVNode(_component_NuxtButton, {
                    label: "Cancel",
                    color: "neutral",
                    variant: "soft",
                    onClick: close
                  }, null, 8, ["onClick"]),
                  createVNode(_component_NuxtButton, {
                    label: "Proceed",
                    "loading-auto": "",
                    onClick: acceptApplication
                  })
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/application/rejecter.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_4 = Object.assign(_sfc_main$3, { __name: "ApplicationRejecter" });
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "student-class-select",
  __ssrInlineRender: true,
  props: {
    "modelValue": { default: void 0 },
    "modelModifiers": {}
  },
  emits: ["update:modelValue"],
  setup(__props) {
    const { data, error, status, execute } = useFetch(
      "/api/general/student-classes",
      {
        lazy: true
      },
      "$Up6cE9ckJh"
    );
    const loading = computed(() => status.value === "pending");
    const classes = computed(() => (data.value ?? []).map((c) => c.className));
    const value = useModel(__props, "modelValue");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtSelectMenu = _sfc_main$c;
      const _component_FetchErrorAlert = __nuxt_component_6;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      if (unref(loading) || unref(data)) {
        _push(ssrRenderComponent(_component_NuxtSelectMenu, mergeProps({
          modelValue: value.value,
          "onUpdate:modelValue": ($event) => value.value = $event,
          items: unref(classes),
          loading: unref(loading)
        }, _ctx.$attrs), null, _parent));
      } else if (unref(error)) {
        _push(ssrRenderComponent(_component_FetchErrorAlert, {
          message: "Failed to get student classes",
          "show-retry": "",
          onRetry: unref(execute)
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/app/student-class-select.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_5 = Object.assign(_sfc_main$2, { __name: "AppStudentClassSelect" });
function generateRegNumber(applicationNumber, dept) {
  const parts = applicationNumber.split("/");
  if (parts.length !== 3) {
    return "";
  }
  const year = parts[1];
  const number = parts[2];
  const regNumber = `FUET/${dept}/${year}/${number}`;
  return regNumber;
}
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "creator",
  __ssrInlineRender: true,
  props: /* @__PURE__ */ mergeModels({
    application: {}
  }, {
    "open": { type: Boolean },
    "openModifiers": {}
  }),
  emits: ["update:open"],
  setup(__props) {
    const toast = useToast();
    const open = useModel(__props, "open");
    const state = ref({
      applicationId: __props.application.id
    });
    const department = ref(
      __props.application.course ? { label: __props.application.course, value: "", faculty: "" } : void 0
    );
    watch(department, (val) => state.value.department = val?.label);
    const generate = () => {
      if (!department.value?.value) {
        toast.add({
          color: "error",
          title: "Error",
          description: "Please select a department first"
        });
        return;
      }
      const number = generateRegNumber(
        __props.application.applicationNumber,
        department.value.value
      );
      state.value.regNumber = number;
    };
    const handleSubmit = async (event) => {
      try {
        const { message } = await $fetch(
          `/api/users/admin/applications/${__props.application.id}/create-student`,
          { method: "POST", body: event.data }
        );
        open.value = false;
        state.value = {};
        toast.add({
          color: "success",
          title: "Success",
          description: message
        });
      } catch (err) {
        toast.add({
          color: "error",
          title: "Error",
          description: normalizeException(err).message
        });
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtModal = _sfc_main$4$1;
      const _component_NuxtForm = _sfc_main$1$1;
      const _component_NuxtFormField = _sfc_main$9;
      const _component_NuxtInput = _sfc_main$b;
      const _component_NuxtButton = _sfc_main$a;
      const _component_AppStudentClassSelect = __nuxt_component_5;
      const _component_AppFacultySelect = __nuxt_component_6$1;
      _push(ssrRenderComponent(_component_NuxtModal, mergeProps({
        open: open.value,
        "onUpdate:open": ($event) => open.value = $event,
        title: "Add Student",
        dismissible: false
      }, _attrs), {
        body: withCtx(({ close }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_NuxtForm, {
              state: unref(state),
              schema: unref(studentCreationSchema),
              class: "grid gap-5",
              onSubmit: handleSubmit
            }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_NuxtFormField, {
                    label: "Application ID",
                    required: ""
                  }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_NuxtInput, {
                          value: unref(state).applicationId,
                          disabled: "",
                          size: "lg",
                          class: "w-full"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_NuxtInput, {
                            value: unref(state).applicationId,
                            disabled: "",
                            size: "lg",
                            class: "w-full"
                          }, null, 8, ["value"])
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_NuxtFormField, {
                    name: "regNumber",
                    label: "Registration/Matric Number",
                    class: "relative",
                    required: ""
                  }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_NuxtInput, {
                          modelValue: unref(state).regNumber,
                          "onUpdate:modelValue": ($event) => unref(state).regNumber = $event,
                          size: "lg",
                          class: "w-full"
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_NuxtButton, {
                          label: "generate",
                          "trailing-icon": "lucide:wand-sparkles",
                          variant: "ghost",
                          size: "sm",
                          class: "absolute -top-7 right-0",
                          onClick: generate
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_NuxtInput, {
                            modelValue: unref(state).regNumber,
                            "onUpdate:modelValue": ($event) => unref(state).regNumber = $event,
                            size: "lg",
                            class: "w-full"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode(_component_NuxtButton, {
                            label: "generate",
                            "trailing-icon": "lucide:wand-sparkles",
                            variant: "ghost",
                            size: "sm",
                            class: "absolute -top-7 right-0",
                            onClick: generate
                          })
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_NuxtFormField, {
                    name: "studentClass",
                    label: "Student's Class",
                    required: ""
                  }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_AppStudentClassSelect, {
                          modelValue: unref(state).studentClass,
                          "onUpdate:modelValue": ($event) => unref(state).studentClass = $event,
                          size: "lg",
                          class: "w-full"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_AppStudentClassSelect, {
                            modelValue: unref(state).studentClass,
                            "onUpdate:modelValue": ($event) => unref(state).studentClass = $event,
                            size: "lg",
                            class: "w-full"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_NuxtFormField, {
                    name: "department",
                    label: "Department",
                    required: ""
                  }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_AppFacultySelect, {
                          department: unref(department),
                          "onUpdate:department": ($event) => isRef(department) ? department.value = $event : null,
                          item: "department",
                          size: "lg",
                          class: "w-full"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_AppFacultySelect, {
                            department: unref(department),
                            "onUpdate:department": ($event) => isRef(department) ? department.value = $event : null,
                            item: "department",
                            size: "lg",
                            class: "w-full"
                          }, null, 8, ["department", "onUpdate:department"])
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(`<div class="flex items-center gap-2 justify-end"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_NuxtButton, {
                    type: "button",
                    label: "Cancel",
                    color: "neutral",
                    variant: "soft",
                    onClick: close
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_NuxtButton, {
                    type: "submit",
                    label: "Submit",
                    "loading-auto": ""
                  }, null, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode(_component_NuxtFormField, {
                      label: "Application ID",
                      required: ""
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_NuxtInput, {
                          value: unref(state).applicationId,
                          disabled: "",
                          size: "lg",
                          class: "w-full"
                        }, null, 8, ["value"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_NuxtFormField, {
                      name: "regNumber",
                      label: "Registration/Matric Number",
                      class: "relative",
                      required: ""
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_NuxtInput, {
                          modelValue: unref(state).regNumber,
                          "onUpdate:modelValue": ($event) => unref(state).regNumber = $event,
                          size: "lg",
                          class: "w-full"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                        createVNode(_component_NuxtButton, {
                          label: "generate",
                          "trailing-icon": "lucide:wand-sparkles",
                          variant: "ghost",
                          size: "sm",
                          class: "absolute -top-7 right-0",
                          onClick: generate
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_NuxtFormField, {
                      name: "studentClass",
                      label: "Student's Class",
                      required: ""
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_AppStudentClassSelect, {
                          modelValue: unref(state).studentClass,
                          "onUpdate:modelValue": ($event) => unref(state).studentClass = $event,
                          size: "lg",
                          class: "w-full"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_NuxtFormField, {
                      name: "department",
                      label: "Department",
                      required: ""
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_AppFacultySelect, {
                          department: unref(department),
                          "onUpdate:department": ($event) => isRef(department) ? department.value = $event : null,
                          item: "department",
                          size: "lg",
                          class: "w-full"
                        }, null, 8, ["department", "onUpdate:department"])
                      ]),
                      _: 1
                    }),
                    createVNode("div", { class: "flex items-center gap-2 justify-end" }, [
                      createVNode(_component_NuxtButton, {
                        type: "button",
                        label: "Cancel",
                        color: "neutral",
                        variant: "soft",
                        onClick: close
                      }, null, 8, ["onClick"]),
                      createVNode(_component_NuxtButton, {
                        type: "submit",
                        label: "Submit",
                        "loading-auto": ""
                      })
                    ])
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", null, [
                createVNode(_component_NuxtForm, {
                  state: unref(state),
                  schema: unref(studentCreationSchema),
                  class: "grid gap-5",
                  onSubmit: withModifiers(handleSubmit, ["prevent"])
                }, {
                  default: withCtx(() => [
                    createVNode(_component_NuxtFormField, {
                      label: "Application ID",
                      required: ""
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_NuxtInput, {
                          value: unref(state).applicationId,
                          disabled: "",
                          size: "lg",
                          class: "w-full"
                        }, null, 8, ["value"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_NuxtFormField, {
                      name: "regNumber",
                      label: "Registration/Matric Number",
                      class: "relative",
                      required: ""
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_NuxtInput, {
                          modelValue: unref(state).regNumber,
                          "onUpdate:modelValue": ($event) => unref(state).regNumber = $event,
                          size: "lg",
                          class: "w-full"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                        createVNode(_component_NuxtButton, {
                          label: "generate",
                          "trailing-icon": "lucide:wand-sparkles",
                          variant: "ghost",
                          size: "sm",
                          class: "absolute -top-7 right-0",
                          onClick: generate
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_NuxtFormField, {
                      name: "studentClass",
                      label: "Student's Class",
                      required: ""
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_AppStudentClassSelect, {
                          modelValue: unref(state).studentClass,
                          "onUpdate:modelValue": ($event) => unref(state).studentClass = $event,
                          size: "lg",
                          class: "w-full"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_NuxtFormField, {
                      name: "department",
                      label: "Department",
                      required: ""
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_AppFacultySelect, {
                          department: unref(department),
                          "onUpdate:department": ($event) => isRef(department) ? department.value = $event : null,
                          item: "department",
                          size: "lg",
                          class: "w-full"
                        }, null, 8, ["department", "onUpdate:department"])
                      ]),
                      _: 1
                    }),
                    createVNode("div", { class: "flex items-center gap-2 justify-end" }, [
                      createVNode(_component_NuxtButton, {
                        type: "button",
                        label: "Cancel",
                        color: "neutral",
                        variant: "soft",
                        onClick: close
                      }, null, 8, ["onClick"]),
                      createVNode(_component_NuxtButton, {
                        type: "submit",
                        label: "Submit",
                        "loading-auto": ""
                      })
                    ])
                  ]),
                  _: 2
                }, 1032, ["state", "schema"])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/admin/students/creator.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_8 = Object.assign(_sfc_main$1, { __name: "AdminStudentsCreator" });
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const toast = useToast();
    const { confirmAsync } = useConfirm();
    const open = ref(false);
    const { applicationId = "" } = useRouteParams();
    const {
      data: application,
      error,
      refresh
    } = ([__temp, __restore] = withAsyncContext(() => useFetch(`/api/users/admin/applications/${applicationId}`, "$d99B_tMvGW")), __temp = await __temp, __restore(), __temp);
    const viewer = useTemplateRef("viewer");
    const colors = {
      pending: "secondary",
      submitted: "warning",
      accepted: "success",
      rejected: "error"
    };
    const handleDelete = async () => {
      const confirm = async () => {
        return await confirmAsync({
          title: "Delete Application",
          description: "Are you sure you want to delete this application? This action cannot be undone",
          acceptProps: {
            color: "error",
            label: "Delete"
          }
        });
      };
      if (!await confirm()) {
        return;
      }
      try {
        const { message } = await $fetch(
          `/api/users/admin/applications/${applicationId}`,
          {
            method: "DELETE"
          }
        );
        navigateTo("/portal/admin/applications");
        toast.add({
          color: "success",
          title: "Success",
          description: message
        });
      } catch (error2) {
        toast.add({
          color: "error",
          title: "Error",
          description: normalizeException(error2).message
        });
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtBadge = _sfc_main$5;
      const _component_NuxtButton = _sfc_main$a;
      const _component_NuxtPopover = _sfc_main$6;
      const _component_ApplicationAccepter = __nuxt_component_3;
      const _component_ApplicationRejecter = __nuxt_component_4;
      const _component_NuxtSeparator = _sfc_main$7;
      const _component_FetchErrorAlert = __nuxt_component_6;
      const _component_NuxtAlert = _sfc_main$8;
      const _component_AdminStudentsCreator = __nuxt_component_8;
      const _component_ApplicationViewer = __nuxt_component_9;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "p-5" }, _attrs))}><header><div class="flex items-center gap-5 justify-between"><div class="flex items-center gap-2"><h1 class="text-lg font-bold"> Application <b>${ssrInterpolate(unref(application)?.applicationNumber)}</b></h1>`);
      if (unref(application)) {
        _push(ssrRenderComponent(_component_NuxtBadge, {
          label: unref(application).status,
          color: colors[unref(application).status],
          variant: "subtle"
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="mb-5 flex items-center justify-end gap-2.5">`);
      _push(ssrRenderComponent(_component_NuxtButton, {
        label: "Print",
        icon: "lucide:printer",
        color: "neutral",
        variant: "outline",
        onClick: unref(viewer)?.print
      }, null, _parent));
      if (unref(application)) {
        _push(ssrRenderComponent(_component_NuxtPopover, null, {
          content: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="p-5"${_scopeId}><div class="w-40 grid gap-1"${_scopeId}>`);
              if (unref(application).status === "submitted" || unref(application).status === "rejected") {
                _push2(ssrRenderComponent(_component_ApplicationAccepter, {
                  "application-id": unref(applicationId),
                  onDone: () => unref(refresh)()
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(ssrRenderComponent(_component_NuxtButton, {
                        label: "Accept",
                        color: "neutral",
                        variant: "ghost",
                        "trailing-icon": "lucide:circle-check",
                        block: ""
                      }, null, _parent3, _scopeId2));
                    } else {
                      return [
                        createVNode(_component_NuxtButton, {
                          label: "Accept",
                          color: "neutral",
                          variant: "ghost",
                          "trailing-icon": "lucide:circle-check",
                          block: ""
                        })
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              if (unref(application).status === "submitted" || unref(application).status === "accepted") {
                _push2(ssrRenderComponent(_component_ApplicationRejecter, {
                  "application-id": unref(applicationId),
                  onDone: () => unref(refresh)()
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(ssrRenderComponent(_component_NuxtButton, {
                        label: "Reject",
                        color: "neutral",
                        variant: "ghost",
                        "trailing-icon": "lucide:circle-x",
                        block: ""
                      }, null, _parent3, _scopeId2));
                    } else {
                      return [
                        createVNode(_component_NuxtButton, {
                          label: "Reject",
                          color: "neutral",
                          variant: "ghost",
                          "trailing-icon": "lucide:circle-x",
                          block: ""
                        })
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              _push2(ssrRenderComponent(_component_NuxtSeparator, null, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_NuxtButton, {
                label: "Delete",
                color: "error",
                variant: "ghost",
                "trailing-icon": "lucide:trash-2",
                block: "",
                "loading-auto": "",
                onClick: handleDelete
              }, null, _parent2, _scopeId));
              _push2(`</div></div>`);
            } else {
              return [
                createVNode("div", { class: "p-5" }, [
                  createVNode("div", { class: "w-40 grid gap-1" }, [
                    unref(application).status === "submitted" || unref(application).status === "rejected" ? (openBlock(), createBlock(_component_ApplicationAccepter, {
                      key: 0,
                      "application-id": unref(applicationId),
                      onDone: () => unref(refresh)()
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_NuxtButton, {
                          label: "Accept",
                          color: "neutral",
                          variant: "ghost",
                          "trailing-icon": "lucide:circle-check",
                          block: ""
                        })
                      ]),
                      _: 1
                    }, 8, ["application-id", "onDone"])) : createCommentVNode("", true),
                    unref(application).status === "submitted" || unref(application).status === "accepted" ? (openBlock(), createBlock(_component_ApplicationRejecter, {
                      key: 1,
                      "application-id": unref(applicationId),
                      onDone: () => unref(refresh)()
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_NuxtButton, {
                          label: "Reject",
                          color: "neutral",
                          variant: "ghost",
                          "trailing-icon": "lucide:circle-x",
                          block: ""
                        })
                      ]),
                      _: 1
                    }, 8, ["application-id", "onDone"])) : createCommentVNode("", true),
                    createVNode(_component_NuxtSeparator),
                    createVNode(_component_NuxtButton, {
                      label: "Delete",
                      color: "error",
                      variant: "ghost",
                      "trailing-icon": "lucide:trash-2",
                      block: "",
                      "loading-auto": "",
                      onClick: handleDelete
                    })
                  ])
                ])
              ];
            }
          }),
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_NuxtButton, {
                icon: "lucide:ellipsis-vertical",
                color: "neutral",
                variant: "outline"
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_NuxtButton, {
                  icon: "lucide:ellipsis-vertical",
                  color: "neutral",
                  variant: "outline"
                })
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></header><section class="mt-5">`);
      if (unref(error)) {
        _push(`<div>`);
        _push(ssrRenderComponent(_component_FetchErrorAlert, {
          message: ("normalizeException" in _ctx ? _ctx.normalizeException : unref(normalizeException))(unref(error)).message,
          "show-retry": "",
          onRetry: unref(refresh)
        }, null, _parent));
        _push(`</div>`);
      } else if (unref(application)) {
        _push(`<div>`);
        if (unref(application).status === "accepted") {
          _push(`<div class="mb-5">`);
          if (unref(application).hasPaidAdmissionFee && unref(application).admissionFeePaymentId) {
            _push(`<div>`);
            if (!unref(application).student) {
              _push(ssrRenderComponent(_component_NuxtAlert, {
                title: "Admission fee",
                description: "Applicant has paid the admission fee",
                icon: "lucide:info",
                color: "success",
                variant: "subtle",
                orientation: "horizontal",
                actions: [
                  {
                    label: "Approve",
                    icon: "lucide:circle-check",
                    size: "sm",
                    onClick: () => {
                      open.value = true;
                    }
                  }
                ]
              }, null, _parent));
            } else {
              _push(ssrRenderComponent(_component_NuxtAlert, {
                title: "Admission fee",
                description: "Applicant has paid the admission fee and has been approved as a student",
                icon: "lucide:info",
                color: "success",
                variant: "subtle"
              }, null, _parent));
            }
            _push(`</div>`);
          } else {
            _push(ssrRenderComponent(_component_NuxtAlert, {
              title: "Admission Fee",
              description: "Applicant has not paid the admission fee",
              icon: "lucide:info",
              color: "warning",
              variant: "subtle"
            }, null, _parent));
          }
          _push(ssrRenderComponent(_component_AdminStudentsCreator, {
            open: unref(open),
            "onUpdate:open": ($event) => isRef(open) ? open.value = $event : null,
            application: unref(application)
          }, null, _parent));
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div>`);
        _push(ssrRenderComponent(_component_ApplicationViewer, {
          ref_key: "viewer",
          ref: viewer,
          "application-id": unref(application).id
        }, null, _parent));
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</section></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/portal/admin/applications/[applicationId]/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-6DqykCTE.mjs.map
