import { _ as __nuxt_component_1 } from './fetch-error-alert-B6qqzpgU.mjs';
import { _ as _sfc_main$2, a as _sfc_main$1$1, b as _sfc_main$5 } from './Input-qaklspGC.mjs';
import { _ as _sfc_main$3 } from './SelectMenu-CqC01-WY.mjs';
import { _ as _sfc_main$4 } from './Select-Bdo7U_Ov.mjs';
import { defineComponent, withAsyncContext, computed, reactive, mergeProps, unref, withCtx, createVNode, ref, renderSlot, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass, ssrRenderSlot } from 'vue/server-renderer';
import { useForwardPropsEmits, NumberFieldRoot, NumberFieldInput, NumberFieldIncrement, NumberFieldDecrement } from 'reka-ui';
import { reactivePick } from '@vueuse/core';
import { f as useToast, b as _sfc_main$a, y as useLocale, j as useAppConfig, v as useFormField, A as useButtonGroup, t as tv, n as navigateTo } from './server.mjs';
import { X as normalizeException } from '../_/nitro.mjs';
import handlePreviousClick from './handle-previous-click-D1g6YUzP.mjs';
import { b as academicSchema } from '../_/application.schema.mjs';
import { save } from './handle-save-click-Cv2jAMIv.mjs';
import { C as Calendar } from './calendar-XO0HMjV5.mjs';
import { u as useRouteParams } from './use-route-params-DfO13aRT.mjs';
import { u as useFetch } from './fetch-CmFD1hYd.mjs';
import { V as VueMultiSelectButton } from './multi-select-button-BNE9bWj7.mjs';
import './Alert-BYGY0q89.mjs';
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
import './DropdownMenu-CIEZsTb1.mjs';
import 'reka-ui/namespaced';

const theme = {
  "slots": {
    "root": "relative inline-flex items-center",
    "base": [
      "w-full rounded-md border-0 placeholder:text-dimmed focus:outline-none disabled:cursor-not-allowed disabled:opacity-75",
      "transition-colors"
    ],
    "increment": "absolute flex items-center",
    "decrement": "absolute flex items-center"
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
    "color": {
      "primary": "",
      "secondary": "",
      "success": "",
      "info": "",
      "warning": "",
      "error": "",
      "neutral": ""
    },
    "size": {
      "xs": "px-2 py-1 text-xs gap-1",
      "sm": "px-2.5 py-1.5 text-xs gap-1.5",
      "md": "px-2.5 py-1.5 text-sm gap-1.5",
      "lg": "px-3 py-2 text-sm gap-2",
      "xl": "px-3 py-2 text-base gap-2"
    },
    "variant": {
      "outline": "text-highlighted bg-default ring ring-inset ring-accented",
      "soft": "text-highlighted bg-elevated/50 hover:bg-elevated focus:bg-elevated disabled:bg-elevated/50",
      "subtle": "text-highlighted bg-elevated ring ring-inset ring-accented",
      "ghost": "text-highlighted bg-transparent hover:bg-elevated focus:bg-elevated disabled:bg-transparent dark:disabled:bg-transparent",
      "none": "text-highlighted bg-transparent"
    },
    "disabled": {
      "true": {
        "increment": "opacity-75 cursor-not-allowed",
        "decrement": "opacity-75 cursor-not-allowed"
      }
    },
    "orientation": {
      "horizontal": {
        "base": "text-center",
        "increment": "inset-y-0 end-0 pe-1",
        "decrement": "inset-y-0 start-0 ps-1"
      },
      "vertical": {
        "increment": "top-0 end-0 pe-1 [&>button]:py-0 scale-80",
        "decrement": "bottom-0 end-0 pe-1 [&>button]:py-0 scale-80"
      }
    },
    "highlight": {
      "true": ""
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
      "orientation": "horizontal",
      "size": "xs",
      "class": "px-7"
    },
    {
      "orientation": "horizontal",
      "size": "sm",
      "class": "px-8"
    },
    {
      "orientation": "horizontal",
      "size": "md",
      "class": "px-9"
    },
    {
      "orientation": "horizontal",
      "size": "lg",
      "class": "px-10"
    },
    {
      "orientation": "horizontal",
      "size": "xl",
      "class": "px-11"
    },
    {
      "orientation": "vertical",
      "size": "xs",
      "class": "pe-7"
    },
    {
      "orientation": "vertical",
      "size": "sm",
      "class": "pe-8"
    },
    {
      "orientation": "vertical",
      "size": "md",
      "class": "pe-9"
    },
    {
      "orientation": "vertical",
      "size": "lg",
      "class": "pe-10"
    },
    {
      "orientation": "vertical",
      "size": "xl",
      "class": "pe-11"
    }
  ],
  "defaultVariants": {
    "size": "md",
    "color": "primary",
    "variant": "outline"
  }
};
const _sfc_main$1 = /* @__PURE__ */ Object.assign({ inheritAttrs: false }, {
  __name: "NuxtInputNumber",
  __ssrInlineRender: true,
  props: {
    as: { type: null, required: false },
    placeholder: { type: String, required: false },
    color: { type: null, required: false },
    variant: { type: null, required: false },
    size: { type: null, required: false },
    highlight: { type: Boolean, required: false },
    orientation: { type: String, required: false, default: "horizontal" },
    increment: { type: Object, required: false },
    incrementIcon: { type: String, required: false },
    incrementDisabled: { type: Boolean, required: false },
    decrement: { type: Object, required: false },
    decrementIcon: { type: String, required: false },
    decrementDisabled: { type: Boolean, required: false },
    autofocus: { type: Boolean, required: false },
    autofocusDelay: { type: Number, required: false },
    locale: { type: String, required: false },
    class: { type: null, required: false },
    ui: { type: null, required: false },
    modelValue: { type: [Number, null], required: false },
    defaultValue: { type: Number, required: false },
    min: { type: Number, required: false },
    max: { type: Number, required: false },
    step: { type: Number, required: false },
    stepSnapping: { type: Boolean, required: false },
    disabled: { type: Boolean, required: false },
    required: { type: Boolean, required: false },
    id: { type: String, required: false },
    name: { type: String, required: false },
    formatOptions: { type: null, required: false },
    disableWheelChange: { type: Boolean, required: false },
    invertWheelChange: { type: Boolean, required: false },
    readonly: { type: Boolean, required: false }
  },
  emits: ["update:modelValue", "blur", "change"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const { t, code: codeLocale } = useLocale();
    const appConfig = useAppConfig();
    const rootProps = useForwardPropsEmits(reactivePick(props, "as", "modelValue", "defaultValue", "min", "max", "step", "stepSnapping", "formatOptions", "disableWheelChange", "invertWheelChange", "readonly"), emits);
    const { emitFormBlur, emitFormFocus, emitFormChange, emitFormInput, id, color, size: formGroupSize, name, highlight, disabled, ariaAttrs } = useFormField(props);
    const { orientation, size: buttonGroupSize } = useButtonGroup(props);
    const locale = computed(() => props.locale || codeLocale.value);
    const inputSize = computed(() => buttonGroupSize.value || formGroupSize.value);
    const ui = computed(() => tv({ extend: tv(theme), ...appConfig.ui?.inputNumber || {} })({
      color: color.value,
      variant: props.variant,
      size: inputSize.value,
      highlight: highlight.value,
      orientation: props.orientation,
      buttonGroup: orientation.value
    }));
    const incrementIcon = computed(() => props.incrementIcon || (props.orientation === "horizontal" ? appConfig.ui.icons.plus : appConfig.ui.icons.chevronUp));
    const decrementIcon = computed(() => props.decrementIcon || (props.orientation === "horizontal" ? appConfig.ui.icons.minus : appConfig.ui.icons.chevronDown));
    const inputRef = ref(null);
    function onUpdate(value) {
      const event = new Event("change", { target: { value } });
      emits("change", event);
      emitFormChange();
      emitFormInput();
    }
    function onBlur(event) {
      emitFormBlur();
      emits("blur", event);
    }
    __expose({
      inputRef
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(NumberFieldRoot), mergeProps(unref(rootProps), {
        id: unref(id),
        class: ui.value.root({ class: [props.ui?.root, props.class] }),
        name: unref(name),
        disabled: unref(disabled),
        locale: locale.value,
        "onUpdate:modelValue": onUpdate
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(NumberFieldInput), mergeProps({ ..._ctx.$attrs, ...unref(ariaAttrs) }, {
              ref_key: "inputRef",
              ref: inputRef,
              placeholder: __props.placeholder,
              required: __props.required,
              class: ui.value.base({ class: props.ui?.base }),
              onBlur,
              onFocus: unref(emitFormFocus)
            }), null, _parent2, _scopeId));
            _push2(`<div class="${ssrRenderClass(ui.value.increment({ class: props.ui?.increment }))}"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(NumberFieldIncrement), {
              "as-child": "",
              disabled: unref(disabled) || __props.incrementDisabled
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  ssrRenderSlot(_ctx.$slots, "increment", {}, () => {
                    _push3(ssrRenderComponent(_sfc_main$a, mergeProps({
                      icon: incrementIcon.value,
                      color: unref(color),
                      size: __props.size,
                      variant: "link",
                      "aria-label": unref(t)("inputNumber.increment")
                    }, typeof __props.increment === "object" ? __props.increment : void 0), null, _parent3, _scopeId2));
                  }, _push3, _parent3, _scopeId2);
                } else {
                  return [
                    renderSlot(_ctx.$slots, "increment", {}, () => [
                      createVNode(_sfc_main$a, mergeProps({
                        icon: incrementIcon.value,
                        color: unref(color),
                        size: __props.size,
                        variant: "link",
                        "aria-label": unref(t)("inputNumber.increment")
                      }, typeof __props.increment === "object" ? __props.increment : void 0), null, 16, ["icon", "color", "size", "aria-label"])
                    ])
                  ];
                }
              }),
              _: 3
            }, _parent2, _scopeId));
            _push2(`</div><div class="${ssrRenderClass(ui.value.decrement({ class: props.ui?.decrement }))}"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(NumberFieldDecrement), {
              "as-child": "",
              disabled: unref(disabled) || __props.decrementDisabled
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  ssrRenderSlot(_ctx.$slots, "decrement", {}, () => {
                    _push3(ssrRenderComponent(_sfc_main$a, mergeProps({
                      icon: decrementIcon.value,
                      color: unref(color),
                      size: __props.size,
                      variant: "link",
                      "aria-label": unref(t)("inputNumber.decrement")
                    }, typeof __props.decrement === "object" ? __props.decrement : void 0), null, _parent3, _scopeId2));
                  }, _push3, _parent3, _scopeId2);
                } else {
                  return [
                    renderSlot(_ctx.$slots, "decrement", {}, () => [
                      createVNode(_sfc_main$a, mergeProps({
                        icon: decrementIcon.value,
                        color: unref(color),
                        size: __props.size,
                        variant: "link",
                        "aria-label": unref(t)("inputNumber.decrement")
                      }, typeof __props.decrement === "object" ? __props.decrement : void 0), null, 16, ["icon", "color", "size", "aria-label"])
                    ])
                  ];
                }
              }),
              _: 3
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode(unref(NumberFieldInput), mergeProps({ ..._ctx.$attrs, ...unref(ariaAttrs) }, {
                ref_key: "inputRef",
                ref: inputRef,
                placeholder: __props.placeholder,
                required: __props.required,
                class: ui.value.base({ class: props.ui?.base }),
                onBlur,
                onFocus: unref(emitFormFocus)
              }), null, 16, ["placeholder", "required", "class", "onFocus"]),
              createVNode("div", {
                class: ui.value.increment({ class: props.ui?.increment })
              }, [
                createVNode(unref(NumberFieldIncrement), {
                  "as-child": "",
                  disabled: unref(disabled) || __props.incrementDisabled
                }, {
                  default: withCtx(() => [
                    renderSlot(_ctx.$slots, "increment", {}, () => [
                      createVNode(_sfc_main$a, mergeProps({
                        icon: incrementIcon.value,
                        color: unref(color),
                        size: __props.size,
                        variant: "link",
                        "aria-label": unref(t)("inputNumber.increment")
                      }, typeof __props.increment === "object" ? __props.increment : void 0), null, 16, ["icon", "color", "size", "aria-label"])
                    ])
                  ]),
                  _: 3
                }, 8, ["disabled"])
              ], 2),
              createVNode("div", {
                class: ui.value.decrement({ class: props.ui?.decrement })
              }, [
                createVNode(unref(NumberFieldDecrement), {
                  "as-child": "",
                  disabled: unref(disabled) || __props.decrementDisabled
                }, {
                  default: withCtx(() => [
                    renderSlot(_ctx.$slots, "decrement", {}, () => [
                      createVNode(_sfc_main$a, mergeProps({
                        icon: decrementIcon.value,
                        color: unref(color),
                        size: __props.size,
                        variant: "link",
                        "aria-label": unref(t)("inputNumber.decrement")
                      }, typeof __props.decrement === "object" ? __props.decrement : void 0), null, 16, ["icon", "color", "size", "aria-label"])
                    ])
                  ]),
                  _: 3
                }, 8, ["disabled"])
              ], 2)
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/InputNumber.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const faculties = [
  {
    name: "School of Environmental Sciences",
    code: "SES",
    departments: [
      {
        name: "Environmental Management",
        code: "EMT"
      },
      {
        name: "Forestry and Wildlife",
        code: "FWT"
      },
      {
        name: "Geography and Environmental Studies",
        code: "GES"
      },
      {
        name: "Climate Change and Sustainability",
        code: "CCS"
      }
    ]
  },
  {
    name: "School of Agricultural Engineering",
    code: "SAE",
    departments: [
      {
        name: "Agricultural Science",
        code: "ASC"
      },
      {
        name: "Agricultural Engineering",
        code: "AEN"
      },
      {
        name: "Crop Science",
        code: "CPS"
      },
      {
        name: "Soil Science",
        code: "SOS"
      }
    ]
  },
  {
    name: "School of Technology and Innovation",
    code: "STI",
    departments: [
      {
        name: "Computer Science",
        code: "CSC"
      },
      {
        name: "Information Technology",
        code: "IFT"
      },
      {
        name: "Software Engineering",
        code: "SEN"
      },
      {
        name: "Renewable Energy Technology",
        code: "RET"
      }
    ]
  },
  {
    name: "School of Pure and Applied Sciences",
    code: "SPAS",
    departments: [
      {
        name: "Biological Sciences",
        code: "BSC"
      },
      {
        name: "Chemistry",
        code: "CHM"
      },
      {
        name: "Physics",
        code: "PHY"
      },
      {
        name: "Mathematics and Statistics",
        code: "MST"
      }
    ]
  },
  {
    name: "School of Management and Social Sciences",
    code: "SMSS",
    departments: [
      {
        name: "Economics",
        code: "ECO"
      },
      {
        name: "Accounting",
        code: "ACC"
      },
      {
        name: "Business Administration",
        code: "BUS"
      },
      {
        name: "Entrepreneurship Studies",
        code: "ENT"
      }
    ]
  }
];
const departments = faculties.flatMap(
  (faculty) => faculty.departments.map((dept) => ({
    ...dept,
    faculty: faculty.name,
    facultyCode: faculty.code
  }))
).sort((a, b) => a.name.localeCompare(b.name));
const degrees = [
  {
    name: "Bachelor of Technology",
    code: "B.Tech"
  }
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
    } = ([__temp, __restore] = withAsyncContext(() => useFetch(`/api/users/applicant/applications/${applicationId}`, "$xfgWVv4b5S")), __temp = await __temp, __restore(), __temp);
    const initial = computed(() => {
      return {
        course: app.value?.course ?? "",
        degreeType: app.value?.degreeType ?? "",
        jambRegNumber: app.value?.jambRegNumber ?? "",
        secondarySchoolName: app.value?.secondarySchoolName ?? "",
        secondarySchoolAddress: app.value?.secondarySchoolAddress ?? "",
        secondarySchoolGraduationMonth: app.value?.secondarySchoolGraduationMonth ?? "",
        secondarySchoolGraduationYear: app.value?.secondarySchoolGraduationYear ?? void 0
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
        schema: academicSchema,
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
            navigateTo(`/application/portal/${applicationId}/documents`);
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
      const _component_FetchErrorAlert = __nuxt_component_1;
      const _component_NuxtForm = _sfc_main$2;
      const _component_NuxtFormField = _sfc_main$1$1;
      const _component_NuxtSelectMenu = _sfc_main$3;
      const _component_NuxtSelect = _sfc_main$4;
      const _component_NuxtInput = _sfc_main$5;
      const _component_NuxtInputNumber = _sfc_main$1;
      const _component_NuxtButton = _sfc_main$a;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full" }, _attrs))}><div class="lg:max-w-[70%] mx-auto"><header><h1 class="text-xl font-bold">Academic Information</h1><p class="text-sm muted"> Lorem ipsum dolor sit amet consectetur, adipisicing elit. </p></header><section class="my-5">`);
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
          schema: unref(academicSchema),
          disabled: unref(app).status !== "pending"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="grid md:grid-cols-2 gap-2.5"${_scopeId}><div class="md:col-span-2"${_scopeId}><p class="text-lg font-semibold"${_scopeId}>Course Choice</p></div>`);
              _push2(ssrRenderComponent(_component_NuxtFormField, {
                name: "course",
                label: "Course of Study",
                required: ""
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_NuxtSelectMenu, {
                      modelValue: unref(state).course,
                      "onUpdate:modelValue": ($event) => unref(state).course = $event,
                      items: unref(departments).map((dept) => dept.name),
                      class: "w-full",
                      size: "lg"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_NuxtSelectMenu, {
                        modelValue: unref(state).course,
                        "onUpdate:modelValue": ($event) => unref(state).course = $event,
                        items: unref(departments).map((dept) => dept.name),
                        class: "w-full",
                        size: "lg"
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_NuxtFormField, {
                name: "degreeType",
                label: "Degree",
                required: ""
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_NuxtSelect, {
                      modelValue: unref(state).degreeType,
                      "onUpdate:modelValue": ($event) => unref(state).degreeType = $event,
                      items: unref(degrees).map((degree) => degree.code),
                      class: "w-full",
                      size: "lg"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_NuxtSelect, {
                        modelValue: unref(state).degreeType,
                        "onUpdate:modelValue": ($event) => unref(state).degreeType = $event,
                        items: unref(degrees).map((degree) => degree.code),
                        class: "w-full",
                        size: "lg"
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`<div class="mt-5 md:col-span-2"${_scopeId}><p class="text-lg font-semibold"${_scopeId}>Institution Data</p></div>`);
              _push2(ssrRenderComponent(_component_NuxtFormField, {
                name: "jambRegNumber",
                label: "JAMB Registration Number",
                required: ""
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_NuxtInput, {
                      modelValue: unref(state).jambRegNumber,
                      "onUpdate:modelValue": ($event) => unref(state).jambRegNumber = $event,
                      class: "w-full",
                      size: "lg"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_NuxtInput, {
                        modelValue: unref(state).jambRegNumber,
                        "onUpdate:modelValue": ($event) => unref(state).jambRegNumber = $event,
                        class: "w-full",
                        size: "lg"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_NuxtFormField, {
                name: "secondarySchoolName",
                label: "Name of Secondary Institution",
                required: ""
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_NuxtInput, {
                      modelValue: unref(state).secondarySchoolName,
                      "onUpdate:modelValue": ($event) => unref(state).secondarySchoolName = $event,
                      class: "w-full",
                      size: "lg"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_NuxtInput, {
                        modelValue: unref(state).secondarySchoolName,
                        "onUpdate:modelValue": ($event) => unref(state).secondarySchoolName = $event,
                        class: "w-full",
                        size: "lg"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_NuxtFormField, {
                name: "secondarySchoolAddress",
                label: "Address of Secondary Institution",
                required: "",
                class: "md:col-span-2"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_NuxtInput, {
                      modelValue: unref(state).secondarySchoolAddress,
                      "onUpdate:modelValue": ($event) => unref(state).secondarySchoolAddress = $event,
                      class: "w-full",
                      size: "lg"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_NuxtInput, {
                        modelValue: unref(state).secondarySchoolAddress,
                        "onUpdate:modelValue": ($event) => unref(state).secondarySchoolAddress = $event,
                        class: "w-full",
                        size: "lg"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_NuxtFormField, {
                name: "secondarySchoolGraduationMonth",
                label: "Month of Graduation",
                required: ""
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_NuxtSelectMenu, {
                      modelValue: unref(state).secondarySchoolGraduationMonth,
                      "onUpdate:modelValue": ($event) => unref(state).secondarySchoolGraduationMonth = $event,
                      items: unref(Calendar).months().long,
                      class: "w-full",
                      size: "lg"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_NuxtSelectMenu, {
                        modelValue: unref(state).secondarySchoolGraduationMonth,
                        "onUpdate:modelValue": ($event) => unref(state).secondarySchoolGraduationMonth = $event,
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
                name: "secondarySchoolGraduationYear",
                label: "Year of Graduation",
                required: ""
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_NuxtInputNumber, {
                      modelValue: unref(state).secondarySchoolGraduationYear,
                      "onUpdate:modelValue": ($event) => unref(state).secondarySchoolGraduationYear = $event,
                      class: "w-full",
                      size: "lg",
                      orientation: "vertical",
                      "format-options": {
                        useGrouping: "false"
                      }
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_NuxtInputNumber, {
                        modelValue: unref(state).secondarySchoolGraduationYear,
                        "onUpdate:modelValue": ($event) => unref(state).secondarySchoolGraduationYear = $event,
                        class: "w-full",
                        size: "lg",
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
              _push2(`</div>`);
            } else {
              return [
                createVNode("div", { class: "grid md:grid-cols-2 gap-2.5" }, [
                  createVNode("div", { class: "md:col-span-2" }, [
                    createVNode("p", { class: "text-lg font-semibold" }, "Course Choice")
                  ]),
                  createVNode(_component_NuxtFormField, {
                    name: "course",
                    label: "Course of Study",
                    required: ""
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_NuxtSelectMenu, {
                        modelValue: unref(state).course,
                        "onUpdate:modelValue": ($event) => unref(state).course = $event,
                        items: unref(departments).map((dept) => dept.name),
                        class: "w-full",
                        size: "lg"
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_NuxtFormField, {
                    name: "degreeType",
                    label: "Degree",
                    required: ""
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_NuxtSelect, {
                        modelValue: unref(state).degreeType,
                        "onUpdate:modelValue": ($event) => unref(state).degreeType = $event,
                        items: unref(degrees).map((degree) => degree.code),
                        class: "w-full",
                        size: "lg"
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                    ]),
                    _: 1
                  }),
                  createVNode("div", { class: "mt-5 md:col-span-2" }, [
                    createVNode("p", { class: "text-lg font-semibold" }, "Institution Data")
                  ]),
                  createVNode(_component_NuxtFormField, {
                    name: "jambRegNumber",
                    label: "JAMB Registration Number",
                    required: ""
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_NuxtInput, {
                        modelValue: unref(state).jambRegNumber,
                        "onUpdate:modelValue": ($event) => unref(state).jambRegNumber = $event,
                        class: "w-full",
                        size: "lg"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_NuxtFormField, {
                    name: "secondarySchoolName",
                    label: "Name of Secondary Institution",
                    required: ""
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_NuxtInput, {
                        modelValue: unref(state).secondarySchoolName,
                        "onUpdate:modelValue": ($event) => unref(state).secondarySchoolName = $event,
                        class: "w-full",
                        size: "lg"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_NuxtFormField, {
                    name: "secondarySchoolAddress",
                    label: "Address of Secondary Institution",
                    required: "",
                    class: "md:col-span-2"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_NuxtInput, {
                        modelValue: unref(state).secondarySchoolAddress,
                        "onUpdate:modelValue": ($event) => unref(state).secondarySchoolAddress = $event,
                        class: "w-full",
                        size: "lg"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_NuxtFormField, {
                    name: "secondarySchoolGraduationMonth",
                    label: "Month of Graduation",
                    required: ""
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_NuxtSelectMenu, {
                        modelValue: unref(state).secondarySchoolGraduationMonth,
                        "onUpdate:modelValue": ($event) => unref(state).secondarySchoolGraduationMonth = $event,
                        items: unref(Calendar).months().long,
                        class: "w-full",
                        size: "lg"
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_NuxtFormField, {
                    name: "secondarySchoolGraduationYear",
                    label: "Year of Graduation",
                    required: ""
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_NuxtInputNumber, {
                        modelValue: unref(state).secondarySchoolGraduationYear,
                        "onUpdate:modelValue": ($event) => unref(state).secondarySchoolGraduationYear = $event,
                        class: "w-full",
                        size: "lg",
                        orientation: "vertical",
                        "format-options": {
                          useGrouping: "false"
                        }
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
            `/application/portal/${unref(applicationId)}/family-info`
          )
        }, null, _parent));
        if (unref(app).status !== "pending") {
          _push(ssrRenderComponent(_component_NuxtButton, {
            to: `/application/portal/${unref(applicationId)}/documents`,
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/application/portal/[applicationId]/index/academic-info/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-DZ3mm1co.mjs.map
