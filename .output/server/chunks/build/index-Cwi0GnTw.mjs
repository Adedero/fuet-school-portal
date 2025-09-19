import { _ as _sfc_main$4 } from './Badge-6Qx_KqaP.mjs';
import { _ as _sfc_main$5 } from './DropdownMenu-o0skE-nA.mjs';
import { b as _sfc_main$a, f as _sfc_main$4$1, h as useToast } from './server.mjs';
import { _ as _sfc_main$1$1, a as _sfc_main$8 } from './FormField-D2Q403g3.mjs';
import { _ as _sfc_main$9 } from './Input-BL7KxnW2.mjs';
import { _ as _sfc_main$b } from './InputNumber-CGEImjAE.mjs';
import { _ as _sfc_main$c } from './Checkbox-6ddTYado.mjs';
import { defineComponent, withAsyncContext, useTemplateRef, computed, h, ref, mergeProps, unref, isRef, withCtx, createVNode, reactive, withModifiers, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot } from 'vue/server-renderer';
import { e as extendedSessionSchema, s as sessionSchema } from '../_/session.schema.mjs';
import { ab as normalizeException } from '../_/nitro.mjs';
import { _ as __nuxt_component_6 } from './fetch-error-alert-NcfoVdkM.mjs';
import { _ as _sfc_main$6 } from './Table-DBMOQuxJ.mjs';
import { _ as _sfc_main$7 } from './Pagination-DDAB1vBf.mjs';
import { useDateFormat } from '@vueuse/core';
import { getPaginationRowModel } from '@tanstack/vue-table';
import { u as useFetch } from './fetch-DHT9Ke2D.mjs';
import 'reka-ui';
import 'reka-ui/namespaced';
import './Kbd-Bv1QKL9A.mjs';
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
import 'zod';
import './Alert-ZHZvgBf8.mjs';
import '@vue/shared';

const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "creator",
  __ssrInlineRender: true,
  emits: ["add"],
  setup(__props, { emit: __emit }) {
    const toast = useToast();
    const emit = __emit;
    const open = ref(false);
    const state = reactive({
      name: "",
      startYear: (/* @__PURE__ */ new Date()).getFullYear(),
      isCurrent: false
    });
    const reset = () => {
      state.name = "";
      state.startYear = (/* @__PURE__ */ new Date()).getFullYear();
      state.isCurrent = false;
    };
    async function handleSubmit(event) {
      const { data } = event;
      try {
        const { message, session } = await $fetch(`/api/users/admin/sessions`, {
          method: "POST",
          body: data
        });
        emit("add", session);
        open.value = false;
        reset();
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
      const _component_NuxtButton = _sfc_main$a;
      const _component_NuxtModal = _sfc_main$4$1;
      const _component_NuxtForm = _sfc_main$1$1;
      const _component_NuxtFormField = _sfc_main$8;
      const _component_NuxtInput = _sfc_main$9;
      const _component_NuxtInputNumber = _sfc_main$b;
      const _component_NuxtCheckbox = _sfc_main$c;
      _push(`<div${ssrRenderAttrs(_attrs)}><div>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, () => {
        _push(ssrRenderComponent(_component_NuxtButton, {
          label: "New",
          icon: "lucide:plus"
        }, null, _parent));
      }, _push, _parent);
      _push(`</div>`);
      _push(ssrRenderComponent(_component_NuxtModal, {
        open: unref(open),
        "onUpdate:open": ($event) => isRef(open) ? open.value = $event : null,
        title: "Create Session"
      }, {
        body: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_NuxtForm, {
              state: unref(state),
              schema: unref(extendedSessionSchema),
              class: "space-y-5",
              onSubmit: handleSubmit
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_NuxtFormField, {
                    name: "name",
                    label: "Session name",
                    required: ""
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_NuxtInput, {
                          modelValue: unref(state).name,
                          "onUpdate:modelValue": ($event) => unref(state).name = $event,
                          size: "lg",
                          class: "w-full"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_NuxtInput, {
                            modelValue: unref(state).name,
                            "onUpdate:modelValue": ($event) => unref(state).name = $event,
                            size: "lg",
                            class: "w-full"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_NuxtFormField, {
                    name: "startYear",
                    label: "Official starting year",
                    required: ""
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_NuxtInputNumber, {
                          modelValue: unref(state).startYear,
                          "onUpdate:modelValue": ($event) => unref(state).startYear = $event,
                          size: "lg",
                          class: "w-full",
                          orientation: "vertical",
                          "format-options": {
                            useGrouping: "false"
                          }
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_NuxtInputNumber, {
                            modelValue: unref(state).startYear,
                            "onUpdate:modelValue": ($event) => unref(state).startYear = $event,
                            size: "lg",
                            class: "w-full",
                            orientation: "vertical",
                            "format-options": {
                              useGrouping: "false"
                            }
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_NuxtFormField, {
                    name: "isCurrent",
                    required: ""
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_NuxtCheckbox, {
                          modelValue: unref(state).isCurrent,
                          "onUpdate:modelValue": ($event) => unref(state).isCurrent = $event,
                          size: "lg",
                          label: "Set as current session"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_NuxtCheckbox, {
                            modelValue: unref(state).isCurrent,
                            "onUpdate:modelValue": ($event) => unref(state).isCurrent = $event,
                            size: "lg",
                            label: "Set as current session"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_NuxtButton, {
                    type: "submit",
                    "loading-auto": "",
                    label: "Submit"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_NuxtFormField, {
                      name: "name",
                      label: "Session name",
                      required: ""
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_NuxtInput, {
                          modelValue: unref(state).name,
                          "onUpdate:modelValue": ($event) => unref(state).name = $event,
                          size: "lg",
                          class: "w-full"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_NuxtFormField, {
                      name: "startYear",
                      label: "Official starting year",
                      required: ""
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_NuxtInputNumber, {
                          modelValue: unref(state).startYear,
                          "onUpdate:modelValue": ($event) => unref(state).startYear = $event,
                          size: "lg",
                          class: "w-full",
                          orientation: "vertical",
                          "format-options": {
                            useGrouping: "false"
                          }
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_NuxtFormField, {
                      name: "isCurrent",
                      required: ""
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_NuxtCheckbox, {
                          modelValue: unref(state).isCurrent,
                          "onUpdate:modelValue": ($event) => unref(state).isCurrent = $event,
                          size: "lg",
                          label: "Set as current session"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_NuxtButton, {
                      type: "submit",
                      "loading-auto": "",
                      label: "Submit"
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_NuxtForm, {
                state: unref(state),
                schema: unref(extendedSessionSchema),
                class: "space-y-5",
                onSubmit: withModifiers(handleSubmit, ["prevent"])
              }, {
                default: withCtx(() => [
                  createVNode(_component_NuxtFormField, {
                    name: "name",
                    label: "Session name",
                    required: ""
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_NuxtInput, {
                        modelValue: unref(state).name,
                        "onUpdate:modelValue": ($event) => unref(state).name = $event,
                        size: "lg",
                        class: "w-full"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_NuxtFormField, {
                    name: "startYear",
                    label: "Official starting year",
                    required: ""
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_NuxtInputNumber, {
                        modelValue: unref(state).startYear,
                        "onUpdate:modelValue": ($event) => unref(state).startYear = $event,
                        size: "lg",
                        class: "w-full",
                        orientation: "vertical",
                        "format-options": {
                          useGrouping: "false"
                        }
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_NuxtFormField, {
                    name: "isCurrent",
                    required: ""
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_NuxtCheckbox, {
                        modelValue: unref(state).isCurrent,
                        "onUpdate:modelValue": ($event) => unref(state).isCurrent = $event,
                        size: "lg",
                        label: "Set as current session"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_NuxtButton, {
                    type: "submit",
                    "loading-auto": "",
                    label: "Submit"
                  })
                ]),
                _: 1
              }, 8, ["state", "schema"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/admin/academic-session/creator.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_3 = Object.assign(_sfc_main$3, { __name: "AdminAcademicSessionCreator" });
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "editor",
  __ssrInlineRender: true,
  props: {
    session: {}
  },
  emits: ["update"],
  setup(__props, { emit: __emit }) {
    const toast = useToast();
    const emit = __emit;
    const state = reactive({
      name: __props.session.name,
      startYear: __props.session.startYear
    });
    const reset = () => {
      state.name = "";
      state.startYear = (/* @__PURE__ */ new Date()).getFullYear();
    };
    async function handleSubmit(event) {
      const { data } = event;
      try {
        const { message, session: updated } = await $fetch(
          `/api/users/admin/sessions/${__props.session.id}`,
          {
            method: "PUT",
            body: data
          }
        );
        emit("update", updated);
        reset();
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
      const _component_NuxtForm = _sfc_main$1$1;
      const _component_NuxtFormField = _sfc_main$8;
      const _component_NuxtInput = _sfc_main$9;
      const _component_NuxtInputNumber = _sfc_main$b;
      const _component_NuxtButton = _sfc_main$a;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_NuxtForm, {
        state: unref(state),
        schema: unref(sessionSchema),
        class: "space-y-5",
        onSubmit: handleSubmit
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_NuxtFormField, {
              name: "name",
              label: "Session name",
              required: ""
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_NuxtInput, {
                    modelValue: unref(state).name,
                    "onUpdate:modelValue": ($event) => unref(state).name = $event,
                    size: "lg",
                    class: "w-full"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_NuxtInput, {
                      modelValue: unref(state).name,
                      "onUpdate:modelValue": ($event) => unref(state).name = $event,
                      size: "lg",
                      class: "w-full"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_NuxtFormField, {
              name: "startYear",
              label: "Official starting year",
              required: ""
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_NuxtInputNumber, {
                    modelValue: unref(state).startYear,
                    "onUpdate:modelValue": ($event) => unref(state).startYear = $event,
                    size: "lg",
                    class: "w-full",
                    orientation: "vertical",
                    "format-options": {
                      useGrouping: "false"
                    }
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_NuxtInputNumber, {
                      modelValue: unref(state).startYear,
                      "onUpdate:modelValue": ($event) => unref(state).startYear = $event,
                      size: "lg",
                      class: "w-full",
                      orientation: "vertical",
                      "format-options": {
                        useGrouping: "false"
                      }
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_NuxtButton, {
              type: "submit",
              "loading-auto": "",
              label: "Submit"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_NuxtFormField, {
                name: "name",
                label: "Session name",
                required: ""
              }, {
                default: withCtx(() => [
                  createVNode(_component_NuxtInput, {
                    modelValue: unref(state).name,
                    "onUpdate:modelValue": ($event) => unref(state).name = $event,
                    size: "lg",
                    class: "w-full"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                _: 1
              }),
              createVNode(_component_NuxtFormField, {
                name: "startYear",
                label: "Official starting year",
                required: ""
              }, {
                default: withCtx(() => [
                  createVNode(_component_NuxtInputNumber, {
                    modelValue: unref(state).startYear,
                    "onUpdate:modelValue": ($event) => unref(state).startYear = $event,
                    size: "lg",
                    class: "w-full",
                    orientation: "vertical",
                    "format-options": {
                      useGrouping: "false"
                    }
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                _: 1
              }),
              createVNode(_component_NuxtButton, {
                type: "submit",
                "loading-auto": "",
                label: "Submit"
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
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/admin/academic-session/editor.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_8 = Object.assign(_sfc_main$2, { __name: "AdminAcademicSessionEditor" });
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "set-current",
  __ssrInlineRender: true,
  props: {
    sessionId: {}
  },
  emits: ["update"],
  setup(__props, { emit: __emit }) {
    const toast = useToast();
    const emit = __emit;
    async function handleSubmit() {
      try {
        const { message } = await $fetch(
          `/api/users/admin/sessions/${__props.sessionId}/set-current`,
          {
            method: "PUT"
          }
        );
        emit("update", __props.sessionId);
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
      const _component_NuxtButton = _sfc_main$a;
      _push(`<div${ssrRenderAttrs(_attrs)}><p>Do you want to set this session as the current session?</p><div class="mt-2.5 flex justify-end">`);
      _push(ssrRenderComponent(_component_NuxtButton, {
        label: "Proceed",
        "loading-auto": "",
        onClick: handleSubmit
      }, null, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/admin/academic-session/set-current.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_9 = Object.assign(_sfc_main$1, { __name: "AdminAcademicSessionSetCurrent" });
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const Badge = _sfc_main$4;
    const DropdownMenu = _sfc_main$5;
    const Button = _sfc_main$a;
    const {
      data: sessions,
      error,
      pending,
      refresh
    } = ([__temp, __restore] = withAsyncContext(() => useFetch(`/api/general/academic-sessions`, "$fxG4LeaPHo")), __temp = await __temp, __restore(), __temp);
    const table = useTemplateRef("table");
    const columns = computed(() => {
      return [
        {
          accessorKey: "id",
          header: "#",
          cell: ({ row }) => {
            const id = row.getValue("id");
            return h("span", { title: id }, `${id.slice(0, 6)}...`);
          }
        },
        {
          accessorKey: "name",
          header: "Name"
        },
        {
          accessorKey: "startYear",
          header: "Offical Year Started"
        },
        {
          accessorKey: "currentYear",
          header: "Actual Year Sarted"
        },
        {
          accessorKey: "isCurrent",
          header: "Current Session",
          cell: ({ row }) => {
            const isCurrent = row.getValue("isCurrent");
            return h(
              Badge,
              {
                class: "capitalize",
                variant: "subtle",
                color: isCurrent ? "success" : "error"
              },
              () => `${isCurrent}`
            );
          }
        },
        {
          accessorKey: "createdAt",
          header: "Created",
          cell: ({ row }) => useDateFormat(
            row.getValue("createdAt"),
            "DD MMM, YYYY hh:mm aa"
          ).value
        },
        {
          accessorKey: "updatedAt",
          header: "Updated",
          cell: ({ row }) => useDateFormat(
            row.getValue("updatedAt"),
            "DD MMM, YYYY hh:mm aa"
          ).value
        },
        {
          id: "actions",
          cell: ({ row }) => {
            return h(
              "div",
              { class: "text-right" },
              h(
                DropdownMenu,
                {
                  content: {
                    align: "end"
                  },
                  items: getRowItems(row),
                  "aria-label": "Actions dropdown"
                },
                () => h(Button, {
                  icon: "i-lucide-ellipsis-vertical",
                  color: "neutral",
                  variant: "ghost",
                  class: "ml-auto",
                  "aria-label": "Actions dropdown"
                })
              )
            );
          }
        }
      ];
    });
    const open = ref(false);
    const openSetCurrent = ref(false);
    function getRowItems(row) {
      return [
        {
          type: "label",
          label: "Actions"
        },
        {
          label: "Edit Session",
          onSelect() {
            handleEditSelect(row.original.id, open);
          }
        },
        {
          label: "Set as current",
          onSelect() {
            handleEditSelect(row.original.id, openSetCurrent);
          }
        },
        {
          type: "separator"
        },
        {
          label: "Delete session"
        }
      ];
    }
    const pagination = ref({
      pageIndex: 0,
      pageSize: 10
    });
    const currentSession = ref(null);
    function handleEditSelect(id, opener) {
      currentSession.value = sessions.value?.find((session) => session.id === id) ?? null;
      if (currentSession.value) {
        opener.value = true;
      }
    }
    async function onUpdate(opener) {
      await refresh();
      currentSession.value = null;
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AdminAcademicSessionCreator = __nuxt_component_3;
      const _component_FetchErrorAlert = __nuxt_component_6;
      const _component_NuxtTable = _sfc_main$6;
      const _component_NuxtPagination = _sfc_main$7;
      const _component_NuxtModal = _sfc_main$4$1;
      const _component_AdminAcademicSessionEditor = __nuxt_component_8;
      const _component_AdminAcademicSessionSetCurrent = __nuxt_component_9;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "p-5" }, _attrs))}><header><div class="flex items-center gap-5 justify-between"><h1 class="text-lg font-bold">Academic Sessions</h1><div>`);
      if (unref(sessions)) {
        _push(ssrRenderComponent(_component_AdminAcademicSessionCreator, {
          onAdd: () => unref(refresh)()
        }, null, _parent));
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
      } else if (unref(sessions)) {
        _push(`<div>`);
        _push(ssrRenderComponent(_component_NuxtTable, {
          ref_key: "table",
          ref: table,
          pagination: unref(pagination),
          "onUpdate:pagination": ($event) => isRef(pagination) ? pagination.value = $event : null,
          data: unref(sessions),
          columns: unref(columns),
          loading: unref(pending),
          "pagination-options": {
            getPaginationRowModel: unref(getPaginationRowModel)()
          }
        }, null, _parent));
        _push(`<div class="flex justify-center border-t border-default pt-4">`);
        _push(ssrRenderComponent(_component_NuxtPagination, {
          "default-page": (unref(table)?.tableApi?.getState().pagination.pageIndex || 0) + 1,
          "items-per-page": unref(table)?.tableApi?.getState().pagination.pageSize,
          total: unref(table)?.tableApi?.getFilteredRowModel().rows.length,
          "onUpdate:page": (p) => unref(table)?.tableApi?.setPageIndex(p - 1)
        }, null, _parent));
        _push(`</div>`);
        if (unref(currentSession)) {
          _push(`<div>`);
          _push(ssrRenderComponent(_component_NuxtModal, {
            open: unref(open),
            "onUpdate:open": ($event) => isRef(open) ? open.value = $event : null,
            title: "Edit Session"
          }, {
            body: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(_component_AdminAcademicSessionEditor, {
                  session: unref(currentSession),
                  onUpdate: () => onUpdate(unref(open))
                }, null, _parent2, _scopeId));
              } else {
                return [
                  createVNode(_component_AdminAcademicSessionEditor, {
                    session: unref(currentSession),
                    onUpdate: () => onUpdate(unref(open))
                  }, null, 8, ["session", "onUpdate"])
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(ssrRenderComponent(_component_NuxtModal, {
            open: unref(openSetCurrent),
            "onUpdate:open": ($event) => isRef(openSetCurrent) ? openSetCurrent.value = $event : null,
            title: "Set Current Session"
          }, {
            body: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(_component_AdminAcademicSessionSetCurrent, {
                  "session-id": unref(currentSession).id,
                  onUpdate: () => onUpdate(unref(openSetCurrent))
                }, null, _parent2, _scopeId));
              } else {
                return [
                  createVNode(_component_AdminAcademicSessionSetCurrent, {
                    "session-id": unref(currentSession).id,
                    onUpdate: () => onUpdate(unref(openSetCurrent))
                  }, null, 8, ["session-id", "onUpdate"])
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/portal/admin/academic-sessions/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-Cwi0GnTw.mjs.map
