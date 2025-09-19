import { e as _sfc_main$g, b as _sfc_main$a } from './server.mjs';
import { _ as __nuxt_component_6$1 } from './fetch-error-alert-NcfoVdkM.mjs';
import { _ as __nuxt_component_2$1 } from './logo-BvkqO1ow.mjs';
import { defineComponent, mergeProps, unref, computed, withCtx, createVNode, createBlock, createCommentVNode, openBlock, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderList } from 'vue/server-renderer';
import { _ as _sfc_main$6 } from './Separator-Cxtlj3w1.mjs';
import { _ as _sfc_main$7 } from './Card-CBdj68Ul.mjs';
import { a8 as normalizeException } from '../_/nitro.mjs';
import { u as useFetch } from './fetch-DHT9Ke2D.mjs';

const _sfc_main$5 = /* @__PURE__ */ defineComponent({
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
      _push(`<span> FUET UNDEGRADUATE APPLICATION (${ssrInterpolate(_ctx.data.schoolSessionName)}) </span></h1><p>Federal University of Environment and Technology</p><p class="mt-2"> APPLICATION NUMBER: <b>${ssrInterpolate(_ctx.data.applicationNumber)}</b></p></header>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/application/viewer/page-header.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_2 = Object.assign(_sfc_main$5, { __name: "ApplicationViewerPageHeader" });
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "section-1",
  __ssrInlineRender: true,
  props: {
    data: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtSeparator = _sfc_main$6;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "mt-10 space-y-10" }, _attrs))}><h3 class="text-xl font-bold">Section I: Personal Information</h3><div class="justify-end flex"><div class="bg-muted w-44 h-44">`);
      if (_ctx.data.passportUrl) {
        _push(`<img${ssrRenderAttr("src", _ctx.data.passportUrl)} class="w-full h-full object-cover">`);
      } else {
        _push(`<div class="fluid flex-center"><p class="text-sm text-muted font-semibold">No passport</p></div>`);
      }
      _push(`</div></div><section class="space-y-16"><div><h3 class="text-muted font-semibold">BIO DATA</h3>`);
      _push(ssrRenderComponent(_component_NuxtSeparator, { class: "mt-2 mb-5" }, null, _parent));
      _push(`<div><div class="mt-5 w-full"><ul class="grid grid-cols-2 gap-1.5"><li> First Name: <b class="uppercase">${ssrInterpolate(_ctx.data.firstName)}</b></li><li> Middle Name: <b class="uppercase">${ssrInterpolate(_ctx.data.middleName)}</b></li><li> Other Names: <b class="uppercase">${ssrInterpolate(_ctx.data.otherNames)}</b></li><li> Last Name: <b class="uppercase">${ssrInterpolate(_ctx.data.lastName)}</b></li><li> D.O.B: <b class="uppercase">${ssrInterpolate(_ctx.data.birthDay)} ${ssrInterpolate(_ctx.data.birthMonth)}, ${ssrInterpolate(_ctx.data.birthYear)}</b></li><li> Gender: <b class="uppercase">${ssrInterpolate(_ctx.data.gender)}</b></li><li class="col-span-2 print:col-span-1"> Email: <b class="uppercase">${ssrInterpolate(_ctx.data.user.email)}</b></li><li> Phone: <b class="uppercase">${ssrInterpolate(_ctx.data.phoneNumber)}</b></li></ul></div></div></div><div><h3 class="text-muted font-semibold">IDENTIFICATION</h3>`);
      _push(ssrRenderComponent(_component_NuxtSeparator, { class: "mt-2 mb-5" }, null, _parent));
      _push(`<ul class="grid grid-cols-2 gap-1.5 w-full"><li> Nationality: <b class="uppercase">${ssrInterpolate(_ctx.data.nationality)}</b></li><li> State of Origin: <b class="uppercase">${ssrInterpolate(_ctx.data.stateOfOrigin)}</b></li><li> L.G.A: <b class="uppercase">${ssrInterpolate(_ctx.data.lga)}</b></li><li> NIN/ID number: <b>${ssrInterpolate(_ctx.data.nin)}</b></li></ul></div></section></div>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/application/viewer/section-1.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_3 = Object.assign(_sfc_main$4, { __name: "ApplicationViewerSection1" });
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "section-2",
  __ssrInlineRender: true,
  props: {
    data: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtSeparator = _sfc_main$6;
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
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/application/viewer/section-2.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_4 = Object.assign(_sfc_main$3, { __name: "ApplicationViewerSection2" });
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "section-3",
  __ssrInlineRender: true,
  props: {
    data: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtSeparator = _sfc_main$6;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "print:mt-10 space-y-10" }, _attrs))}><h3 class="text-xl font-bold">Section III: Academic Information</h3><section class="space-y-16"><div><h3 class="text-muted font-semibold">COURSE CHOICE</h3>`);
      _push(ssrRenderComponent(_component_NuxtSeparator, { class: "mt-2 mb-5" }, null, _parent));
      _push(`<div><div class="mt-5 w-full"><ul class="grid gap-1.5"><li> Chosen Course: <b class="uppercase">${ssrInterpolate(_ctx.data.course)}</b></li><li> Degree: <b class="uppercase">${ssrInterpolate(_ctx.data.degreeType)}</b></li><li> JAMB Registration Number: <b class="uppercase">${ssrInterpolate(_ctx.data.jambRegNumber)}</b></li></ul></div></div></div><div><h3 class="text-muted font-semibold">SECONDARY INSTITUTION</h3>`);
      _push(ssrRenderComponent(_component_NuxtSeparator, { class: "mt-2 mb-5" }, null, _parent));
      _push(`<div><div class="mt-5 w-full"><ul class="grid grid-cols-2 gap-1.5"><li class="col-span-2"> Name of Secondary School: <b class="uppercase">${ssrInterpolate(_ctx.data.secondarySchoolName)}</b></li><li class="col-span-2"> Address of Secondary School: <b class="uppercase">${ssrInterpolate(_ctx.data.secondarySchoolAddress)}</b></li><li> Month Graduated: <b class="uppercase">${ssrInterpolate(_ctx.data.secondarySchoolGraduationMonth)}</b></li><li> Year Graduated: <b class="uppercase">${ssrInterpolate(_ctx.data.secondarySchoolGraduationYear)}</b></li></ul></div></div></div></section></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/application/viewer/section-3.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_5 = Object.assign(_sfc_main$2, { __name: "ApplicationViewerSection3" });
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
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
      const _component_NuxtCard = _sfc_main$7;
      const _component_NuxtIcon = _sfc_main$g;
      const _component_NuxtButton = _sfc_main$a;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "print:mt-10 space-y-10" }, _attrs))}><h3 class="text-xl font-bold">Section IV: Documents Submitted</h3><section class="space-y-16"><div class="grid gap-5"><!--[-->`);
      ssrRenderList(unref(state), (doc) => {
        _push(ssrRenderComponent(_component_NuxtCard, {
          key: doc.label,
          class: "rounded-none"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="flex items-center gap-1 justify-between"${_scopeId}><div class="flex items-center gap-1"${_scopeId}>`);
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
              _push2(`<p class="text-sm font-semibold text-muted"${_scopeId}>${ssrInterpolate(doc.label)}</p></div>`);
              if (doc.value) {
                _push2(`<div class="print:hidden flex items-center gap-2.5"${_scopeId}><a${ssrRenderAttr("href", doc.value)} download${_scopeId}>`);
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
                    createVNode("p", { class: "text-sm font-semibold text-muted" }, toDisplayString(doc.label), 1)
                  ]),
                  doc.value ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "print:hidden flex items-center gap-2.5"
                  }, [
                    createVNode("a", {
                      href: doc.value,
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
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div></section></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/application/viewer/section-4.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_6 = Object.assign(_sfc_main$1, { __name: "ApplicationViewerSection4" });
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  props: {
    applicationId: {}
  },
  setup(__props, { expose: __expose }) {
    const { data, error, execute, pending } = useFetch(`/api/general/applications/review/${__props.applicationId}`, "$N_vzw1a0Pg");
    const print = () => {
      (void 0).print();
    };
    __expose({
      print
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtIcon = _sfc_main$g;
      const _component_FetchErrorAlert = __nuxt_component_6$1;
      const _component_ApplicationViewerPageHeader = __nuxt_component_2;
      const _component_ApplicationViewerSection1 = __nuxt_component_3;
      const _component_ApplicationViewerSection2 = __nuxt_component_4;
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
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/application/viewer/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_9 = Object.assign(_sfc_main, { __name: "ApplicationViewer" });

export { __nuxt_component_9 as _ };
//# sourceMappingURL=index-YGh35Jf-.mjs.map
