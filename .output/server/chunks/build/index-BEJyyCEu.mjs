import { b as _sfc_main$a, n as navigateTo, f as _sfc_main$4$1, e as _sfc_main$g, h as useToast } from './server.mjs';
import { _ as _sfc_main$2 } from './Popover-QMcvsMmJ.mjs';
import { _ as _sfc_main$3 } from './Alert-ZHZvgBf8.mjs';
import { _ as __nuxt_component_6 } from './fetch-error-alert-NcfoVdkM.mjs';
import { _ as __nuxt_component_9 } from './index-YGh35Jf-.mjs';
import { _ as _sfc_main$4 } from './Checkbox-6ddTYado.mjs';
import { _ as __nuxt_component_6$1 } from './deleter-DhvJK-c4.mjs';
import { defineComponent, withAsyncContext, computed, ref, useTemplateRef, mergeProps, unref, withCtx, createVNode, createTextVNode, createBlock, createCommentVNode, openBlock, toDisplayString, Fragment, renderList, isRef, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderSlot } from 'vue/server-renderer';
import { b as applicationSchema } from '../_/application.schema.mjs';
import { a8 as normalizeException } from '../_/nitro.mjs';
import { useDateFormat } from '@vueuse/core';
import { u as useRouteParams } from './use-route-params-BVGD6Lax.mjs';
import { u as useFetch } from './fetch-DHT9Ke2D.mjs';
import { _ as __nuxt_component_0 } from './settings-BrUf5-pf.mjs';
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
import './logo-BvkqO1ow.mjs';
import './Separator-Cxtlj3w1.mjs';
import './Card-CBdj68Ul.mjs';
import 'zod';
import '@vue/shared';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
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
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/application/submitter.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_7 = Object.assign(_sfc_main$1, { __name: "ApplicationSubmitter" });
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
      const _component_NuxtPopover = _sfc_main$2;
      const _component_NuxtAlert = _sfc_main$3;
      const _component_FetchErrorAlert = __nuxt_component_6;
      const _component_ApplicationViewer = __nuxt_component_9;
      const _component_NuxtCheckbox = _sfc_main$4;
      const _component_ApplicationDeleter = __nuxt_component_6$1;
      const _component_ApplicationSubmitter = __nuxt_component_7;
      const _component_NuxtModal = _sfc_main$4$1;
      const _component_NuxtIcon = _sfc_main$g;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full" }, _attrs))}><div class="lg:max-w-[80%] mx-auto"><header><h1 class="text-xl font-bold">Review Application</h1><div class="mt-1 flex items-center gap-2.5 justify-between"><div>`);
      _push(ssrRenderComponent(unref(__nuxt_component_0), null, {
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
        if (!unref(app).hasPaidAdmissionFee) {
          _push(ssrRenderComponent(_component_ApplicationDeleter, {
            "application-id": unref(applicationId),
            onRemove: () => ("navigateTo" in _ctx ? _ctx.navigateTo : unref(navigateTo))("/application/portal")
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
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
//# sourceMappingURL=index-BEJyyCEu.mjs.map
