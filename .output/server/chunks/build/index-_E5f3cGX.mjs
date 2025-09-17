import { _ as _sfc_main$1 } from './Badge-BP5AIZVh.mjs';
import { _ as __nuxt_component_1 } from './fetch-error-alert-B6qqzpgU.mjs';
import { c as _sfc_main$g } from './server.mjs';
import { X as normalizeException } from '../_/nitro.mjs';
import { defineComponent, withAsyncContext, computed, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { u as useRouteParams } from './use-route-params-DfO13aRT.mjs';
import { u as useFetch } from './fetch-CmFD1hYd.mjs';
import 'reka-ui';
import './Alert-BYGY0q89.mjs';
import 'vue-router';
import 'better-auth/vue';
import 'better-auth/client/plugins';
import 'tailwindcss/colors';
import '@iconify/vue';
import '@vueuse/core';
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
import '@vue/shared';

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
    } = ([__temp, __restore] = withAsyncContext(() => useFetch(`/api/users/applicant/applications/${applicationId}`, "$9I_NOPHIRb")), __temp = await __temp, __restore(), __temp);
    const badgeColor = computed(() => {
      switch (app.value?.status ?? "") {
        case "pending":
          return "info";
        case "submitted":
          return "warning";
        case "accepted":
          return "success";
        case "rejected":
          return "error";
        default:
          return "neutral";
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtBadge = _sfc_main$1;
      const _component_FetchErrorAlert = __nuxt_component_1;
      const _component_NuxtIcon = _sfc_main$g;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full" }, _attrs))}><div class="lg:max-w-[70%] mx-auto"><header><h1 class="text-xl font-bold"> Admission Status `);
      _push(ssrRenderComponent(_component_NuxtBadge, {
        label: unref(app)?.status ?? "uknown",
        color: unref(badgeColor),
        variant: "subtle"
      }, null, _parent));
      _push(`</h1></header><section class="my-5">`);
      if (unref(error)) {
        _push(`<div>`);
        _push(ssrRenderComponent(_component_FetchErrorAlert, {
          message: ("normalizeException" in _ctx ? _ctx.normalizeException : unref(normalizeException))(unref(error)).message,
          "show-retry": "",
          onRetry: unref(refresh)
        }, null, _parent));
        _push(`</div>`);
      } else if (unref(app)) {
        _push(`<div class="mt-10">`);
        if (unref(app).status === "pending") {
          _push(`<div class="flex-col-center gap-2.5">`);
          _push(ssrRenderComponent(_component_NuxtIcon, {
            name: "lucide:clock",
            size: "5rem",
            class: "text-muted"
          }, null, _parent));
          _push(`<div class="text-center"><p class="text-sm font-semibold">Application Pending</p><small> Your application has not been submitted. </small></div></div>`);
        } else {
          _push(`<!---->`);
        }
        if (unref(app).status === "submitted") {
          _push(`<div class="flex-col-center gap-2.5">`);
          _push(ssrRenderComponent(_component_NuxtIcon, {
            name: "lucide:view",
            size: "5rem",
            class: "text-muted"
          }, null, _parent));
          _push(`<div class="text-center"><p class="text-sm font-semibold">Application Submitted</p><small> Your application has been submitted and is being reviewed. </small></div></div>`);
        } else {
          _push(`<!---->`);
        }
        if (unref(app).status === "rejected") {
          _push(`<div class="flex-col-center gap-2.5">`);
          _push(ssrRenderComponent(_component_NuxtIcon, {
            name: "lucide:circle-x",
            size: "5rem",
            class: "text-red-500"
          }, null, _parent));
          _push(`<div class="text-center"><p class="font-semibold text-red-500">Application Rejected</p><small> We regret to inform you that your application has been rejected. </small></div></div>`);
        } else {
          _push(`<!---->`);
        }
        if (unref(app).status === "accepted") {
          _push(`<div class="flex-col-center gap-2.5">`);
          _push(ssrRenderComponent(_component_NuxtIcon, {
            name: "lucide:circle-x",
            size: "5rem",
            class: "text-green-500"
          }, null, _parent));
          _push(`<div class="text-center"><p class="font-semibold text-green-500">Congratulations</p><small> You have been granted admission into the Federal University of Environment and Technology (FUET) </small></div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</section></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/application/portal/[applicationId]/index/admission-status/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-_E5f3cGX.mjs.map
