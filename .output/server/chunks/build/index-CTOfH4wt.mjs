import { b as _sfc_main$a, n as navigateTo, d as _sfc_main$4$1, c as _sfc_main$g, f as useToast } from './server.mjs';
import { _ as _sfc_main$9 } from './Popover-DsQFdmSO.mjs';
import { _ as _sfc_main$b } from './Alert-BYGY0q89.mjs';
import { _ as __nuxt_component_1 } from './fetch-error-alert-B6qqzpgU.mjs';
import { _ as __nuxt_component_2$1 } from './logo-BvkqO1ow.mjs';
import { defineComponent, withAsyncContext, computed, ref, useTemplateRef, mergeProps, unref, withCtx, createVNode, createTextVNode, createBlock, createCommentVNode, openBlock, toDisplayString, Fragment, renderList, isRef, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderSlot, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _sfc_main$d } from './Separator-BsgT9KGg.mjs';
import { _ as _sfc_main$e } from './Card-Bv7yDMxb.mjs';
import { X as normalizeException } from '../_/nitro.mjs';
import { u as useFetch } from './fetch-CmFD1hYd.mjs';
import { _ as _sfc_main$c } from './Checkbox-CshRfxQo.mjs';
import { _ as __nuxt_component_6$1 } from './deleter-BJt07ff6.mjs';
import { a as applicationSchema } from '../_/application.schema.mjs';
import { useDateFormat } from '@vueuse/core';
import { u as useRouteParams } from './use-route-params-DfO13aRT.mjs';
import 'vue-router';
import 'better-auth/vue';
import 'better-auth/client/plugins';
import 'tailwindcss/colors';
import '@iconify/vue';
import 'reka-ui';
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
import 'reka-ui/namespaced';
import '@vue/shared';
import 'zod';

const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "page-header",
  __ssrInlineRender: true,
  props: {
    data: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppLogo = __nuxt_component_2$1;
      _push(`<header${ssrRenderAttrs(mergeProps({ class: "text-center" }, _attrs))}><h1 class="text-xl font-bold flex items-end justify-center gap-2.5">`);
      _push(ssrRenderComponent(_component_AppLogo, { size: "24" }, null, _parent));
      _push(`<span> FUET UNDEGRADUATE APPLICATION (${ssrInterpolate(_ctx.data.schoolSession?.name)}) </span></h1><p>Federal University of Environment and Technology</p><p class="mt-2"> APPLICATION NUMBER: <b>${ssrInterpolate(_ctx.data.applicationNumber)}</b></p></header>`);
    };
  }
});
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/application/viewer/page-header.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const __nuxt_component_2 = Object.assign(_sfc_main$8, { __name: "ApplicationViewerPageHeader" });
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "section-1",
  __ssrInlineRender: true,
  props: {
    data: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtSeparator = _sfc_main$d;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "mt-10 space-y-10" }, _attrs))}><h3 class="text-xl font-bold">Section I: Personal Information</h3><div class="justify-end flex"><div class="bg-muted w-44 h-44">`);
      if (_ctx.data.passportUrl) {
        _push(`<img${ssrRenderAttr("src", _ctx.data.passportUrl)} class="w-full h-full object-cover">`);
      } else {
        _push(`<div class="fluid flex-center"><p class="text-sm text-muted font-semibold">No passport</p></div>`);
      }
      _push(`</div></div><section class="space-y-16"><div><h3 class="text-muted font-semibold">BIO DATA</h3>`);
      _push(ssrRenderComponent(_component_NuxtSeparator, { class: "mt-2 mb-5" }, null, _parent));
      _push(`<div><div class="mt-5 w-full"><ul class="grid grid-cols-2 gap-1.5"><li> First Name: <b class="uppercase">${ssrInterpolate(_ctx.data.firstName)}</b></li><li> Middle Name: <b class="uppercase">${ssrInterpolate(_ctx.data.middleName)}</b></li><li> Other Names: <b class="uppercase">${ssrInterpolate(_ctx.data.otherNames)}</b></li><li> Last Name: <b class="uppercase">${ssrInterpolate(_ctx.data.lastName)}</b></li><li> D.O.B: <b class="uppercase">${ssrInterpolate(_ctx.data.birthDay)} ${ssrInterpolate(_ctx.data.birthMonth)}, ${ssrInterpolate(_ctx.data.birthYear)}</b></li><li> Gender: <b class="uppercase">${ssrInterpolate(_ctx.data.lastName)}</b></li><li class="col-span-2 print:col-span-1"> Email: <b class="uppercase">${ssrInterpolate(_ctx.data.user.email)}</b></li><li> Phone: <b class="uppercase">${ssrInterpolate(_ctx.data.phoneNumber)}</b></li></ul></div></div></div><div><h3 class="text-muted font-semibold">IDENTIFICATION</h3>`);
      _push(ssrRenderComponent(_component_NuxtSeparator, { class: "mt-2 mb-5" }, null, _parent));
      _push(`<ul class="grid grid-cols-2 gap-1.5 w-full"><li> Nationality: <b class="uppercase">${ssrInterpolate(_ctx.data.nationality)}</b></li><li> State of Origin: <b class="uppercase">${ssrInterpolate(_ctx.data.stateOfOrigin)}</b></li><li> L.G.A: <b class="uppercase">${ssrInterpolate(_ctx.data.lga)}</b></li><li> NIN/ID number: <b>${ssrInterpolate(_ctx.data.nin)}</b></li></ul></div></section></div>`);
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/application/viewer/section-1.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const __nuxt_component_3 = Object.assign(_sfc_main$7, { __name: "ApplicationViewerSection1" });
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "section-2",
  __ssrInlineRender: true,
  props: {
    data: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtSeparator = _sfc_main$d;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "print:mt-10 space-y-10" }, _attrs))}><h3 class="text-xl font-bold">Section II: Family Information</h3><section class="space-y-16"><div><h3 class="text-muted font-semibold">PARENT 1 DATA</h3>`);
      _push(ssrRenderComponent(_component_NuxtSeparator, { class: "mt-2 mb-5" }, null, _parent));
      _push(`<div><div class="mt-5 w-full"><ul class="grid grid-cols-2 gap-1.5"><li> Full Name: <b class="uppercase">${ssrInterpolate(_ctx.data.firstParentName)}</b></li><li> Address: <b class="uppercase">${ssrInterpolate(_ctx.data.firstParentAddress)}</b></li><li> Status: <b class="uppercase">${ssrInterpolate(_ctx.data.firstParentStatus)}</b></li></ul></div></div></div><div><h3 class="text-muted font-semibold">PARENT 2 DATA</h3>`);
      _push(ssrRenderComponent(_component_NuxtSeparator, { class: "mt-2 mb-5" }, null, _parent));
      _push(`<div><div class="mt-5 w-full"><ul class="grid grid-cols-2 gap-1.5"><li> Full Name: <b class="uppercase">${ssrInterpolate(_ctx.data.secondParentName)}</b></li><li> Address: <b class="uppercase">${ssrInterpolate(_ctx.data.secondParentAddress)}</b></li><li> Status: <b class="uppercase">${ssrInterpolate(_ctx.data.secondParentStatus)}</b></li></ul></div></div></div><div><h3 class="text-muted font-semibold">NEXT OF KIN</h3>`);
      _push(ssrRenderComponent(_component_NuxtSeparator, { class: "mt-2 mb-5" }, null, _parent));
      _push(`<div><div class="mt-5 w-full"><ul class="grid grid-cols-2 gap-1.5"><li> Full Name: <b class="uppercase">${ssrInterpolate(_ctx.data.nextOfKinName)}</b></li><li> Address: <b class="uppercase">${ssrInterpolate(_ctx.data.nextOfKinAddress)}</b></li><li> Phone Number: <b class="uppercase">${ssrInterpolate(_ctx.data.nextOfKinPhoneNumber)}</b></li><li> Relationship: <b class="uppercase">${ssrInterpolate(_ctx.data.nextOfKinRelationship)}</b></li></ul></div></div></div></section></div>`);
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/application/viewer/section-2.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_4$1 = Object.assign(_sfc_main$6, { __name: "ApplicationViewerSection2" });
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "section-3",
  __ssrInlineRender: true,
  props: {
    data: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtSeparator = _sfc_main$d;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "print:mt-10 space-y-10" }, _attrs))}><h3 class="text-xl font-bold">Section III: Academic Information</h3><section class="space-y-16"><div><h3 class="text-muted font-semibold">COURSE CHOICE</h3>`);
      _push(ssrRenderComponent(_component_NuxtSeparator, { class: "mt-2 mb-5" }, null, _parent));
      _push(`<div><div class="mt-5 w-full"><ul class="grid gap-1.5"><li> Chosen Course: <b class="uppercase">${ssrInterpolate(_ctx.data.course)}</b></li><li> Degree: <b class="uppercase">${ssrInterpolate(_ctx.data.degreeType)}</b></li><li> JAMB Registration Number: <b class="uppercase">${ssrInterpolate(_ctx.data.jambRegNumber)}</b></li></ul></div></div></div><div><h3 class="text-muted font-semibold">SECONDARY INSTITUTION</h3>`);
      _push(ssrRenderComponent(_component_NuxtSeparator, { class: "mt-2 mb-5" }, null, _parent));
      _push(`<div><div class="mt-5 w-full"><ul class="grid grid-cols-2 gap-1.5"><li class="col-span-2"> Name of Secondary School: <b class="uppercase">${ssrInterpolate(_ctx.data.secondarySchoolName)}</b></li><li class="col-span-2"> Address of Secondary School: <b class="uppercase">${ssrInterpolate(_ctx.data.secondarySchoolAddress)}</b></li><li> Month Graduated: <b class="uppercase">${ssrInterpolate(_ctx.data.secondarySchoolGraduationMonth)}</b></li><li> Year Graduated: <b class="uppercase">${ssrInterpolate(_ctx.data.secondarySchoolGraduationYear)}</b></li></ul></div></div></div></section></div>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/application/viewer/section-3.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_5 = Object.assign(_sfc_main$5, { __name: "ApplicationViewerSection3" });
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "section-4",
  __ssrInlineRender: true,
  props: {
    data: {}
  },
  setup(__props) {
    const state = computed(() => {
      return [
        {
          label: "Passport Photograph",
          value: __props.data.passportUrl ?? ""
        },
        {
          label: "Birth Certificate",
          value: __props.data.birthCertificateUrl ?? ""
        },
        {
          label: "State of Origin Certificate",
          value: __props.data.stateOfOriginUrl ?? ""
        },
        {
          label: "O Level Result",
          value: __props.data.oLevelResultUrl ?? ""
        },
        {
          label: "Post UTME Registration Slip",
          value: __props.data.postUTMESlipUrl ?? ""
        },
        {
          label: "Admission Form Payment Receipt",
          value: __props.data.admissionFormPaymentReceiptUrl ?? ""
        }
      ];
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtCard = _sfc_main$e;
      const _component_NuxtIcon = _sfc_main$g;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "print:mt-10 space-y-10" }, _attrs))}><h3 class="text-xl font-bold">Section IV: Documents Submitted</h3><section class="space-y-16"><div class="grid gap-5"><!--[-->`);
      ssrRenderList(unref(state), (doc) => {
        _push(ssrRenderComponent(_component_NuxtCard, {
          key: doc.label,
          class: "rounded-none"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div${_scopeId}><div class="flex items-center gap-2"${_scopeId}>`);
              if (doc.value) {
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
              _push2(`<div${_scopeId}><p class="text-sm font-semibold"${_scopeId}>${ssrInterpolate(doc.label)}</p><p class="text-xs text-muted"${_scopeId}>${ssrInterpolate(doc.value ? "submitted" : "not submitted")}</p></div></div></div>`);
            } else {
              return [
                createVNode("div", null, [
                  createVNode("div", { class: "flex items-center gap-2" }, [
                    doc.value ? (openBlock(), createBlock(_component_NuxtIcon, {
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
                    createVNode("div", null, [
                      createVNode("p", { class: "text-sm font-semibold" }, toDisplayString(doc.label), 1),
                      createVNode("p", { class: "text-xs text-muted" }, toDisplayString(doc.value ? "submitted" : "not submitted"), 1)
                    ])
                  ])
                ])
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div></section></div>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/application/viewer/section-4.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_6 = Object.assign(_sfc_main$4, { __name: "ApplicationViewerSection4" });
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  props: {
    applicationId: {}
  },
  setup(__props, { expose: __expose }) {
    const { data, error, execute, pending } = useFetch(
      `/api/users/applicant/applications/${__props.applicationId}`,
      "$N_vzw1a0Pg"
    );
    const print = () => {
      (void 0).print();
    };
    __expose({
      print
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtIcon = _sfc_main$g;
      const _component_FetchErrorAlert = __nuxt_component_1;
      const _component_ApplicationViewerPageHeader = __nuxt_component_2;
      const _component_ApplicationViewerSection1 = __nuxt_component_3;
      const _component_ApplicationViewerSection2 = __nuxt_component_4$1;
      const _component_ApplicationViewerSection3 = __nuxt_component_5;
      const _component_ApplicationViewerSection4 = __nuxt_component_6;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full overflow-x-auto" }, _attrs))}>`);
      if (unref(pending)) {
        _push(`<div class="flex-col-center gap-1">`);
        _push(ssrRenderComponent(_component_NuxtIcon, {
          name: "lucide:loader",
          size: "2rem",
          class: "text-muted animate animate-spin"
        }, null, _parent));
        _push(`<p class="text-sm text-muted font-semibold">Loading</p></div>`);
      } else if (unref(error)) {
        _push(`<div>`);
        _push(ssrRenderComponent(_component_FetchErrorAlert, {
          message: ("normalizeException" in _ctx ? _ctx.normalizeException : unref(normalizeException))(unref(error)).message,
          "show-retry": "",
          onRetry: unref(execute)
        }, null, _parent));
        _push(`</div>`);
      } else if (unref(data)) {
        _push(`<div class="application-document space-y-5 print:space-y-0"><div class="application-document-page">`);
        _push(ssrRenderComponent(_component_ApplicationViewerPageHeader, { data: unref(data) }, null, _parent));
        _push(ssrRenderComponent(_component_ApplicationViewerSection1, { data: unref(data) }, null, _parent));
        _push(`</div><div class="application-document-page">`);
        _push(ssrRenderComponent(_component_ApplicationViewerPageHeader, {
          class: "hidden print:block",
          data: unref(data)
        }, null, _parent));
        _push(ssrRenderComponent(_component_ApplicationViewerSection2, { data: unref(data) }, null, _parent));
        _push(`</div><div class="application-document-page">`);
        _push(ssrRenderComponent(_component_ApplicationViewerPageHeader, {
          class: "hidden print:block",
          data: unref(data)
        }, null, _parent));
        _push(ssrRenderComponent(_component_ApplicationViewerSection3, { data: unref(data) }, null, _parent));
        _push(`</div><div class="application-document-page">`);
        _push(ssrRenderComponent(_component_ApplicationViewerPageHeader, {
          class: "hidden print:block",
          data: unref(data)
        }, null, _parent));
        _push(ssrRenderComponent(_component_ApplicationViewerSection4, { data: unref(data) }, null, _parent));
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/application/viewer/index.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_4 = Object.assign(_sfc_main$3, { __name: "ApplicationViewer" });
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "submitter",
  __ssrInlineRender: true,
  props: {
    application: {},
    condition: { type: Boolean, default: true },
    conditionMessage: { default: "" },
    applicationId: {}
  },
  emits: ["submit"],
  setup(__props, { emit: __emit }) {
    useToast();
    const loading = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtButton = _sfc_main$a;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      ssrRenderSlot(_ctx.$slots, "default", { loading: unref(loading) }, () => {
        _push(ssrRenderComponent(_component_NuxtButton, {
          label: "Submit",
          loading: unref(loading)
        }, null, _parent));
      }, _push, _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/application/submitter.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_7 = Object.assign(_sfc_main$2, { __name: "ApplicationSubmitter" });
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "settings",
  __ssrInlineRender: true,
  setup(__props) {
    const { data, error, pending, refresh, execute } = useFetch(
      "/api/general/settings",
      {},
      "$BCIsi-YFc7"
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtIcon = _sfc_main$g;
      const _component_FetchErrorAlert = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      if (unref(pending)) {
        _push(`<div>`);
        ssrRenderSlot(_ctx.$slots, "loading", { loading: unref(pending) }, () => {
          _push(`<div class="flex-center">`);
          _push(ssrRenderComponent(_component_NuxtIcon, {
            name: "lucide:loader",
            size: "2rem",
            class: "text-muted animate animate-spin"
          }, null, _parent));
          _push(`</div>`);
        }, _push, _parent);
        _push(`</div>`);
      } else if (unref(error)) {
        _push(`<div>`);
        ssrRenderSlot(_ctx.$slots, "error", {
          error: ("normalizeException" in _ctx ? _ctx.normalizeException : unref(normalizeException))(unref(error)),
          refresh: unref(refresh)
        }, () => {
          _push(ssrRenderComponent(_component_FetchErrorAlert, {
            message: "Failed to get settings",
            "show-retry": "",
            onRetry: unref(refresh)
          }, null, _parent));
        }, _push, _parent);
        _push(`</div>`);
      } else if (unref(data)) {
        _push(`<div>`);
        ssrRenderSlot(_ctx.$slots, "default", { data: unref(data) }, null, _push, _parent);
        _push(`</div>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/app/settings.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const AppSettings = Object.assign(_sfc_main$1, { __name: "AppSettings" });
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
    } = ([__temp, __restore] = withAsyncContext(() => useFetch(`/api/users/applicant/applications/${applicationId}`, "$NMKLN2r7Ah")), __temp = await __temp, __restore(), __temp);
    const issues = computed(() => {
      const result = applicationSchema.safeParse(app.value ?? {});
      return result.error?.issues ?? [];
    });
    const hasAgreed = ref(false);
    const viewer = useTemplateRef("viewer");
    const open = ref(false);
    const handleApplicationSubmit = () => {
      open.value = true;
      refresh();
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtButton = _sfc_main$a;
      const _component_NuxtPopover = _sfc_main$9;
      const _component_NuxtAlert = _sfc_main$b;
      const _component_FetchErrorAlert = __nuxt_component_1;
      const _component_ApplicationViewer = __nuxt_component_4;
      const _component_NuxtCheckbox = _sfc_main$c;
      const _component_ApplicationDeleter = __nuxt_component_6$1;
      const _component_ApplicationSubmitter = __nuxt_component_7;
      const _component_NuxtModal = _sfc_main$4$1;
      const _component_NuxtIcon = _sfc_main$g;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full" }, _attrs))}><div class="lg:max-w-[80%] mx-auto"><header><h1 class="text-xl font-bold">Review Application</h1><div class="mt-1 flex items-center gap-2.5 justify-between"><div>`);
      _push(ssrRenderComponent(unref(AppSettings), null, {
        default: withCtx(({ data: settings }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p class="text-sm"${_scopeId}> Application deadline: `);
            if (settings.applicationsClosedAt) {
              _push2(`<b${_scopeId}>${ssrInterpolate(unref(useDateFormat)(
                settings.applicationsClosedAt,
                "MMMM DD, YYYY"
              ))}</b>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</p>`);
          } else {
            return [
              createVNode("p", { class: "text-sm" }, [
                createTextVNode(" Application deadline: "),
                settings.applicationsClosedAt ? (openBlock(), createBlock("b", { key: 0 }, toDisplayString(unref(useDateFormat)(
                  settings.applicationsClosedAt,
                  "MMMM DD, YYYY"
                )), 1)) : createCommentVNode("", true)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div>`);
      _push(ssrRenderComponent(_component_NuxtButton, {
        label: "Print",
        icon: "lucide:printer",
        color: "neutral",
        variant: "outline",
        size: "sm",
        onClick: unref(viewer)?.print
      }, null, _parent));
      _push(`</div></div>`);
      if (unref(issues).length) {
        _push(`<div class="mt-2">`);
        _push(ssrRenderComponent(_component_NuxtPopover, null, {
          content: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="p-5 space-y-5 max-w-80 max-h-[26rem] overflow-y-auto"${_scopeId}><ul class="grid gap-2 list-inside list-disc"${_scopeId}><!--[-->`);
              ssrRenderList(unref(issues), (issue) => {
                _push2(`<li class="border-b border-b-default py-1.5"${_scopeId}>${ssrInterpolate(issue.message)}</li>`);
              });
              _push2(`<!--]--></ul></div>`);
            } else {
              return [
                createVNode("div", { class: "p-5 space-y-5 max-w-80 max-h-[26rem] overflow-y-auto" }, [
                  createVNode("ul", { class: "grid gap-2 list-inside list-disc" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(issues), (issue) => {
                      return openBlock(), createBlock("li", {
                        key: `${issue.code}-${issue.path}`,
                        class: "border-b border-b-default py-1.5"
                      }, toDisplayString(issue.message), 1);
                    }), 128))
                  ])
                ])
              ];
            }
          }),
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_NuxtAlert, {
                title: `Found ${unref(issues).length} ${unref(issues).length === 1 ? "error" : "errors"}`,
                color: "error",
                variant: "subtle",
                orientation: "horizontal",
                actions: [
                  {
                    label: "View",
                    color: "error"
                  }
                ]
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_NuxtAlert, {
                  title: `Found ${unref(issues).length} ${unref(issues).length === 1 ? "error" : "errors"}`,
                  color: "error",
                  variant: "subtle",
                  orientation: "horizontal",
                  actions: [
                    {
                      label: "View",
                      color: "error"
                    }
                  ]
                }, null, 8, ["title"])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</header><section class="my-5">`);
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
        _push(ssrRenderComponent(_component_ApplicationViewer, {
          ref_key: "viewer",
          ref: viewer,
          "application-id": unref(applicationId)
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</section><div><div class="flex items-start gap-2">`);
      if (unref(app)?.status === "pending") {
        _push(ssrRenderComponent(_component_NuxtCheckbox, {
          modelValue: unref(hasAgreed),
          "onUpdate:modelValue": ($event) => isRef(hasAgreed) ? hasAgreed.value = $event : null
        }, null, _parent));
      } else {
        _push(ssrRenderComponent(_component_NuxtCheckbox, {
          "default-value": true,
          disabled: ""
        }, null, _parent));
      }
      _push(`<p class="text-sm text-muted"> I hereby consent that the information provided in this application by me is, to the best of my knowledge, correct and free of errors. I also consent to my application being withdrawn if it is discovered that I have willfully provided wrong or misleading information. </p></div></div>`);
      if (unref(app)) {
        _push(`<footer class="mt-5 flex items-center gap-2.5 justify-between">`);
        _push(ssrRenderComponent(_component_NuxtButton, {
          to: `/application/portal/${unref(applicationId)}/documents`,
          label: "Previous",
          color: "neutral",
          variant: "soft"
        }, null, _parent));
        _push(`<div class="flex items-center justify-end gap-2.5">`);
        _push(ssrRenderComponent(_component_ApplicationDeleter, {
          "application-id": unref(applicationId),
          onRemove: () => ("navigateTo" in _ctx ? _ctx.navigateTo : unref(navigateTo))("/application/portal")
        }, null, _parent));
        if (unref(app).status === "pending") {
          _push(ssrRenderComponent(_component_ApplicationSubmitter, {
            application: unref(app),
            "application-id": unref(applicationId),
            condition: unref(hasAgreed),
            "condition-message": "Please\r\n          accept the terms before submitting",
            onSubmit: handleApplicationSubmit
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(ssrRenderComponent(_component_NuxtModal, {
          open: unref(open),
          "onUpdate:open": ($event) => isRef(open) ? open.value = $event : null,
          title: "Application Submitted!"
        }, {
          body: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="flex-col-center gap-2.5"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_NuxtIcon, {
                name: "lucide:circle-check",
                size: "5rem",
                class: "text-emerald-500"
              }, null, _parent2, _scopeId));
              _push2(`<p class="font-semibold text-emerald-500 text-center text-lg"${_scopeId}> Success </p><p class="text-sm text-muted text-center"${_scopeId}> Your application has been submitted successfully </p></div>`);
            } else {
              return [
                createVNode("div", { class: "flex-col-center gap-2.5" }, [
                  createVNode(_component_NuxtIcon, {
                    name: "lucide:circle-check",
                    size: "5rem",
                    class: "text-emerald-500"
                  }),
                  createVNode("p", { class: "font-semibold text-emerald-500 text-center text-lg" }, " Success "),
                  createVNode("p", { class: "text-sm text-muted text-center" }, " Your application has been submitted successfully ")
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></footer>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/application/portal/[applicationId]/index/review/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-CTOfH4wt.mjs.map
