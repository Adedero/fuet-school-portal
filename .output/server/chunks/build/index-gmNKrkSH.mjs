import { b as _sfc_main$a } from './server.mjs';
import { defineComponent, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { u as useRouteParams } from './use-route-params-CEfBdTX9.mjs';
import '../nitro/nitro.mjs';
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
import 'reka-ui';
import '@vueuse/core';
import 'tailwind-variants';
import '@iconify/utils/lib/css/icon';
import 'perfect-debounce';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const { applicationId = "" } = useRouteParams();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtButton = _sfc_main$a;
      _push(`<div${ssrRenderAttrs(_attrs)}><header><h1 class="text-xl font-bold">FUET Admission Application</h1><p class="text-sm muted"> Federal University of Environment and Technology </p></header><div class="mt-5 space-y-10"><section><h2 class="font-semibold">Overview</h2><div> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid sed, ex totam repellendus nostrum numquam iste neque facilis iusto inventore vero eos impedit laborum consequuntur dicta quaerat temporibus esse officia! Ipsum obcaecati cum animi omnis corrupti esse reiciendis at blanditiis natus aliquam! Enim ducimus voluptas fugiat nam consectetur, commodi magni repellendus praesentium! Voluptate, fugiat? Excepturi at consequuntur consectetur iste aspernatur. </div></section><section><h2 class="font-semibold">Requirements</h2><div> Quam nulla, recusandae dolorum adipisci, labore consequuntur dolor corrupti sequi eveniet autem architecto cupiditate veniam dicta vel similique incidunt id molestiae provident? </div><div class="mt-5"><p> Please, ensure you have the following documents before applying. </p><ul class="mt-2.5 list-disc list-inside"><li> O&#39;Level results (WAEC/NECO) with 5 credits including English and Mathematics </li><li>Post-UTME registration slip</li><li>Birth certificate or affidavit of age declaration</li><li>Local Government Identification letter</li><li>Payment receipt for admission form</li></ul></div></section><div><p>I understand, and wish to continue.</p><div>`);
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
//# sourceMappingURL=index-gmNKrkSH.mjs.map
