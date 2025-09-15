import { _ as __nuxt_component_0 } from './fetch-error-alert-B8bl2QEk.mjs';
import { _ as _sfc_main$2, a as _sfc_main$1$1, b as _sfc_main$3 } from './Input-CCJ7d-_Y.mjs';
import { _ as _sfc_main$4 } from './Select-C7uJeeGx.mjs';
import { defineComponent, withAsyncContext, computed, reactive, mergeProps, unref, withCtx, createVNode, createBlock, openBlock, mergeModels, useSlots, useModel, toRef, ref, renderSlot, createTextVNode, toDisplayString, withModifiers, createCommentVNode, Fragment, renderList, toRaw, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass, ssrRenderSlot, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { useFilter, useForwardPropsEmits, ComboboxGroup, ComboboxItem, ComboboxRoot, ComboboxAnchor, ComboboxTrigger, ComboboxPortal, ComboboxContent, FocusScope, ComboboxInput, ComboboxEmpty, ComboboxLabel, ComboboxSeparator, ComboboxItemIndicator, ComboboxArrow } from 'reka-ui';
import { S as normalizeException, A as defu } from '../nitro/nitro.mjs';
import { reactivePick, createReusableTemplate } from '@vueuse/core';
import { j as useToast, b as _sfc_main$a, A as useLocale, g as useAppConfig, p as usePortal, h as useFormField, y as useButtonGroup, z as useComponentIcons, t as tv, q as isArrayOfArray, r as get, B as compare, d as _sfc_main$g, e as _sfc_main$d, C as _sfc_main$e, D as getDisplayValue, n as navigateTo } from './server.mjs';
import { C as Calendar } from './calendar-XO0HMjV5.mjs';
import handlePreviousClick from './handle-previous-click-BeA8N4p8.mjs';
import { c as applicationPersonalSchema } from '../_/application.schema.mjs';
import { save } from './handle-save-click-d4tY2V9Z.mjs';
import { u as useRouteParams } from './use-route-params-CEfBdTX9.mjs';
import { u as useFetch } from './fetch-CBnx1667.mjs';
import { V as VueMultiSelectButton } from './multi-select-button-Djn_smQ_.mjs';
import './Alert-Cl3Q0djP.mjs';
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
import 'zod';
import '@vue/shared';
import './DropdownMenu-S-1UpFjl.mjs';
import 'reka-ui/namespaced';

const theme = {
  "slots": {
    "base": [
      "relative group rounded-md inline-flex items-center focus:outline-none disabled:cursor-not-allowed disabled:opacity-75",
      "transition-colors"
    ],
    "leading": "absolute inset-y-0 start-0 flex items-center",
    "leadingIcon": "shrink-0 text-dimmed",
    "leadingAvatar": "shrink-0",
    "leadingAvatarSize": "",
    "trailing": "absolute inset-y-0 end-0 flex items-center",
    "trailingIcon": "shrink-0 text-dimmed",
    "value": "truncate pointer-events-none",
    "placeholder": "truncate text-dimmed",
    "arrow": "fill-default",
    "content": [
      "max-h-60 w-(--reka-select-trigger-width) bg-default shadow-lg rounded-md ring ring-default overflow-hidden data-[state=open]:animate-[scale-in_100ms_ease-out] data-[state=closed]:animate-[scale-out_100ms_ease-in] origin-(--reka-select-content-transform-origin) pointer-events-auto flex flex-col",
      "origin-(--reka-combobox-content-transform-origin) w-(--reka-combobox-trigger-width)"
    ],
    "viewport": "relative divide-y divide-default scroll-py-1 overflow-y-auto flex-1",
    "group": "p-1 isolate",
    "empty": "text-center text-muted",
    "label": "font-semibold text-highlighted",
    "separator": "-mx-1 my-1 h-px bg-border",
    "item": [
      "group relative w-full flex items-center select-none outline-none before:absolute before:z-[-1] before:inset-px before:rounded-md data-disabled:cursor-not-allowed data-disabled:opacity-75 text-default data-highlighted:not-data-disabled:text-highlighted data-highlighted:not-data-disabled:before:bg-elevated/50",
      "transition-colors before:transition-colors"
    ],
    "itemLeadingIcon": [
      "shrink-0 text-dimmed group-data-highlighted:not-group-data-disabled:text-default",
      "transition-colors"
    ],
    "itemLeadingAvatar": "shrink-0",
    "itemLeadingAvatarSize": "",
    "itemLeadingChip": "shrink-0",
    "itemLeadingChipSize": "",
    "itemTrailing": "ms-auto inline-flex gap-1.5 items-center",
    "itemTrailingIcon": "shrink-0",
    "itemLabel": "truncate",
    "input": "border-b border-default",
    "focusScope": "flex flex-col min-h-0"
  },
  "variants": {
    "buttonGroup": {
      "horizontal": "not-only:first:rounded-e-none not-only:last:rounded-s-none not-last:not-first:rounded-none focus-visible:z-[1]",
      "vertical": "not-only:first:rounded-b-none not-only:last:rounded-t-none not-last:not-first:rounded-none focus-visible:z-[1]"
    },
    "size": {
      "xs": {
        "base": "px-2 py-1 text-xs gap-1",
        "leading": "ps-2",
        "trailing": "pe-2",
        "leadingIcon": "size-4",
        "leadingAvatarSize": "3xs",
        "trailingIcon": "size-4",
        "label": "p-1 text-[10px]/3 gap-1",
        "item": "p-1 text-xs gap-1",
        "itemLeadingIcon": "size-4",
        "itemLeadingAvatarSize": "3xs",
        "itemLeadingChip": "size-4",
        "itemLeadingChipSize": "sm",
        "itemTrailingIcon": "size-4",
        "empty": "p-1 text-xs"
      },
      "sm": {
        "base": "px-2.5 py-1.5 text-xs gap-1.5",
        "leading": "ps-2.5",
        "trailing": "pe-2.5",
        "leadingIcon": "size-4",
        "leadingAvatarSize": "3xs",
        "trailingIcon": "size-4",
        "label": "p-1.5 text-[10px]/3 gap-1.5",
        "item": "p-1.5 text-xs gap-1.5",
        "itemLeadingIcon": "size-4",
        "itemLeadingAvatarSize": "3xs",
        "itemLeadingChip": "size-4",
        "itemLeadingChipSize": "sm",
        "itemTrailingIcon": "size-4",
        "empty": "p-1.5 text-xs"
      },
      "md": {
        "base": "px-2.5 py-1.5 text-sm gap-1.5",
        "leading": "ps-2.5",
        "trailing": "pe-2.5",
        "leadingIcon": "size-5",
        "leadingAvatarSize": "2xs",
        "trailingIcon": "size-5",
        "label": "p-1.5 text-xs gap-1.5",
        "item": "p-1.5 text-sm gap-1.5",
        "itemLeadingIcon": "size-5",
        "itemLeadingAvatarSize": "2xs",
        "itemLeadingChip": "size-5",
        "itemLeadingChipSize": "md",
        "itemTrailingIcon": "size-5",
        "empty": "p-1.5 text-sm"
      },
      "lg": {
        "base": "px-3 py-2 text-sm gap-2",
        "leading": "ps-3",
        "trailing": "pe-3",
        "leadingIcon": "size-5",
        "leadingAvatarSize": "2xs",
        "trailingIcon": "size-5",
        "label": "p-2 text-xs gap-2",
        "item": "p-2 text-sm gap-2",
        "itemLeadingIcon": "size-5",
        "itemLeadingAvatarSize": "2xs",
        "itemLeadingChip": "size-5",
        "itemLeadingChipSize": "md",
        "itemTrailingIcon": "size-5",
        "empty": "p-2 text-sm"
      },
      "xl": {
        "base": "px-3 py-2 text-base gap-2",
        "leading": "ps-3",
        "trailing": "pe-3",
        "leadingIcon": "size-6",
        "leadingAvatarSize": "xs",
        "trailingIcon": "size-6",
        "label": "p-2 text-sm gap-2",
        "item": "p-2 text-base gap-2",
        "itemLeadingIcon": "size-6",
        "itemLeadingAvatarSize": "xs",
        "itemLeadingChip": "size-6",
        "itemLeadingChipSize": "lg",
        "itemTrailingIcon": "size-6",
        "empty": "p-2 text-base"
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
const _sfc_main$1 = /* @__PURE__ */ Object.assign({ inheritAttrs: false }, {
  __name: "NuxtSelectMenu",
  __ssrInlineRender: true,
  props: /* @__PURE__ */ mergeModels({
    id: { type: String, required: false },
    placeholder: { type: String, required: false },
    searchInput: { type: [Boolean, Object], required: false, default: true },
    color: { type: null, required: false },
    variant: { type: null, required: false },
    size: { type: null, required: false },
    required: { type: Boolean, required: false },
    trailingIcon: { type: String, required: false },
    selectedIcon: { type: String, required: false },
    content: { type: Object, required: false },
    arrow: { type: [Boolean, Object], required: false },
    portal: { type: [Boolean, String], required: false, skipCheck: true, default: true },
    valueKey: { type: null, required: false },
    labelKey: { type: null, required: false, default: "label" },
    items: { type: null, required: false },
    defaultValue: { type: null, required: false },
    modelValue: { type: null, required: false },
    multiple: { type: Boolean, required: false },
    highlight: { type: Boolean, required: false },
    createItem: { type: [Boolean, String, Object], required: false },
    filterFields: { type: Array, required: false },
    ignoreFilter: { type: Boolean, required: false },
    autofocus: { type: Boolean, required: false },
    autofocusDelay: { type: Number, required: false, default: 0 },
    class: { type: null, required: false },
    ui: { type: null, required: false },
    open: { type: Boolean, required: false },
    defaultOpen: { type: Boolean, required: false },
    disabled: { type: Boolean, required: false },
    name: { type: String, required: false },
    resetSearchTermOnBlur: { type: Boolean, required: false, default: true },
    resetSearchTermOnSelect: { type: Boolean, required: false, default: true },
    highlightOnHover: { type: Boolean, required: false },
    icon: { type: String, required: false },
    avatar: { type: Object, required: false },
    leading: { type: Boolean, required: false },
    leadingIcon: { type: String, required: false },
    trailing: { type: Boolean, required: false },
    loading: { type: Boolean, required: false },
    loadingIcon: { type: String, required: false }
  }, {
    "searchTerm": { type: String, ...{ default: "" } },
    "searchTermModifiers": {}
  }),
  emits: /* @__PURE__ */ mergeModels(["update:open", "change", "blur", "focus", "create", "highlight", "update:modelValue"], ["update:searchTerm"]),
  setup(__props, { expose: __expose, emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const slots = useSlots();
    const searchTerm = useModel(__props, "searchTerm", { type: String, ...{ default: "" } });
    const { t } = useLocale();
    const appConfig = useAppConfig();
    const { contains } = useFilter({ sensitivity: "base" });
    const rootProps = useForwardPropsEmits(reactivePick(props, "modelValue", "defaultValue", "open", "defaultOpen", "required", "multiple", "resetSearchTermOnBlur", "resetSearchTermOnSelect", "highlightOnHover"), emits);
    const portalProps = usePortal(toRef(() => props.portal));
    const contentProps = toRef(() => defu(props.content, { side: "bottom", sideOffset: 8, collisionPadding: 8, position: "popper" }));
    const arrowProps = toRef(() => props.arrow);
    const searchInputProps = toRef(() => defu(props.searchInput, { placeholder: t("selectMenu.search"), variant: "none" }));
    const { emitFormBlur, emitFormFocus, emitFormInput, emitFormChange, size: formGroupSize, color, id, name, highlight, disabled, ariaAttrs } = useFormField(props);
    const { orientation, size: buttonGroupSize } = useButtonGroup(props);
    const { isLeading, isTrailing, leadingIconName, trailingIconName } = useComponentIcons(toRef(() => defu(props, { trailingIcon: appConfig.ui.icons.chevronDown })));
    const selectSize = computed(() => buttonGroupSize.value || formGroupSize.value);
    const [DefineCreateItemTemplate, ReuseCreateItemTemplate] = createReusableTemplate();
    const ui = computed(() => tv({ extend: tv(theme), ...appConfig.ui?.selectMenu || {} })({
      color: color.value,
      variant: props.variant,
      size: selectSize?.value,
      loading: props.loading,
      highlight: highlight.value,
      leading: isLeading.value || !!props.avatar || !!slots.leading,
      trailing: isTrailing.value || !!slots.trailing,
      buttonGroup: orientation.value
    }));
    function displayValue(value) {
      if (props.multiple && Array.isArray(value)) {
        const displayedValues = value.map((item) => getDisplayValue(items.value, item, {
          labelKey: props.labelKey,
          valueKey: props.valueKey
        })).filter((v) => v != null && v !== "");
        return displayedValues.length > 0 ? displayedValues.join(", ") : void 0;
      }
      return getDisplayValue(items.value, value, {
        labelKey: props.labelKey,
        valueKey: props.valueKey
      });
    }
    const groups = computed(
      () => props.items?.length ? isArrayOfArray(props.items) ? props.items : [props.items] : []
    );
    const items = computed(() => groups.value.flatMap((group) => group));
    const filteredGroups = computed(() => {
      if (props.ignoreFilter || !searchTerm.value) {
        return groups.value;
      }
      const fields = Array.isArray(props.filterFields) ? props.filterFields : [props.labelKey];
      return groups.value.map((items2) => items2.filter((item) => {
        if (item === void 0 || item === null) {
          return false;
        }
        if (typeof item !== "object") {
          return contains(String(item), searchTerm.value);
        }
        if (item.type && ["label", "separator"].includes(item.type)) {
          return true;
        }
        return fields.some((field) => {
          const value = get(item, field);
          return value !== void 0 && value !== null && contains(String(value), searchTerm.value);
        });
      })).filter((group) => group.filter(
        (item) => !isSelectItem(item) || (!item.type || !["label", "separator"].includes(item.type))
      ).length > 0);
    });
    const filteredItems = computed(() => filteredGroups.value.flatMap((group) => group));
    const createItem = computed(() => {
      if (!props.createItem || !searchTerm.value) {
        return false;
      }
      const newItem = props.valueKey ? { [props.valueKey]: searchTerm.value } : searchTerm.value;
      if (typeof props.createItem === "object" && props.createItem.when === "always" || props.createItem === "always") {
        return !filteredItems.value.find((item) => compare(item, newItem, props.valueKey));
      }
      return !filteredItems.value.length;
    });
    const createItemPosition = computed(() => typeof props.createItem === "object" ? props.createItem.position : "bottom");
    const triggerRef = ref(null);
    function onUpdate(value) {
      if (toRaw(props.modelValue) === value) {
        return;
      }
      const event = new Event("change", { target: { value } });
      emits("change", event);
      emitFormChange();
      emitFormInput();
      if (props.resetSearchTermOnSelect) {
        searchTerm.value = "";
      }
    }
    function onUpdateOpen(value) {
      let timeoutId;
      if (!value) {
        const event = new FocusEvent("blur");
        emits("blur", event);
        emitFormBlur();
        if (props.resetSearchTermOnBlur) {
          const STATE_ANIMATION_DELAY_MS = 100;
          timeoutId = setTimeout(() => {
            searchTerm.value = "";
          }, STATE_ANIMATION_DELAY_MS);
        }
      } else {
        const event = new FocusEvent("focus");
        emits("focus", event);
        emitFormFocus();
        clearTimeout(timeoutId);
      }
    }
    function onSelect(e, item) {
      if (!isSelectItem(item)) {
        return;
      }
      if (item.disabled) {
        e.preventDefault();
        return;
      }
      item.onSelect?.(e);
    }
    function isSelectItem(item) {
      return typeof item === "object" && item !== null;
    }
    __expose({
      triggerRef
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(DefineCreateItemTemplate), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(ComboboxGroup), {
              class: ui.value.group({ class: props.ui?.group })
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(ComboboxItem), {
                    class: ui.value.item({ class: props.ui?.item }),
                    value: searchTerm.value,
                    onSelect: ($event) => emits("create", searchTerm.value)
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<span class="${ssrRenderClass(ui.value.itemLabel({ class: props.ui?.itemLabel }))}"${_scopeId3}>`);
                        ssrRenderSlot(_ctx.$slots, "create-item-label", { item: searchTerm.value }, () => {
                          _push4(`${ssrInterpolate(unref(t)("selectMenu.create", { label: searchTerm.value }))}`);
                        }, _push4, _parent4, _scopeId3);
                        _push4(`</span>`);
                      } else {
                        return [
                          createVNode("span", {
                            class: ui.value.itemLabel({ class: props.ui?.itemLabel })
                          }, [
                            renderSlot(_ctx.$slots, "create-item-label", { item: searchTerm.value }, () => [
                              createTextVNode(toDisplayString(unref(t)("selectMenu.create", { label: searchTerm.value })), 1)
                            ])
                          ], 2)
                        ];
                      }
                    }),
                    _: 3
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(ComboboxItem), {
                      class: ui.value.item({ class: props.ui?.item }),
                      value: searchTerm.value,
                      onSelect: withModifiers(($event) => emits("create", searchTerm.value), ["prevent"])
                    }, {
                      default: withCtx(() => [
                        createVNode("span", {
                          class: ui.value.itemLabel({ class: props.ui?.itemLabel })
                        }, [
                          renderSlot(_ctx.$slots, "create-item-label", { item: searchTerm.value }, () => [
                            createTextVNode(toDisplayString(unref(t)("selectMenu.create", { label: searchTerm.value })), 1)
                          ])
                        ], 2)
                      ]),
                      _: 3
                    }, 8, ["class", "value", "onSelect"])
                  ];
                }
              }),
              _: 3
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(ComboboxGroup), {
                class: ui.value.group({ class: props.ui?.group })
              }, {
                default: withCtx(() => [
                  createVNode(unref(ComboboxItem), {
                    class: ui.value.item({ class: props.ui?.item }),
                    value: searchTerm.value,
                    onSelect: withModifiers(($event) => emits("create", searchTerm.value), ["prevent"])
                  }, {
                    default: withCtx(() => [
                      createVNode("span", {
                        class: ui.value.itemLabel({ class: props.ui?.itemLabel })
                      }, [
                        renderSlot(_ctx.$slots, "create-item-label", { item: searchTerm.value }, () => [
                          createTextVNode(toDisplayString(unref(t)("selectMenu.create", { label: searchTerm.value })), 1)
                        ])
                      ], 2)
                    ]),
                    _: 3
                  }, 8, ["class", "value", "onSelect"])
                ]),
                _: 3
              }, 8, ["class"])
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(ssrRenderComponent(unref(ComboboxRoot), mergeProps({ id: unref(id) }, { ...unref(rootProps), ..._ctx.$attrs, ...unref(ariaAttrs) }, {
        "ignore-filter": "",
        "as-child": "",
        name: unref(name),
        disabled: unref(disabled),
        "onUpdate:modelValue": onUpdate,
        "onUpdate:open": onUpdateOpen
      }), {
        default: withCtx(({ modelValue, open }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(ComboboxAnchor), { "as-child": "" }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(ComboboxTrigger), {
                    ref_key: "triggerRef",
                    ref: triggerRef,
                    class: ui.value.base({ class: [props.ui?.base, props.class] }),
                    tabindex: "0"
                  }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        if (unref(isLeading) || !!__props.avatar || !!slots.leading) {
                          _push4(`<span class="${ssrRenderClass(ui.value.leading({ class: props.ui?.leading }))}"${_scopeId3}>`);
                          ssrRenderSlot(_ctx.$slots, "leading", {
                            modelValue,
                            open,
                            ui: ui.value
                          }, () => {
                            if (unref(isLeading) && unref(leadingIconName)) {
                              _push4(ssrRenderComponent(_sfc_main$g, {
                                name: unref(leadingIconName),
                                class: ui.value.leadingIcon({ class: props.ui?.leadingIcon })
                              }, null, _parent4, _scopeId3));
                            } else if (!!__props.avatar) {
                              _push4(ssrRenderComponent(_sfc_main$d, mergeProps({
                                size: props.ui?.itemLeadingAvatarSize || ui.value.itemLeadingAvatarSize()
                              }, __props.avatar, {
                                class: ui.value.itemLeadingAvatar({ class: props.ui?.itemLeadingAvatar })
                              }), null, _parent4, _scopeId3));
                            } else {
                              _push4(`<!---->`);
                            }
                          }, _push4, _parent4, _scopeId3);
                          _push4(`</span>`);
                        } else {
                          _push4(`<!---->`);
                        }
                        ssrRenderSlot(_ctx.$slots, "default", {
                          modelValue,
                          open
                        }, () => {
                          _push4(`<!--[-->`);
                          ssrRenderList([displayValue(modelValue)], (displayedModelValue) => {
                            _push4(`<!--[-->`);
                            if (displayedModelValue !== void 0 && displayedModelValue !== null) {
                              _push4(`<span class="${ssrRenderClass(ui.value.value({ class: props.ui?.value }))}"${_scopeId3}>${ssrInterpolate(displayedModelValue)}</span>`);
                            } else {
                              _push4(`<span class="${ssrRenderClass(ui.value.placeholder({ class: props.ui?.placeholder }))}"${_scopeId3}>${ssrInterpolate(__props.placeholder ?? " ")}</span>`);
                            }
                            _push4(`<!--]-->`);
                          });
                          _push4(`<!--]-->`);
                        }, _push4, _parent4, _scopeId3);
                        if (unref(isTrailing) || !!slots.trailing) {
                          _push4(`<span class="${ssrRenderClass(ui.value.trailing({ class: props.ui?.trailing }))}"${_scopeId3}>`);
                          ssrRenderSlot(_ctx.$slots, "trailing", {
                            modelValue,
                            open,
                            ui: ui.value
                          }, () => {
                            if (unref(trailingIconName)) {
                              _push4(ssrRenderComponent(_sfc_main$g, {
                                name: unref(trailingIconName),
                                class: ui.value.trailingIcon({ class: props.ui?.trailingIcon })
                              }, null, _parent4, _scopeId3));
                            } else {
                              _push4(`<!---->`);
                            }
                          }, _push4, _parent4, _scopeId3);
                          _push4(`</span>`);
                        } else {
                          _push4(`<!---->`);
                        }
                      } else {
                        return [
                          unref(isLeading) || !!__props.avatar || !!slots.leading ? (openBlock(), createBlock("span", {
                            key: 0,
                            class: ui.value.leading({ class: props.ui?.leading })
                          }, [
                            renderSlot(_ctx.$slots, "leading", {
                              modelValue,
                              open,
                              ui: ui.value
                            }, () => [
                              unref(isLeading) && unref(leadingIconName) ? (openBlock(), createBlock(_sfc_main$g, {
                                key: 0,
                                name: unref(leadingIconName),
                                class: ui.value.leadingIcon({ class: props.ui?.leadingIcon })
                              }, null, 8, ["name", "class"])) : !!__props.avatar ? (openBlock(), createBlock(_sfc_main$d, mergeProps({
                                key: 1,
                                size: props.ui?.itemLeadingAvatarSize || ui.value.itemLeadingAvatarSize()
                              }, __props.avatar, {
                                class: ui.value.itemLeadingAvatar({ class: props.ui?.itemLeadingAvatar })
                              }), null, 16, ["size", "class"])) : createCommentVNode("", true)
                            ])
                          ], 2)) : createCommentVNode("", true),
                          renderSlot(_ctx.$slots, "default", {
                            modelValue,
                            open
                          }, () => [
                            (openBlock(true), createBlock(Fragment, null, renderList([displayValue(modelValue)], (displayedModelValue) => {
                              return openBlock(), createBlock(Fragment, { key: displayedModelValue }, [
                                displayedModelValue !== void 0 && displayedModelValue !== null ? (openBlock(), createBlock("span", {
                                  key: 0,
                                  class: ui.value.value({ class: props.ui?.value })
                                }, toDisplayString(displayedModelValue), 3)) : (openBlock(), createBlock("span", {
                                  key: 1,
                                  class: ui.value.placeholder({ class: props.ui?.placeholder })
                                }, toDisplayString(__props.placeholder ?? " "), 3))
                              ], 64);
                            }), 128))
                          ]),
                          unref(isTrailing) || !!slots.trailing ? (openBlock(), createBlock("span", {
                            key: 1,
                            class: ui.value.trailing({ class: props.ui?.trailing })
                          }, [
                            renderSlot(_ctx.$slots, "trailing", {
                              modelValue,
                              open,
                              ui: ui.value
                            }, () => [
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
                    _: 2
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(ComboboxTrigger), {
                      ref_key: "triggerRef",
                      ref: triggerRef,
                      class: ui.value.base({ class: [props.ui?.base, props.class] }),
                      tabindex: "0"
                    }, {
                      default: withCtx(() => [
                        unref(isLeading) || !!__props.avatar || !!slots.leading ? (openBlock(), createBlock("span", {
                          key: 0,
                          class: ui.value.leading({ class: props.ui?.leading })
                        }, [
                          renderSlot(_ctx.$slots, "leading", {
                            modelValue,
                            open,
                            ui: ui.value
                          }, () => [
                            unref(isLeading) && unref(leadingIconName) ? (openBlock(), createBlock(_sfc_main$g, {
                              key: 0,
                              name: unref(leadingIconName),
                              class: ui.value.leadingIcon({ class: props.ui?.leadingIcon })
                            }, null, 8, ["name", "class"])) : !!__props.avatar ? (openBlock(), createBlock(_sfc_main$d, mergeProps({
                              key: 1,
                              size: props.ui?.itemLeadingAvatarSize || ui.value.itemLeadingAvatarSize()
                            }, __props.avatar, {
                              class: ui.value.itemLeadingAvatar({ class: props.ui?.itemLeadingAvatar })
                            }), null, 16, ["size", "class"])) : createCommentVNode("", true)
                          ])
                        ], 2)) : createCommentVNode("", true),
                        renderSlot(_ctx.$slots, "default", {
                          modelValue,
                          open
                        }, () => [
                          (openBlock(true), createBlock(Fragment, null, renderList([displayValue(modelValue)], (displayedModelValue) => {
                            return openBlock(), createBlock(Fragment, { key: displayedModelValue }, [
                              displayedModelValue !== void 0 && displayedModelValue !== null ? (openBlock(), createBlock("span", {
                                key: 0,
                                class: ui.value.value({ class: props.ui?.value })
                              }, toDisplayString(displayedModelValue), 3)) : (openBlock(), createBlock("span", {
                                key: 1,
                                class: ui.value.placeholder({ class: props.ui?.placeholder })
                              }, toDisplayString(__props.placeholder ?? " "), 3))
                            ], 64);
                          }), 128))
                        ]),
                        unref(isTrailing) || !!slots.trailing ? (openBlock(), createBlock("span", {
                          key: 1,
                          class: ui.value.trailing({ class: props.ui?.trailing })
                        }, [
                          renderSlot(_ctx.$slots, "trailing", {
                            modelValue,
                            open,
                            ui: ui.value
                          }, () => [
                            unref(trailingIconName) ? (openBlock(), createBlock(_sfc_main$g, {
                              key: 0,
                              name: unref(trailingIconName),
                              class: ui.value.trailingIcon({ class: props.ui?.trailingIcon })
                            }, null, 8, ["name", "class"])) : createCommentVNode("", true)
                          ])
                        ], 2)) : createCommentVNode("", true)
                      ]),
                      _: 2
                    }, 1032, ["class"])
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(ComboboxPortal), unref(portalProps), {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(ComboboxContent), mergeProps({
                    class: ui.value.content({ class: props.ui?.content })
                  }, contentProps.value), {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(FocusScope), {
                          trapped: "",
                          class: ui.value.focusScope({ class: props.ui?.focusScope })
                        }, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              ssrRenderSlot(_ctx.$slots, "content-top", {}, null, _push5, _parent5, _scopeId4);
                              if (!!__props.searchInput) {
                                _push5(ssrRenderComponent(unref(ComboboxInput), {
                                  modelValue: searchTerm.value,
                                  "onUpdate:modelValue": ($event) => searchTerm.value = $event,
                                  "display-value": () => searchTerm.value,
                                  "as-child": ""
                                }, {
                                  default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(_sfc_main$3, mergeProps({
                                        autofocus: "",
                                        autocomplete: "off",
                                        size: __props.size
                                      }, searchInputProps.value, {
                                        class: ui.value.input({ class: props.ui?.input })
                                      }), null, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(_sfc_main$3, mergeProps({
                                          autofocus: "",
                                          autocomplete: "off",
                                          size: __props.size
                                        }, searchInputProps.value, {
                                          class: ui.value.input({ class: props.ui?.input })
                                        }), null, 16, ["size", "class"])
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                              } else {
                                _push5(`<!---->`);
                              }
                              _push5(ssrRenderComponent(unref(ComboboxEmpty), {
                                class: ui.value.empty({ class: props.ui?.empty })
                              }, {
                                default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    ssrRenderSlot(_ctx.$slots, "empty", { searchTerm: searchTerm.value }, () => {
                                      _push6(`${ssrInterpolate(searchTerm.value ? unref(t)("selectMenu.noMatch", { searchTerm: searchTerm.value }) : unref(t)("selectMenu.noData"))}`);
                                    }, _push6, _parent6, _scopeId5);
                                  } else {
                                    return [
                                      renderSlot(_ctx.$slots, "empty", { searchTerm: searchTerm.value }, () => [
                                        createTextVNode(toDisplayString(searchTerm.value ? unref(t)("selectMenu.noMatch", { searchTerm: searchTerm.value }) : unref(t)("selectMenu.noData")), 1)
                                      ])
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent5, _scopeId4));
                              _push5(`<div role="presentation" class="${ssrRenderClass(ui.value.viewport({ class: props.ui?.viewport }))}"${_scopeId4}>`);
                              if (createItem.value && createItemPosition.value === "top") {
                                _push5(ssrRenderComponent(unref(ReuseCreateItemTemplate), null, null, _parent5, _scopeId4));
                              } else {
                                _push5(`<!---->`);
                              }
                              _push5(`<!--[-->`);
                              ssrRenderList(filteredGroups.value, (group, groupIndex) => {
                                _push5(ssrRenderComponent(unref(ComboboxGroup), {
                                  key: `group-${groupIndex}`,
                                  class: ui.value.group({ class: props.ui?.group })
                                }, {
                                  default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`<!--[-->`);
                                      ssrRenderList(group, (item, index) => {
                                        _push6(`<!--[-->`);
                                        if (isSelectItem(item) && item.type === "label") {
                                          _push6(ssrRenderComponent(unref(ComboboxLabel), {
                                            class: ui.value.label({ class: [props.ui?.label, item.ui?.label, item.class] })
                                          }, {
                                            default: withCtx((_5, _push7, _parent7, _scopeId6) => {
                                              if (_push7) {
                                                _push7(`${ssrInterpolate(unref(get)(item, props.labelKey))}`);
                                              } else {
                                                return [
                                                  createTextVNode(toDisplayString(unref(get)(item, props.labelKey)), 1)
                                                ];
                                              }
                                            }),
                                            _: 2
                                          }, _parent6, _scopeId5));
                                        } else if (isSelectItem(item) && item.type === "separator") {
                                          _push6(ssrRenderComponent(unref(ComboboxSeparator), {
                                            class: ui.value.separator({ class: [props.ui?.separator, item.ui?.separator, item.class] })
                                          }, null, _parent6, _scopeId5));
                                        } else {
                                          _push6(ssrRenderComponent(unref(ComboboxItem), {
                                            class: ui.value.item({ class: [props.ui?.item, isSelectItem(item) && item.ui?.item, isSelectItem(item) && item.class] }),
                                            disabled: isSelectItem(item) && item.disabled,
                                            value: props.valueKey && isSelectItem(item) ? unref(get)(item, props.valueKey) : item,
                                            onSelect: ($event) => onSelect($event, item)
                                          }, {
                                            default: withCtx((_5, _push7, _parent7, _scopeId6) => {
                                              if (_push7) {
                                                ssrRenderSlot(_ctx.$slots, "item", {
                                                  item,
                                                  index
                                                }, () => {
                                                  ssrRenderSlot(_ctx.$slots, "item-leading", {
                                                    item,
                                                    index
                                                  }, () => {
                                                    if (isSelectItem(item) && item.icon) {
                                                      _push7(ssrRenderComponent(_sfc_main$g, {
                                                        name: item.icon,
                                                        class: ui.value.itemLeadingIcon({ class: [props.ui?.itemLeadingIcon, item.ui?.itemLeadingIcon] })
                                                      }, null, _parent7, _scopeId6));
                                                    } else if (isSelectItem(item) && item.avatar) {
                                                      _push7(ssrRenderComponent(_sfc_main$d, mergeProps({
                                                        size: item.ui?.itemLeadingAvatarSize || props.ui?.itemLeadingAvatarSize || ui.value.itemLeadingAvatarSize()
                                                      }, { ref_for: true }, item.avatar, {
                                                        class: ui.value.itemLeadingAvatar({ class: [props.ui?.itemLeadingAvatar, item.ui?.itemLeadingAvatar] })
                                                      }), null, _parent7, _scopeId6));
                                                    } else if (isSelectItem(item) && item.chip) {
                                                      _push7(ssrRenderComponent(_sfc_main$e, mergeProps({
                                                        size: props.ui?.itemLeadingChipSize || ui.value.itemLeadingChipSize(),
                                                        inset: "",
                                                        standalone: ""
                                                      }, { ref_for: true }, item.chip, {
                                                        class: ui.value.itemLeadingChip({ class: [props.ui?.itemLeadingChip, item.ui?.itemLeadingChip] })
                                                      }), null, _parent7, _scopeId6));
                                                    } else {
                                                      _push7(`<!---->`);
                                                    }
                                                  }, _push7, _parent7, _scopeId6);
                                                  _push7(`<span class="${ssrRenderClass(ui.value.itemLabel({ class: [props.ui?.itemLabel, isSelectItem(item) && item.ui?.itemLabel] }))}"${_scopeId6}>`);
                                                  ssrRenderSlot(_ctx.$slots, "item-label", {
                                                    item,
                                                    index
                                                  }, () => {
                                                    _push7(`${ssrInterpolate(isSelectItem(item) ? unref(get)(item, props.labelKey) : item)}`);
                                                  }, _push7, _parent7, _scopeId6);
                                                  _push7(`</span><span class="${ssrRenderClass(ui.value.itemTrailing({ class: [props.ui?.itemTrailing, isSelectItem(item) && item.ui?.itemTrailing] }))}"${_scopeId6}>`);
                                                  ssrRenderSlot(_ctx.$slots, "item-trailing", {
                                                    item,
                                                    index
                                                  }, null, _push7, _parent7, _scopeId6);
                                                  _push7(ssrRenderComponent(unref(ComboboxItemIndicator), { "as-child": "" }, {
                                                    default: withCtx((_6, _push8, _parent8, _scopeId7) => {
                                                      if (_push8) {
                                                        _push8(ssrRenderComponent(_sfc_main$g, {
                                                          name: __props.selectedIcon || unref(appConfig).ui.icons.check,
                                                          class: ui.value.itemTrailingIcon({ class: [props.ui?.itemTrailingIcon, isSelectItem(item) && item.ui?.itemTrailingIcon] })
                                                        }, null, _parent8, _scopeId7));
                                                      } else {
                                                        return [
                                                          createVNode(_sfc_main$g, {
                                                            name: __props.selectedIcon || unref(appConfig).ui.icons.check,
                                                            class: ui.value.itemTrailingIcon({ class: [props.ui?.itemTrailingIcon, isSelectItem(item) && item.ui?.itemTrailingIcon] })
                                                          }, null, 8, ["name", "class"])
                                                        ];
                                                      }
                                                    }),
                                                    _: 2
                                                  }, _parent7, _scopeId6));
                                                  _push7(`</span>`);
                                                }, _push7, _parent7, _scopeId6);
                                              } else {
                                                return [
                                                  renderSlot(_ctx.$slots, "item", {
                                                    item,
                                                    index
                                                  }, () => [
                                                    renderSlot(_ctx.$slots, "item-leading", {
                                                      item,
                                                      index
                                                    }, () => [
                                                      isSelectItem(item) && item.icon ? (openBlock(), createBlock(_sfc_main$g, {
                                                        key: 0,
                                                        name: item.icon,
                                                        class: ui.value.itemLeadingIcon({ class: [props.ui?.itemLeadingIcon, item.ui?.itemLeadingIcon] })
                                                      }, null, 8, ["name", "class"])) : isSelectItem(item) && item.avatar ? (openBlock(), createBlock(_sfc_main$d, mergeProps({
                                                        key: 1,
                                                        size: item.ui?.itemLeadingAvatarSize || props.ui?.itemLeadingAvatarSize || ui.value.itemLeadingAvatarSize()
                                                      }, { ref_for: true }, item.avatar, {
                                                        class: ui.value.itemLeadingAvatar({ class: [props.ui?.itemLeadingAvatar, item.ui?.itemLeadingAvatar] })
                                                      }), null, 16, ["size", "class"])) : isSelectItem(item) && item.chip ? (openBlock(), createBlock(_sfc_main$e, mergeProps({
                                                        key: 2,
                                                        size: props.ui?.itemLeadingChipSize || ui.value.itemLeadingChipSize(),
                                                        inset: "",
                                                        standalone: ""
                                                      }, { ref_for: true }, item.chip, {
                                                        class: ui.value.itemLeadingChip({ class: [props.ui?.itemLeadingChip, item.ui?.itemLeadingChip] })
                                                      }), null, 16, ["size", "class"])) : createCommentVNode("", true)
                                                    ]),
                                                    createVNode("span", {
                                                      class: ui.value.itemLabel({ class: [props.ui?.itemLabel, isSelectItem(item) && item.ui?.itemLabel] })
                                                    }, [
                                                      renderSlot(_ctx.$slots, "item-label", {
                                                        item,
                                                        index
                                                      }, () => [
                                                        createTextVNode(toDisplayString(isSelectItem(item) ? unref(get)(item, props.labelKey) : item), 1)
                                                      ])
                                                    ], 2),
                                                    createVNode("span", {
                                                      class: ui.value.itemTrailing({ class: [props.ui?.itemTrailing, isSelectItem(item) && item.ui?.itemTrailing] })
                                                    }, [
                                                      renderSlot(_ctx.$slots, "item-trailing", {
                                                        item,
                                                        index
                                                      }),
                                                      createVNode(unref(ComboboxItemIndicator), { "as-child": "" }, {
                                                        default: withCtx(() => [
                                                          createVNode(_sfc_main$g, {
                                                            name: __props.selectedIcon || unref(appConfig).ui.icons.check,
                                                            class: ui.value.itemTrailingIcon({ class: [props.ui?.itemTrailingIcon, isSelectItem(item) && item.ui?.itemTrailingIcon] })
                                                          }, null, 8, ["name", "class"])
                                                        ]),
                                                        _: 2
                                                      }, 1024)
                                                    ], 2)
                                                  ])
                                                ];
                                              }
                                            }),
                                            _: 2
                                          }, _parent6, _scopeId5));
                                        }
                                        _push6(`<!--]-->`);
                                      });
                                      _push6(`<!--]-->`);
                                    } else {
                                      return [
                                        (openBlock(true), createBlock(Fragment, null, renderList(group, (item, index) => {
                                          return openBlock(), createBlock(Fragment, {
                                            key: `group-${groupIndex}-${index}`
                                          }, [
                                            isSelectItem(item) && item.type === "label" ? (openBlock(), createBlock(unref(ComboboxLabel), {
                                              key: 0,
                                              class: ui.value.label({ class: [props.ui?.label, item.ui?.label, item.class] })
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(unref(get)(item, props.labelKey)), 1)
                                              ]),
                                              _: 2
                                            }, 1032, ["class"])) : isSelectItem(item) && item.type === "separator" ? (openBlock(), createBlock(unref(ComboboxSeparator), {
                                              key: 1,
                                              class: ui.value.separator({ class: [props.ui?.separator, item.ui?.separator, item.class] })
                                            }, null, 8, ["class"])) : (openBlock(), createBlock(unref(ComboboxItem), {
                                              key: 2,
                                              class: ui.value.item({ class: [props.ui?.item, isSelectItem(item) && item.ui?.item, isSelectItem(item) && item.class] }),
                                              disabled: isSelectItem(item) && item.disabled,
                                              value: props.valueKey && isSelectItem(item) ? unref(get)(item, props.valueKey) : item,
                                              onSelect: ($event) => onSelect($event, item)
                                            }, {
                                              default: withCtx(() => [
                                                renderSlot(_ctx.$slots, "item", {
                                                  item,
                                                  index
                                                }, () => [
                                                  renderSlot(_ctx.$slots, "item-leading", {
                                                    item,
                                                    index
                                                  }, () => [
                                                    isSelectItem(item) && item.icon ? (openBlock(), createBlock(_sfc_main$g, {
                                                      key: 0,
                                                      name: item.icon,
                                                      class: ui.value.itemLeadingIcon({ class: [props.ui?.itemLeadingIcon, item.ui?.itemLeadingIcon] })
                                                    }, null, 8, ["name", "class"])) : isSelectItem(item) && item.avatar ? (openBlock(), createBlock(_sfc_main$d, mergeProps({
                                                      key: 1,
                                                      size: item.ui?.itemLeadingAvatarSize || props.ui?.itemLeadingAvatarSize || ui.value.itemLeadingAvatarSize()
                                                    }, { ref_for: true }, item.avatar, {
                                                      class: ui.value.itemLeadingAvatar({ class: [props.ui?.itemLeadingAvatar, item.ui?.itemLeadingAvatar] })
                                                    }), null, 16, ["size", "class"])) : isSelectItem(item) && item.chip ? (openBlock(), createBlock(_sfc_main$e, mergeProps({
                                                      key: 2,
                                                      size: props.ui?.itemLeadingChipSize || ui.value.itemLeadingChipSize(),
                                                      inset: "",
                                                      standalone: ""
                                                    }, { ref_for: true }, item.chip, {
                                                      class: ui.value.itemLeadingChip({ class: [props.ui?.itemLeadingChip, item.ui?.itemLeadingChip] })
                                                    }), null, 16, ["size", "class"])) : createCommentVNode("", true)
                                                  ]),
                                                  createVNode("span", {
                                                    class: ui.value.itemLabel({ class: [props.ui?.itemLabel, isSelectItem(item) && item.ui?.itemLabel] })
                                                  }, [
                                                    renderSlot(_ctx.$slots, "item-label", {
                                                      item,
                                                      index
                                                    }, () => [
                                                      createTextVNode(toDisplayString(isSelectItem(item) ? unref(get)(item, props.labelKey) : item), 1)
                                                    ])
                                                  ], 2),
                                                  createVNode("span", {
                                                    class: ui.value.itemTrailing({ class: [props.ui?.itemTrailing, isSelectItem(item) && item.ui?.itemTrailing] })
                                                  }, [
                                                    renderSlot(_ctx.$slots, "item-trailing", {
                                                      item,
                                                      index
                                                    }),
                                                    createVNode(unref(ComboboxItemIndicator), { "as-child": "" }, {
                                                      default: withCtx(() => [
                                                        createVNode(_sfc_main$g, {
                                                          name: __props.selectedIcon || unref(appConfig).ui.icons.check,
                                                          class: ui.value.itemTrailingIcon({ class: [props.ui?.itemTrailingIcon, isSelectItem(item) && item.ui?.itemTrailingIcon] })
                                                        }, null, 8, ["name", "class"])
                                                      ]),
                                                      _: 2
                                                    }, 1024)
                                                  ], 2)
                                                ])
                                              ]),
                                              _: 2
                                            }, 1032, ["class", "disabled", "value", "onSelect"]))
                                          ], 64);
                                        }), 128))
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                              });
                              _push5(`<!--]-->`);
                              if (createItem.value && createItemPosition.value === "bottom") {
                                _push5(ssrRenderComponent(unref(ReuseCreateItemTemplate), null, null, _parent5, _scopeId4));
                              } else {
                                _push5(`<!---->`);
                              }
                              _push5(`</div>`);
                              ssrRenderSlot(_ctx.$slots, "content-bottom", {}, null, _push5, _parent5, _scopeId4);
                            } else {
                              return [
                                renderSlot(_ctx.$slots, "content-top"),
                                !!__props.searchInput ? (openBlock(), createBlock(unref(ComboboxInput), {
                                  key: 0,
                                  modelValue: searchTerm.value,
                                  "onUpdate:modelValue": ($event) => searchTerm.value = $event,
                                  "display-value": () => searchTerm.value,
                                  "as-child": ""
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_sfc_main$3, mergeProps({
                                      autofocus: "",
                                      autocomplete: "off",
                                      size: __props.size
                                    }, searchInputProps.value, {
                                      class: ui.value.input({ class: props.ui?.input })
                                    }), null, 16, ["size", "class"])
                                  ]),
                                  _: 1
                                }, 8, ["modelValue", "onUpdate:modelValue", "display-value"])) : createCommentVNode("", true),
                                createVNode(unref(ComboboxEmpty), {
                                  class: ui.value.empty({ class: props.ui?.empty })
                                }, {
                                  default: withCtx(() => [
                                    renderSlot(_ctx.$slots, "empty", { searchTerm: searchTerm.value }, () => [
                                      createTextVNode(toDisplayString(searchTerm.value ? unref(t)("selectMenu.noMatch", { searchTerm: searchTerm.value }) : unref(t)("selectMenu.noData")), 1)
                                    ])
                                  ]),
                                  _: 3
                                }, 8, ["class"]),
                                createVNode("div", {
                                  role: "presentation",
                                  class: ui.value.viewport({ class: props.ui?.viewport })
                                }, [
                                  createItem.value && createItemPosition.value === "top" ? (openBlock(), createBlock(unref(ReuseCreateItemTemplate), { key: 0 })) : createCommentVNode("", true),
                                  (openBlock(true), createBlock(Fragment, null, renderList(filteredGroups.value, (group, groupIndex) => {
                                    return openBlock(), createBlock(unref(ComboboxGroup), {
                                      key: `group-${groupIndex}`,
                                      class: ui.value.group({ class: props.ui?.group })
                                    }, {
                                      default: withCtx(() => [
                                        (openBlock(true), createBlock(Fragment, null, renderList(group, (item, index) => {
                                          return openBlock(), createBlock(Fragment, {
                                            key: `group-${groupIndex}-${index}`
                                          }, [
                                            isSelectItem(item) && item.type === "label" ? (openBlock(), createBlock(unref(ComboboxLabel), {
                                              key: 0,
                                              class: ui.value.label({ class: [props.ui?.label, item.ui?.label, item.class] })
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(unref(get)(item, props.labelKey)), 1)
                                              ]),
                                              _: 2
                                            }, 1032, ["class"])) : isSelectItem(item) && item.type === "separator" ? (openBlock(), createBlock(unref(ComboboxSeparator), {
                                              key: 1,
                                              class: ui.value.separator({ class: [props.ui?.separator, item.ui?.separator, item.class] })
                                            }, null, 8, ["class"])) : (openBlock(), createBlock(unref(ComboboxItem), {
                                              key: 2,
                                              class: ui.value.item({ class: [props.ui?.item, isSelectItem(item) && item.ui?.item, isSelectItem(item) && item.class] }),
                                              disabled: isSelectItem(item) && item.disabled,
                                              value: props.valueKey && isSelectItem(item) ? unref(get)(item, props.valueKey) : item,
                                              onSelect: ($event) => onSelect($event, item)
                                            }, {
                                              default: withCtx(() => [
                                                renderSlot(_ctx.$slots, "item", {
                                                  item,
                                                  index
                                                }, () => [
                                                  renderSlot(_ctx.$slots, "item-leading", {
                                                    item,
                                                    index
                                                  }, () => [
                                                    isSelectItem(item) && item.icon ? (openBlock(), createBlock(_sfc_main$g, {
                                                      key: 0,
                                                      name: item.icon,
                                                      class: ui.value.itemLeadingIcon({ class: [props.ui?.itemLeadingIcon, item.ui?.itemLeadingIcon] })
                                                    }, null, 8, ["name", "class"])) : isSelectItem(item) && item.avatar ? (openBlock(), createBlock(_sfc_main$d, mergeProps({
                                                      key: 1,
                                                      size: item.ui?.itemLeadingAvatarSize || props.ui?.itemLeadingAvatarSize || ui.value.itemLeadingAvatarSize()
                                                    }, { ref_for: true }, item.avatar, {
                                                      class: ui.value.itemLeadingAvatar({ class: [props.ui?.itemLeadingAvatar, item.ui?.itemLeadingAvatar] })
                                                    }), null, 16, ["size", "class"])) : isSelectItem(item) && item.chip ? (openBlock(), createBlock(_sfc_main$e, mergeProps({
                                                      key: 2,
                                                      size: props.ui?.itemLeadingChipSize || ui.value.itemLeadingChipSize(),
                                                      inset: "",
                                                      standalone: ""
                                                    }, { ref_for: true }, item.chip, {
                                                      class: ui.value.itemLeadingChip({ class: [props.ui?.itemLeadingChip, item.ui?.itemLeadingChip] })
                                                    }), null, 16, ["size", "class"])) : createCommentVNode("", true)
                                                  ]),
                                                  createVNode("span", {
                                                    class: ui.value.itemLabel({ class: [props.ui?.itemLabel, isSelectItem(item) && item.ui?.itemLabel] })
                                                  }, [
                                                    renderSlot(_ctx.$slots, "item-label", {
                                                      item,
                                                      index
                                                    }, () => [
                                                      createTextVNode(toDisplayString(isSelectItem(item) ? unref(get)(item, props.labelKey) : item), 1)
                                                    ])
                                                  ], 2),
                                                  createVNode("span", {
                                                    class: ui.value.itemTrailing({ class: [props.ui?.itemTrailing, isSelectItem(item) && item.ui?.itemTrailing] })
                                                  }, [
                                                    renderSlot(_ctx.$slots, "item-trailing", {
                                                      item,
                                                      index
                                                    }),
                                                    createVNode(unref(ComboboxItemIndicator), { "as-child": "" }, {
                                                      default: withCtx(() => [
                                                        createVNode(_sfc_main$g, {
                                                          name: __props.selectedIcon || unref(appConfig).ui.icons.check,
                                                          class: ui.value.itemTrailingIcon({ class: [props.ui?.itemTrailingIcon, isSelectItem(item) && item.ui?.itemTrailingIcon] })
                                                        }, null, 8, ["name", "class"])
                                                      ]),
                                                      _: 2
                                                    }, 1024)
                                                  ], 2)
                                                ])
                                              ]),
                                              _: 2
                                            }, 1032, ["class", "disabled", "value", "onSelect"]))
                                          ], 64);
                                        }), 128))
                                      ]),
                                      _: 2
                                    }, 1032, ["class"]);
                                  }), 128)),
                                  createItem.value && createItemPosition.value === "bottom" ? (openBlock(), createBlock(unref(ReuseCreateItemTemplate), { key: 1 })) : createCommentVNode("", true)
                                ], 2),
                                renderSlot(_ctx.$slots, "content-bottom")
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                        if (!!__props.arrow) {
                          _push4(ssrRenderComponent(unref(ComboboxArrow), mergeProps(arrowProps.value, {
                            class: ui.value.arrow({ class: props.ui?.arrow })
                          }), null, _parent4, _scopeId3));
                        } else {
                          _push4(`<!---->`);
                        }
                      } else {
                        return [
                          createVNode(unref(FocusScope), {
                            trapped: "",
                            class: ui.value.focusScope({ class: props.ui?.focusScope })
                          }, {
                            default: withCtx(() => [
                              renderSlot(_ctx.$slots, "content-top"),
                              !!__props.searchInput ? (openBlock(), createBlock(unref(ComboboxInput), {
                                key: 0,
                                modelValue: searchTerm.value,
                                "onUpdate:modelValue": ($event) => searchTerm.value = $event,
                                "display-value": () => searchTerm.value,
                                "as-child": ""
                              }, {
                                default: withCtx(() => [
                                  createVNode(_sfc_main$3, mergeProps({
                                    autofocus: "",
                                    autocomplete: "off",
                                    size: __props.size
                                  }, searchInputProps.value, {
                                    class: ui.value.input({ class: props.ui?.input })
                                  }), null, 16, ["size", "class"])
                                ]),
                                _: 1
                              }, 8, ["modelValue", "onUpdate:modelValue", "display-value"])) : createCommentVNode("", true),
                              createVNode(unref(ComboboxEmpty), {
                                class: ui.value.empty({ class: props.ui?.empty })
                              }, {
                                default: withCtx(() => [
                                  renderSlot(_ctx.$slots, "empty", { searchTerm: searchTerm.value }, () => [
                                    createTextVNode(toDisplayString(searchTerm.value ? unref(t)("selectMenu.noMatch", { searchTerm: searchTerm.value }) : unref(t)("selectMenu.noData")), 1)
                                  ])
                                ]),
                                _: 3
                              }, 8, ["class"]),
                              createVNode("div", {
                                role: "presentation",
                                class: ui.value.viewport({ class: props.ui?.viewport })
                              }, [
                                createItem.value && createItemPosition.value === "top" ? (openBlock(), createBlock(unref(ReuseCreateItemTemplate), { key: 0 })) : createCommentVNode("", true),
                                (openBlock(true), createBlock(Fragment, null, renderList(filteredGroups.value, (group, groupIndex) => {
                                  return openBlock(), createBlock(unref(ComboboxGroup), {
                                    key: `group-${groupIndex}`,
                                    class: ui.value.group({ class: props.ui?.group })
                                  }, {
                                    default: withCtx(() => [
                                      (openBlock(true), createBlock(Fragment, null, renderList(group, (item, index) => {
                                        return openBlock(), createBlock(Fragment, {
                                          key: `group-${groupIndex}-${index}`
                                        }, [
                                          isSelectItem(item) && item.type === "label" ? (openBlock(), createBlock(unref(ComboboxLabel), {
                                            key: 0,
                                            class: ui.value.label({ class: [props.ui?.label, item.ui?.label, item.class] })
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(unref(get)(item, props.labelKey)), 1)
                                            ]),
                                            _: 2
                                          }, 1032, ["class"])) : isSelectItem(item) && item.type === "separator" ? (openBlock(), createBlock(unref(ComboboxSeparator), {
                                            key: 1,
                                            class: ui.value.separator({ class: [props.ui?.separator, item.ui?.separator, item.class] })
                                          }, null, 8, ["class"])) : (openBlock(), createBlock(unref(ComboboxItem), {
                                            key: 2,
                                            class: ui.value.item({ class: [props.ui?.item, isSelectItem(item) && item.ui?.item, isSelectItem(item) && item.class] }),
                                            disabled: isSelectItem(item) && item.disabled,
                                            value: props.valueKey && isSelectItem(item) ? unref(get)(item, props.valueKey) : item,
                                            onSelect: ($event) => onSelect($event, item)
                                          }, {
                                            default: withCtx(() => [
                                              renderSlot(_ctx.$slots, "item", {
                                                item,
                                                index
                                              }, () => [
                                                renderSlot(_ctx.$slots, "item-leading", {
                                                  item,
                                                  index
                                                }, () => [
                                                  isSelectItem(item) && item.icon ? (openBlock(), createBlock(_sfc_main$g, {
                                                    key: 0,
                                                    name: item.icon,
                                                    class: ui.value.itemLeadingIcon({ class: [props.ui?.itemLeadingIcon, item.ui?.itemLeadingIcon] })
                                                  }, null, 8, ["name", "class"])) : isSelectItem(item) && item.avatar ? (openBlock(), createBlock(_sfc_main$d, mergeProps({
                                                    key: 1,
                                                    size: item.ui?.itemLeadingAvatarSize || props.ui?.itemLeadingAvatarSize || ui.value.itemLeadingAvatarSize()
                                                  }, { ref_for: true }, item.avatar, {
                                                    class: ui.value.itemLeadingAvatar({ class: [props.ui?.itemLeadingAvatar, item.ui?.itemLeadingAvatar] })
                                                  }), null, 16, ["size", "class"])) : isSelectItem(item) && item.chip ? (openBlock(), createBlock(_sfc_main$e, mergeProps({
                                                    key: 2,
                                                    size: props.ui?.itemLeadingChipSize || ui.value.itemLeadingChipSize(),
                                                    inset: "",
                                                    standalone: ""
                                                  }, { ref_for: true }, item.chip, {
                                                    class: ui.value.itemLeadingChip({ class: [props.ui?.itemLeadingChip, item.ui?.itemLeadingChip] })
                                                  }), null, 16, ["size", "class"])) : createCommentVNode("", true)
                                                ]),
                                                createVNode("span", {
                                                  class: ui.value.itemLabel({ class: [props.ui?.itemLabel, isSelectItem(item) && item.ui?.itemLabel] })
                                                }, [
                                                  renderSlot(_ctx.$slots, "item-label", {
                                                    item,
                                                    index
                                                  }, () => [
                                                    createTextVNode(toDisplayString(isSelectItem(item) ? unref(get)(item, props.labelKey) : item), 1)
                                                  ])
                                                ], 2),
                                                createVNode("span", {
                                                  class: ui.value.itemTrailing({ class: [props.ui?.itemTrailing, isSelectItem(item) && item.ui?.itemTrailing] })
                                                }, [
                                                  renderSlot(_ctx.$slots, "item-trailing", {
                                                    item,
                                                    index
                                                  }),
                                                  createVNode(unref(ComboboxItemIndicator), { "as-child": "" }, {
                                                    default: withCtx(() => [
                                                      createVNode(_sfc_main$g, {
                                                        name: __props.selectedIcon || unref(appConfig).ui.icons.check,
                                                        class: ui.value.itemTrailingIcon({ class: [props.ui?.itemTrailingIcon, isSelectItem(item) && item.ui?.itemTrailingIcon] })
                                                      }, null, 8, ["name", "class"])
                                                    ]),
                                                    _: 2
                                                  }, 1024)
                                                ], 2)
                                              ])
                                            ]),
                                            _: 2
                                          }, 1032, ["class", "disabled", "value", "onSelect"]))
                                        ], 64);
                                      }), 128))
                                    ]),
                                    _: 2
                                  }, 1032, ["class"]);
                                }), 128)),
                                createItem.value && createItemPosition.value === "bottom" ? (openBlock(), createBlock(unref(ReuseCreateItemTemplate), { key: 1 })) : createCommentVNode("", true)
                              ], 2),
                              renderSlot(_ctx.$slots, "content-bottom")
                            ]),
                            _: 3
                          }, 8, ["class"]),
                          !!__props.arrow ? (openBlock(), createBlock(unref(ComboboxArrow), mergeProps({ key: 0 }, arrowProps.value, {
                            class: ui.value.arrow({ class: props.ui?.arrow })
                          }), null, 16, ["class"])) : createCommentVNode("", true)
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(ComboboxContent), mergeProps({
                      class: ui.value.content({ class: props.ui?.content })
                    }, contentProps.value), {
                      default: withCtx(() => [
                        createVNode(unref(FocusScope), {
                          trapped: "",
                          class: ui.value.focusScope({ class: props.ui?.focusScope })
                        }, {
                          default: withCtx(() => [
                            renderSlot(_ctx.$slots, "content-top"),
                            !!__props.searchInput ? (openBlock(), createBlock(unref(ComboboxInput), {
                              key: 0,
                              modelValue: searchTerm.value,
                              "onUpdate:modelValue": ($event) => searchTerm.value = $event,
                              "display-value": () => searchTerm.value,
                              "as-child": ""
                            }, {
                              default: withCtx(() => [
                                createVNode(_sfc_main$3, mergeProps({
                                  autofocus: "",
                                  autocomplete: "off",
                                  size: __props.size
                                }, searchInputProps.value, {
                                  class: ui.value.input({ class: props.ui?.input })
                                }), null, 16, ["size", "class"])
                              ]),
                              _: 1
                            }, 8, ["modelValue", "onUpdate:modelValue", "display-value"])) : createCommentVNode("", true),
                            createVNode(unref(ComboboxEmpty), {
                              class: ui.value.empty({ class: props.ui?.empty })
                            }, {
                              default: withCtx(() => [
                                renderSlot(_ctx.$slots, "empty", { searchTerm: searchTerm.value }, () => [
                                  createTextVNode(toDisplayString(searchTerm.value ? unref(t)("selectMenu.noMatch", { searchTerm: searchTerm.value }) : unref(t)("selectMenu.noData")), 1)
                                ])
                              ]),
                              _: 3
                            }, 8, ["class"]),
                            createVNode("div", {
                              role: "presentation",
                              class: ui.value.viewport({ class: props.ui?.viewport })
                            }, [
                              createItem.value && createItemPosition.value === "top" ? (openBlock(), createBlock(unref(ReuseCreateItemTemplate), { key: 0 })) : createCommentVNode("", true),
                              (openBlock(true), createBlock(Fragment, null, renderList(filteredGroups.value, (group, groupIndex) => {
                                return openBlock(), createBlock(unref(ComboboxGroup), {
                                  key: `group-${groupIndex}`,
                                  class: ui.value.group({ class: props.ui?.group })
                                }, {
                                  default: withCtx(() => [
                                    (openBlock(true), createBlock(Fragment, null, renderList(group, (item, index) => {
                                      return openBlock(), createBlock(Fragment, {
                                        key: `group-${groupIndex}-${index}`
                                      }, [
                                        isSelectItem(item) && item.type === "label" ? (openBlock(), createBlock(unref(ComboboxLabel), {
                                          key: 0,
                                          class: ui.value.label({ class: [props.ui?.label, item.ui?.label, item.class] })
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(unref(get)(item, props.labelKey)), 1)
                                          ]),
                                          _: 2
                                        }, 1032, ["class"])) : isSelectItem(item) && item.type === "separator" ? (openBlock(), createBlock(unref(ComboboxSeparator), {
                                          key: 1,
                                          class: ui.value.separator({ class: [props.ui?.separator, item.ui?.separator, item.class] })
                                        }, null, 8, ["class"])) : (openBlock(), createBlock(unref(ComboboxItem), {
                                          key: 2,
                                          class: ui.value.item({ class: [props.ui?.item, isSelectItem(item) && item.ui?.item, isSelectItem(item) && item.class] }),
                                          disabled: isSelectItem(item) && item.disabled,
                                          value: props.valueKey && isSelectItem(item) ? unref(get)(item, props.valueKey) : item,
                                          onSelect: ($event) => onSelect($event, item)
                                        }, {
                                          default: withCtx(() => [
                                            renderSlot(_ctx.$slots, "item", {
                                              item,
                                              index
                                            }, () => [
                                              renderSlot(_ctx.$slots, "item-leading", {
                                                item,
                                                index
                                              }, () => [
                                                isSelectItem(item) && item.icon ? (openBlock(), createBlock(_sfc_main$g, {
                                                  key: 0,
                                                  name: item.icon,
                                                  class: ui.value.itemLeadingIcon({ class: [props.ui?.itemLeadingIcon, item.ui?.itemLeadingIcon] })
                                                }, null, 8, ["name", "class"])) : isSelectItem(item) && item.avatar ? (openBlock(), createBlock(_sfc_main$d, mergeProps({
                                                  key: 1,
                                                  size: item.ui?.itemLeadingAvatarSize || props.ui?.itemLeadingAvatarSize || ui.value.itemLeadingAvatarSize()
                                                }, { ref_for: true }, item.avatar, {
                                                  class: ui.value.itemLeadingAvatar({ class: [props.ui?.itemLeadingAvatar, item.ui?.itemLeadingAvatar] })
                                                }), null, 16, ["size", "class"])) : isSelectItem(item) && item.chip ? (openBlock(), createBlock(_sfc_main$e, mergeProps({
                                                  key: 2,
                                                  size: props.ui?.itemLeadingChipSize || ui.value.itemLeadingChipSize(),
                                                  inset: "",
                                                  standalone: ""
                                                }, { ref_for: true }, item.chip, {
                                                  class: ui.value.itemLeadingChip({ class: [props.ui?.itemLeadingChip, item.ui?.itemLeadingChip] })
                                                }), null, 16, ["size", "class"])) : createCommentVNode("", true)
                                              ]),
                                              createVNode("span", {
                                                class: ui.value.itemLabel({ class: [props.ui?.itemLabel, isSelectItem(item) && item.ui?.itemLabel] })
                                              }, [
                                                renderSlot(_ctx.$slots, "item-label", {
                                                  item,
                                                  index
                                                }, () => [
                                                  createTextVNode(toDisplayString(isSelectItem(item) ? unref(get)(item, props.labelKey) : item), 1)
                                                ])
                                              ], 2),
                                              createVNode("span", {
                                                class: ui.value.itemTrailing({ class: [props.ui?.itemTrailing, isSelectItem(item) && item.ui?.itemTrailing] })
                                              }, [
                                                renderSlot(_ctx.$slots, "item-trailing", {
                                                  item,
                                                  index
                                                }),
                                                createVNode(unref(ComboboxItemIndicator), { "as-child": "" }, {
                                                  default: withCtx(() => [
                                                    createVNode(_sfc_main$g, {
                                                      name: __props.selectedIcon || unref(appConfig).ui.icons.check,
                                                      class: ui.value.itemTrailingIcon({ class: [props.ui?.itemTrailingIcon, isSelectItem(item) && item.ui?.itemTrailingIcon] })
                                                    }, null, 8, ["name", "class"])
                                                  ]),
                                                  _: 2
                                                }, 1024)
                                              ], 2)
                                            ])
                                          ]),
                                          _: 2
                                        }, 1032, ["class", "disabled", "value", "onSelect"]))
                                      ], 64);
                                    }), 128))
                                  ]),
                                  _: 2
                                }, 1032, ["class"]);
                              }), 128)),
                              createItem.value && createItemPosition.value === "bottom" ? (openBlock(), createBlock(unref(ReuseCreateItemTemplate), { key: 1 })) : createCommentVNode("", true)
                            ], 2),
                            renderSlot(_ctx.$slots, "content-bottom")
                          ]),
                          _: 3
                        }, 8, ["class"]),
                        !!__props.arrow ? (openBlock(), createBlock(unref(ComboboxArrow), mergeProps({ key: 0 }, arrowProps.value, {
                          class: ui.value.arrow({ class: props.ui?.arrow })
                        }), null, 16, ["class"])) : createCommentVNode("", true)
                      ]),
                      _: 3
                    }, 16, ["class"])
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(ComboboxAnchor), { "as-child": "" }, {
                default: withCtx(() => [
                  createVNode(unref(ComboboxTrigger), {
                    ref_key: "triggerRef",
                    ref: triggerRef,
                    class: ui.value.base({ class: [props.ui?.base, props.class] }),
                    tabindex: "0"
                  }, {
                    default: withCtx(() => [
                      unref(isLeading) || !!__props.avatar || !!slots.leading ? (openBlock(), createBlock("span", {
                        key: 0,
                        class: ui.value.leading({ class: props.ui?.leading })
                      }, [
                        renderSlot(_ctx.$slots, "leading", {
                          modelValue,
                          open,
                          ui: ui.value
                        }, () => [
                          unref(isLeading) && unref(leadingIconName) ? (openBlock(), createBlock(_sfc_main$g, {
                            key: 0,
                            name: unref(leadingIconName),
                            class: ui.value.leadingIcon({ class: props.ui?.leadingIcon })
                          }, null, 8, ["name", "class"])) : !!__props.avatar ? (openBlock(), createBlock(_sfc_main$d, mergeProps({
                            key: 1,
                            size: props.ui?.itemLeadingAvatarSize || ui.value.itemLeadingAvatarSize()
                          }, __props.avatar, {
                            class: ui.value.itemLeadingAvatar({ class: props.ui?.itemLeadingAvatar })
                          }), null, 16, ["size", "class"])) : createCommentVNode("", true)
                        ])
                      ], 2)) : createCommentVNode("", true),
                      renderSlot(_ctx.$slots, "default", {
                        modelValue,
                        open
                      }, () => [
                        (openBlock(true), createBlock(Fragment, null, renderList([displayValue(modelValue)], (displayedModelValue) => {
                          return openBlock(), createBlock(Fragment, { key: displayedModelValue }, [
                            displayedModelValue !== void 0 && displayedModelValue !== null ? (openBlock(), createBlock("span", {
                              key: 0,
                              class: ui.value.value({ class: props.ui?.value })
                            }, toDisplayString(displayedModelValue), 3)) : (openBlock(), createBlock("span", {
                              key: 1,
                              class: ui.value.placeholder({ class: props.ui?.placeholder })
                            }, toDisplayString(__props.placeholder ?? " "), 3))
                          ], 64);
                        }), 128))
                      ]),
                      unref(isTrailing) || !!slots.trailing ? (openBlock(), createBlock("span", {
                        key: 1,
                        class: ui.value.trailing({ class: props.ui?.trailing })
                      }, [
                        renderSlot(_ctx.$slots, "trailing", {
                          modelValue,
                          open,
                          ui: ui.value
                        }, () => [
                          unref(trailingIconName) ? (openBlock(), createBlock(_sfc_main$g, {
                            key: 0,
                            name: unref(trailingIconName),
                            class: ui.value.trailingIcon({ class: props.ui?.trailingIcon })
                          }, null, 8, ["name", "class"])) : createCommentVNode("", true)
                        ])
                      ], 2)) : createCommentVNode("", true)
                    ]),
                    _: 2
                  }, 1032, ["class"])
                ]),
                _: 2
              }, 1024),
              createVNode(unref(ComboboxPortal), unref(portalProps), {
                default: withCtx(() => [
                  createVNode(unref(ComboboxContent), mergeProps({
                    class: ui.value.content({ class: props.ui?.content })
                  }, contentProps.value), {
                    default: withCtx(() => [
                      createVNode(unref(FocusScope), {
                        trapped: "",
                        class: ui.value.focusScope({ class: props.ui?.focusScope })
                      }, {
                        default: withCtx(() => [
                          renderSlot(_ctx.$slots, "content-top"),
                          !!__props.searchInput ? (openBlock(), createBlock(unref(ComboboxInput), {
                            key: 0,
                            modelValue: searchTerm.value,
                            "onUpdate:modelValue": ($event) => searchTerm.value = $event,
                            "display-value": () => searchTerm.value,
                            "as-child": ""
                          }, {
                            default: withCtx(() => [
                              createVNode(_sfc_main$3, mergeProps({
                                autofocus: "",
                                autocomplete: "off",
                                size: __props.size
                              }, searchInputProps.value, {
                                class: ui.value.input({ class: props.ui?.input })
                              }), null, 16, ["size", "class"])
                            ]),
                            _: 1
                          }, 8, ["modelValue", "onUpdate:modelValue", "display-value"])) : createCommentVNode("", true),
                          createVNode(unref(ComboboxEmpty), {
                            class: ui.value.empty({ class: props.ui?.empty })
                          }, {
                            default: withCtx(() => [
                              renderSlot(_ctx.$slots, "empty", { searchTerm: searchTerm.value }, () => [
                                createTextVNode(toDisplayString(searchTerm.value ? unref(t)("selectMenu.noMatch", { searchTerm: searchTerm.value }) : unref(t)("selectMenu.noData")), 1)
                              ])
                            ]),
                            _: 3
                          }, 8, ["class"]),
                          createVNode("div", {
                            role: "presentation",
                            class: ui.value.viewport({ class: props.ui?.viewport })
                          }, [
                            createItem.value && createItemPosition.value === "top" ? (openBlock(), createBlock(unref(ReuseCreateItemTemplate), { key: 0 })) : createCommentVNode("", true),
                            (openBlock(true), createBlock(Fragment, null, renderList(filteredGroups.value, (group, groupIndex) => {
                              return openBlock(), createBlock(unref(ComboboxGroup), {
                                key: `group-${groupIndex}`,
                                class: ui.value.group({ class: props.ui?.group })
                              }, {
                                default: withCtx(() => [
                                  (openBlock(true), createBlock(Fragment, null, renderList(group, (item, index) => {
                                    return openBlock(), createBlock(Fragment, {
                                      key: `group-${groupIndex}-${index}`
                                    }, [
                                      isSelectItem(item) && item.type === "label" ? (openBlock(), createBlock(unref(ComboboxLabel), {
                                        key: 0,
                                        class: ui.value.label({ class: [props.ui?.label, item.ui?.label, item.class] })
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(unref(get)(item, props.labelKey)), 1)
                                        ]),
                                        _: 2
                                      }, 1032, ["class"])) : isSelectItem(item) && item.type === "separator" ? (openBlock(), createBlock(unref(ComboboxSeparator), {
                                        key: 1,
                                        class: ui.value.separator({ class: [props.ui?.separator, item.ui?.separator, item.class] })
                                      }, null, 8, ["class"])) : (openBlock(), createBlock(unref(ComboboxItem), {
                                        key: 2,
                                        class: ui.value.item({ class: [props.ui?.item, isSelectItem(item) && item.ui?.item, isSelectItem(item) && item.class] }),
                                        disabled: isSelectItem(item) && item.disabled,
                                        value: props.valueKey && isSelectItem(item) ? unref(get)(item, props.valueKey) : item,
                                        onSelect: ($event) => onSelect($event, item)
                                      }, {
                                        default: withCtx(() => [
                                          renderSlot(_ctx.$slots, "item", {
                                            item,
                                            index
                                          }, () => [
                                            renderSlot(_ctx.$slots, "item-leading", {
                                              item,
                                              index
                                            }, () => [
                                              isSelectItem(item) && item.icon ? (openBlock(), createBlock(_sfc_main$g, {
                                                key: 0,
                                                name: item.icon,
                                                class: ui.value.itemLeadingIcon({ class: [props.ui?.itemLeadingIcon, item.ui?.itemLeadingIcon] })
                                              }, null, 8, ["name", "class"])) : isSelectItem(item) && item.avatar ? (openBlock(), createBlock(_sfc_main$d, mergeProps({
                                                key: 1,
                                                size: item.ui?.itemLeadingAvatarSize || props.ui?.itemLeadingAvatarSize || ui.value.itemLeadingAvatarSize()
                                              }, { ref_for: true }, item.avatar, {
                                                class: ui.value.itemLeadingAvatar({ class: [props.ui?.itemLeadingAvatar, item.ui?.itemLeadingAvatar] })
                                              }), null, 16, ["size", "class"])) : isSelectItem(item) && item.chip ? (openBlock(), createBlock(_sfc_main$e, mergeProps({
                                                key: 2,
                                                size: props.ui?.itemLeadingChipSize || ui.value.itemLeadingChipSize(),
                                                inset: "",
                                                standalone: ""
                                              }, { ref_for: true }, item.chip, {
                                                class: ui.value.itemLeadingChip({ class: [props.ui?.itemLeadingChip, item.ui?.itemLeadingChip] })
                                              }), null, 16, ["size", "class"])) : createCommentVNode("", true)
                                            ]),
                                            createVNode("span", {
                                              class: ui.value.itemLabel({ class: [props.ui?.itemLabel, isSelectItem(item) && item.ui?.itemLabel] })
                                            }, [
                                              renderSlot(_ctx.$slots, "item-label", {
                                                item,
                                                index
                                              }, () => [
                                                createTextVNode(toDisplayString(isSelectItem(item) ? unref(get)(item, props.labelKey) : item), 1)
                                              ])
                                            ], 2),
                                            createVNode("span", {
                                              class: ui.value.itemTrailing({ class: [props.ui?.itemTrailing, isSelectItem(item) && item.ui?.itemTrailing] })
                                            }, [
                                              renderSlot(_ctx.$slots, "item-trailing", {
                                                item,
                                                index
                                              }),
                                              createVNode(unref(ComboboxItemIndicator), { "as-child": "" }, {
                                                default: withCtx(() => [
                                                  createVNode(_sfc_main$g, {
                                                    name: __props.selectedIcon || unref(appConfig).ui.icons.check,
                                                    class: ui.value.itemTrailingIcon({ class: [props.ui?.itemTrailingIcon, isSelectItem(item) && item.ui?.itemTrailingIcon] })
                                                  }, null, 8, ["name", "class"])
                                                ]),
                                                _: 2
                                              }, 1024)
                                            ], 2)
                                          ])
                                        ]),
                                        _: 2
                                      }, 1032, ["class", "disabled", "value", "onSelect"]))
                                    ], 64);
                                  }), 128))
                                ]),
                                _: 2
                              }, 1032, ["class"]);
                            }), 128)),
                            createItem.value && createItemPosition.value === "bottom" ? (openBlock(), createBlock(unref(ReuseCreateItemTemplate), { key: 1 })) : createCommentVNode("", true)
                          ], 2),
                          renderSlot(_ctx.$slots, "content-bottom")
                        ]),
                        _: 3
                      }, 8, ["class"]),
                      !!__props.arrow ? (openBlock(), createBlock(unref(ComboboxArrow), mergeProps({ key: 0 }, arrowProps.value, {
                        class: ui.value.arrow({ class: props.ui?.arrow })
                      }), null, 16, ["class"])) : createCommentVNode("", true)
                    ]),
                    _: 3
                  }, 16, ["class"])
                ]),
                _: 3
              }, 16)
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/SelectMenu.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const countries = [
  {
    name: "Afghanistan",
    code: "AF"
  },
  {
    name: "Albania",
    code: "AL"
  },
  {
    name: "Algeria",
    code: "DZ"
  },
  {
    name: "American Samoa",
    code: "AS"
  },
  {
    name: "Andorra",
    code: "AD"
  },
  {
    name: "Angola",
    code: "AO"
  },
  {
    name: "Anguilla",
    code: "AI"
  },
  {
    name: "Antarctica",
    code: "AQ"
  },
  {
    name: "Antigua and Barbuda",
    code: "AG"
  },
  {
    name: "Argentina",
    code: "AR"
  },
  {
    name: "Armenia",
    code: "AM"
  },
  {
    name: "Aruba",
    code: "AW"
  },
  {
    name: "Asia/Pacific Region",
    code: "AP"
  },
  {
    name: "Australia",
    code: "AU"
  },
  {
    name: "Austria",
    code: "AT"
  },
  {
    name: "Azerbaijan",
    code: "AZ"
  },
  {
    name: "Bahamas",
    code: "BS"
  },
  {
    name: "Bahrain",
    code: "BH"
  },
  {
    name: "Bangladesh",
    code: "BD"
  },
  {
    name: "Barbados",
    code: "BB"
  },
  {
    name: "Belarus",
    code: "BY"
  },
  {
    name: "Belgium",
    code: "BE"
  },
  {
    name: "Belize",
    code: "BZ"
  },
  {
    name: "Benin",
    code: "BJ"
  },
  {
    name: "Bermuda",
    code: "BM"
  },
  {
    name: "Bhutan",
    code: "BT"
  },
  {
    name: "Bolivia",
    code: "BO"
  },
  {
    name: "Bonaire, Sint Eustatius and Saba",
    code: "BQ"
  },
  {
    name: "Bosnia and Herzegovina",
    code: "BA"
  },
  {
    name: "Botswana",
    code: "BW"
  },
  {
    name: "Bouvet Island",
    code: "BV"
  },
  {
    name: "Brazil",
    code: "BR"
  },
  {
    name: "British Indian Ocean Territory",
    code: "IO"
  },
  {
    name: "Brunei Darussalam",
    code: "BN"
  },
  {
    name: "Bulgaria",
    code: "BG"
  },
  {
    name: "Burkina Faso",
    code: "BF"
  },
  {
    name: "Burundi",
    code: "BI"
  },
  {
    name: "Cambodia",
    code: "KH"
  },
  {
    name: "Cameroon",
    code: "CM"
  },
  {
    name: "Canada",
    code: "CA"
  },
  {
    name: "Cape Verde",
    code: "CV"
  },
  {
    name: "Cayman Islands",
    code: "KY"
  },
  {
    name: "Central African Republic",
    code: "CF"
  },
  {
    name: "Chad",
    code: "TD"
  },
  {
    name: "Chile",
    code: "CL"
  },
  {
    name: "China",
    code: "CN"
  },
  {
    name: "Christmas Island",
    code: "CX"
  },
  {
    name: "Cocos (Keeling) Islands",
    code: "CC"
  },
  {
    name: "Colombia",
    code: "CO"
  },
  {
    name: "Comoros",
    code: "KM"
  },
  {
    name: "Congo",
    code: "CG"
  },
  {
    name: "Congo, The Democratic Republic of the",
    code: "CD"
  },
  {
    name: "Cook Islands",
    code: "CK"
  },
  {
    name: "Costa Rica",
    code: "CR"
  },
  {
    name: "Croatia",
    code: "HR"
  },
  {
    name: "Cuba",
    code: "CU"
  },
  {
    name: "Curaçao",
    code: "CW"
  },
  {
    name: "Cyprus",
    code: "CY"
  },
  {
    name: "Czech Republic",
    code: "CZ"
  },
  {
    name: "Côte d'Ivoire",
    code: "CI"
  },
  {
    name: "Denmark",
    code: "DK"
  },
  {
    name: "Djibouti",
    code: "DJ"
  },
  {
    name: "Dominica",
    code: "DM"
  },
  {
    name: "Dominican Republic",
    code: "DO"
  },
  {
    name: "Ecuador",
    code: "EC"
  },
  {
    name: "Egypt",
    code: "EG"
  },
  {
    name: "El Salvador",
    code: "SV"
  },
  {
    name: "Equatorial Guinea",
    code: "GQ"
  },
  {
    name: "Eritrea",
    code: "ER"
  },
  {
    name: "Estonia",
    code: "EE"
  },
  {
    name: "Ethiopia",
    code: "ET"
  },
  {
    name: "Falkland Islands (Malvinas)",
    code: "FK"
  },
  {
    name: "Faroe Islands",
    code: "FO"
  },
  {
    name: "Fiji",
    code: "FJ"
  },
  {
    name: "Finland",
    code: "FI"
  },
  {
    name: "France",
    code: "FR"
  },
  {
    name: "French Guiana",
    code: "GF"
  },
  {
    name: "French Polynesia",
    code: "PF"
  },
  {
    name: "French Southern Territories",
    code: "TF"
  },
  {
    name: "Gabon",
    code: "GA"
  },
  {
    name: "Gambia",
    code: "GM"
  },
  {
    name: "Georgia",
    code: "GE"
  },
  {
    name: "Germany",
    code: "DE"
  },
  {
    name: "Ghana",
    code: "GH"
  },
  {
    name: "Gibraltar",
    code: "GI"
  },
  {
    name: "Greece",
    code: "GR"
  },
  {
    name: "Greenland",
    code: "GL"
  },
  {
    name: "Grenada",
    code: "GD"
  },
  {
    name: "Guadeloupe",
    code: "GP"
  },
  {
    name: "Guam",
    code: "GU"
  },
  {
    name: "Guatemala",
    code: "GT"
  },
  {
    name: "Guernsey",
    code: "GG"
  },
  {
    name: "Guinea",
    code: "GN"
  },
  {
    name: "Guinea-Bissau",
    code: "GW"
  },
  {
    name: "Guyana",
    code: "GY"
  },
  {
    name: "Haiti",
    code: "HT"
  },
  {
    name: "Heard Island and Mcdonald Islands",
    code: "HM"
  },
  {
    name: "Holy See (Vatican City State)",
    code: "VA"
  },
  {
    name: "Honduras",
    code: "HN"
  },
  {
    name: "Hong Kong",
    code: "HK"
  },
  {
    name: "Hungary",
    code: "HU"
  },
  {
    name: "Iceland",
    code: "IS"
  },
  {
    name: "India",
    code: "IN"
  },
  {
    name: "Indonesia",
    code: "ID"
  },
  {
    name: "Iran, Islamic Republic Of",
    code: "IR"
  },
  {
    name: "Iraq",
    code: "IQ"
  },
  {
    name: "Ireland",
    code: "IE"
  },
  {
    name: "Isle of Man",
    code: "IM"
  },
  {
    name: "Israel",
    code: "IL"
  },
  {
    name: "Italy",
    code: "IT"
  },
  {
    name: "Jamaica",
    code: "JM"
  },
  {
    name: "Japan",
    code: "JP"
  },
  {
    name: "Jersey",
    code: "JE"
  },
  {
    name: "Jordan",
    code: "JO"
  },
  {
    name: "Kazakhstan",
    code: "KZ"
  },
  {
    name: "Kenya",
    code: "KE"
  },
  {
    name: "Kiribati",
    code: "KI"
  },
  {
    name: "Korea, Republic of",
    code: "KR"
  },
  {
    name: "Kuwait",
    code: "KW"
  },
  {
    name: "Kyrgyzstan",
    code: "KG"
  },
  {
    name: "Laos",
    code: "LA"
  },
  {
    name: "Latvia",
    code: "LV"
  },
  {
    name: "Lebanon",
    code: "LB"
  },
  {
    name: "Lesotho",
    code: "LS"
  },
  {
    name: "Liberia",
    code: "LR"
  },
  {
    name: "Libyan Arab Jamahiriya",
    code: "LY"
  },
  {
    name: "Liechtenstein",
    code: "LI"
  },
  {
    name: "Lithuania",
    code: "LT"
  },
  {
    name: "Luxembourg",
    code: "LU"
  },
  {
    name: "Macao",
    code: "MO"
  },
  {
    name: "Madagascar",
    code: "MG"
  },
  {
    name: "Malawi",
    code: "MW"
  },
  {
    name: "Malaysia",
    code: "MY"
  },
  {
    name: "Maldives",
    code: "MV"
  },
  {
    name: "Mali",
    code: "ML"
  },
  {
    name: "Malta",
    code: "MT"
  },
  {
    name: "Marshall Islands",
    code: "MH"
  },
  {
    name: "Martinique",
    code: "MQ"
  },
  {
    name: "Mauritania",
    code: "MR"
  },
  {
    name: "Mauritius",
    code: "MU"
  },
  {
    name: "Mayotte",
    code: "YT"
  },
  {
    name: "Mexico",
    code: "MX"
  },
  {
    name: "Micronesia, Federated States of",
    code: "FM"
  },
  {
    name: "Moldova, Republic of",
    code: "MD"
  },
  {
    name: "Monaco",
    code: "MC"
  },
  {
    name: "Mongolia",
    code: "MN"
  },
  {
    name: "Montenegro",
    code: "ME"
  },
  {
    name: "Montserrat",
    code: "MS"
  },
  {
    name: "Morocco",
    code: "MA"
  },
  {
    name: "Mozambique",
    code: "MZ"
  },
  {
    name: "Myanmar",
    code: "MM"
  },
  {
    name: "Namibia",
    code: "NA"
  },
  {
    name: "Nauru",
    code: "NR"
  },
  {
    name: "Nepal",
    code: "NP"
  },
  {
    name: "Netherlands",
    code: "NL"
  },
  {
    name: "Netherlands Antilles",
    code: "AN"
  },
  {
    name: "New Caledonia",
    code: "NC"
  },
  {
    name: "New Zealand",
    code: "NZ"
  },
  {
    name: "Nicaragua",
    code: "NI"
  },
  {
    name: "Niger",
    code: "NE"
  },
  {
    name: "Nigeria",
    code: "NG"
  },
  {
    name: "Niue",
    code: "NU"
  },
  {
    name: "Norfolk Island",
    code: "NF"
  },
  {
    name: "North Korea",
    code: "KP"
  },
  {
    name: "North Macedonia",
    code: "MK"
  },
  {
    name: "Northern Mariana Islands",
    code: "MP"
  },
  {
    name: "Norway",
    code: "NO"
  },
  {
    name: "Oman",
    code: "OM"
  },
  {
    name: "Pakistan",
    code: "PK"
  },
  {
    name: "Palau",
    code: "PW"
  },
  {
    name: "Palestinian Territory, Occupied",
    code: "PS"
  },
  {
    name: "Panama",
    code: "PA"
  },
  {
    name: "Papua New Guinea",
    code: "PG"
  },
  {
    name: "Paraguay",
    code: "PY"
  },
  {
    name: "Peru",
    code: "PE"
  },
  {
    name: "Philippines",
    code: "PH"
  },
  {
    name: "Pitcairn Islands",
    code: "PN"
  },
  {
    name: "Poland",
    code: "PL"
  },
  {
    name: "Portugal",
    code: "PT"
  },
  {
    name: "Puerto Rico",
    code: "PR"
  },
  {
    name: "Qatar",
    code: "QA"
  },
  {
    name: "Reunion",
    code: "RE"
  },
  {
    name: "Romania",
    code: "RO"
  },
  {
    name: "Russian Federation",
    code: "RU"
  },
  {
    name: "Rwanda",
    code: "RW"
  },
  {
    name: "Saint Barthélemy",
    code: "BL"
  },
  {
    name: "Saint Helena",
    code: "SH"
  },
  {
    name: "Saint Kitts and Nevis",
    code: "KN"
  },
  {
    name: "Saint Lucia",
    code: "LC"
  },
  {
    name: "Saint Martin",
    code: "MF"
  },
  {
    name: "Saint Martin",
    code: "MF"
  },
  {
    name: "Saint Pierre and Miquelon",
    code: "PM"
  },
  {
    name: "Saint Vincent and the Grenadines",
    code: "VC"
  },
  {
    name: "Samoa",
    code: "WS"
  },
  {
    name: "San Marino",
    code: "SM"
  },
  {
    name: "Sao Tome and Principe",
    code: "ST"
  },
  {
    name: "Saudi Arabia",
    code: "SA"
  },
  {
    name: "Senegal",
    code: "SN"
  },
  {
    name: "Serbia",
    code: "RS"
  },
  {
    name: "Serbia and Montenegro",
    code: "CS"
  },
  {
    name: "Seychelles",
    code: "SC"
  },
  {
    name: "Sierra Leone",
    code: "SL"
  },
  {
    name: "Singapore",
    code: "SG"
  },
  {
    name: "Sint Maarten",
    code: "SX"
  },
  {
    name: "Slovakia",
    code: "SK"
  },
  {
    name: "Slovenia",
    code: "SI"
  },
  {
    name: "Solomon Islands",
    code: "SB"
  },
  {
    name: "Somalia",
    code: "SO"
  },
  {
    name: "South Africa",
    code: "ZA"
  },
  {
    name: "South Georgia and the South Sandwich Islands",
    code: "GS"
  },
  {
    name: "South Sudan",
    code: "SS"
  },
  {
    name: "Spain",
    code: "ES"
  },
  {
    name: "Sri Lanka",
    code: "LK"
  },
  {
    name: "Sudan",
    code: "SD"
  },
  {
    name: "Suriname",
    code: "SR"
  },
  {
    name: "Svalbard and Jan Mayen",
    code: "SJ"
  },
  {
    name: "Swaziland",
    code: "SZ"
  },
  {
    name: "Sweden",
    code: "SE"
  },
  {
    name: "Switzerland",
    code: "CH"
  },
  {
    name: "Syrian Arab Republic",
    code: "SY"
  },
  {
    name: "Taiwan",
    code: "TW"
  },
  {
    name: "Tajikistan",
    code: "TJ"
  },
  {
    name: "Tanzania, United Republic of",
    code: "TZ"
  },
  {
    name: "Thailand",
    code: "TH"
  },
  {
    name: "Timor-Leste",
    code: "TL"
  },
  {
    name: "Togo",
    code: "TG"
  },
  {
    name: "Tokelau",
    code: "TK"
  },
  {
    name: "Tonga",
    code: "TO"
  },
  {
    name: "Trinidad and Tobago",
    code: "TT"
  },
  {
    name: "Tunisia",
    code: "TN"
  },
  {
    name: "Turkey",
    code: "TR"
  },
  {
    name: "Turkmenistan",
    code: "TM"
  },
  {
    name: "Turks and Caicos Islands",
    code: "TC"
  },
  {
    name: "Tuvalu",
    code: "TV"
  },
  {
    name: "Uganda",
    code: "UG"
  },
  {
    name: "Ukraine",
    code: "UA"
  },
  {
    name: "United Arab Emirates",
    code: "AE"
  },
  {
    name: "United Kingdom",
    code: "GB"
  },
  {
    name: "United States",
    code: "US"
  },
  {
    name: "United States Minor Outlying Islands",
    code: "UM"
  },
  {
    name: "Uruguay",
    code: "UY"
  },
  {
    name: "Uzbekistan",
    code: "UZ"
  },
  {
    name: "Vanuatu",
    code: "VU"
  },
  {
    name: "Venezuela",
    code: "VE"
  },
  {
    name: "Vietnam",
    code: "VN"
  },
  {
    name: "Virgin Islands, British",
    code: "VG"
  },
  {
    name: "Virgin Islands, U.S.",
    code: "VI"
  },
  {
    name: "Wallis and Futuna",
    code: "WF"
  },
  {
    name: "Western Sahara",
    code: "EH"
  },
  {
    name: "Yemen",
    code: "YE"
  },
  {
    name: "Zambia",
    code: "ZM"
  },
  {
    name: "Zimbabwe",
    code: "ZW"
  },
  {
    name: "Åland Islands",
    code: "AX"
  }
];
const statesAndLGAs = [
  {
    state: "Adamawa",
    alias: "adamawa",
    lgas: [
      "Demsa",
      "Fufure",
      "Ganye",
      "Gayuk",
      "Gombi",
      "Grie",
      "Hong",
      "Jada",
      "Larmurde",
      "Madagali",
      "Maiha",
      "Mayo Belwa",
      "Michika",
      "Mubi North",
      "Mubi South",
      "Numan",
      "Shelleng",
      "Song",
      "Toungo",
      "Yola North",
      "Yola South"
    ]
  },
  {
    state: "Akwa Ibom",
    alias: "akwa_ibom",
    lgas: [
      "Abak",
      "Eastern Obolo",
      "Eket",
      "Esit Eket",
      "Essien Udim",
      "Etim Ekpo",
      "Etinan",
      "Ibeno",
      "Ibesikpo Asutan",
      "Ibiono-Ibom",
      "Ikot Abasi",
      "Ika",
      "Ikono",
      "Ikot Ekpene",
      "Ini",
      "Mkpat-Enin",
      "Itu",
      "Mbo",
      "Nsit-Atai",
      "Nsit-Ibom",
      "Nsit-Ubium",
      "Obot Akara",
      "Okobo",
      "Onna",
      "Oron",
      "Udung-Uko",
      "Ukanafun",
      "Oruk Anam",
      "Uruan",
      "Urue-Offong/Oruko",
      "Uyo"
    ]
  },
  {
    state: "Anambra",
    alias: "anambra",
    lgas: [
      "Aguata",
      "Anambra East",
      "Anaocha",
      "Awka North",
      "Anambra West",
      "Awka South",
      "Ayamelum",
      "Dunukofia",
      "Ekwusigo",
      "Idemili North",
      "Idemili South",
      "Ihiala",
      "Njikoka",
      "Nnewi North",
      "Nnewi South",
      "Ogbaru",
      "Onitsha North",
      "Onitsha South",
      "Orumba North",
      "Orumba South",
      "Oyi"
    ]
  },
  {
    state: "Ogun",
    alias: "ogun",
    lgas: [
      "Abeokuta North",
      "Abeokuta South",
      "Ado-Odo/Ota",
      "Egbado North",
      "Ewekoro",
      "Egbado South",
      "Ijebu North",
      "Ijebu East",
      "Ifo",
      "Ijebu Ode",
      "Ijebu North East",
      "Imeko Afon",
      "Ikenne",
      "Ipokia",
      "Odeda",
      "Obafemi Owode",
      "Odogbolu",
      "Remo North",
      "Ogun Waterside",
      "Shagamu"
    ]
  },
  {
    state: "Ondo",
    alias: "ondo",
    lgas: [
      "Akoko North-East",
      "Akoko North-West",
      "Akoko South-West",
      "Akoko South-East",
      "Akure North",
      "Akure South",
      "Ese Odo",
      "Idanre",
      "Ifedore",
      "Ilaje",
      "Irele",
      "Ile Oluji/Okeigbo",
      "Odigbo",
      "Okitipupa",
      "Ondo West",
      "Ose",
      "Ondo East",
      "Owo"
    ]
  },
  {
    state: "Rivers",
    alias: "rivers",
    lgas: [
      "Abua/Odual",
      "Ahoada East",
      "Ahoada West",
      "Andoni",
      "Akuku-Toru",
      "Asari-Toru",
      "Bonny",
      "Degema",
      "Emuoha",
      "Eleme",
      "Ikwerre",
      "Etche",
      "Gokana",
      "Khana",
      "Obio/Akpor",
      "Ogba/Egbema/Ndoni",
      "Ogu/Bolo",
      "Okrika",
      "Omuma",
      "Opobo/Nkoro",
      "Oyigbo",
      "Port Harcourt",
      "Tai"
    ]
  },
  {
    state: "Bauchi",
    alias: "bauchi",
    lgas: [
      "Alkaleri",
      "Bauchi",
      "Bogoro",
      "Damban",
      "Darazo",
      "Dass",
      "Gamawa",
      "Ganjuwa",
      "Giade",
      "Itas/Gadau",
      "Jama'are",
      "Katagum",
      "Kirfi",
      "Misau",
      "Ningi",
      "Shira",
      "Tafawa Balewa",
      "Toro",
      "Warji",
      "Zaki"
    ]
  },
  {
    state: "Benue",
    alias: "benue",
    lgas: [
      "Agatu",
      "Apa",
      "Ado",
      "Buruku",
      "Gboko",
      "Guma",
      "Gwer East",
      "Gwer West",
      "Katsina-Ala",
      "Konshisha",
      "Kwande",
      "Logo",
      "Makurdi",
      "Obi",
      "Ogbadibo",
      "Ohimini",
      "Oju",
      "Okpokwu",
      "Oturkpo",
      "Tarka",
      "Ukum",
      "Ushongo",
      "Vandeikya"
    ]
  },
  {
    state: "Borno",
    alias: "borno",
    lgas: [
      "Abadam",
      "Askira/Uba",
      "Bama",
      "Bayo",
      "Biu",
      "Chibok",
      "Damboa",
      "Dikwa",
      "Guzamala",
      "Gubio",
      "Hawul",
      "Gwoza",
      "Jere",
      "Kaga",
      "Kala/Balge",
      "Konduga",
      "Kukawa",
      "Kwaya Kusar",
      "Mafa",
      "Magumeri",
      "Maiduguri",
      "Mobbar",
      "Marte",
      "Monguno",
      "Ngala",
      "Nganzai",
      "Shani"
    ]
  },
  {
    state: "Bayelsa",
    alias: "bayelsa",
    lgas: [
      "Brass",
      "Ekeremor",
      "Kolokuma/Opokuma",
      "Nembe",
      "Ogbia",
      "Sagbama",
      "Southern Ijaw",
      "Yenagoa"
    ]
  },
  {
    state: "Cross River",
    alias: "cross_river",
    lgas: [
      "Abi",
      "Akamkpa",
      "Akpabuyo",
      "Bakassi",
      "Bekwarra",
      "Biase",
      "Boki",
      "Calabar Municipal",
      "Calabar South",
      "Etung",
      "Ikom",
      "Obanliku",
      "Obubra",
      "Obudu",
      "Odukpani",
      "Ogoja",
      "Yakuur",
      "Yala"
    ]
  },
  {
    state: "Delta",
    alias: "delta",
    lgas: [
      "Aniocha North",
      "Aniocha South",
      "Bomadi",
      "Burutu",
      "Ethiope West",
      "Ethiope East",
      "Ika North East",
      "Ika South",
      "Isoko North",
      "Isoko South",
      "Ndokwa East",
      "Ndokwa West",
      "Okpe",
      "Oshimili North",
      "Oshimili South",
      "Patani",
      "Sapele",
      "Udu",
      "Ughelli North",
      "Ukwuani",
      "Ughelli South",
      "Uvwie",
      "Warri North",
      "Warri South",
      "Warri South West"
    ]
  },
  {
    state: "Ebonyi",
    alias: "ebonyi",
    lgas: [
      "Abakaliki",
      "Afikpo North",
      "Ebonyi",
      "Afikpo South",
      "Ezza North",
      "Ikwo",
      "Ezza South",
      "Ivo",
      "Ishielu",
      "Izzi",
      "Ohaozara",
      "Ohaukwu",
      "Onicha"
    ]
  },
  {
    state: "Edo",
    alias: "edo",
    lgas: [
      "Akoko-Edo",
      "Egor",
      "Esan Central",
      "Esan North-East",
      "Esan South-East",
      "Esan West",
      "Etsako Central",
      "Etsako East",
      "Etsako West",
      "Igueben",
      "Ikpoba Okha",
      "Orhionmwon",
      "Oredo",
      "Ovia North-East",
      "Ovia South-West",
      "Owan East",
      "Owan West",
      "Uhunmwonde"
    ]
  },
  {
    state: "Ekiti",
    alias: "ekiti",
    lgas: [
      "Ado Ekiti",
      "Efon",
      "Ekiti East",
      "Ekiti South-West",
      "Ekiti West",
      "Emure",
      "Gbonyin",
      "Ido Osi",
      "Ijero",
      "Ikere",
      "Ilejemeje",
      "Irepodun/Ifelodun",
      "Ikole",
      "Ise/Orun",
      "Moba",
      "Oye"
    ]
  },
  {
    state: "Enugu",
    alias: "enugu",
    lgas: [
      "Awgu",
      "Aninri",
      "Enugu East",
      "Enugu North",
      "Ezeagu",
      "Enugu South",
      "Igbo Etiti",
      "Igbo Eze North",
      "Igbo Eze South",
      "Isi Uzo",
      "Nkanu East",
      "Nkanu West",
      "Nsukka",
      "Udenu",
      "Oji River",
      "Uzo Uwani",
      "Udi"
    ]
  },
  {
    state: "Federal Capital Territory",
    alias: "abuja",
    lgas: [
      "Abaji",
      "Bwari",
      "Gwagwalada",
      "Kuje",
      "Kwali",
      "Municipal Area Council"
    ]
  },
  {
    state: "Gombe",
    alias: "gombe",
    lgas: [
      "Akko",
      "Balanga",
      "Billiri",
      "Dukku",
      "Funakaye",
      "Gombe",
      "Kaltungo",
      "Kwami",
      "Nafada",
      "Shongom",
      "Yamaltu/Deba"
    ]
  },
  {
    state: "Jigawa",
    alias: "jigawa",
    lgas: [
      "Auyo",
      "Babura",
      "Buji",
      "Biriniwa",
      "Birnin Kudu",
      "Dutse",
      "Gagarawa",
      "Garki",
      "Gumel",
      "Guri",
      "Gwaram",
      "Gwiwa",
      "Hadejia",
      "Jahun",
      "Kafin Hausa",
      "Kazaure",
      "Kiri Kasama",
      "Kiyawa",
      "Kaugama",
      "Maigatari",
      "Malam Madori",
      "Miga",
      "Sule Tankarkar",
      "Roni",
      "Ringim",
      "Yankwashi",
      "Taura"
    ]
  },
  {
    state: "Oyo",
    alias: "oyo",
    lgas: [
      "Afijio",
      "Akinyele",
      "Atiba",
      "Atisbo",
      "Egbeda",
      "Ibadan North",
      "Ibadan North-East",
      "Ibadan North-West",
      "Ibadan South-East",
      "Ibarapa Central",
      "Ibadan South-West",
      "Ibarapa East",
      "Ido",
      "Ibarapa North",
      "Irepo",
      "Iseyin",
      "Itesiwaju",
      "Iwajowa",
      "Kajola",
      "Lagelu",
      "Ogbomosho North",
      "Ogbomosho South",
      "Ogo Oluwa",
      "Olorunsogo",
      "Oluyole",
      "Ona Ara",
      "Orelope",
      "Ori Ire",
      "Oyo",
      "Oyo East",
      "Saki East",
      "Saki West",
      "Surulere Oyo State"
    ]
  },
  {
    state: "Imo",
    alias: "imo",
    lgas: [
      "Aboh Mbaise",
      "Ahiazu Mbaise",
      "Ehime Mbano",
      "Ezinihitte",
      "Ideato North",
      "Ideato South",
      "Ihitte/Uboma",
      "Ikeduru",
      "Isiala Mbano",
      "Mbaitoli",
      "Isu",
      "Ngor Okpala",
      "Njaba",
      "Nkwerre",
      "Nwangele",
      "Obowo",
      "Oguta",
      "Ohaji/Egbema",
      "Okigwe",
      "Orlu",
      "Orsu",
      "Oru East",
      "Oru West",
      "Owerri Municipal",
      "Owerri North",
      "Unuimo",
      "Owerri West"
    ]
  },
  {
    state: "Kaduna",
    alias: "kaduna",
    lgas: [
      "Birnin Gwari",
      "Chikun",
      "Giwa",
      "Ikara",
      "Igabi",
      "Jaba",
      "Jema'a",
      "Kachia",
      "Kaduna North",
      "Kaduna South",
      "Kagarko",
      "Kajuru",
      "Kaura",
      "Kauru",
      "Kubau",
      "Kudan",
      "Lere",
      "Makarfi",
      "Sabon Gari",
      "Sanga",
      "Soba",
      "Zangon Kataf",
      "Zaria"
    ]
  },
  {
    state: "Kebbi",
    alias: "kebbi",
    lgas: [
      "Aleiro",
      "Argungu",
      "Arewa Dandi",
      "Augie",
      "Bagudo",
      "Birnin Kebbi",
      "Bunza",
      "Dandi",
      "Fakai",
      "Gwandu",
      "Jega",
      "Kalgo",
      "Koko/Besse",
      "Maiyama",
      "Ngaski",
      "Shanga",
      "Suru",
      "Sakaba",
      "Wasagu/Danko",
      "Yauri",
      "Zuru"
    ]
  },
  {
    state: "Kano",
    alias: "kano",
    lgas: [
      "Ajingi",
      "Albasu",
      "Bagwai",
      "Bebeji",
      "Bichi",
      "Bunkure",
      "Dala",
      "Dambatta",
      "Dawakin Kudu",
      "Dawakin Tofa",
      "Doguwa",
      "Fagge",
      "Gabasawa",
      "Garko",
      "Garun Mallam",
      "Gezawa",
      "Gaya",
      "Gwale",
      "Gwarzo",
      "Kabo",
      "Kano Municipal",
      "Karaye",
      "Kibiya",
      "Kiru",
      "Kumbotso",
      "Kunchi",
      "Kura",
      "Madobi",
      "Makoda",
      "Minjibir",
      "Nasarawa",
      "Rano",
      "Rimin Gado",
      "Rogo",
      "Shanono",
      "Takai",
      "Sumaila",
      "Tarauni",
      "Tofa",
      "Tsanyawa",
      "Tudun Wada",
      "Ungogo",
      "Warawa",
      "Wudil"
    ]
  },
  {
    state: "Kogi",
    alias: "kogi",
    lgas: [
      "Ajaokuta",
      "Adavi",
      "Ankpa",
      "Bassa",
      "Dekina",
      "Ibaji",
      "Idah",
      "Igalamela Odolu",
      "Ijumu",
      "Kogi",
      "Kabba/Bunu",
      "Lokoja",
      "Ofu",
      "Mopa Muro",
      "Ogori/Magongo",
      "Okehi",
      "Okene",
      "Olamaboro",
      "Omala",
      "Yagba East",
      "Yagba West"
    ]
  },
  {
    state: "Osun",
    alias: "osun",
    lgas: [
      "Aiyedire",
      "Atakunmosa West",
      "Atakunmosa East",
      "Aiyedaade",
      "Boluwaduro",
      "Boripe",
      "Ife East",
      "Ede South",
      "Ife North",
      "Ede North",
      "Ife South",
      "Ejigbo",
      "Ife Central",
      "Ifedayo",
      "Egbedore",
      "Ila",
      "Ifelodun",
      "Ilesa East",
      "Ilesa West",
      "Irepodun",
      "Irewole",
      "Isokan",
      "Iwo",
      "Obokun",
      "Odo Otin",
      "Ola Oluwa",
      "Olorunda",
      "Oriade",
      "Orolu",
      "Osogbo"
    ]
  },
  {
    state: "Sokoto",
    alias: "sokoto",
    lgas: [
      "Gudu",
      "Gwadabawa",
      "Illela",
      "Isa",
      "Kebbe",
      "Kware",
      "Rabah",
      "Sabon Birni",
      "Shagari",
      "Silame",
      "Sokoto North",
      "Sokoto South",
      "Tambuwal",
      "Tangaza",
      "Tureta",
      "Wamako",
      "Wurno",
      "Yabo",
      "Binji",
      "Bodinga",
      "Dange Shuni",
      "Goronyo",
      "Gada"
    ]
  },
  {
    state: "Plateau",
    alias: "plateau",
    lgas: [
      "Bokkos",
      "Barkin Ladi",
      "Bassa",
      "Jos East",
      "Jos North",
      "Jos South",
      "Kanam",
      "Kanke",
      "Langtang South",
      "Langtang North",
      "Mangu",
      "Mikang",
      "Pankshin",
      "Qua'an Pan",
      "Riyom",
      "Shendam",
      "Wase"
    ]
  },
  {
    state: "Taraba",
    alias: "taraba",
    lgas: [
      "Ardo Kola",
      "Bali",
      "Donga",
      "Gashaka",
      "Gassol",
      "Ibi",
      "Jalingo",
      "Karim Lamido",
      "Kumi",
      "Lau",
      "Sardauna",
      "Takum",
      "Ussa",
      "Wukari",
      "Yorro",
      "Zing"
    ]
  },
  {
    state: "Yobe",
    alias: "yobe",
    lgas: [
      "Bade",
      "Bursari",
      "Damaturu",
      "Fika",
      "Fune",
      "Geidam",
      "Gujba",
      "Gulani",
      "Jakusko",
      "Karasuwa",
      "Machina",
      "Nangere",
      "Nguru",
      "Potiskum",
      "Tarmuwa",
      "Yunusari",
      "Yusufari"
    ]
  },
  {
    state: "Zamfara",
    alias: "zamfara",
    lgas: [
      "Anka",
      "Birnin Magaji/Kiyaw",
      "Bakura",
      "Bukkuyum",
      "Bungudu",
      "Gummi",
      "Gusau",
      "Kaura Namoda",
      "Maradun",
      "Shinkafi",
      "Maru",
      "Talata Mafara",
      "Tsafe",
      "Zurmi"
    ]
  },
  {
    state: "Lagos",
    alias: "lagos",
    lgas: [
      "Agege",
      "Ajeromi-Ifelodun",
      "Alimosho",
      "Amuwo-Odofin",
      "Badagry",
      "Apapa",
      "Epe",
      "Eti Osa",
      "Ibeju-Lekki",
      "Ifako-Ijaiye",
      "Ikeja",
      "Ikorodu",
      "Kosofe",
      "Lagos Island",
      "Mushin",
      "Lagos Mainland",
      "Ojo",
      "Oshodi-Isolo",
      "Shomolu",
      "Surulere Lagos State"
    ]
  },
  {
    state: "Katsina",
    alias: "katsina",
    lgas: [
      "Bakori",
      "Batagarawa",
      "Batsari",
      "Baure",
      "Bindawa",
      "Charanchi",
      "Danja",
      "Dandume",
      "Dan Musa",
      "Daura",
      "Dutsi",
      "Dutsin Ma",
      "Faskari",
      "Funtua",
      "Ingawa",
      "Jibia",
      "Kafur",
      "Kaita",
      "Kankara",
      "Kankia",
      "Katsina",
      "Kurfi",
      "Kusada",
      "Mai'Adua",
      "Malumfashi",
      "Mani",
      "Mashi",
      "Matazu",
      "Musawa",
      "Rimi",
      "Sabuwa",
      "Safana",
      "Sandamu",
      "Zango"
    ]
  },
  {
    state: "Kwara",
    alias: "kwara",
    lgas: [
      "Asa",
      "Baruten",
      "Edu",
      "Ilorin East",
      "Ifelodun",
      "Ilorin South",
      "Ekiti Kwara State",
      "Ilorin West",
      "Irepodun",
      "Isin",
      "Kaiama",
      "Moro",
      "Offa",
      "Oke Ero",
      "Oyun",
      "Pategi"
    ]
  },
  {
    state: "Nasarawa",
    alias: "nasarawa",
    lgas: [
      "Akwanga",
      "Awe",
      "Doma",
      "Karu",
      "Keana",
      "Keffi",
      "Lafia",
      "Kokona",
      "Nasarawa Egon",
      "Nasarawa",
      "Obi",
      "Toto",
      "Wamba"
    ]
  },
  {
    state: "Niger",
    alias: "niger",
    lgas: [
      "Agaie",
      "Agwara",
      "Bida",
      "Borgu",
      "Bosso",
      "Chanchaga",
      "Edati",
      "Gbako",
      "Gurara",
      "Katcha",
      "Kontagora",
      "Lapai",
      "Lavun",
      "Mariga",
      "Magama",
      "Mokwa",
      "Mashegu",
      "Moya",
      "Paikoro",
      "Rafi",
      "Rijau",
      "Shiroro",
      "Suleja",
      "Tafa",
      "Wushishi"
    ]
  },
  {
    state: "Abia",
    alias: "abia",
    lgas: [
      "Aba North",
      "Arochukwu",
      "Aba South",
      "Bende",
      "Isiala Ngwa North",
      "Ikwuano",
      "Isiala Ngwa South",
      "Isuikwuato",
      "Obi Ngwa",
      "Ohafia",
      "Osisioma",
      "Ugwunagbo",
      "Ukwa East",
      "Ukwa West",
      "Umuahia North",
      "Umuahia South",
      "Umu Nneochi"
    ]
  }
];
const states = statesAndLGAs.map((state) => state.state);
const getLGAs = (state) => {
  return statesAndLGAs.find((s) => s.state.toLowerCase() === state.toLowerCase())?.lgas ?? [];
};
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
    } = ([__temp, __restore] = withAsyncContext(() => useFetch(`/api/users/applicant/applications/${applicationId}`, "$DohO30Jymv")), __temp = await __temp, __restore(), __temp);
    const initial = computed(() => {
      return {
        firstName: app.value?.firstName ?? "",
        middleName: app.value?.middleName ?? "",
        otherNames: app.value?.otherNames ?? "",
        lastName: app.value?.lastName ?? "",
        phoneNumber: app.value?.phoneNumber ?? "",
        gender: app.value?.gender ?? "male",
        birthDay: app.value?.birthDay ?? 1,
        birthMonth: app.value?.birthMonth ?? Calendar.months().long[0],
        birthYear: app.value?.birthYear ?? Calendar.allowedYears()[0],
        nationality: app.value?.nationality ?? "Nigeria",
        stateOfOrigin: app.value?.stateOfOrigin ?? "",
        lga: app.value?.lga ?? "",
        nin: app.value?.nin ?? ""
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
        schema: applicationPersonalSchema,
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
            navigateTo(`/application/portal/${applicationId}/family-info`);
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
      const _component_FetchErrorAlert = __nuxt_component_0;
      const _component_NuxtForm = _sfc_main$2;
      const _component_NuxtFormField = _sfc_main$1$1;
      const _component_NuxtInput = _sfc_main$3;
      const _component_NuxtSelect = _sfc_main$4;
      const _component_NuxtSelectMenu = _sfc_main$1;
      const _component_NuxtButton = _sfc_main$a;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full" }, _attrs))}><div class="lg:max-w-[70%] mx-auto"><header><h1 class="text-xl font-bold">Personal Information</h1><p class="text-sm muted"> Lorem ipsum dolor sit amet consectetur, adipisicing elit. </p></header><section class="my-5">`);
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
          schema: unref(applicationPersonalSchema),
          disabled: unref(app).status === "closed" || !!unref(app).isSubmitted
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="grid md:grid-cols-2 gap-2.5"${_scopeId}>`);
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
                      class: "w-full",
                      size: "lg"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_NuxtInput, {
                        modelValue: unref(state).firstName,
                        "onUpdate:modelValue": ($event) => unref(state).firstName = $event,
                        class: "w-full",
                        size: "lg"
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
                      class: "w-full",
                      size: "lg"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_NuxtInput, {
                        modelValue: unref(state).middleName,
                        "onUpdate:modelValue": ($event) => unref(state).middleName = $event,
                        class: "w-full",
                        size: "lg"
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
                      class: "w-full",
                      size: "lg"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_NuxtInput, {
                        modelValue: unref(state).otherNames,
                        "onUpdate:modelValue": ($event) => unref(state).otherNames = $event,
                        class: "w-full",
                        size: "lg"
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
                      class: "w-full",
                      size: "lg"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_NuxtInput, {
                        modelValue: unref(state).lastName,
                        "onUpdate:modelValue": ($event) => unref(state).lastName = $event,
                        class: "w-full",
                        size: "lg"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_NuxtFormField, {
                name: "email",
                label: "Email Address",
                required: "",
                class: "md:col-span-2"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_NuxtInput, {
                      value: unref(app).user.email,
                      disabled: "",
                      class: "w-full",
                      size: "lg"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_NuxtInput, {
                        value: unref(app).user.email,
                        disabled: "",
                        class: "w-full",
                        size: "lg"
                      }, null, 8, ["value"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_NuxtFormField, {
                name: "phoneNumber",
                label: "Phone Number",
                required: ""
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_NuxtInput, {
                      modelValue: unref(state).phoneNumber,
                      "onUpdate:modelValue": ($event) => unref(state).phoneNumber = $event,
                      class: "w-full",
                      size: "lg"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_NuxtInput, {
                        modelValue: unref(state).phoneNumber,
                        "onUpdate:modelValue": ($event) => unref(state).phoneNumber = $event,
                        class: "w-full",
                        size: "lg"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_NuxtFormField, {
                name: "gender",
                label: "Gender",
                required: ""
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_NuxtSelect, {
                      modelValue: unref(state).gender,
                      "onUpdate:modelValue": ($event) => unref(state).gender = $event,
                      items: ["male", "female"],
                      class: "w-full",
                      size: "lg"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_NuxtSelect, {
                        modelValue: unref(state).gender,
                        "onUpdate:modelValue": ($event) => unref(state).gender = $event,
                        items: ["male", "female"],
                        class: "w-full",
                        size: "lg"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`<div class="md:col-span-2 grid gap-2.5 md:grid-cols-3"${_scopeId}>`);
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
                      class: "w-full",
                      size: "lg"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_NuxtSelect, {
                        modelValue: unref(state).birthDay,
                        "onUpdate:modelValue": ($event) => unref(state).birthDay = $event,
                        items: unref(Calendar).monthDays(),
                        class: "w-full",
                        size: "lg"
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
                      class: "w-full",
                      size: "lg"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_NuxtSelect, {
                        modelValue: unref(state).birthMonth,
                        "onUpdate:modelValue": ($event) => unref(state).birthMonth = $event,
                        items: unref(Calendar).months().long,
                        class: "w-full",
                        size: "lg"
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_NuxtFormField, {
                name: "birthYear",
                label: "Year of Birth",
                required: ""
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_NuxtSelect, {
                      modelValue: unref(state).birthYear,
                      "onUpdate:modelValue": ($event) => unref(state).birthYear = $event,
                      items: unref(Calendar).allowedYears(),
                      class: "w-full",
                      size: "lg"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_NuxtSelect, {
                        modelValue: unref(state).birthYear,
                        "onUpdate:modelValue": ($event) => unref(state).birthYear = $event,
                        items: unref(Calendar).allowedYears(),
                        class: "w-full",
                        size: "lg"
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div>`);
              _push2(ssrRenderComponent(_component_NuxtFormField, {
                name: "nationality",
                label: "Nationality",
                required: ""
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_NuxtSelectMenu, {
                      modelValue: unref(state).nationality,
                      "onUpdate:modelValue": ($event) => unref(state).nationality = $event,
                      items: unref(countries).map((c) => c.name),
                      size: "lg",
                      class: "w-full"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_NuxtSelectMenu, {
                        modelValue: unref(state).nationality,
                        "onUpdate:modelValue": ($event) => unref(state).nationality = $event,
                        items: unref(countries).map((c) => c.name),
                        size: "lg",
                        class: "w-full"
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              if (unref(state).nationality.toLowerCase() === "nigeria") {
                _push2(ssrRenderComponent(_component_NuxtFormField, {
                  name: "stateOfOrigin",
                  label: "State of Origin",
                  required: ""
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(ssrRenderComponent(_component_NuxtSelectMenu, {
                        modelValue: unref(state).stateOfOrigin,
                        "onUpdate:modelValue": ($event) => unref(state).stateOfOrigin = $event,
                        items: unref(states),
                        size: "lg",
                        class: "w-full"
                      }, null, _parent3, _scopeId2));
                    } else {
                      return [
                        createVNode(_component_NuxtSelectMenu, {
                          modelValue: unref(state).stateOfOrigin,
                          "onUpdate:modelValue": ($event) => unref(state).stateOfOrigin = $event,
                          items: unref(states),
                          size: "lg",
                          class: "w-full"
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
              } else {
                _push2(ssrRenderComponent(_component_NuxtFormField, {
                  name: "stateOfOrigin",
                  label: "State of Origin",
                  required: ""
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(ssrRenderComponent(_component_NuxtInput, {
                        modelValue: unref(state).stateOfOrigin,
                        "onUpdate:modelValue": ($event) => unref(state).stateOfOrigin = $event,
                        size: "lg",
                        class: "w-full"
                      }, null, _parent3, _scopeId2));
                    } else {
                      return [
                        createVNode(_component_NuxtInput, {
                          modelValue: unref(state).stateOfOrigin,
                          "onUpdate:modelValue": ($event) => unref(state).stateOfOrigin = $event,
                          size: "lg",
                          class: "w-full"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
              }
              _push2(ssrRenderComponent(_component_NuxtFormField, {
                name: "lga",
                label: "L.G.A/Town",
                required: ""
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_NuxtSelectMenu, {
                      modelValue: unref(state).lga,
                      "onUpdate:modelValue": ($event) => unref(state).lga = $event,
                      items: unref(getLGAs)(unref(state).stateOfOrigin),
                      size: "lg",
                      class: "w-full"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_NuxtSelectMenu, {
                        modelValue: unref(state).lga,
                        "onUpdate:modelValue": ($event) => unref(state).lga = $event,
                        items: unref(getLGAs)(unref(state).stateOfOrigin),
                        size: "lg",
                        class: "w-full"
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_NuxtFormField, {
                name: "nin",
                label: "NIN / Government-Issued ID Number",
                required: ""
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_NuxtInput, {
                      modelValue: unref(state).nin,
                      "onUpdate:modelValue": ($event) => unref(state).nin = $event,
                      size: "lg",
                      class: "w-full"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_NuxtInput, {
                        modelValue: unref(state).nin,
                        "onUpdate:modelValue": ($event) => unref(state).nin = $event,
                        size: "lg",
                        class: "w-full"
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
                  createVNode(_component_NuxtFormField, {
                    name: "firstName",
                    label: "First Name",
                    required: ""
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_NuxtInput, {
                        modelValue: unref(state).firstName,
                        "onUpdate:modelValue": ($event) => unref(state).firstName = $event,
                        class: "w-full",
                        size: "lg"
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
                        class: "w-full",
                        size: "lg"
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
                        class: "w-full",
                        size: "lg"
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
                        class: "w-full",
                        size: "lg"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_NuxtFormField, {
                    name: "email",
                    label: "Email Address",
                    required: "",
                    class: "md:col-span-2"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_NuxtInput, {
                        value: unref(app).user.email,
                        disabled: "",
                        class: "w-full",
                        size: "lg"
                      }, null, 8, ["value"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_NuxtFormField, {
                    name: "phoneNumber",
                    label: "Phone Number",
                    required: ""
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_NuxtInput, {
                        modelValue: unref(state).phoneNumber,
                        "onUpdate:modelValue": ($event) => unref(state).phoneNumber = $event,
                        class: "w-full",
                        size: "lg"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_NuxtFormField, {
                    name: "gender",
                    label: "Gender",
                    required: ""
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_NuxtSelect, {
                        modelValue: unref(state).gender,
                        "onUpdate:modelValue": ($event) => unref(state).gender = $event,
                        items: ["male", "female"],
                        class: "w-full",
                        size: "lg"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode("div", { class: "md:col-span-2 grid gap-2.5 md:grid-cols-3" }, [
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
                          class: "w-full",
                          size: "lg"
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
                          class: "w-full",
                          size: "lg"
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_NuxtFormField, {
                      name: "birthYear",
                      label: "Year of Birth",
                      required: ""
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_NuxtSelect, {
                          modelValue: unref(state).birthYear,
                          "onUpdate:modelValue": ($event) => unref(state).birthYear = $event,
                          items: unref(Calendar).allowedYears(),
                          class: "w-full",
                          size: "lg"
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                      ]),
                      _: 1
                    })
                  ]),
                  createVNode(_component_NuxtFormField, {
                    name: "nationality",
                    label: "Nationality",
                    required: ""
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_NuxtSelectMenu, {
                        modelValue: unref(state).nationality,
                        "onUpdate:modelValue": ($event) => unref(state).nationality = $event,
                        items: unref(countries).map((c) => c.name),
                        size: "lg",
                        class: "w-full"
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                    ]),
                    _: 1
                  }),
                  unref(state).nationality.toLowerCase() === "nigeria" ? (openBlock(), createBlock(_component_NuxtFormField, {
                    key: 0,
                    name: "stateOfOrigin",
                    label: "State of Origin",
                    required: ""
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_NuxtSelectMenu, {
                        modelValue: unref(state).stateOfOrigin,
                        "onUpdate:modelValue": ($event) => unref(state).stateOfOrigin = $event,
                        items: unref(states),
                        size: "lg",
                        class: "w-full"
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                    ]),
                    _: 1
                  })) : (openBlock(), createBlock(_component_NuxtFormField, {
                    key: 1,
                    name: "stateOfOrigin",
                    label: "State of Origin",
                    required: ""
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_NuxtInput, {
                        modelValue: unref(state).stateOfOrigin,
                        "onUpdate:modelValue": ($event) => unref(state).stateOfOrigin = $event,
                        size: "lg",
                        class: "w-full"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  })),
                  createVNode(_component_NuxtFormField, {
                    name: "lga",
                    label: "L.G.A/Town",
                    required: ""
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_NuxtSelectMenu, {
                        modelValue: unref(state).lga,
                        "onUpdate:modelValue": ($event) => unref(state).lga = $event,
                        items: unref(getLGAs)(unref(state).stateOfOrigin),
                        size: "lg",
                        class: "w-full"
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_NuxtFormField, {
                    name: "nin",
                    label: "NIN / Government-Issued ID Number",
                    required: ""
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_NuxtInput, {
                        modelValue: unref(state).nin,
                        "onUpdate:modelValue": ($event) => unref(state).nin = $event,
                        size: "lg",
                        class: "w-full"
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
            `/application/portal/${unref(applicationId)}`
          )
        }, null, _parent));
        if (unref(app).status === "closed" || !!unref(app).isSubmitted) {
          _push(ssrRenderComponent(_component_NuxtButton, {
            to: `/application/portal/${unref(applicationId)}/family-info`,
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/application/portal/[applicationId]/index/personal-info/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-PcMOM-xt.mjs.map
