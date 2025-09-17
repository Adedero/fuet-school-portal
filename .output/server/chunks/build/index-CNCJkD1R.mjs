import { _ as __nuxt_component_6 } from './fetch-error-alert-Dv2dK2LL.mjs';
import { _ as _sfc_main$1, a as _sfc_main$2 } from './FormField-BnuTbefu.mjs';
import { _ as _sfc_main$3 } from './SelectMenu-CtyvLbb5.mjs';
import { _ as _sfc_main$4 } from './Select-C4S5T0cF.mjs';
import { _ as _sfc_main$5 } from './Input-B12ViNMG.mjs';
import { _ as _sfc_main$6 } from './InputNumber-C-HK4hHm.mjs';
import { h as useToast, b as _sfc_main$a, n as navigateTo } from './server.mjs';
import { X as normalizeException } from '../nitro/nitro.mjs';
import { defineComponent, withAsyncContext, computed, reactive, mergeProps, unref, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import handlePreviousClick from './handle-previous-click-BS8fg6sp.mjs';
import { c as academicSchema } from '../_/application.schema.mjs';
import { save } from './handle-save-click-d4tY2V9Z.mjs';
import { C as Calendar } from './calendar-XO0HMjV5.mjs';
import { u as useRouteParams } from './use-route-params-BVGD6Lax.mjs';
import { u as useFetch } from './fetch-BknZ0_VD.mjs';
import { V as VueMultiSelectButton } from './multi-select-button-t68JyRLv.mjs';
import './Alert-_kx_Xl7F.mjs';
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
import './DropdownMenu-N0o3f2tr.mjs';
import 'reka-ui/namespaced';
import './Kbd-Bv1QKL9A.mjs';

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
      const _component_FetchErrorAlert = __nuxt_component_6;
      const _component_NuxtForm = _sfc_main$1;
      const _component_NuxtFormField = _sfc_main$2;
      const _component_NuxtSelectMenu = _sfc_main$3;
      const _component_NuxtSelect = _sfc_main$4;
      const _component_NuxtInput = _sfc_main$5;
      const _component_NuxtInputNumber = _sfc_main$6;
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
//# sourceMappingURL=index-CNCJkD1R.mjs.map
