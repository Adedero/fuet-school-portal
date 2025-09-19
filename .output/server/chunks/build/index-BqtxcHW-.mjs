import { _ as __nuxt_component_1$1 } from './session-select-B8cDqGsb.mjs';
import { _ as _sfc_main$7 } from './Popover-7B_X7naD.mjs';
import { b as _sfc_main$a, n as navigateTo, k as useAppConfig, l as useFormField, t as tv, J as get } from './server.mjs';
import { defineComponent, ref, computed, withAsyncContext, mergeProps, unref, isRef, withCtx, createVNode, useModel, renderSlot, mergeModels, useSlots, useId, resolveDynamicComponent, createTextVNode, toDisplayString, createBlock, createCommentVNode, openBlock, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot, ssrInterpolate, ssrRenderClass, ssrRenderList, ssrRenderVNode } from 'vue/server-renderer';
import { useForwardPropsEmits, RadioGroupRoot, Label, RadioGroupItem, RadioGroupIndicator } from 'reka-ui';
import { reactivePick } from '@vueuse/core';
import { _ as _sfc_main$8 } from './Separator-Cxtlj3w1.mjs';
import { _ as _sfc_main$4 } from './ButtonGroup-C97pRlqf.mjs';
import { _ as _sfc_main$5 } from './Input-BL7KxnW2.mjs';
import { _ as __nuxt_component_6 } from './fetch-error-alert-NcfoVdkM.mjs';
import { _ as _sfc_main$6 } from './Table-C7SWVPm0.mjs';
import { a8 as normalizeException } from '../nitro/nitro.mjs';
import { columns } from './table-columns-D0bcK9SH.mjs';
import { u as useFetch } from './fetch-C9FsSXkc.mjs';
import './SelectMenu-Da07R2ba.mjs';
import 'reka-ui/namespaced';
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
import './Alert-ZHZvgBf8.mjs';
import '@tanstack/vue-table';
import '@vue/shared';

const theme = {
  "slots": {
    "root": "relative",
    "fieldset": "flex gap-x-2",
    "legend": "mb-1 block font-medium text-default",
    "item": "flex items-start",
    "container": "flex items-center",
    "base": "rounded-full ring ring-inset ring-accented overflow-hidden focus-visible:outline-2 focus-visible:outline-offset-2",
    "indicator": "flex items-center justify-center size-full after:bg-default after:rounded-full",
    "wrapper": "w-full",
    "label": "block font-medium text-default",
    "description": "text-muted"
  },
  "variants": {
    "color": {
      "primary": {
        "base": "focus-visible:outline-primary",
        "indicator": "bg-primary"
      },
      "secondary": {
        "base": "focus-visible:outline-secondary",
        "indicator": "bg-secondary"
      },
      "success": {
        "base": "focus-visible:outline-success",
        "indicator": "bg-success"
      },
      "info": {
        "base": "focus-visible:outline-info",
        "indicator": "bg-info"
      },
      "warning": {
        "base": "focus-visible:outline-warning",
        "indicator": "bg-warning"
      },
      "error": {
        "base": "focus-visible:outline-error",
        "indicator": "bg-error"
      },
      "neutral": {
        "base": "focus-visible:outline-inverted",
        "indicator": "bg-inverted"
      }
    },
    "variant": {
      "list": {
        "item": ""
      },
      "card": {
        "item": "border border-muted rounded-lg"
      },
      "table": {
        "item": "border border-muted"
      }
    },
    "orientation": {
      "horizontal": {
        "fieldset": "flex-row"
      },
      "vertical": {
        "fieldset": "flex-col"
      }
    },
    "indicator": {
      "start": {
        "item": "flex-row",
        "wrapper": "ms-2"
      },
      "end": {
        "item": "flex-row-reverse",
        "wrapper": "me-2"
      },
      "hidden": {
        "base": "sr-only",
        "wrapper": "text-center"
      }
    },
    "size": {
      "xs": {
        "fieldset": "gap-y-0.5",
        "legend": "text-xs",
        "base": "size-3",
        "item": "text-xs",
        "container": "h-4",
        "indicator": "after:size-1"
      },
      "sm": {
        "fieldset": "gap-y-0.5",
        "legend": "text-xs",
        "base": "size-3.5",
        "item": "text-xs",
        "container": "h-4",
        "indicator": "after:size-1"
      },
      "md": {
        "fieldset": "gap-y-1",
        "legend": "text-sm",
        "base": "size-4",
        "item": "text-sm",
        "container": "h-5",
        "indicator": "after:size-1.5"
      },
      "lg": {
        "fieldset": "gap-y-1",
        "legend": "text-sm",
        "base": "size-4.5",
        "item": "text-sm",
        "container": "h-5",
        "indicator": "after:size-1.5"
      },
      "xl": {
        "fieldset": "gap-y-1.5",
        "legend": "text-base",
        "base": "size-5",
        "item": "text-base",
        "container": "h-6",
        "indicator": "after:size-2"
      }
    },
    "disabled": {
      "true": {
        "base": "cursor-not-allowed opacity-75",
        "label": "cursor-not-allowed opacity-75"
      }
    },
    "required": {
      "true": {
        "legend": "after:content-['*'] after:ms-0.5 after:text-error"
      }
    }
  },
  "compoundVariants": [
    {
      "size": "xs",
      "variant": [
        "card",
        "table"
      ],
      "class": {
        "item": "p-2.5"
      }
    },
    {
      "size": "sm",
      "variant": [
        "card",
        "table"
      ],
      "class": {
        "item": "p-3"
      }
    },
    {
      "size": "md",
      "variant": [
        "card",
        "table"
      ],
      "class": {
        "item": "p-3.5"
      }
    },
    {
      "size": "lg",
      "variant": [
        "card",
        "table"
      ],
      "class": {
        "item": "p-4"
      }
    },
    {
      "size": "xl",
      "variant": [
        "card",
        "table"
      ],
      "class": {
        "item": "p-4.5"
      }
    },
    {
      "orientation": "horizontal",
      "variant": "table",
      "class": {
        "item": "first-of-type:rounded-s-lg last-of-type:rounded-e-lg",
        "fieldset": "gap-0 -space-x-px"
      }
    },
    {
      "orientation": "vertical",
      "variant": "table",
      "class": {
        "item": "first-of-type:rounded-t-lg last-of-type:rounded-b-lg",
        "fieldset": "gap-0 -space-y-px"
      }
    },
    {
      "color": "primary",
      "variant": "card",
      "class": {
        "item": "has-data-[state=checked]:border-primary"
      }
    },
    {
      "color": "secondary",
      "variant": "card",
      "class": {
        "item": "has-data-[state=checked]:border-secondary"
      }
    },
    {
      "color": "success",
      "variant": "card",
      "class": {
        "item": "has-data-[state=checked]:border-success"
      }
    },
    {
      "color": "info",
      "variant": "card",
      "class": {
        "item": "has-data-[state=checked]:border-info"
      }
    },
    {
      "color": "warning",
      "variant": "card",
      "class": {
        "item": "has-data-[state=checked]:border-warning"
      }
    },
    {
      "color": "error",
      "variant": "card",
      "class": {
        "item": "has-data-[state=checked]:border-error"
      }
    },
    {
      "color": "neutral",
      "variant": "card",
      "class": {
        "item": "has-data-[state=checked]:border-inverted"
      }
    },
    {
      "color": "primary",
      "variant": "table",
      "class": {
        "item": "has-data-[state=checked]:bg-primary/10 has-data-[state=checked]:border-primary/50 has-data-[state=checked]:z-[1]"
      }
    },
    {
      "color": "secondary",
      "variant": "table",
      "class": {
        "item": "has-data-[state=checked]:bg-secondary/10 has-data-[state=checked]:border-secondary/50 has-data-[state=checked]:z-[1]"
      }
    },
    {
      "color": "success",
      "variant": "table",
      "class": {
        "item": "has-data-[state=checked]:bg-success/10 has-data-[state=checked]:border-success/50 has-data-[state=checked]:z-[1]"
      }
    },
    {
      "color": "info",
      "variant": "table",
      "class": {
        "item": "has-data-[state=checked]:bg-info/10 has-data-[state=checked]:border-info/50 has-data-[state=checked]:z-[1]"
      }
    },
    {
      "color": "warning",
      "variant": "table",
      "class": {
        "item": "has-data-[state=checked]:bg-warning/10 has-data-[state=checked]:border-warning/50 has-data-[state=checked]:z-[1]"
      }
    },
    {
      "color": "error",
      "variant": "table",
      "class": {
        "item": "has-data-[state=checked]:bg-error/10 has-data-[state=checked]:border-error/50 has-data-[state=checked]:z-[1]"
      }
    },
    {
      "color": "neutral",
      "variant": "table",
      "class": {
        "item": "has-data-[state=checked]:bg-elevated has-data-[state=checked]:border-inverted/50 has-data-[state=checked]:z-[1]"
      }
    },
    {
      "variant": [
        "card",
        "table"
      ],
      "disabled": true,
      "class": {
        "item": "cursor-not-allowed opacity-75"
      }
    }
  ],
  "defaultVariants": {
    "size": "md",
    "color": "primary",
    "variant": "list",
    "orientation": "vertical",
    "indicator": "start"
  }
};
const _sfc_main$3 = {
  __name: "NuxtRadioGroup",
  __ssrInlineRender: true,
  props: {
    as: { type: null, required: false },
    legend: { type: String, required: false },
    valueKey: { type: String, required: false, default: "value" },
    labelKey: { type: String, required: false, default: "label" },
    descriptionKey: { type: String, required: false, default: "description" },
    items: { type: Array, required: false },
    size: { type: null, required: false },
    variant: { type: null, required: false },
    color: { type: null, required: false },
    orientation: { type: null, required: false, default: "vertical" },
    indicator: { type: null, required: false },
    class: { type: null, required: false },
    ui: { type: null, required: false },
    defaultValue: { type: null, required: false },
    disabled: { type: Boolean, required: false },
    loop: { type: Boolean, required: false },
    modelValue: { type: null, required: false },
    name: { type: String, required: false },
    required: { type: Boolean, required: false }
  },
  emits: ["update:modelValue", "change"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const slots = useSlots();
    const appConfig = useAppConfig();
    const rootProps = useForwardPropsEmits(reactivePick(props, "as", "modelValue", "defaultValue", "orientation", "loop", "required"), emits);
    const { emitFormChange, emitFormInput, color, name, size, id: _id, disabled, ariaAttrs } = useFormField(props, { bind: false });
    const id = _id.value ?? useId();
    const ui = computed(() => tv({ extend: tv(theme), ...appConfig.ui?.radioGroup || {} })({
      size: size.value,
      color: color.value,
      disabled: disabled.value,
      required: props.required,
      orientation: props.orientation,
      variant: props.variant,
      indicator: props.indicator
    }));
    function normalizeItem(item) {
      if (item === null) {
        return {
          id: `${id}:null`,
          value: void 0,
          label: void 0
        };
      }
      if (typeof item === "string" || typeof item === "number" || typeof item === "bigint") {
        return {
          id: `${id}:${item}`,
          value: String(item),
          label: String(item)
        };
      }
      const value = get(item, props.valueKey);
      const label = get(item, props.labelKey);
      const description = get(item, props.descriptionKey);
      return {
        ...item,
        value,
        label,
        description,
        id: `${id}:${value}`
      };
    }
    const normalizedItems = computed(() => {
      if (!props.items) {
        return [];
      }
      return props.items.map(normalizeItem);
    });
    function onUpdate(value) {
      const event = new Event("change", { target: { value } });
      emits("change", event);
      emitFormChange();
      emitFormInput();
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(RadioGroupRoot), mergeProps({ id: unref(id) }, unref(rootProps), {
        name: unref(name),
        disabled: unref(disabled),
        class: ui.value.root({ class: [props.ui?.root, props.class] }),
        "onUpdate:modelValue": onUpdate
      }, _attrs), {
        default: withCtx(({ modelValue }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<fieldset${ssrRenderAttrs(mergeProps({
              class: ui.value.fieldset({ class: props.ui?.fieldset })
            }, unref(ariaAttrs)))}${_scopeId}>`);
            if (__props.legend || !!slots.legend) {
              _push2(`<legend class="${ssrRenderClass(ui.value.legend({ class: props.ui?.legend }))}"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "legend", {}, () => {
                _push2(`${ssrInterpolate(__props.legend)}`);
              }, _push2, _parent2, _scopeId);
              _push2(`</legend>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<!--[-->`);
            ssrRenderList(normalizedItems.value, (item) => {
              ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(!__props.variant || __props.variant === "list" ? "div" : unref(Label)), {
                key: item.value,
                class: ui.value.item({ class: [props.ui?.item, item.ui?.item, item.class] })
              }, {
                default: withCtx((_, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="${ssrRenderClass(ui.value.container({ class: [props.ui?.container, item.ui?.container] }))}"${_scopeId2}>`);
                    _push3(ssrRenderComponent(unref(RadioGroupItem), {
                      id: item.id,
                      value: item.value,
                      disabled: item.disabled,
                      class: ui.value.base({ class: [props.ui?.base, item.ui?.base], disabled: item.disabled })
                    }, {
                      default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(unref(RadioGroupIndicator), {
                            class: ui.value.indicator({ class: [props.ui?.indicator, item.ui?.indicator] })
                          }, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(unref(RadioGroupIndicator), {
                              class: ui.value.indicator({ class: [props.ui?.indicator, item.ui?.indicator] })
                            }, null, 8, ["class"])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(`</div>`);
                    if (item.label || !!slots.label || (item.description || !!slots.description)) {
                      _push3(`<div class="${ssrRenderClass(ui.value.wrapper({ class: [props.ui?.wrapper, item.ui?.wrapper] }))}"${_scopeId2}>`);
                      if (item.label || !!slots.label) {
                        ssrRenderVNode(_push3, createVNode(resolveDynamicComponent(!__props.variant || __props.variant === "list" ? unref(Label) : "p"), {
                          for: item.id,
                          class: ui.value.label({ class: [props.ui?.label, item.ui?.label] })
                        }, {
                          default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                            if (_push4) {
                              ssrRenderSlot(_ctx.$slots, "label", {
                                item,
                                modelValue
                              }, () => {
                                _push4(`${ssrInterpolate(item.label)}`);
                              }, _push4, _parent4, _scopeId3);
                            } else {
                              return [
                                renderSlot(_ctx.$slots, "label", {
                                  item,
                                  modelValue
                                }, () => [
                                  createTextVNode(toDisplayString(item.label), 1)
                                ])
                              ];
                            }
                          }),
                          _: 2
                        }), _parent3, _scopeId2);
                      } else {
                        _push3(`<!---->`);
                      }
                      if (item.description || !!slots.description) {
                        _push3(`<p class="${ssrRenderClass(ui.value.description({ class: [props.ui?.description, item.ui?.description] }))}"${_scopeId2}>`);
                        ssrRenderSlot(_ctx.$slots, "description", {
                          item,
                          modelValue
                        }, () => {
                          _push3(`${ssrInterpolate(item.description)}`);
                        }, _push3, _parent3, _scopeId2);
                        _push3(`</p>`);
                      } else {
                        _push3(`<!---->`);
                      }
                      _push3(`</div>`);
                    } else {
                      _push3(`<!---->`);
                    }
                  } else {
                    return [
                      createVNode("div", {
                        class: ui.value.container({ class: [props.ui?.container, item.ui?.container] })
                      }, [
                        createVNode(unref(RadioGroupItem), {
                          id: item.id,
                          value: item.value,
                          disabled: item.disabled,
                          class: ui.value.base({ class: [props.ui?.base, item.ui?.base], disabled: item.disabled })
                        }, {
                          default: withCtx(() => [
                            createVNode(unref(RadioGroupIndicator), {
                              class: ui.value.indicator({ class: [props.ui?.indicator, item.ui?.indicator] })
                            }, null, 8, ["class"])
                          ]),
                          _: 2
                        }, 1032, ["id", "value", "disabled", "class"])
                      ], 2),
                      item.label || !!slots.label || (item.description || !!slots.description) ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: ui.value.wrapper({ class: [props.ui?.wrapper, item.ui?.wrapper] })
                      }, [
                        item.label || !!slots.label ? (openBlock(), createBlock(resolveDynamicComponent(!__props.variant || __props.variant === "list" ? unref(Label) : "p"), {
                          key: 0,
                          for: item.id,
                          class: ui.value.label({ class: [props.ui?.label, item.ui?.label] })
                        }, {
                          default: withCtx(() => [
                            renderSlot(_ctx.$slots, "label", {
                              item,
                              modelValue
                            }, () => [
                              createTextVNode(toDisplayString(item.label), 1)
                            ])
                          ]),
                          _: 2
                        }, 1032, ["for", "class"])) : createCommentVNode("", true),
                        item.description || !!slots.description ? (openBlock(), createBlock("p", {
                          key: 1,
                          class: ui.value.description({ class: [props.ui?.description, item.ui?.description] })
                        }, [
                          renderSlot(_ctx.$slots, "description", {
                            item,
                            modelValue
                          }, () => [
                            createTextVNode(toDisplayString(item.description), 1)
                          ])
                        ], 2)) : createCommentVNode("", true)
                      ], 2)) : createCommentVNode("", true)
                    ];
                  }
                }),
                _: 2
              }), _parent2, _scopeId);
            });
            _push2(`<!--]--></fieldset>`);
          } else {
            return [
              createVNode("fieldset", mergeProps({
                class: ui.value.fieldset({ class: props.ui?.fieldset })
              }, unref(ariaAttrs)), [
                __props.legend || !!slots.legend ? (openBlock(), createBlock("legend", {
                  key: 0,
                  class: ui.value.legend({ class: props.ui?.legend })
                }, [
                  renderSlot(_ctx.$slots, "legend", {}, () => [
                    createTextVNode(toDisplayString(__props.legend), 1)
                  ])
                ], 2)) : createCommentVNode("", true),
                (openBlock(true), createBlock(Fragment, null, renderList(normalizedItems.value, (item) => {
                  return openBlock(), createBlock(resolveDynamicComponent(!__props.variant || __props.variant === "list" ? "div" : unref(Label)), {
                    key: item.value,
                    class: ui.value.item({ class: [props.ui?.item, item.ui?.item, item.class] })
                  }, {
                    default: withCtx(() => [
                      createVNode("div", {
                        class: ui.value.container({ class: [props.ui?.container, item.ui?.container] })
                      }, [
                        createVNode(unref(RadioGroupItem), {
                          id: item.id,
                          value: item.value,
                          disabled: item.disabled,
                          class: ui.value.base({ class: [props.ui?.base, item.ui?.base], disabled: item.disabled })
                        }, {
                          default: withCtx(() => [
                            createVNode(unref(RadioGroupIndicator), {
                              class: ui.value.indicator({ class: [props.ui?.indicator, item.ui?.indicator] })
                            }, null, 8, ["class"])
                          ]),
                          _: 2
                        }, 1032, ["id", "value", "disabled", "class"])
                      ], 2),
                      item.label || !!slots.label || (item.description || !!slots.description) ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: ui.value.wrapper({ class: [props.ui?.wrapper, item.ui?.wrapper] })
                      }, [
                        item.label || !!slots.label ? (openBlock(), createBlock(resolveDynamicComponent(!__props.variant || __props.variant === "list" ? unref(Label) : "p"), {
                          key: 0,
                          for: item.id,
                          class: ui.value.label({ class: [props.ui?.label, item.ui?.label] })
                        }, {
                          default: withCtx(() => [
                            renderSlot(_ctx.$slots, "label", {
                              item,
                              modelValue
                            }, () => [
                              createTextVNode(toDisplayString(item.label), 1)
                            ])
                          ]),
                          _: 2
                        }, 1032, ["for", "class"])) : createCommentVNode("", true),
                        item.description || !!slots.description ? (openBlock(), createBlock("p", {
                          key: 1,
                          class: ui.value.description({ class: [props.ui?.description, item.ui?.description] })
                        }, [
                          renderSlot(_ctx.$slots, "description", {
                            item,
                            modelValue
                          }, () => [
                            createTextVNode(toDisplayString(item.description), 1)
                          ])
                        ], 2)) : createCommentVNode("", true)
                      ], 2)) : createCommentVNode("", true)
                    ]),
                    _: 2
                  }, 1032, ["class"]);
                }), 128))
              ], 16)
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/RadioGroup.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "filter-select",
  __ssrInlineRender: true,
  props: {
    "filters": {
      default: { status: "all", admissionFees: "all" }
    },
    "filtersModifiers": {}
  },
  emits: ["update:filters"],
  setup(__props) {
    const value = useModel(__props, "filters");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtPopover = _sfc_main$7;
      const _component_NuxtButton = _sfc_main$a;
      const _component_NuxtRadioGroup = _sfc_main$3;
      const _component_NuxtSeparator = _sfc_main$8;
      _push(ssrRenderComponent(_component_NuxtPopover, mergeProps({ title: "Filters" }, _attrs), {
        content: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="p-5"${_scopeId}><p class="font-bold"${_scopeId}>Filters</p><div class="mt-2.5"${_scopeId}><div class="grid gap-2"${_scopeId}><p class="text-sm font-semibold text-muted"${_scopeId}>Admission Status</p>`);
            _push2(ssrRenderComponent(_component_NuxtRadioGroup, {
              modelValue: value.value.status,
              "onUpdate:modelValue": ($event) => value.value.status = $event,
              items: ["all", "accepted", "rejected"]
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_component_NuxtSeparator, { class: "my-2.5" }, null, _parent2, _scopeId));
            _push2(`<div class="grid gap-2"${_scopeId}><p class="text-sm font-semibold text-muted"${_scopeId}>Admission Fees</p>`);
            _push2(ssrRenderComponent(_component_NuxtRadioGroup, {
              modelValue: value.value.admissionFees,
              "onUpdate:modelValue": ($event) => value.value.admissionFees = $event,
              items: ["all", "paid", "unpaid"]
            }, null, _parent2, _scopeId));
            _push2(`</div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "p-5" }, [
                createVNode("p", { class: "font-bold" }, "Filters"),
                createVNode("div", { class: "mt-2.5" }, [
                  createVNode("div", { class: "grid gap-2" }, [
                    createVNode("p", { class: "text-sm font-semibold text-muted" }, "Admission Status"),
                    createVNode(_component_NuxtRadioGroup, {
                      modelValue: value.value.status,
                      "onUpdate:modelValue": ($event) => value.value.status = $event,
                      items: ["all", "accepted", "rejected"]
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  createVNode(_component_NuxtSeparator, { class: "my-2.5" }),
                  createVNode("div", { class: "grid gap-2" }, [
                    createVNode("p", { class: "text-sm font-semibold text-muted" }, "Admission Fees"),
                    createVNode(_component_NuxtRadioGroup, {
                      modelValue: value.value.admissionFees,
                      "onUpdate:modelValue": ($event) => value.value.admissionFees = $event,
                      items: ["all", "paid", "unpaid"]
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ])
                ])
              ])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, () => {
              _push2(ssrRenderComponent(_component_NuxtButton, {
                icon: "lucide:filter",
                color: "neutral",
                variant: "ghost",
                size: "sm"
              }, null, _parent2, _scopeId));
            }, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default", {}, () => [
                createVNode(_component_NuxtButton, {
                  icon: "lucide:filter",
                  color: "neutral",
                  variant: "ghost",
                  size: "sm"
                })
              ])
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/application/filter-select.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_1 = Object.assign(_sfc_main$2, { __name: "ApplicationFilterSelect" });
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "pagination",
  __ssrInlineRender: true,
  props: /* @__PURE__ */ mergeModels({
    allLoaded: { type: Boolean, default: false },
    totalPages: { default: () => void 0 },
    rows: { default: () => void 0 },
    length: { default: () => void 0 }
  }, {
    "page": { default: 0 },
    "pageModifiers": {}
  }),
  emits: /* @__PURE__ */ mergeModels(["next", "prev"], ["update:page"]),
  setup(__props, { emit: __emit }) {
    const page = useModel(__props, "page");
    const emit = __emit;
    const prev = () => {
      if (page.value === 0) return;
      page.value -= 1;
      emit("prev", page.value);
    };
    const next = () => {
      if (__props.allLoaded || __props.totalPages !== void 0 && page.value >= __props.totalPages - 1)
        return;
      page.value += 1;
      emit("next", page.value);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtButton = _sfc_main$a;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full select-none" }, _attrs))}><div class="w-full flex items-center justify-center gap-2 bg-white p-2 rounded-lg">`);
      _push(ssrRenderComponent(_component_NuxtButton, {
        "aria-label": "Previous Page",
        disabled: page.value < 1,
        size: "sm",
        color: "neutral",
        variant: "outline",
        icon: "lucide:chevron-left",
        onClick: prev
      }, null, _parent));
      _push(`<div class="border border-default rounded-md flex p-1 items-center gap-2 flex-shrink-0 text-sm" aria-label="Current Page">`);
      if (_ctx.rows && _ctx.length) {
        _push(`<div class="text-center flex-shrink-0 py-1 px-2"><span class="font-medium">${ssrInterpolate(page.value * _ctx.rows + 1)}</span> to <span class="font-medium">${ssrInterpolate(Math.min((page.value + 1) * _ctx.rows, _ctx.length))}</span></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<p class="border border-default text-center p-1 px-2 rounded-md"> page <span class="font-medium text-muted">${ssrInterpolate(page.value + 1)}</span></p></div>`);
      _push(ssrRenderComponent(_component_NuxtButton, {
        "aria-label": "Next Page",
        disabled: _ctx.allLoaded || _ctx.totalPages !== void 0 && page.value >= _ctx.totalPages - 1,
        size: "sm",
        color: "neutral",
        variant: "outline",
        "trailing-icon": "lucide:chevron-right",
        onClick: next
      }, null, _parent));
      _push(`</div>`);
      if (_ctx.allLoaded) {
        _push(`<div class="text-center mt-2 text-sm text-muted"> All data loaded </div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/vue/pagination.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_7 = Object.assign(_sfc_main$1, { __name: "VuePagination" });
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const selectedSession = ref();
    const filters = ref({ status: "all", admissionFees: "all" });
    const limit = ref(20);
    const page = ref(0);
    const offset = computed(() => limit.value * page.value);
    const search = ref();
    const query = computed(() => {
      const searchParams = new URLSearchParams();
      if (filters.value.status !== "all") {
        searchParams.set("admissionStatus", filters.value.status);
      }
      if (filters.value.admissionFees !== "all") {
        searchParams.set(
          "hasPaidAdmissionFee",
          filters.value.admissionFees === "paid" ? "true" : ""
        );
      }
      if (selectedSession.value) {
        searchParams.set("schoolSessionName", selectedSession.value.name);
      }
      if (search.value) {
        searchParams.set("search", search.value);
      }
      searchParams.set("limit", limit.value.toString());
      searchParams.set("offset", offset.value.toString());
      return Object.fromEntries(searchParams.entries());
    });
    const {
      data: applications,
      error,
      refresh
    } = ([__temp, __restore] = withAsyncContext(() => useFetch("/api/users/admin/applications", {
      query
    }, "$YPsJYU9EmC")), __temp = await __temp, __restore(), __temp);
    const allLoaded = computed(
      () => (applications.value?.length ?? 0) < limit.value
    );
    function onSelect(row) {
      const id = row.getValue("id");
      navigateTo(`/portal/admin/applications/${id}`);
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppSessionSelect = __nuxt_component_1$1;
      const _component_ApplicationFilterSelect = __nuxt_component_1;
      const _component_NuxtButtonGroup = _sfc_main$4;
      const _component_NuxtInput = _sfc_main$5;
      const _component_NuxtButton = _sfc_main$a;
      const _component_FetchErrorAlert = __nuxt_component_6;
      const _component_NuxtTable = _sfc_main$6;
      const _component_VuePagination = __nuxt_component_7;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "p-5" }, _attrs))}><header><div class="flex items-center gap-5 justify-between"><h1 class="text-lg font-bold">Applications</h1><div class="flex items-center gap-2">`);
      _push(ssrRenderComponent(_component_AppSessionSelect, {
        modelValue: unref(selectedSession),
        "onUpdate:modelValue": ($event) => isRef(selectedSession) ? selectedSession.value = $event : null,
        size: "sm"
      }, null, _parent));
      _push(ssrRenderComponent(_component_ApplicationFilterSelect, {
        filters: unref(filters),
        "onUpdate:filters": ($event) => isRef(filters) ? filters.value = $event : null
      }, null, _parent));
      _push(`</div></div><div class="mt-3">`);
      _push(ssrRenderComponent(_component_NuxtButtonGroup, { class: "w-full md:w-fit" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_NuxtInput, {
              modelValue: unref(search),
              "onUpdate:modelValue": ($event) => isRef(search) ? search.value = $event : null,
              size: "sm",
              placeholder: "Search...",
              class: "w-full md:w-fit"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_NuxtButton, {
              icon: "lucide:search",
              color: "neutral",
              variant: "outline",
              size: "sm"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_NuxtInput, {
                modelValue: unref(search),
                "onUpdate:modelValue": ($event) => isRef(search) ? search.value = $event : null,
                size: "sm",
                placeholder: "Search...",
                class: "w-full md:w-fit"
              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
              createVNode(_component_NuxtButton, {
                icon: "lucide:search",
                color: "neutral",
                variant: "outline",
                size: "sm"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></header><section class="mt-5">`);
      if (unref(error)) {
        _push(`<div>`);
        _push(ssrRenderComponent(_component_FetchErrorAlert, {
          message: ("normalizeException" in _ctx ? _ctx.normalizeException : unref(normalizeException))(unref(error)).message,
          "show-retry": "",
          onRetry: unref(refresh)
        }, null, _parent));
        _push(`</div>`);
      } else if (unref(applications)) {
        _push(`<div>`);
        _push(ssrRenderComponent(_component_NuxtTable, {
          data: unref(applications),
          columns: unref(columns),
          onSelect
        }, null, _parent));
        _push(`<div class="flex justify-center border-t border-default pt-4">`);
        _push(ssrRenderComponent(_component_VuePagination, {
          page: unref(page),
          "onUpdate:page": ($event) => isRef(page) ? page.value = $event : null,
          rows: unref(limit),
          length: unref(applications).length,
          "all-loaded": unref(allLoaded)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/portal/admin/applications/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-BqtxcHW-.mjs.map
