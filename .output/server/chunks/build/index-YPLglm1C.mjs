import { _ as _sfc_main$5 } from './Badge-6Qx_KqaP.mjs';
import { b as _sfc_main$a, h as useToast, f as _sfc_main$4$1, k as useAppConfig, l as useFormField, m as useComponentIcons, t as tv, e as _sfc_main$g, o as _sfc_main$d, p as looseToNumber } from './server.mjs';
import { _ as _sfc_main$1$1, a as _sfc_main$c } from './FormField-D2Q403g3.mjs';
import { _ as _sfc_main$7 } from './Input-BL7KxnW2.mjs';
import { _ as _sfc_main$b } from './Select-CyiMmXX1.mjs';
import { _ as __nuxt_component_6$1 } from './faculty-select-Cq2qIe2M.mjs';
import { defineComponent, useTemplateRef, ref, withAsyncContext, computed, mergeProps, unref, isRef, withCtx, createVNode, h, toDisplayString, mergeModels, useModel, watch, useSlots, nextTick, renderSlot, createBlock, createCommentVNode, openBlock, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderSlot, ssrRenderClass } from 'vue/server-renderer';
import { Primitive } from 'reka-ui';
import { useVModel } from '@vueuse/core';
import { c as courseEditSchema } from '../_/course.schema.mjs';
import { a8 as normalizeException } from '../nitro/nitro.mjs';
import { _ as __nuxt_component_6 } from './fetch-error-alert-NcfoVdkM.mjs';
import { _ as _sfc_main$6 } from './ButtonGroup-C97pRlqf.mjs';
import { _ as _sfc_main$8 } from './Table-C7SWVPm0.mjs';
import { _ as _sfc_main$9 } from './Pagination-DDAB1vBf.mjs';
import { getPaginationRowModel } from '@tanstack/vue-table';
import { u as useFetch } from './fetch-C9FsSXkc.mjs';
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
import './SelectMenu-Da07R2ba.mjs';
import 'zod';
import './Alert-ZHZvgBf8.mjs';
import '@vue/shared';

const theme = {
  "slots": {
    "root": "relative inline-flex items-center",
    "base": [
      "w-full rounded-md border-0 appearance-none placeholder:text-dimmed focus:outline-none disabled:cursor-not-allowed disabled:opacity-75",
      "transition-colors"
    ],
    "leading": "absolute start-0 flex items-start",
    "leadingIcon": "shrink-0 text-dimmed",
    "leadingAvatar": "shrink-0",
    "leadingAvatarSize": "",
    "trailing": "absolute end-0 flex items-start",
    "trailingIcon": "shrink-0 text-dimmed"
  },
  "variants": {
    "buttonGroup": {
      "horizontal": {
        "root": "group has-focus-visible:z-[1]",
        "base": "group-not-only:group-first:rounded-e-none group-not-only:group-last:rounded-s-none group-not-last:group-not-first:rounded-none"
      },
      "vertical": {
        "root": "group has-focus-visible:z-[1]",
        "base": "group-not-only:group-first:rounded-b-none group-not-only:group-last:rounded-t-none group-not-last:group-not-first:rounded-none"
      }
    },
    "size": {
      "xs": {
        "base": "px-2 py-1 text-xs gap-1",
        "leading": "ps-2 inset-y-1",
        "trailing": "pe-2 inset-y-1",
        "leadingIcon": "size-4",
        "leadingAvatarSize": "3xs",
        "trailingIcon": "size-4"
      },
      "sm": {
        "base": "px-2.5 py-1.5 text-xs gap-1.5",
        "leading": "ps-2.5 inset-y-1.5",
        "trailing": "pe-2.5 inset-y-1.5",
        "leadingIcon": "size-4",
        "leadingAvatarSize": "3xs",
        "trailingIcon": "size-4"
      },
      "md": {
        "base": "px-2.5 py-1.5 text-sm gap-1.5",
        "leading": "ps-2.5 inset-y-1.5",
        "trailing": "pe-2.5 inset-y-1.5",
        "leadingIcon": "size-5",
        "leadingAvatarSize": "2xs",
        "trailingIcon": "size-5"
      },
      "lg": {
        "base": "px-3 py-2 text-sm gap-2",
        "leading": "ps-3 inset-y-2",
        "trailing": "pe-3 inset-y-2",
        "leadingIcon": "size-5",
        "leadingAvatarSize": "2xs",
        "trailingIcon": "size-5"
      },
      "xl": {
        "base": "px-3 py-2 text-base gap-2",
        "leading": "ps-3 inset-y-2",
        "trailing": "pe-3 inset-y-2",
        "leadingIcon": "size-6",
        "leadingAvatarSize": "xs",
        "trailingIcon": "size-6"
      }
    },
    "variant": {
      "outline": "text-highlighted bg-default ring ring-inset ring-accented",
      "soft": "text-highlighted bg-elevated/50 hover:bg-elevated focus:bg-elevated disabled:bg-elevated/50",
      "subtle": "text-highlighted bg-elevated ring ring-inset ring-accented",
      "ghost": "text-highlighted bg-transparent hover:bg-elevated focus:bg-elevated disabled:bg-transparent dark:disabled:bg-transparent",
      "none": "text-highlighted bg-transparent"
    },
    "color": {
      "primary": "",
      "secondary": "",
      "success": "",
      "info": "",
      "warning": "",
      "error": "",
      "neutral": ""
    },
    "leading": {
      "true": ""
    },
    "trailing": {
      "true": ""
    },
    "loading": {
      "true": ""
    },
    "highlight": {
      "true": ""
    },
    "type": {
      "file": "file:me-1.5 file:font-medium file:text-muted file:outline-none"
    },
    "autoresize": {
      "true": {
        "base": "resize-none"
      }
    }
  },
  "compoundVariants": [
    {
      "color": "primary",
      "variant": [
        "outline",
        "subtle"
      ],
      "class": "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary"
    },
    {
      "color": "secondary",
      "variant": [
        "outline",
        "subtle"
      ],
      "class": "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-secondary"
    },
    {
      "color": "success",
      "variant": [
        "outline",
        "subtle"
      ],
      "class": "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-success"
    },
    {
      "color": "info",
      "variant": [
        "outline",
        "subtle"
      ],
      "class": "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-info"
    },
    {
      "color": "warning",
      "variant": [
        "outline",
        "subtle"
      ],
      "class": "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-warning"
    },
    {
      "color": "error",
      "variant": [
        "outline",
        "subtle"
      ],
      "class": "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-error"
    },
    {
      "color": "primary",
      "highlight": true,
      "class": "ring ring-inset ring-primary"
    },
    {
      "color": "secondary",
      "highlight": true,
      "class": "ring ring-inset ring-secondary"
    },
    {
      "color": "success",
      "highlight": true,
      "class": "ring ring-inset ring-success"
    },
    {
      "color": "info",
      "highlight": true,
      "class": "ring ring-inset ring-info"
    },
    {
      "color": "warning",
      "highlight": true,
      "class": "ring ring-inset ring-warning"
    },
    {
      "color": "error",
      "highlight": true,
      "class": "ring ring-inset ring-error"
    },
    {
      "color": "neutral",
      "variant": [
        "outline",
        "subtle"
      ],
      "class": "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-inverted"
    },
    {
      "color": "neutral",
      "highlight": true,
      "class": "ring ring-inset ring-inverted"
    },
    {
      "leading": true,
      "size": "xs",
      "class": "ps-7"
    },
    {
      "leading": true,
      "size": "sm",
      "class": "ps-8"
    },
    {
      "leading": true,
      "size": "md",
      "class": "ps-9"
    },
    {
      "leading": true,
      "size": "lg",
      "class": "ps-10"
    },
    {
      "leading": true,
      "size": "xl",
      "class": "ps-11"
    },
    {
      "trailing": true,
      "size": "xs",
      "class": "pe-7"
    },
    {
      "trailing": true,
      "size": "sm",
      "class": "pe-8"
    },
    {
      "trailing": true,
      "size": "md",
      "class": "pe-9"
    },
    {
      "trailing": true,
      "size": "lg",
      "class": "pe-10"
    },
    {
      "trailing": true,
      "size": "xl",
      "class": "pe-11"
    },
    {
      "loading": true,
      "leading": true,
      "class": {
        "leadingIcon": "animate-spin"
      }
    },
    {
      "loading": true,
      "leading": false,
      "trailing": true,
      "class": {
        "trailingIcon": "animate-spin"
      }
    }
  ],
  "defaultVariants": {
    "size": "md",
    "color": "primary",
    "variant": "outline"
  }
};
const _sfc_main$4 = /* @__PURE__ */ Object.assign({ inheritAttrs: false }, {
  __name: "NuxtTextarea",
  __ssrInlineRender: true,
  props: {
    as: { type: null, required: false },
    id: { type: String, required: false },
    name: { type: String, required: false },
    placeholder: { type: String, required: false },
    color: { type: null, required: false },
    variant: { type: null, required: false },
    size: { type: null, required: false },
    required: { type: Boolean, required: false },
    autofocus: { type: Boolean, required: false },
    autofocusDelay: { type: Number, required: false, default: 0 },
    autoresize: { type: Boolean, required: false },
    autoresizeDelay: { type: Number, required: false, default: 0 },
    disabled: { type: Boolean, required: false },
    rows: { type: Number, required: false, default: 3 },
    maxrows: { type: Number, required: false, default: 0 },
    highlight: { type: Boolean, required: false },
    modelValue: { type: null, required: false },
    defaultValue: { type: null, required: false },
    modelModifiers: { type: Object, required: false },
    class: { type: null, required: false },
    ui: { type: null, required: false },
    icon: { type: String, required: false },
    avatar: { type: Object, required: false },
    leading: { type: Boolean, required: false },
    leadingIcon: { type: String, required: false },
    trailing: { type: Boolean, required: false },
    trailingIcon: { type: String, required: false },
    loading: { type: Boolean, required: false },
    loadingIcon: { type: String, required: false }
  },
  emits: ["update:modelValue", "blur", "change"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const slots = useSlots();
    const modelValue = useVModel(props, "modelValue", emits, { defaultValue: props.defaultValue });
    const appConfig = useAppConfig();
    const { emitFormFocus, emitFormBlur, emitFormInput, emitFormChange, size, color, id, name, highlight, disabled, ariaAttrs } = useFormField(props, { deferInputValidation: true });
    const { isLeading, isTrailing, leadingIconName, trailingIconName } = useComponentIcons(props);
    const ui = computed(() => tv({ extend: tv(theme), ...appConfig.ui?.textarea || {} })({
      color: color.value,
      variant: props.variant,
      size: size?.value,
      loading: props.loading,
      highlight: highlight.value,
      autoresize: props.autoresize,
      leading: isLeading.value || !!props.avatar || !!slots.leading,
      trailing: isTrailing.value || !!slots.trailing
    }));
    const textareaRef = ref(null);
    function updateInput(value) {
      if (props.modelModifiers?.trim) {
        value = value?.trim() ?? null;
      }
      if (props.modelModifiers?.number) {
        value = looseToNumber(value);
      }
      if (props.modelModifiers?.nullify) {
        value ||= null;
      }
      modelValue.value = value;
      emitFormInput();
    }
    function onInput(event) {
      autoResize();
      if (!props.modelModifiers?.lazy) {
        updateInput(event.target.value);
      }
    }
    function onChange(event) {
      const value = event.target.value;
      if (props.modelModifiers?.lazy) {
        updateInput(value);
      }
      if (props.modelModifiers?.trim) {
        event.target.value = value.trim();
      }
      emitFormChange();
      emits("change", event);
    }
    function onBlur(event) {
      emitFormBlur();
      emits("blur", event);
    }
    function autoResize() {
      if (props.autoresize && textareaRef.value) {
        textareaRef.value.rows = props.rows;
        const overflow = textareaRef.value.style.overflow;
        textareaRef.value.style.overflow = "hidden";
        const styles = (void 0).getComputedStyle(textareaRef.value);
        const paddingTop = Number.parseInt(styles.paddingTop);
        const paddingBottom = Number.parseInt(styles.paddingBottom);
        const padding = paddingTop + paddingBottom;
        const lineHeight = Number.parseInt(styles.lineHeight);
        const { scrollHeight } = textareaRef.value;
        const newRows = (scrollHeight - padding) / lineHeight;
        if (newRows > props.rows) {
          textareaRef.value.rows = props.maxrows ? Math.min(newRows, props.maxrows) : newRows;
        }
        textareaRef.value.style.overflow = overflow;
      }
    }
    watch(modelValue, () => {
      nextTick(autoResize);
    });
    __expose({
      textareaRef
    });
    return (_ctx, _push, _parent, _attrs) => {
      let _temp0;
      _push(ssrRenderComponent(unref(Primitive), mergeProps({
        as: __props.as,
        class: ui.value.root({ class: [props.ui?.root, props.class] })
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<textarea${ssrRenderAttrs(_temp0 = mergeProps({
              id: unref(id),
              ref_key: "textareaRef",
              ref: textareaRef,
              value: unref(modelValue),
              name: unref(name),
              rows: __props.rows,
              placeholder: __props.placeholder,
              class: ui.value.base({ class: props.ui?.base }),
              disabled: unref(disabled),
              required: __props.required
            }, { ..._ctx.$attrs, ...unref(ariaAttrs) }), "textarea")}${_scopeId}>${ssrInterpolate("value" in _temp0 ? _temp0.value : "")}</textarea>`);
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
            if (unref(isLeading) || !!__props.avatar || !!slots.leading) {
              _push2(`<span class="${ssrRenderClass(ui.value.leading({ class: props.ui?.leading }))}"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "leading", {}, () => {
                if (unref(isLeading) && unref(leadingIconName)) {
                  _push2(ssrRenderComponent(_sfc_main$g, {
                    name: unref(leadingIconName),
                    class: ui.value.leadingIcon({ class: props.ui?.leadingIcon })
                  }, null, _parent2, _scopeId));
                } else if (!!__props.avatar) {
                  _push2(ssrRenderComponent(_sfc_main$d, mergeProps({
                    size: props.ui?.leadingAvatarSize || ui.value.leadingAvatarSize()
                  }, __props.avatar, {
                    class: ui.value.leadingAvatar({ class: props.ui?.leadingAvatar })
                  }), null, _parent2, _scopeId));
                } else {
                  _push2(`<!---->`);
                }
              }, _push2, _parent2, _scopeId);
              _push2(`</span>`);
            } else {
              _push2(`<!---->`);
            }
            if (unref(isTrailing) || !!slots.trailing) {
              _push2(`<span class="${ssrRenderClass(ui.value.trailing({ class: props.ui?.trailing }))}"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "trailing", {}, () => {
                if (unref(trailingIconName)) {
                  _push2(ssrRenderComponent(_sfc_main$g, {
                    name: unref(trailingIconName),
                    class: ui.value.trailingIcon({ class: props.ui?.trailingIcon })
                  }, null, _parent2, _scopeId));
                } else {
                  _push2(`<!---->`);
                }
              }, _push2, _parent2, _scopeId);
              _push2(`</span>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createVNode("textarea", mergeProps({
                id: unref(id),
                ref_key: "textareaRef",
                ref: textareaRef,
                value: unref(modelValue),
                name: unref(name),
                rows: __props.rows,
                placeholder: __props.placeholder,
                class: ui.value.base({ class: props.ui?.base }),
                disabled: unref(disabled),
                required: __props.required
              }, { ..._ctx.$attrs, ...unref(ariaAttrs) }, {
                onInput,
                onBlur,
                onChange,
                onFocus: unref(emitFormFocus)
              }), null, 16, ["id", "value", "name", "rows", "placeholder", "disabled", "required", "onFocus"]),
              renderSlot(_ctx.$slots, "default"),
              unref(isLeading) || !!__props.avatar || !!slots.leading ? (openBlock(), createBlock("span", {
                key: 0,
                class: ui.value.leading({ class: props.ui?.leading })
              }, [
                renderSlot(_ctx.$slots, "leading", {}, () => [
                  unref(isLeading) && unref(leadingIconName) ? (openBlock(), createBlock(_sfc_main$g, {
                    key: 0,
                    name: unref(leadingIconName),
                    class: ui.value.leadingIcon({ class: props.ui?.leadingIcon })
                  }, null, 8, ["name", "class"])) : !!__props.avatar ? (openBlock(), createBlock(_sfc_main$d, mergeProps({
                    key: 1,
                    size: props.ui?.leadingAvatarSize || ui.value.leadingAvatarSize()
                  }, __props.avatar, {
                    class: ui.value.leadingAvatar({ class: props.ui?.leadingAvatar })
                  }), null, 16, ["size", "class"])) : createCommentVNode("", true)
                ])
              ], 2)) : createCommentVNode("", true),
              unref(isTrailing) || !!slots.trailing ? (openBlock(), createBlock("span", {
                key: 1,
                class: ui.value.trailing({ class: props.ui?.trailing })
              }, [
                renderSlot(_ctx.$slots, "trailing", {}, () => [
                  unref(trailingIconName) ? (openBlock(), createBlock(_sfc_main$g, {
                    key: 0,
                    name: unref(trailingIconName),
                    class: ui.value.trailingIcon({ class: props.ui?.trailingIcon })
                  }, null, 8, ["name", "class"])) : createCommentVNode("", true)
                ])
              ], 2)) : createCommentVNode("", true)
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/Textarea.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const levels = [100, 200, 300, 400, 500, 600, 700];
const semesters = ["rain", "harmattan"];
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "creator",
  __ssrInlineRender: true,
  props: {
    "open": { type: Boolean, ...{ default: false } },
    "openModifiers": {}
  },
  emits: /* @__PURE__ */ mergeModels(["done"], ["update:open"]),
  setup(__props, { emit: __emit }) {
    const toast = useToast();
    const emit = __emit;
    const state = ref({});
    const open = useModel(__props, "open");
    watch(open, (value) => {
      if (value === false) {
        state.value = {};
      }
    });
    async function handleSubmit(event) {
      try {
        const { message } = await $fetch("/api/users/admin/courses", {
          method: "POST",
          body: event.data
        });
        emit("done");
        state.value = {};
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
      const _component_NuxtForm = _sfc_main$1$1;
      const _component_NuxtFormField = _sfc_main$c;
      const _component_NuxtInput = _sfc_main$7;
      const _component_NuxtSelect = _sfc_main$b;
      const _component_AppFacultySelect = __nuxt_component_6$1;
      const _component_NuxtTextarea = _sfc_main$4;
      const _component_NuxtButton = _sfc_main$a;
      _push(ssrRenderComponent(_component_NuxtModal, mergeProps({
        open: open.value,
        "onUpdate:open": ($event) => open.value = $event,
        title: `New Course: ${unref(state).code}`,
        description: unref(state).title,
        dismissible: false
      }, _attrs), {
        body: withCtx(({ close: closeModal }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_NuxtForm, {
              state: unref(state),
              schema: unref(courseEditSchema),
              class: "space-y-5",
              onSubmit: handleSubmit
            }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_NuxtFormField, {
                    name: "code",
                    label: "Code",
                    required: ""
                  }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_NuxtInput, {
                          modelValue: unref(state).code,
                          "onUpdate:modelValue": ($event) => unref(state).code = $event,
                          size: "lg",
                          class: "w-full"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_NuxtInput, {
                            modelValue: unref(state).code,
                            "onUpdate:modelValue": ($event) => unref(state).code = $event,
                            size: "lg",
                            class: "w-full"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_NuxtFormField, {
                    name: "title",
                    label: "Title",
                    required: ""
                  }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_NuxtInput, {
                          modelValue: unref(state).title,
                          "onUpdate:modelValue": ($event) => unref(state).title = $event,
                          size: "lg",
                          class: "w-full"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_NuxtInput, {
                            modelValue: unref(state).title,
                            "onUpdate:modelValue": ($event) => unref(state).title = $event,
                            size: "lg",
                            class: "w-full"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_NuxtFormField, {
                    name: "level",
                    label: "Level",
                    required: ""
                  }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_NuxtSelect, {
                          modelValue: unref(state).level,
                          "onUpdate:modelValue": ($event) => unref(state).level = $event,
                          items: unref(levels),
                          size: "lg",
                          class: "w-full"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_NuxtSelect, {
                            modelValue: unref(state).level,
                            "onUpdate:modelValue": ($event) => unref(state).level = $event,
                            items: unref(levels),
                            size: "lg",
                            class: "w-full"
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_NuxtFormField, {
                    name: "semester",
                    label: "Semester",
                    required: ""
                  }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_NuxtSelect, {
                          modelValue: unref(state).semester,
                          "onUpdate:modelValue": ($event) => unref(state).semester = $event,
                          items: unref(semesters),
                          size: "lg",
                          class: "w-full"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_NuxtSelect, {
                            modelValue: unref(state).semester,
                            "onUpdate:modelValue": ($event) => unref(state).semester = $event,
                            items: unref(semesters),
                            size: "lg",
                            class: "w-full"
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_NuxtFormField, {
                    name: "department",
                    label: "Department"
                  }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_AppFacultySelect, {
                          department: unref(state).department,
                          "onUpdate:department": ($event) => unref(state).department = $event,
                          item: "department",
                          size: "lg",
                          class: "w-full"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_AppFacultySelect, {
                            department: unref(state).department,
                            "onUpdate:department": ($event) => unref(state).department = $event,
                            item: "department",
                            size: "lg",
                            class: "w-full"
                          }, null, 8, ["department", "onUpdate:department"])
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_NuxtFormField, {
                    name: "description",
                    label: "Description"
                  }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_NuxtTextarea, {
                          modelValue: unref(state).description,
                          "onUpdate:modelValue": ($event) => unref(state).description = $event,
                          rows: 3,
                          class: "w-full"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_NuxtTextarea, {
                            modelValue: unref(state).description,
                            "onUpdate:modelValue": ($event) => unref(state).description = $event,
                            rows: 3,
                            class: "w-full"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(`<div class="flex items-center gap-2.5 justify-end"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_NuxtButton, {
                    type: "button",
                    label: "Cancel",
                    color: "neutral",
                    variant: "soft",
                    onClick: closeModal
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
                      name: "code",
                      label: "Code",
                      required: ""
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_NuxtInput, {
                          modelValue: unref(state).code,
                          "onUpdate:modelValue": ($event) => unref(state).code = $event,
                          size: "lg",
                          class: "w-full"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_NuxtFormField, {
                      name: "title",
                      label: "Title",
                      required: ""
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_NuxtInput, {
                          modelValue: unref(state).title,
                          "onUpdate:modelValue": ($event) => unref(state).title = $event,
                          size: "lg",
                          class: "w-full"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_NuxtFormField, {
                      name: "level",
                      label: "Level",
                      required: ""
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_NuxtSelect, {
                          modelValue: unref(state).level,
                          "onUpdate:modelValue": ($event) => unref(state).level = $event,
                          items: unref(levels),
                          size: "lg",
                          class: "w-full"
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_NuxtFormField, {
                      name: "semester",
                      label: "Semester",
                      required: ""
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_NuxtSelect, {
                          modelValue: unref(state).semester,
                          "onUpdate:modelValue": ($event) => unref(state).semester = $event,
                          items: unref(semesters),
                          size: "lg",
                          class: "w-full"
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_NuxtFormField, {
                      name: "department",
                      label: "Department"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_AppFacultySelect, {
                          department: unref(state).department,
                          "onUpdate:department": ($event) => unref(state).department = $event,
                          item: "department",
                          size: "lg",
                          class: "w-full"
                        }, null, 8, ["department", "onUpdate:department"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_NuxtFormField, {
                      name: "description",
                      label: "Description"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_NuxtTextarea, {
                          modelValue: unref(state).description,
                          "onUpdate:modelValue": ($event) => unref(state).description = $event,
                          rows: 3,
                          class: "w-full"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode("div", { class: "flex items-center gap-2.5 justify-end" }, [
                      createVNode(_component_NuxtButton, {
                        type: "button",
                        label: "Cancel",
                        color: "neutral",
                        variant: "soft",
                        onClick: closeModal
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
                  schema: unref(courseEditSchema),
                  class: "space-y-5",
                  onSubmit: handleSubmit
                }, {
                  default: withCtx(() => [
                    createVNode(_component_NuxtFormField, {
                      name: "code",
                      label: "Code",
                      required: ""
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_NuxtInput, {
                          modelValue: unref(state).code,
                          "onUpdate:modelValue": ($event) => unref(state).code = $event,
                          size: "lg",
                          class: "w-full"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_NuxtFormField, {
                      name: "title",
                      label: "Title",
                      required: ""
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_NuxtInput, {
                          modelValue: unref(state).title,
                          "onUpdate:modelValue": ($event) => unref(state).title = $event,
                          size: "lg",
                          class: "w-full"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_NuxtFormField, {
                      name: "level",
                      label: "Level",
                      required: ""
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_NuxtSelect, {
                          modelValue: unref(state).level,
                          "onUpdate:modelValue": ($event) => unref(state).level = $event,
                          items: unref(levels),
                          size: "lg",
                          class: "w-full"
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_NuxtFormField, {
                      name: "semester",
                      label: "Semester",
                      required: ""
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_NuxtSelect, {
                          modelValue: unref(state).semester,
                          "onUpdate:modelValue": ($event) => unref(state).semester = $event,
                          items: unref(semesters),
                          size: "lg",
                          class: "w-full"
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_NuxtFormField, {
                      name: "department",
                      label: "Department"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_AppFacultySelect, {
                          department: unref(state).department,
                          "onUpdate:department": ($event) => unref(state).department = $event,
                          item: "department",
                          size: "lg",
                          class: "w-full"
                        }, null, 8, ["department", "onUpdate:department"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_NuxtFormField, {
                      name: "description",
                      label: "Description"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_NuxtTextarea, {
                          modelValue: unref(state).description,
                          "onUpdate:modelValue": ($event) => unref(state).description = $event,
                          rows: 3,
                          class: "w-full"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode("div", { class: "flex items-center gap-2.5 justify-end" }, [
                      createVNode(_component_NuxtButton, {
                        type: "button",
                        label: "Cancel",
                        color: "neutral",
                        variant: "soft",
                        onClick: closeModal
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
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/admin/course/creator.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_2 = Object.assign(_sfc_main$3, { __name: "AdminCourseCreator" });
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "editor",
  __ssrInlineRender: true,
  props: {
    course: {}
  },
  emits: ["done"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const toast = useToast();
    const emit = __emit;
    const state = ref({
      ...__props.course,
      department: { label: __props.course.department, value: "", faculty: __props.course.faculty }
    });
    watch(
      () => __props.course,
      (value) => {
        state.value = {
          ...value,
          department: {
            label: value.department,
            value: "",
            faculty: value.faculty
          }
        };
      }
    );
    async function handleSubmit(event) {
      try {
        const { message } = await $fetch(`/api/users/admin/courses/${__props.course.id}`, {
          method: "PUT",
          body: event.data
        });
        emit("done");
        close();
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
    const isOpen = ref(false);
    function open() {
      isOpen.value = true;
    }
    function close() {
      isOpen.value = false;
    }
    __expose({ open, close });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtModal = _sfc_main$4$1;
      const _component_NuxtForm = _sfc_main$1$1;
      const _component_NuxtFormField = _sfc_main$c;
      const _component_NuxtInput = _sfc_main$7;
      const _component_NuxtSelect = _sfc_main$b;
      const _component_AppFacultySelect = __nuxt_component_6$1;
      const _component_NuxtTextarea = _sfc_main$4;
      const _component_NuxtButton = _sfc_main$a;
      _push(ssrRenderComponent(_component_NuxtModal, mergeProps({
        open: unref(isOpen),
        "onUpdate:open": ($event) => isRef(isOpen) ? isOpen.value = $event : null,
        title: `Edit ${_ctx.course.code}`,
        description: _ctx.course.title,
        dismissible: false
      }, _attrs), {
        body: withCtx(({ close: closeModal }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_NuxtForm, {
              state: unref(state),
              schema: unref(courseEditSchema),
              class: "space-y-5",
              onSubmit: handleSubmit
            }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_NuxtFormField, {
                    name: "code",
                    label: "Code",
                    required: ""
                  }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_NuxtInput, {
                          modelValue: unref(state).code,
                          "onUpdate:modelValue": ($event) => unref(state).code = $event,
                          size: "lg",
                          class: "w-full"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_NuxtInput, {
                            modelValue: unref(state).code,
                            "onUpdate:modelValue": ($event) => unref(state).code = $event,
                            size: "lg",
                            class: "w-full"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_NuxtFormField, {
                    name: "title",
                    label: "Title",
                    required: ""
                  }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_NuxtInput, {
                          modelValue: unref(state).title,
                          "onUpdate:modelValue": ($event) => unref(state).title = $event,
                          size: "lg",
                          class: "w-full"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_NuxtInput, {
                            modelValue: unref(state).title,
                            "onUpdate:modelValue": ($event) => unref(state).title = $event,
                            size: "lg",
                            class: "w-full"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_NuxtFormField, {
                    name: "level",
                    label: "Level",
                    required: ""
                  }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_NuxtSelect, {
                          modelValue: unref(state).level,
                          "onUpdate:modelValue": ($event) => unref(state).level = $event,
                          items: unref(levels),
                          size: "lg",
                          class: "w-full"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_NuxtSelect, {
                            modelValue: unref(state).level,
                            "onUpdate:modelValue": ($event) => unref(state).level = $event,
                            items: unref(levels),
                            size: "lg",
                            class: "w-full"
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_NuxtFormField, {
                    name: "semester",
                    label: "Semester",
                    required: ""
                  }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_NuxtSelect, {
                          modelValue: unref(state).semester,
                          "onUpdate:modelValue": ($event) => unref(state).semester = $event,
                          items: unref(semesters),
                          size: "lg",
                          class: "w-full"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_NuxtSelect, {
                            modelValue: unref(state).semester,
                            "onUpdate:modelValue": ($event) => unref(state).semester = $event,
                            items: unref(semesters),
                            size: "lg",
                            class: "w-full"
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_NuxtFormField, {
                    name: "department",
                    label: "Department"
                  }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_AppFacultySelect, {
                          department: unref(state).department,
                          "onUpdate:department": ($event) => unref(state).department = $event,
                          item: "department",
                          size: "lg",
                          class: "w-full"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_AppFacultySelect, {
                            department: unref(state).department,
                            "onUpdate:department": ($event) => unref(state).department = $event,
                            item: "department",
                            size: "lg",
                            class: "w-full"
                          }, null, 8, ["department", "onUpdate:department"])
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_NuxtFormField, {
                    name: "description",
                    label: "Description"
                  }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_NuxtTextarea, {
                          modelValue: unref(state).description,
                          "onUpdate:modelValue": ($event) => unref(state).description = $event,
                          rows: 3,
                          class: "w-full"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_NuxtTextarea, {
                            modelValue: unref(state).description,
                            "onUpdate:modelValue": ($event) => unref(state).description = $event,
                            rows: 3,
                            class: "w-full"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(`<div class="flex items-center gap-2.5 justify-end"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_NuxtButton, {
                    type: "button",
                    label: "Cancel",
                    color: "neutral",
                    variant: "soft",
                    onClick: closeModal
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
                      name: "code",
                      label: "Code",
                      required: ""
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_NuxtInput, {
                          modelValue: unref(state).code,
                          "onUpdate:modelValue": ($event) => unref(state).code = $event,
                          size: "lg",
                          class: "w-full"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_NuxtFormField, {
                      name: "title",
                      label: "Title",
                      required: ""
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_NuxtInput, {
                          modelValue: unref(state).title,
                          "onUpdate:modelValue": ($event) => unref(state).title = $event,
                          size: "lg",
                          class: "w-full"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_NuxtFormField, {
                      name: "level",
                      label: "Level",
                      required: ""
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_NuxtSelect, {
                          modelValue: unref(state).level,
                          "onUpdate:modelValue": ($event) => unref(state).level = $event,
                          items: unref(levels),
                          size: "lg",
                          class: "w-full"
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_NuxtFormField, {
                      name: "semester",
                      label: "Semester",
                      required: ""
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_NuxtSelect, {
                          modelValue: unref(state).semester,
                          "onUpdate:modelValue": ($event) => unref(state).semester = $event,
                          items: unref(semesters),
                          size: "lg",
                          class: "w-full"
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_NuxtFormField, {
                      name: "department",
                      label: "Department"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_AppFacultySelect, {
                          department: unref(state).department,
                          "onUpdate:department": ($event) => unref(state).department = $event,
                          item: "department",
                          size: "lg",
                          class: "w-full"
                        }, null, 8, ["department", "onUpdate:department"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_NuxtFormField, {
                      name: "description",
                      label: "Description"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_NuxtTextarea, {
                          modelValue: unref(state).description,
                          "onUpdate:modelValue": ($event) => unref(state).description = $event,
                          rows: 3,
                          class: "w-full"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode("div", { class: "flex items-center gap-2.5 justify-end" }, [
                      createVNode(_component_NuxtButton, {
                        type: "button",
                        label: "Cancel",
                        color: "neutral",
                        variant: "soft",
                        onClick: closeModal
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
                  schema: unref(courseEditSchema),
                  class: "space-y-5",
                  onSubmit: handleSubmit
                }, {
                  default: withCtx(() => [
                    createVNode(_component_NuxtFormField, {
                      name: "code",
                      label: "Code",
                      required: ""
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_NuxtInput, {
                          modelValue: unref(state).code,
                          "onUpdate:modelValue": ($event) => unref(state).code = $event,
                          size: "lg",
                          class: "w-full"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_NuxtFormField, {
                      name: "title",
                      label: "Title",
                      required: ""
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_NuxtInput, {
                          modelValue: unref(state).title,
                          "onUpdate:modelValue": ($event) => unref(state).title = $event,
                          size: "lg",
                          class: "w-full"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_NuxtFormField, {
                      name: "level",
                      label: "Level",
                      required: ""
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_NuxtSelect, {
                          modelValue: unref(state).level,
                          "onUpdate:modelValue": ($event) => unref(state).level = $event,
                          items: unref(levels),
                          size: "lg",
                          class: "w-full"
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_NuxtFormField, {
                      name: "semester",
                      label: "Semester",
                      required: ""
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_NuxtSelect, {
                          modelValue: unref(state).semester,
                          "onUpdate:modelValue": ($event) => unref(state).semester = $event,
                          items: unref(semesters),
                          size: "lg",
                          class: "w-full"
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_NuxtFormField, {
                      name: "department",
                      label: "Department"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_AppFacultySelect, {
                          department: unref(state).department,
                          "onUpdate:department": ($event) => unref(state).department = $event,
                          item: "department",
                          size: "lg",
                          class: "w-full"
                        }, null, 8, ["department", "onUpdate:department"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_NuxtFormField, {
                      name: "description",
                      label: "Description"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_NuxtTextarea, {
                          modelValue: unref(state).description,
                          "onUpdate:modelValue": ($event) => unref(state).description = $event,
                          rows: 3,
                          class: "w-full"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode("div", { class: "flex items-center gap-2.5 justify-end" }, [
                      createVNode(_component_NuxtButton, {
                        type: "button",
                        label: "Cancel",
                        color: "neutral",
                        variant: "soft",
                        onClick: closeModal
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
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/admin/course/editor.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_9 = Object.assign(_sfc_main$2, { __name: "AdminCourseEditor" });
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "deleter",
  __ssrInlineRender: true,
  props: {
    courseId: {}
  },
  emits: ["done"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const toast = useToast();
    const emit = __emit;
    async function handleDelete() {
      try {
        const { message } = await $fetch(`/api/users/admin/courses/${__props.courseId}`, {
          method: "DELETE"
        });
        emit("done");
        close();
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
    const isOpen = ref(false);
    function open() {
      isOpen.value = true;
    }
    function close() {
      isOpen.value = false;
    }
    __expose({ open, close });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtModal = _sfc_main$4$1;
      const _component_NuxtButton = _sfc_main$a;
      _push(ssrRenderComponent(_component_NuxtModal, mergeProps({
        open: unref(isOpen),
        "onUpdate:open": ($event) => isRef(isOpen) ? isOpen.value = $event : null,
        title: "Delete Course",
        description: "Are you sure you want to delete this course? This action cannot be undone",
        dismissible: false
      }, _attrs), {
        body: withCtx(({ close: closeModal }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex items-center gap-2.5 justify-end"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_NuxtButton, {
              type: "button",
              label: "Cancel",
              color: "neutral",
              variant: "soft",
              onClick: closeModal
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_NuxtButton, {
              label: "Delete",
              color: "error",
              "loading-auto": "",
              onClick: handleDelete
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "flex items-center gap-2.5 justify-end" }, [
                createVNode(_component_NuxtButton, {
                  type: "button",
                  label: "Cancel",
                  color: "neutral",
                  variant: "soft",
                  onClick: closeModal
                }, null, 8, ["onClick"]),
                createVNode(_component_NuxtButton, {
                  label: "Delete",
                  color: "error",
                  "loading-auto": "",
                  onClick: handleDelete
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
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/admin/course/deleter.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_10 = Object.assign(_sfc_main$1, { __name: "AdminCourseDeleter" });
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const table = useTemplateRef("table");
    const editor = useTemplateRef("editor");
    const deleter = useTemplateRef("deleter");
    const Badge = _sfc_main$5;
    const Button = _sfc_main$a;
    const open = ref(false);
    const search = ref("");
    const pagination = ref({
      pageIndex: 0,
      pageSize: 10
    });
    const { data, error, pending, refresh } = ([__temp, __restore] = withAsyncContext(() => useFetch(
      `/api/general/courses`,
      "$_HMAheFvKI"
    )), __temp = await __temp, __restore(), __temp);
    const courses = computed(() => {
      if (!data.value) {
        return [];
      }
      const searchValue = search.value.toLowerCase();
      return data.value.map((item) => {
        return {
          id: item.id,
          code: item.code,
          level: item.level,
          title: item.title,
          description: item.description,
          semester: item.semester,
          department: item.department.name,
          faculty: item.faculty.name
        };
      }).filter((course) => {
        return course.code.toLowerCase().includes(searchValue) || course.title.toLowerCase().includes(searchValue) || (course.description?.toLowerCase() ?? "").includes(searchValue) || course.department.toLowerCase().includes(searchValue) || course.faculty.toLowerCase().includes(searchValue);
      });
    });
    const selectedCourse = ref(null);
    const columns = [
      {
        id: "expand",
        cell: ({ row }) => h(Button, {
          color: "neutral",
          variant: "ghost",
          icon: "i-lucide-chevron-down",
          square: true,
          "aria-label": "Expand",
          ui: {
            leadingIcon: [
              "transition-transform",
              row.getIsExpanded() ? "duration-200 rotate-180" : ""
            ]
          },
          onClick: () => row.toggleExpanded()
        })
      },
      { accessorKey: "code", header: "Code" },
      { accessorKey: "title", header: "Title" },
      { accessorKey: "level", header: "Level" },
      {
        accessorKey: "semester",
        header: "Semester",
        cell: ({ row }) => {
          const value = row.getValue("semester");
          const color = value === "rain" ? "primary" : "secondary";
          return h(Badge, { color, variant: "subtle" }, value);
        }
      },
      { accessorKey: "department", header: "Department" },
      { accessorKey: "faculty", header: "Faculty" },
      {
        id: "edit",
        cell: ({ row }) => {
          return h(Button, {
            label: "Edit",
            icon: "lucide:edit",
            color: "neutral",
            variant: "soft",
            size: "sm",
            onClick: () => {
              selectCourse(row.original.id);
              editor.value?.open();
            }
          });
        }
      },
      {
        id: "delete",
        cell: ({ row }) => {
          return h(Button, {
            label: "Delete",
            icon: "lucide:trash-2",
            color: "error",
            variant: "soft",
            size: "sm",
            onClick: () => {
              selectCourse(row.original.id);
              deleter.value?.open();
            }
          });
        }
      }
    ];
    function selectCourse(id) {
      selectedCourse.value = courses.value.find((course) => course.id === id) ?? null;
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtBadge = _sfc_main$5;
      const _component_NuxtButton = _sfc_main$a;
      const _component_AdminCourseCreator = __nuxt_component_2;
      const _component_FetchErrorAlert = __nuxt_component_6;
      const _component_NuxtButtonGroup = _sfc_main$6;
      const _component_NuxtInput = _sfc_main$7;
      const _component_NuxtTable = _sfc_main$8;
      const _component_NuxtPagination = _sfc_main$9;
      const _component_NuxtSelect = _sfc_main$b;
      const _component_AdminCourseEditor = __nuxt_component_9;
      const _component_AdminCourseDeleter = __nuxt_component_10;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "p-5" }, _attrs))}><header><div class="flex items-center gap-5 justify-between"><div class="text-lg font-bold flex items-center gap-1"><h1>Courses</h1>`);
      _push(ssrRenderComponent(_component_NuxtBadge, {
        label: unref(courses).length,
        variant: "subtle"
      }, null, _parent));
      _push(`</div><div>`);
      _push(ssrRenderComponent(_component_NuxtButton, {
        label: "New Course",
        icon: "lucide:plus",
        onClick: ($event) => open.value = true
      }, null, _parent));
      _push(ssrRenderComponent(_component_AdminCourseCreator, {
        open: unref(open),
        "onUpdate:open": ($event) => isRef(open) ? open.value = $event : null,
        onDone: () => unref(refresh)()
      }, null, _parent));
      _push(`</div></div></header><section class="mt-2.5">`);
      if (unref(error)) {
        _push(`<div>`);
        _push(ssrRenderComponent(_component_FetchErrorAlert, {
          message: ("normalizeException" in _ctx ? _ctx.normalizeException : unref(normalizeException))(unref(error)).message,
          "show-retry": "",
          onRetry: unref(refresh)
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div>`);
      _push(ssrRenderComponent(_component_NuxtButtonGroup, { class: "w-full md:w-fit" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_NuxtInput, {
              modelValue: unref(search),
              "onUpdate:modelValue": ($event) => isRef(search) ? search.value = $event : null,
              placeholder: "Search...",
              class: "w-full md:w-fit"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_NuxtButton, {
              icon: "lucide:search",
              color: "neutral",
              variant: "outline"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_NuxtInput, {
                modelValue: unref(search),
                "onUpdate:modelValue": ($event) => isRef(search) ? search.value = $event : null,
                placeholder: "Search...",
                class: "w-full md:w-fit"
              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
              createVNode(_component_NuxtButton, {
                icon: "lucide:search",
                color: "neutral",
                variant: "outline"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></section><div class="mt-5">`);
      _push(ssrRenderComponent(_component_NuxtTable, {
        ref_key: "table",
        ref: table,
        pagination: unref(pagination),
        "onUpdate:pagination": ($event) => isRef(pagination) ? pagination.value = $event : null,
        data: unref(courses),
        columns,
        "pagination-options": {
          getPaginationRowModel: unref(getPaginationRowModel)()
        },
        loading: unref(pending),
        ui: { tr: "data-[expanded=true]:bg-elevated/50" }
      }, {
        expanded: withCtx(({ row }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="space-y-1.5"${_scopeId}><p class="text-sm text-muted font-semibold"${_scopeId}>Course Description:</p><div class="whitespace-pre-wrap font-mono"${_scopeId}>${ssrInterpolate(row.original.description)}</div></div>`);
          } else {
            return [
              createVNode("div", { class: "space-y-1.5" }, [
                createVNode("p", { class: "text-sm text-muted font-semibold" }, "Course Description:"),
                createVNode("div", { class: "whitespace-pre-wrap font-mono" }, toDisplayString(row.original.description), 1)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="flex justify-center gap-1.5 border-t border-default pt-4">`);
      _push(ssrRenderComponent(_component_NuxtPagination, {
        "default-page": (unref(table)?.tableApi?.getState().pagination.pageIndex || 0) + 1,
        "items-per-page": unref(table)?.tableApi?.getState().pagination.pageSize,
        total: unref(table)?.tableApi?.getFilteredRowModel().rows.length,
        "sibling-count": 1,
        "onUpdate:page": (p) => unref(table)?.tableApi?.setPageIndex(p - 1)
      }, null, _parent));
      _push(ssrRenderComponent(_component_NuxtSelect, {
        modelValue: unref(pagination).pageSize,
        "onUpdate:modelValue": ($event) => unref(pagination).pageSize = $event,
        items: [5, 10, 15, 20, 25, 30, 40, 50, 100],
        class: "w-20"
      }, null, _parent));
      _push(`</div>`);
      if (unref(selectedCourse)) {
        _push(`<div>`);
        _push(ssrRenderComponent(_component_AdminCourseEditor, {
          ref_key: "editor",
          ref: editor,
          course: unref(selectedCourse),
          onDone: () => unref(refresh)()
        }, null, _parent));
        _push(ssrRenderComponent(_component_AdminCourseDeleter, {
          ref_key: "deleter",
          ref: deleter,
          "course-id": unref(selectedCourse).id,
          onDone: () => unref(refresh)()
        }, null, _parent));
        _push(`</div>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/portal/admin/courses/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-YPLglm1C.mjs.map
