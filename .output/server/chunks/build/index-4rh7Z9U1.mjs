import { _ as __nuxt_component_6 } from './fetch-error-alert-Dv2dK2LL.mjs';
import { _ as _sfc_main$1$1, a as _sfc_main$5 } from './FormField-BnuTbefu.mjs';
import { _ as _sfc_main$6 } from './SelectMenu-CtyvLbb5.mjs';
import { defineComponent, withAsyncContext, computed, mergeProps, unref, reactive, withCtx, createVNode, createBlock, createCommentVNode, openBlock, toDisplayString, mergeModels, useSlots, useModel, watch, Fragment, renderSlot, renderList, createTextVNode, withModifiers, resolveDynamicComponent, withKeys, ref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderAttr, ssrRenderSlot, ssrRenderClass, ssrRenderVNode } from 'vue/server-renderer';
import { Primitive } from 'reka-ui';
import { createReusableTemplate } from '@vueuse/core';
import { b as _sfc_main$a, h as useToast, v as useConfirm, e as _sfc_main$g, k as useAppConfig, o as useLocale, l as useFormField, t as tv, s as _sfc_main$d } from './server.mjs';
import { X as normalizeException, _ as formatBytes } from '../nitro/nitro.mjs';
import { d as documentUploadSchema } from '../_/application.schema.mjs';
import { _ as _sfc_main$4 } from './Separator-A-GXspeX.mjs';
import { _ as _sfc_main$7 } from './Card-CBdj68Ul.mjs';
import { u as useRouteParams } from './use-route-params-BVGD6Lax.mjs';
import { u as useFetch } from './fetch-BknZ0_VD.mjs';
import './Alert-_kx_Xl7F.mjs';
import './Input-B12ViNMG.mjs';
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

function parseAcceptToDataTypes(accept) {
  if (!accept || accept === "*") {
    return void 0;
  }
  const types = accept.split(",").map((type) => {
    const trimmedType = type.trim();
    if (trimmedType.includes("/") && trimmedType.endsWith("/*")) {
      return trimmedType.split("/")[0] || trimmedType;
    }
    return trimmedType;
  }).filter((type) => {
    return !type.startsWith(".");
  });
  return types.length > 0 ? types : void 0;
}
function useFileUpload(options) {
  const {
    accept = "*"
  } = options;
  const inputRef = ref();
  const dropzoneRef = ref();
  computed(() => parseAcceptToDataTypes(unref(accept)));
  const isDragging = ref(false);
  const fileDialog = reactive({
    open: () => {
    }
  });
  function open() {
    fileDialog.open();
  }
  return {
    isDragging,
    open,
    inputRef,
    dropzoneRef
  };
}
const theme = {
  "slots": {
    "root": "relative flex flex-col",
    "base": [
      "w-full flex-1 bg-default border border-default flex flex-col gap-2 items-stretch justify-center rounded-lg focus-visible:outline-2",
      "transition-[background]"
    ],
    "wrapper": "flex flex-col items-center justify-center text-center",
    "icon": "shrink-0",
    "avatar": "shrink-0",
    "label": "font-medium text-default mt-2",
    "description": "text-muted mt-1",
    "actions": "flex flex-wrap gap-1.5 shrink-0 mt-4",
    "files": "",
    "file": "relative",
    "fileLeadingAvatar": "shrink-0",
    "fileWrapper": "flex flex-col min-w-0",
    "fileName": "text-default truncate",
    "fileSize": "text-muted truncate",
    "fileTrailingButton": ""
  },
  "variants": {
    "color": {
      "primary": "",
      "secondary": "",
      "success": "",
      "info": "",
      "warning": "",
      "error": "",
      "neutral": ""
    },
    "variant": {
      "area": {
        "wrapper": "px-4 py-3",
        "base": "p-4"
      },
      "button": {}
    },
    "size": {
      "xs": {
        "base": "text-xs",
        "icon": "size-4",
        "file": "text-xs px-2 py-1 gap-1",
        "fileWrapper": "flex-row gap-1"
      },
      "sm": {
        "base": "text-xs",
        "icon": "size-4",
        "file": "text-xs px-2.5 py-1.5 gap-1.5",
        "fileWrapper": "flex-row gap-1"
      },
      "md": {
        "base": "text-sm",
        "icon": "size-5",
        "file": "text-xs px-2.5 py-1.5 gap-1.5"
      },
      "lg": {
        "base": "text-sm",
        "icon": "size-5",
        "file": "text-sm px-3 py-2 gap-2",
        "fileSize": "text-xs"
      },
      "xl": {
        "base": "text-base",
        "icon": "size-6",
        "file": "text-sm px-3 py-2 gap-2"
      }
    },
    "layout": {
      "list": {
        "root": "gap-2 items-start",
        "files": "flex flex-col w-full gap-2",
        "file": "min-w-0 flex items-center border border-default rounded-md w-full",
        "fileTrailingButton": "ms-auto"
      },
      "grid": {
        "fileWrapper": "hidden",
        "fileLeadingAvatar": "size-full rounded-lg",
        "fileTrailingButton": "absolute -top-1.5 -end-1.5 p-0 rounded-full border-2 border-bg"
      }
    },
    "position": {
      "inside": "",
      "outside": ""
    },
    "dropzone": {
      "true": "border-dashed data-[dragging=true]:bg-elevated/25"
    },
    "interactive": {
      "true": ""
    },
    "highlight": {
      "true": ""
    },
    "multiple": {
      "true": ""
    },
    "disabled": {
      "true": "cursor-not-allowed opacity-75"
    }
  },
  "compoundVariants": [
    {
      "color": "primary",
      "class": "focus-visible:outline-primary"
    },
    {
      "color": "secondary",
      "class": "focus-visible:outline-secondary"
    },
    {
      "color": "success",
      "class": "focus-visible:outline-success"
    },
    {
      "color": "info",
      "class": "focus-visible:outline-info"
    },
    {
      "color": "warning",
      "class": "focus-visible:outline-warning"
    },
    {
      "color": "error",
      "class": "focus-visible:outline-error"
    },
    {
      "color": "primary",
      "highlight": true,
      "class": "border-primary"
    },
    {
      "color": "secondary",
      "highlight": true,
      "class": "border-secondary"
    },
    {
      "color": "success",
      "highlight": true,
      "class": "border-success"
    },
    {
      "color": "info",
      "highlight": true,
      "class": "border-info"
    },
    {
      "color": "warning",
      "highlight": true,
      "class": "border-warning"
    },
    {
      "color": "error",
      "highlight": true,
      "class": "border-error"
    },
    {
      "color": "neutral",
      "class": "focus-visible:outline-inverted"
    },
    {
      "color": "neutral",
      "highlight": true,
      "class": "border-inverted"
    },
    {
      "size": "xs",
      "layout": "list",
      "class": {
        "fileTrailingButton": "-me-1"
      }
    },
    {
      "size": "sm",
      "layout": "list",
      "class": {
        "fileTrailingButton": "-me-1.5"
      }
    },
    {
      "size": "md",
      "layout": "list",
      "class": {
        "fileTrailingButton": "-me-1.5"
      }
    },
    {
      "size": "lg",
      "layout": "list",
      "class": {
        "fileTrailingButton": "-me-2"
      }
    },
    {
      "size": "xl",
      "layout": "list",
      "class": {
        "fileTrailingButton": "-me-2"
      }
    },
    {
      "variant": "button",
      "size": "xs",
      "class": {
        "base": "p-1"
      }
    },
    {
      "variant": "button",
      "size": "sm",
      "class": {
        "base": "p-1.5"
      }
    },
    {
      "variant": "button",
      "size": "md",
      "class": {
        "base": "p-1.5"
      }
    },
    {
      "variant": "button",
      "size": "lg",
      "class": {
        "base": "p-2"
      }
    },
    {
      "variant": "button",
      "size": "xl",
      "class": {
        "base": "p-2"
      }
    },
    {
      "layout": "grid",
      "multiple": true,
      "class": {
        "files": "grid grid-cols-2 md:grid-cols-3 gap-4 w-full",
        "file": "p-0 aspect-square"
      }
    },
    {
      "layout": "grid",
      "multiple": false,
      "class": {
        "file": "absolute inset-0 p-0"
      }
    },
    {
      "interactive": true,
      "disabled": false,
      "class": "hover:bg-elevated/25"
    }
  ],
  "defaultVariants": {
    "color": "primary",
    "variant": "area",
    "size": "md"
  }
};
const _sfc_main$3 = /* @__PURE__ */ Object.assign({ inheritAttrs: false }, {
  __name: "NuxtFileUpload",
  __ssrInlineRender: true,
  props: /* @__PURE__ */ mergeModels({
    as: { type: null, required: false },
    id: { type: String, required: false },
    name: { type: String, required: false },
    icon: { type: String, required: false },
    label: { type: String, required: false },
    description: { type: String, required: false },
    color: { type: null, required: false },
    variant: { type: null, required: false },
    size: { type: null, required: false },
    layout: { type: null, required: false, default: "grid" },
    position: { type: null, required: false, default: "outside" },
    highlight: { type: Boolean, required: false },
    accept: { type: String, required: false, default: "*" },
    multiple: { type: Boolean, required: false, default: false },
    reset: { type: Boolean, required: false, default: false },
    dropzone: { type: Boolean, required: false, default: true },
    interactive: { type: Boolean, required: false, default: true },
    required: { type: Boolean, required: false },
    disabled: { type: Boolean, required: false },
    fileIcon: { type: String, required: false },
    fileDelete: { type: [Boolean, Object], required: false },
    fileDeleteIcon: { type: String, required: false },
    class: { type: null, required: false },
    ui: { type: null, required: false }
  }, {
    "modelValue": { type: null },
    "modelModifiers": {}
  }),
  emits: /* @__PURE__ */ mergeModels(["change"], ["update:modelValue"]),
  setup(__props, { expose: __expose, emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const slots = useSlots();
    const modelValue = useModel(__props, "modelValue");
    const appConfig = useAppConfig();
    const { t } = useLocale();
    const [DefineFilesTemplate, ReuseFilesTemplate] = createReusableTemplate();
    const { isDragging, open, inputRef, dropzoneRef } = useFileUpload({
      accept: props.accept,
      reset: props.reset,
      multiple: props.multiple,
      dropzone: props.dropzone
    });
    const { emitFormInput, emitFormChange, id, name, disabled, ariaAttrs } = useFormField(props);
    const variant = computed(() => props.multiple ? "area" : props.variant);
    const layout = computed(() => props.variant === "button" && !props.multiple ? "grid" : props.layout);
    const position = computed(() => {
      if (layout.value === "grid" && props.multiple) {
        return "inside";
      }
      if (variant.value === "button") {
        return "outside";
      }
      return props.position;
    });
    const ui = computed(() => tv({ extend: tv(theme), ...appConfig.ui?.fileUpload || {} })({
      dropzone: props.dropzone,
      interactive: props.interactive,
      color: props.color,
      size: props.size,
      variant: variant.value,
      layout: layout.value,
      position: position.value,
      multiple: props.multiple,
      highlight: props.highlight,
      disabled: props.disabled
    }));
    function createObjectUrl(file) {
      return URL.createObjectURL(file);
    }
    function formatFileSize(bytes) {
      if (bytes === 0) {
        return "0B";
      }
      const k = 1024;
      const sizes = ["B", "KB", "MB", "GB"];
      const i = Math.floor(Math.log(bytes) / Math.log(k));
      const size = bytes / Math.pow(k, i);
      const formattedSize = i === 0 ? size.toString() : size.toFixed(0);
      return `${formattedSize}${sizes[i]}`;
    }
    function onUpdate(files, reset = false) {
      if (props.multiple) {
        if (reset) {
          modelValue.value = files;
        } else {
          const existingFiles = modelValue.value || [];
          modelValue.value = [...existingFiles, ...files || []];
        }
      } else {
        modelValue.value = files?.[0];
      }
      const event = new Event("change", { target: { value: modelValue.value } });
      emits("change", event);
      emitFormChange();
      emitFormInput();
    }
    function removeFile(index) {
      if (!modelValue.value) {
        return;
      }
      if (!props.multiple || index === void 0) {
        onUpdate([], true);
        dropzoneRef.value?.focus();
        return;
      }
      const files = [...modelValue.value];
      files.splice(index, 1);
      onUpdate(files, true);
      dropzoneRef.value?.focus();
    }
    watch(modelValue, (newValue) => {
      const hasModelReset = !Array.isArray(newValue) || !newValue.length;
      if (hasModelReset && inputRef.value) {
        inputRef.value.value = "";
      }
    });
    __expose({
      inputRef,
      dropzoneRef
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(DefineFilesTemplate), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (modelValue.value && (Array.isArray(modelValue.value) ? modelValue.value.length : true)) {
              _push2(`<!--[-->`);
              ssrRenderSlot(_ctx.$slots, "files-top", {
                files: modelValue.value,
                open: unref(open),
                removeFile
              }, null, _push2, _parent2, _scopeId);
              _push2(`<div class="${ssrRenderClass(ui.value.files({ class: props.ui?.files }))}"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "files", { files: modelValue.value }, () => {
                _push2(`<!--[-->`);
                ssrRenderList(Array.isArray(modelValue.value) ? modelValue.value : [modelValue.value], (file, index) => {
                  _push2(`<div class="${ssrRenderClass(ui.value.file({ class: props.ui?.file }))}"${_scopeId}>`);
                  ssrRenderSlot(_ctx.$slots, "file", {
                    file,
                    index
                  }, () => {
                    ssrRenderSlot(_ctx.$slots, "file-leading", {
                      file,
                      index
                    }, () => {
                      _push2(ssrRenderComponent(_sfc_main$d, {
                        src: createObjectUrl(file),
                        icon: __props.fileIcon || unref(appConfig).ui.icons.file,
                        size: props.size,
                        class: ui.value.fileLeadingAvatar({ class: props.ui?.fileLeadingAvatar })
                      }, null, _parent2, _scopeId));
                    }, _push2, _parent2, _scopeId);
                    _push2(`<div class="${ssrRenderClass(ui.value.fileWrapper({ class: props.ui?.fileWrapper }))}"${_scopeId}><span class="${ssrRenderClass(ui.value.fileName({ class: props.ui?.fileName }))}"${_scopeId}>`);
                    ssrRenderSlot(_ctx.$slots, "file-name", {
                      file,
                      index
                    }, () => {
                      _push2(`${ssrInterpolate(file.name)}`);
                    }, _push2, _parent2, _scopeId);
                    _push2(`</span><span class="${ssrRenderClass(ui.value.fileSize({ class: props.ui?.fileSize }))}"${_scopeId}>`);
                    ssrRenderSlot(_ctx.$slots, "file-size", {
                      file,
                      index
                    }, () => {
                      _push2(`${ssrInterpolate(formatFileSize(file.size))}`);
                    }, _push2, _parent2, _scopeId);
                    _push2(`</span></div>`);
                    ssrRenderSlot(_ctx.$slots, "file-trailing", {
                      file,
                      index
                    }, () => {
                      _push2(ssrRenderComponent(_sfc_main$a, mergeProps({ color: "neutral" }, { ref_for: true }, {
                        ...layout.value === "grid" ? {
                          variant: "solid",
                          size: "xs"
                        } : {
                          variant: "link",
                          size: __props.size
                        },
                        ...typeof __props.fileDelete === "object" ? __props.fileDelete : void 0
                      }, {
                        "aria-label": unref(t)("fileUpload.removeFile", { filename: file.name }),
                        "trailing-icon": __props.fileDeleteIcon || unref(appConfig).ui.icons.close,
                        class: ui.value.fileTrailingButton({ class: props.ui?.fileTrailingButton }),
                        onClick: ($event) => removeFile(index)
                      }), null, _parent2, _scopeId));
                    }, _push2, _parent2, _scopeId);
                  }, _push2, _parent2, _scopeId);
                  _push2(`</div>`);
                });
                _push2(`<!--]-->`);
              }, _push2, _parent2, _scopeId);
              _push2(`</div>`);
              ssrRenderSlot(_ctx.$slots, "files-bottom", {
                files: modelValue.value,
                open: unref(open),
                removeFile
              }, null, _push2, _parent2, _scopeId);
              _push2(`<!--]-->`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              modelValue.value && (Array.isArray(modelValue.value) ? modelValue.value.length : true) ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                renderSlot(_ctx.$slots, "files-top", {
                  files: modelValue.value,
                  open: unref(open),
                  removeFile
                }),
                createVNode("div", {
                  class: ui.value.files({ class: props.ui?.files })
                }, [
                  renderSlot(_ctx.$slots, "files", { files: modelValue.value }, () => [
                    (openBlock(true), createBlock(Fragment, null, renderList(Array.isArray(modelValue.value) ? modelValue.value : [modelValue.value], (file, index) => {
                      return openBlock(), createBlock("div", {
                        key: file.name,
                        class: ui.value.file({ class: props.ui?.file })
                      }, [
                        renderSlot(_ctx.$slots, "file", {
                          file,
                          index
                        }, () => [
                          renderSlot(_ctx.$slots, "file-leading", {
                            file,
                            index
                          }, () => [
                            createVNode(_sfc_main$d, {
                              src: createObjectUrl(file),
                              icon: __props.fileIcon || unref(appConfig).ui.icons.file,
                              size: props.size,
                              class: ui.value.fileLeadingAvatar({ class: props.ui?.fileLeadingAvatar })
                            }, null, 8, ["src", "icon", "size", "class"])
                          ]),
                          createVNode("div", {
                            class: ui.value.fileWrapper({ class: props.ui?.fileWrapper })
                          }, [
                            createVNode("span", {
                              class: ui.value.fileName({ class: props.ui?.fileName })
                            }, [
                              renderSlot(_ctx.$slots, "file-name", {
                                file,
                                index
                              }, () => [
                                createTextVNode(toDisplayString(file.name), 1)
                              ])
                            ], 2),
                            createVNode("span", {
                              class: ui.value.fileSize({ class: props.ui?.fileSize })
                            }, [
                              renderSlot(_ctx.$slots, "file-size", {
                                file,
                                index
                              }, () => [
                                createTextVNode(toDisplayString(formatFileSize(file.size)), 1)
                              ])
                            ], 2)
                          ], 2),
                          renderSlot(_ctx.$slots, "file-trailing", {
                            file,
                            index
                          }, () => [
                            createVNode(_sfc_main$a, mergeProps({ color: "neutral" }, { ref_for: true }, {
                              ...layout.value === "grid" ? {
                                variant: "solid",
                                size: "xs"
                              } : {
                                variant: "link",
                                size: __props.size
                              },
                              ...typeof __props.fileDelete === "object" ? __props.fileDelete : void 0
                            }, {
                              "aria-label": unref(t)("fileUpload.removeFile", { filename: file.name }),
                              "trailing-icon": __props.fileDeleteIcon || unref(appConfig).ui.icons.close,
                              class: ui.value.fileTrailingButton({ class: props.ui?.fileTrailingButton }),
                              onClick: withModifiers(($event) => removeFile(index), ["stop", "prevent"])
                            }), null, 16, ["aria-label", "trailing-icon", "class", "onClick"])
                          ])
                        ])
                      ], 2);
                    }), 128))
                  ])
                ], 2),
                renderSlot(_ctx.$slots, "files-bottom", {
                  files: modelValue.value,
                  open: unref(open),
                  removeFile
                })
              ], 64)) : createCommentVNode("", true)
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(ssrRenderComponent(unref(Primitive), {
        as: __props.as,
        class: ui.value.root({ class: [props.ui?.root, props.class] })
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {
              open: unref(open),
              removeFile
            }, () => {
              ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(variant.value === "button" ? "button" : "div"), {
                ref_key: "dropzoneRef",
                ref: dropzoneRef,
                role: variant.value === "button" ? void 0 : "button",
                "data-dragging": unref(isDragging),
                class: ui.value.base({ class: props.ui?.base }),
                tabindex: __props.interactive && !unref(disabled) ? 0 : -1,
                onClick: ($event) => __props.interactive && !unref(disabled) && unref(open)(),
                onKeydown: () => {
                },
                onKeyup: ($event) => __props.interactive && !unref(disabled) && unref(open)()
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    if (position.value === "inside") {
                      _push3(ssrRenderComponent(unref(ReuseFilesTemplate), null, null, _parent3, _scopeId2));
                    } else {
                      _push3(`<!---->`);
                    }
                    if (position.value === "inside" ? __props.multiple ? !modelValue.value?.length : !modelValue.value : true) {
                      _push3(`<div class="${ssrRenderClass(ui.value.wrapper({ class: props.ui?.wrapper }))}"${_scopeId2}>`);
                      ssrRenderSlot(_ctx.$slots, "leading", {}, () => {
                        if (variant.value === "button") {
                          _push3(ssrRenderComponent(_sfc_main$g, {
                            name: __props.icon || unref(appConfig).ui.icons.upload,
                            class: ui.value.icon({ class: props.ui?.icon })
                          }, null, _parent3, _scopeId2));
                        } else {
                          _push3(ssrRenderComponent(_sfc_main$d, {
                            icon: __props.icon || unref(appConfig).ui.icons.upload,
                            size: props.size,
                            class: ui.value.avatar({ class: props.ui?.avatar })
                          }, null, _parent3, _scopeId2));
                        }
                      }, _push3, _parent3, _scopeId2);
                      if (variant.value !== "button") {
                        _push3(`<!--[-->`);
                        if (__props.label || !!slots.label) {
                          _push3(`<div class="${ssrRenderClass(ui.value.label({ class: props.ui?.label }))}"${_scopeId2}>`);
                          ssrRenderSlot(_ctx.$slots, "label", {}, () => {
                            _push3(`${ssrInterpolate(__props.label)}`);
                          }, _push3, _parent3, _scopeId2);
                          _push3(`</div>`);
                        } else {
                          _push3(`<!---->`);
                        }
                        if (__props.description || !!slots.description) {
                          _push3(`<div class="${ssrRenderClass(ui.value.description({ class: props.ui?.description }))}"${_scopeId2}>`);
                          ssrRenderSlot(_ctx.$slots, "description", {}, () => {
                            _push3(`${ssrInterpolate(__props.description)}`);
                          }, _push3, _parent3, _scopeId2);
                          _push3(`</div>`);
                        } else {
                          _push3(`<!---->`);
                        }
                        if (!!slots.actions) {
                          _push3(`<div class="${ssrRenderClass(ui.value.actions({ class: props.ui?.actions }))}"${_scopeId2}>`);
                          ssrRenderSlot(_ctx.$slots, "actions", {
                            files: modelValue.value,
                            open: unref(open),
                            removeFile
                          }, null, _push3, _parent3, _scopeId2);
                          _push3(`</div>`);
                        } else {
                          _push3(`<!---->`);
                        }
                        _push3(`<!--]-->`);
                      } else {
                        _push3(`<!---->`);
                      }
                      _push3(`</div>`);
                    } else {
                      _push3(`<!---->`);
                    }
                  } else {
                    return [
                      position.value === "inside" ? (openBlock(), createBlock(unref(ReuseFilesTemplate), { key: 0 })) : createCommentVNode("", true),
                      (position.value === "inside" ? __props.multiple ? !modelValue.value?.length : !modelValue.value : true) ? (openBlock(), createBlock("div", {
                        key: 1,
                        class: ui.value.wrapper({ class: props.ui?.wrapper })
                      }, [
                        renderSlot(_ctx.$slots, "leading", {}, () => [
                          variant.value === "button" ? (openBlock(), createBlock(_sfc_main$g, {
                            key: 0,
                            name: __props.icon || unref(appConfig).ui.icons.upload,
                            class: ui.value.icon({ class: props.ui?.icon })
                          }, null, 8, ["name", "class"])) : (openBlock(), createBlock(_sfc_main$d, {
                            key: 1,
                            icon: __props.icon || unref(appConfig).ui.icons.upload,
                            size: props.size,
                            class: ui.value.avatar({ class: props.ui?.avatar })
                          }, null, 8, ["icon", "size", "class"]))
                        ]),
                        variant.value !== "button" ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                          __props.label || !!slots.label ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: ui.value.label({ class: props.ui?.label })
                          }, [
                            renderSlot(_ctx.$slots, "label", {}, () => [
                              createTextVNode(toDisplayString(__props.label), 1)
                            ])
                          ], 2)) : createCommentVNode("", true),
                          __props.description || !!slots.description ? (openBlock(), createBlock("div", {
                            key: 1,
                            class: ui.value.description({ class: props.ui?.description })
                          }, [
                            renderSlot(_ctx.$slots, "description", {}, () => [
                              createTextVNode(toDisplayString(__props.description), 1)
                            ])
                          ], 2)) : createCommentVNode("", true),
                          !!slots.actions ? (openBlock(), createBlock("div", {
                            key: 2,
                            class: ui.value.actions({ class: props.ui?.actions })
                          }, [
                            renderSlot(_ctx.$slots, "actions", {
                              files: modelValue.value,
                              open: unref(open),
                              removeFile
                            })
                          ], 2)) : createCommentVNode("", true)
                        ], 64)) : createCommentVNode("", true)
                      ], 2)) : createCommentVNode("", true)
                    ];
                  }
                }),
                _: 3
              }), _parent2, _scopeId);
              if (position.value === "outside") {
                _push2(ssrRenderComponent(unref(ReuseFilesTemplate), null, null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
            }, _push2, _parent2, _scopeId);
            _push2(`<input${ssrRenderAttrs(mergeProps({
              id: unref(id),
              ref_key: "inputRef",
              ref: inputRef,
              type: "file",
              name: unref(name),
              accept: __props.accept,
              multiple: __props.multiple,
              required: __props.required,
              disabled: unref(disabled)
            }, { ..._ctx.$attrs, ...unref(ariaAttrs) }, {
              class: "sr-only",
              tabindex: "-1"
            }))}${_scopeId}>`);
          } else {
            return [
              renderSlot(_ctx.$slots, "default", {
                open: unref(open),
                removeFile
              }, () => [
                (openBlock(), createBlock(resolveDynamicComponent(variant.value === "button" ? "button" : "div"), {
                  ref_key: "dropzoneRef",
                  ref: dropzoneRef,
                  role: variant.value === "button" ? void 0 : "button",
                  "data-dragging": unref(isDragging),
                  class: ui.value.base({ class: props.ui?.base }),
                  tabindex: __props.interactive && !unref(disabled) ? 0 : -1,
                  onClick: ($event) => __props.interactive && !unref(disabled) && unref(open)(),
                  onKeydown: withModifiers(() => {
                  }, ["prevent"]),
                  onKeyup: withKeys(($event) => __props.interactive && !unref(disabled) && unref(open)(), ["enter", "space"])
                }, {
                  default: withCtx(() => [
                    position.value === "inside" ? (openBlock(), createBlock(unref(ReuseFilesTemplate), { key: 0 })) : createCommentVNode("", true),
                    (position.value === "inside" ? __props.multiple ? !modelValue.value?.length : !modelValue.value : true) ? (openBlock(), createBlock("div", {
                      key: 1,
                      class: ui.value.wrapper({ class: props.ui?.wrapper })
                    }, [
                      renderSlot(_ctx.$slots, "leading", {}, () => [
                        variant.value === "button" ? (openBlock(), createBlock(_sfc_main$g, {
                          key: 0,
                          name: __props.icon || unref(appConfig).ui.icons.upload,
                          class: ui.value.icon({ class: props.ui?.icon })
                        }, null, 8, ["name", "class"])) : (openBlock(), createBlock(_sfc_main$d, {
                          key: 1,
                          icon: __props.icon || unref(appConfig).ui.icons.upload,
                          size: props.size,
                          class: ui.value.avatar({ class: props.ui?.avatar })
                        }, null, 8, ["icon", "size", "class"]))
                      ]),
                      variant.value !== "button" ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                        __props.label || !!slots.label ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: ui.value.label({ class: props.ui?.label })
                        }, [
                          renderSlot(_ctx.$slots, "label", {}, () => [
                            createTextVNode(toDisplayString(__props.label), 1)
                          ])
                        ], 2)) : createCommentVNode("", true),
                        __props.description || !!slots.description ? (openBlock(), createBlock("div", {
                          key: 1,
                          class: ui.value.description({ class: props.ui?.description })
                        }, [
                          renderSlot(_ctx.$slots, "description", {}, () => [
                            createTextVNode(toDisplayString(__props.description), 1)
                          ])
                        ], 2)) : createCommentVNode("", true),
                        !!slots.actions ? (openBlock(), createBlock("div", {
                          key: 2,
                          class: ui.value.actions({ class: props.ui?.actions })
                        }, [
                          renderSlot(_ctx.$slots, "actions", {
                            files: modelValue.value,
                            open: unref(open),
                            removeFile
                          })
                        ], 2)) : createCommentVNode("", true)
                      ], 64)) : createCommentVNode("", true)
                    ], 2)) : createCommentVNode("", true)
                  ]),
                  _: 3
                }, 40, ["role", "data-dragging", "class", "tabindex", "onClick", "onKeydown", "onKeyup"])),
                position.value === "outside" ? (openBlock(), createBlock(unref(ReuseFilesTemplate), { key: 0 })) : createCommentVNode("", true)
              ]),
              createVNode("input", mergeProps({
                id: unref(id),
                ref_key: "inputRef",
                ref: inputRef,
                type: "file",
                name: unref(name),
                accept: __props.accept,
                multiple: __props.multiple,
                required: __props.required,
                disabled: unref(disabled)
              }, { ..._ctx.$attrs, ...unref(ariaAttrs) }, {
                class: "sr-only",
                tabindex: "-1"
              }), null, 16, ["id", "name", "accept", "multiple", "required", "disabled"])
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/FileUpload.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const applicationDocuments = [
  {
    label: "Passport Photograph",
    value: "passportUrl"
  },
  {
    label: "Birth Certificate",
    value: "birthCertificateUrl"
  },
  {
    label: "State of Origin Certificate",
    value: "stateOfOriginUrl"
  },
  {
    label: "O Level Result",
    value: "oLevelResultUrl"
  },
  {
    label: "Post UTME Registration Slip",
    value: "postUTMESlipUrl"
  },
  {
    label: "Admission Form Payment Receipt",
    value: "admissionFormPaymentReceiptUrl"
  }
];
async function createServerFile(file) {
  const { data, error } = await fileToBase64(file);
  const parts = file.name.split(".");
  const ext = parts.length > 1 ? parts.pop() : null;
  const baseName = parts.join(".");
  return {
    data: data ? {
      name: baseName,
      size: file.size,
      type: file.type,
      ext,
      data
    } : null,
    error: error ?? null
  };
}
async function fileToBase64(file) {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve({ data: reader.result, error: null });
    reader.onerror = () => resolve({ data: null, error: new Error("Failed to process file") });
  });
}
const MAX_FILE_SIZE = 2 * 1024 * 1024;
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "document-upload-form",
  __ssrInlineRender: true,
  props: {
    applicationId: {}
  },
  emits: ["upload"],
  setup(__props, { emit: __emit }) {
    const toast = useToast();
    const emit = __emit;
    const ACCEPTED_FILE_TYPES = [
      "image/jpeg",
      "image/jpg",
      "image/png",
      "image/webp",
      "application/pdf"
    ];
    const schema = documentUploadSchema({
      maxFileSize: MAX_FILE_SIZE,
      acceptedFileTypes: ACCEPTED_FILE_TYPES
    });
    const state = reactive({
      documentType: void 0,
      file: void 0
    });
    async function handleSubmit(event) {
      const { data } = event;
      const result = await createServerFile(data.file);
      if (result.error || !result.data) {
        toast.add({
          color: "error",
          title: "Error",
          description: result.error?.message ?? "Failed to process file. Try again later"
        });
        return;
      }
      const payload = {
        type: data.documentType,
        file: result.data
      };
      try {
        const res = await $fetch(
          `/api/users/applicant/applications/${__props.applicationId}/documents`,
          { method: "POST", body: payload }
        );
        emit("upload");
        state.documentType = void 0;
        state.file = void 0;
        toast.add({
          color: "success",
          title: "Success",
          description: res.message
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
      const _component_NuxtFormField = _sfc_main$5;
      const _component_NuxtSelectMenu = _sfc_main$6;
      const _component_NuxtFileUpload = _sfc_main$3;
      const _component_NuxtButton = _sfc_main$a;
      _push(ssrRenderComponent(_component_NuxtForm, mergeProps({
        state: unref(state),
        schema: unref(schema),
        class: "space-y-5",
        onSubmit: handleSubmit
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_NuxtFormField, {
              name: "documentType",
              label: "Document Type",
              required: ""
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_NuxtSelectMenu, {
                    modelValue: unref(state).documentType,
                    "onUpdate:modelValue": ($event) => unref(state).documentType = $event,
                    items: unref(applicationDocuments),
                    size: "lg",
                    class: "w-full"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_NuxtSelectMenu, {
                      modelValue: unref(state).documentType,
                      "onUpdate:modelValue": ($event) => unref(state).documentType = $event,
                      items: unref(applicationDocuments),
                      size: "lg",
                      class: "w-full"
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_NuxtFormField, {
              name: "file",
              label: "Document",
              required: ""
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_NuxtFileUpload, {
                    modelValue: unref(state).file,
                    "onUpdate:modelValue": ($event) => unref(state).file = $event,
                    description: `PDF or Image file (max: ${("formatBytes" in _ctx ? _ctx.formatBytes : unref(formatBytes))(MAX_FILE_SIZE)})`,
                    layout: "list",
                    accept: ACCEPTED_FILE_TYPES.join(),
                    class: "min-h-40"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_NuxtFileUpload, {
                      modelValue: unref(state).file,
                      "onUpdate:modelValue": ($event) => unref(state).file = $event,
                      description: `PDF or Image file (max: ${("formatBytes" in _ctx ? _ctx.formatBytes : unref(formatBytes))(MAX_FILE_SIZE)})`,
                      layout: "list",
                      accept: ACCEPTED_FILE_TYPES.join(),
                      class: "min-h-40"
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "description", "accept"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="flex justify-end"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_NuxtButton, {
              type: "submit",
              label: "Submit",
              "loading-auto": ""
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode(_component_NuxtFormField, {
                name: "documentType",
                label: "Document Type",
                required: ""
              }, {
                default: withCtx(() => [
                  createVNode(_component_NuxtSelectMenu, {
                    modelValue: unref(state).documentType,
                    "onUpdate:modelValue": ($event) => unref(state).documentType = $event,
                    items: unref(applicationDocuments),
                    size: "lg",
                    class: "w-full"
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                ]),
                _: 1
              }),
              createVNode(_component_NuxtFormField, {
                name: "file",
                label: "Document",
                required: ""
              }, {
                default: withCtx(() => [
                  createVNode(_component_NuxtFileUpload, {
                    modelValue: unref(state).file,
                    "onUpdate:modelValue": ($event) => unref(state).file = $event,
                    description: `PDF or Image file (max: ${("formatBytes" in _ctx ? _ctx.formatBytes : unref(formatBytes))(MAX_FILE_SIZE)})`,
                    layout: "list",
                    accept: ACCEPTED_FILE_TYPES.join(),
                    class: "min-h-40"
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "description", "accept"])
                ]),
                _: 1
              }),
              createVNode("div", { class: "flex justify-end" }, [
                createVNode(_component_NuxtButton, {
                  type: "submit",
                  label: "Submit",
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
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/application/document-upload-form.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_1 = Object.assign(_sfc_main$2, { __name: "ApplicationDocumentUploadForm" });
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "document-card",
  __ssrInlineRender: true,
  props: {
    document: {},
    applicationId: {},
    status: { default: () => void 0 }
  },
  emits: ["remove"],
  setup(__props, { emit: __emit }) {
    const toast = useToast();
    const { confirmAsync } = useConfirm();
    const emit = __emit;
    async function deleteDocument() {
      const confirm = await confirmAsync({
        title: "Delete Document",
        description: "Are you sure you want to proceed?"
      });
      if (!confirm) {
        return;
      }
      try {
        const res = await $fetch(
          `/api/users/applicant/applications/${__props.applicationId}/documents`,
          {
            method: "PUT",
            body: {
              key: __props.document.key
            }
          }
        );
        emit("remove");
        toast.add({
          color: "success",
          title: "Success",
          description: res.message
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
      const _component_NuxtCard = _sfc_main$7;
      const _component_NuxtIcon = _sfc_main$g;
      const _component_NuxtButton = _sfc_main$a;
      _push(ssrRenderComponent(_component_NuxtCard, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex items-center gap-1 justify-between"${_scopeId}><div class="flex items-center gap-1"${_scopeId}>`);
            if (__props.document.value) {
              _push2(ssrRenderComponent(_component_NuxtIcon, {
                name: "lucide:circle-check",
                class: "text-success",
                size: "1.5rem"
              }, null, _parent2, _scopeId));
            } else {
              _push2(ssrRenderComponent(_component_NuxtIcon, {
                name: "lucide:circle-x",
                class: "text-error",
                size: "1.5rem"
              }, null, _parent2, _scopeId));
            }
            _push2(`<p class="text-sm font-semibold text-muted"${_scopeId}>${ssrInterpolate(__props.document.label)}</p></div>`);
            if (__props.document.value) {
              _push2(`<div class="flex items-center gap-2.5"${_scopeId}>`);
              if (!_ctx.status || _ctx.status === "pending") {
                _push2(ssrRenderComponent(_component_NuxtButton, {
                  icon: "lucide:trash",
                  size: "sm",
                  color: "error",
                  variant: "soft",
                  "loading-auto": "",
                  onClick: deleteDocument
                }, null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              _push2(`<a${ssrRenderAttr("href", __props.document.value)} download${_scopeId}>`);
              _push2(ssrRenderComponent(_component_NuxtButton, {
                icon: "lucide:download",
                size: "sm",
                color: "neutral",
                variant: "soft"
              }, null, _parent2, _scopeId));
              _push2(`</a></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "flex items-center gap-1 justify-between" }, [
                createVNode("div", { class: "flex items-center gap-1" }, [
                  __props.document.value ? (openBlock(), createBlock(_component_NuxtIcon, {
                    key: 0,
                    name: "lucide:circle-check",
                    class: "text-success",
                    size: "1.5rem"
                  })) : (openBlock(), createBlock(_component_NuxtIcon, {
                    key: 1,
                    name: "lucide:circle-x",
                    class: "text-error",
                    size: "1.5rem"
                  })),
                  createVNode("p", { class: "text-sm font-semibold text-muted" }, toDisplayString(__props.document.label), 1)
                ]),
                __props.document.value ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "flex items-center gap-2.5"
                }, [
                  !_ctx.status || _ctx.status === "pending" ? (openBlock(), createBlock(_component_NuxtButton, {
                    key: 0,
                    icon: "lucide:trash",
                    size: "sm",
                    color: "error",
                    variant: "soft",
                    "loading-auto": "",
                    onClick: deleteDocument
                  })) : createCommentVNode("", true),
                  createVNode("a", {
                    href: __props.document.value,
                    download: ""
                  }, [
                    createVNode(_component_NuxtButton, {
                      icon: "lucide:download",
                      size: "sm",
                      color: "neutral",
                      variant: "soft"
                    })
                  ], 8, ["href"])
                ])) : createCommentVNode("", true)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/application/document-card.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_3 = Object.assign(_sfc_main$1, { __name: "ApplicationDocumentCard" });
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { applicationId = "" } = useRouteParams();
    const {
      data: app,
      error,
      refresh
    } = ([__temp, __restore] = withAsyncContext(() => useFetch(`/api/users/applicant/applications/${applicationId}`, "$clTMJxKlyN")), __temp = await __temp, __restore(), __temp);
    const state = computed(() => {
      return [
        {
          label: "Passport Photograph",
          value: app.value?.passportUrl ?? "",
          key: "passportUrl"
        },
        {
          label: "Birth Certificate",
          value: app.value?.birthCertificateUrl ?? "",
          key: "birthCertificateUrl"
        },
        {
          label: "State of Origin Certificate",
          value: app.value?.stateOfOriginUrl ?? "",
          key: "stateOfOriginUrl"
        },
        {
          label: "O Level Result",
          value: app.value?.oLevelResultUrl ?? "",
          key: "oLevelResultUrl"
        },
        {
          label: "Post UTME Registration Slip",
          value: app.value?.postUTMESlipUrl ?? "",
          key: "postUTMESlipUrl"
        },
        {
          label: "Admission Form Payment Receipt",
          value: app.value?.admissionFormPaymentReceiptUrl ?? "",
          key: "admissionFormPaymentReceiptUrl"
        }
      ];
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_FetchErrorAlert = __nuxt_component_6;
      const _component_ApplicationDocumentUploadForm = __nuxt_component_1;
      const _component_NuxtSeparator = _sfc_main$4;
      const _component_ApplicationDocumentCard = __nuxt_component_3;
      const _component_NuxtButton = _sfc_main$a;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full" }, _attrs))}><div class="lg:max-w-[70%] mx-auto"><header><h1 class="text-xl font-bold">Documents</h1><p class="text-sm muted"> Lorem ipsum dolor sit amet consectetur, adipisicing elit. </p></header><section class="my-5">`);
      if (unref(error)) {
        _push(`<div>`);
        _push(ssrRenderComponent(_component_FetchErrorAlert, {
          message: ("normalizeException" in _ctx ? _ctx.normalizeException : unref(normalizeException))(unref(error)).message,
          "show-retry": "",
          onRetry: unref(refresh)
        }, null, _parent));
        _push(`</div>`);
      } else if (unref(app)) {
        _push(`<div>`);
        if (unref(app).status === "pending") {
          _push(ssrRenderComponent(_component_ApplicationDocumentUploadForm, {
            "application-id": unref(applicationId),
            onUpload: () => unref(refresh)()
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="mt-10"><p class="text-lg font-semibold">Uploaded</p>`);
        _push(ssrRenderComponent(_component_NuxtSeparator, { class: "mt-1 mb-5" }, null, _parent));
        _push(`<div class="grid gap-2.5"><!--[-->`);
        ssrRenderList(unref(state), (document) => {
          _push(ssrRenderComponent(_component_ApplicationDocumentCard, {
            key: document.label,
            document,
            "application-id": unref(applicationId),
            status: unref(app).status,
            onRemove: () => unref(refresh)()
          }, null, _parent));
        });
        _push(`<!--]--></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</section>`);
      if (unref(app)) {
        _push(`<footer class="flex items-center gap-2.5 justify-between">`);
        _push(ssrRenderComponent(_component_NuxtButton, {
          to: `/application/portal/${unref(applicationId)}/academic-info`,
          label: "Previous",
          color: "neutral",
          variant: "soft"
        }, null, _parent));
        if (unref(app).status !== "pending") {
          _push(ssrRenderComponent(_component_NuxtButton, {
            to: `/application/portal/${unref(applicationId)}/review`,
            label: "Next"
          }, null, _parent));
        } else {
          _push(ssrRenderComponent(_component_NuxtButton, {
            to: `/application/portal/${unref(applicationId)}/review`,
            label: "Continue"
          }, null, _parent));
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/application/portal/[applicationId]/index/documents/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-4rh7Z9U1.mjs.map
