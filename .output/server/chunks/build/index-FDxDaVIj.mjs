import { d as useRuntimeConfig, b as _sfc_main$a } from './server.mjs';
import { defineComponent, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
import { u as useRouteParams } from './use-route-params-BVGD6Lax.mjs';
import '../_/nitro.mjs';
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
import 'vue-router';
import 'better-auth/vue';
import 'better-auth/client/plugins';
import 'tailwindcss/colors';
import '@iconify/vue';
import 'reka-ui';
import '@vueuse/core';
import 'tailwind-variants';
import '@iconify/utils/lib/css/icon';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const config = useRuntimeConfig();
    const { applicationId = "" } = useRouteParams();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtButton = _sfc_main$a;
      _push(`<div${ssrRenderAttrs(_attrs)}><header><h1 class="text-xl font-bold">FUET Admission Application</h1><p class="text-sm muted"> Federal University of Environment and Technology </p></header><div class="mt-5 space-y-10"><section><h2 class="font-semibold">Overview</h2><div> The ${ssrInterpolate(unref(config).public.schoolNameLong)} (${ssrInterpolate(unref(config).public.schoolNameShort)}) is a pioneering institution dedicated to advancing education, research, and innovation in environmental science and technology. Established with a vision to address global environmental challenges, FUET offers a range of undergraduate and postgraduate programs designed to equip students with the knowledge and skills needed to make a positive impact on the world. </div></section><section><h2 class="font-semibold">Requirements</h2><div> To apply for admission to ${ssrInterpolate(unref(config).public.schoolNameShort)}, please ensure you meet the following requirements: </div><div class="mt-5"><ul class="mt-2.5 list-disc list-inside"><li> O&#39;Level results (WAEC/NECO) with 5 credits including English and Mathematics </li><li>Post-UTME registration slip</li><li>Birth certificate or affidavit of age declaration</li><li>Local Government Identification letter</li><li>Payment receipt for admission form</li></ul></div></section><div><p>I understand, and wish to continue.</p><div>`);
      _push(ssrRenderComponent(_component_NuxtButton, {
        to: `/application/portal/${unref(applicationId)}/personal-info`,
        label: "Continue",
        "trailing-icon": "lucide:circle-arrow-right"
      }, null, _parent));
      _push(`</div></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/application/portal/[applicationId]/index/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-FDxDaVIj.mjs.map
