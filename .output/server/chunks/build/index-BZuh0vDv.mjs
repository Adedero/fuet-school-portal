import { _ as _sfc_main$2 } from './Badge-6Qx_KqaP.mjs';
import { _ as __nuxt_component_6 } from './fetch-error-alert-NcfoVdkM.mjs';
import { e as _sfc_main$g, d as useRuntimeConfig, b as _sfc_main$a } from './server.mjs';
import { _ as _sfc_main$3 } from './Separator-Cxtlj3w1.mjs';
import { _ as __nuxt_component_2 } from './logo-BvkqO1ow.mjs';
import { a8 as normalizeException } from '../_/nitro.mjs';
import { defineComponent, withAsyncContext, computed, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { useDateFormat } from '@vueuse/core';
import { a as departments } from './faculties-BLM9WR9z.mjs';
import { u as useFetch } from './fetch-DHT9Ke2D.mjs';
import { u as useRouteParams } from './use-route-params-BVGD6Lax.mjs';
import 'reka-ui';
import './Alert-ZHZvgBf8.mjs';
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
import '@vue/shared';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "admission-letter",
  __ssrInlineRender: true,
  props: {
    applicationId: {}
  },
  setup(__props) {
    const config = useRuntimeConfig();
    const { data, error, pending, refresh } = useFetch(
      `/api/general/applications/review/${__props.applicationId}`,
      {
        pick: [
          "firstName",
          "middleName",
          "otherNames",
          "lastName",
          "gender",
          "jambRegNumber",
          "schoolSessionName",
          "course",
          "degreeType",
          "updatedAt"
        ]
      },
      "$-laiiEBMEh"
    );
    const fullName = computed(() => {
      const {
        firstName = "",
        middleName = "",
        otherNames = "",
        lastName = ""
      } = data.value ?? {};
      return `${firstName} ${middleName} ${otherNames} ${lastName}`;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtIcon = _sfc_main$g;
      const _component_FetchErrorAlert = __nuxt_component_6;
      const _component_AppLogo = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      if (unref(pending)) {
        _push(`<div class="flex-col-center gap-1">`);
        _push(ssrRenderComponent(_component_NuxtIcon, {
          name: "lucide:loader",
          size: "2rem",
          class: "animate-spin"
        }, null, _parent));
        _push(`<p class="text-sm text-muted font-semibold">Loading</p></div>`);
      } else if (unref(error)) {
        _push(`<div>`);
        _push(ssrRenderComponent(_component_FetchErrorAlert, {
          message: `Failed to load admission letter: ${("normalizeException" in _ctx ? _ctx.normalizeException : unref(normalizeException))(unref(error)).message}`,
          "show-retry": "",
          onRetry: unref(refresh)
        }, null, _parent));
        _push(`</div>`);
      } else if (unref(data)) {
        _push(`<div id="admission-letter-document" class="overflow-x-auto"><div class="border border-muted min-w-[400px] print:border-none print:w-[210mm] print:h-[297mm] print:p-[0.75in] p-5"><div class="space-y-10"><header class="flex-col-center text-center">`);
        _push(ssrRenderComponent(_component_AppLogo, { width: 60 }, null, _parent));
        _push(`</header><section><h1 class="font-bold">${ssrInterpolate(unref(config).public.schoolNameLong)}</h1><p>Office of the Registrar</p><p>${ssrInterpolate(unref(useDateFormat)(unref(data).updatedAt, "MMMM DD, YYYY"))}</p><p class="mt-5">Dear ${ssrInterpolate(unref(fullName))},</p><p class="my-5 text-center font-bold uppercase">Admission Letter</p></section><section class="space-y-5"><p> I am pleased to inform you that you have been offered provisional admission into the ${ssrInterpolate(unref(config).public.schoolNameLong)} for the <b>${ssrInterpolate(unref(data).schoolSessionName)}</b> academic session. You have been admitted to study: </p><div><p> Programme: <b>${ssrInterpolate(unref(data).course)}, ${ssrInterpolate(unref(data).degreeType)}</b></p><p> Faculty: <b>${ssrInterpolate(unref(departments).find((dept) => dept.name === unref(data)?.course)?.faculty)}</b></p></div><p> Please note that this offer of admission is conditional. Your admission will only be considered valid upon the payment of the prescribed admission acceptance and registration fees within the stipulated deadline. Failure to complete this requirement will lead to the withdrawal of your admission offer. </p><p> You are also expected to present all relevant academic credentials for verification during registration. </p><p> We congratulate you on your achievement and look forward to welcoming you to the Federal University of Environment and Technology. </p><div><p>Sincerely, [Registrar&#39;s Name] Registrar</p><p>${ssrInterpolate(unref(config).public.schoolNameLong)}</p><p>[signature]</p></div></section></div></div></div>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/app/admission-letter.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_5 = Object.assign(_sfc_main$1, { __name: "AppAdmissionLetter" });
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const config = useRuntimeConfig();
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
    const print = () => (void 0).print();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtBadge = _sfc_main$2;
      const _component_FetchErrorAlert = __nuxt_component_6;
      const _component_NuxtIcon = _sfc_main$g;
      const _component_NuxtButton = _sfc_main$a;
      const _component_NuxtSeparator = _sfc_main$3;
      const _component_AppAdmissionLetter = __nuxt_component_5;
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
          _push(`<div class="text-center"><p class="text-sm font-semibold">Application Pending</p><small class="block max-w-80 text-center"> Your application has not been submitted. </small></div></div>`);
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
          _push(`<div class="text-center"><p class="text-sm font-semibold">Application Submitted</p><small class="block max-w-80 text-center"> Your application has been submitted and is being reviewed. </small></div></div>`);
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
          _push(`<div class="text-center"><p class="font-semibold text-red-500">Application Rejected</p><small class="block max-w-80 text-center"> We regret to inform you that your application has been rejected. </small></div></div>`);
        } else {
          _push(`<!---->`);
        }
        if (unref(app).status === "accepted") {
          _push(`<div class="flex-col-center gap-2.5">`);
          _push(ssrRenderComponent(_component_NuxtIcon, {
            name: "lucide:circle-check",
            size: "5rem",
            class: "text-green-500"
          }, null, _parent));
          _push(`<div class="text-center"><p class="font-semibold text-green-500">Congratulations</p><small class="block max-w-80 text-center"> You have been granted admission into the ${ssrInterpolate(unref(config).public.schoolNameLong)} (${ssrInterpolate(unref(config).public.schoolNameShort)}) </small></div><div>`);
          _push(ssrRenderComponent(_component_NuxtButton, {
            to: `/application/portal/${unref(applicationId)}/payment`,
            label: "Pay Admission Fees",
            icon: "lucide:credit-card"
          }, null, _parent));
          _push(`</div><div class="w-full">`);
          _push(ssrRenderComponent(_component_NuxtSeparator, { class: "my-5" }, null, _parent));
          _push(`<div><div class="flex items-center gap-2 justify-between"><p class="font-semibold">Admission Letter</p>`);
          _push(ssrRenderComponent(_component_NuxtButton, {
            label: "Print",
            icon: "lucide:printer",
            color: "neutral",
            variant: "outline",
            size: "sm",
            onClick: print
          }, null, _parent));
          _push(`</div><div class="mt-5">`);
          _push(ssrRenderComponent(_component_AppAdmissionLetter, { "application-id": unref(applicationId) }, null, _parent));
          _push(`</div></div></div></div>`);
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
//# sourceMappingURL=index-BZuh0vDv.mjs.map
