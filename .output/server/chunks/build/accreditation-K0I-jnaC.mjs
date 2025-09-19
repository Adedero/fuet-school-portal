import { a as __nuxt_component_0 } from './server.mjs';
import { defineComponent, withCtx, createTextVNode, unref, createVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderStyle, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { ChevronRight, ShieldCheck, Building2, CheckCircle } from 'lucide-vue-next';
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

const accDetails = `These faculties have been approved by the National Universities Commission (NUC) for the commencement of academic activities at FUET. It means that FUET meets the regulatory standards for governance, quality of curriculum, staff qualifications, and infrastructure under these faculties.`;
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "accreditation",
  __ssrInlineRender: true,
  setup(__props) {
    const approvedFaculties = [
      "Faculty of Nature and Applied Sciences",
      "Faculty of Agriculture Technology",
      "Faculty of Environmental Management Sciences",
      "Faculty of Engineering Technology",
      "Faculty of Educational Technology",
      "Faculty of Management Technology"
    ];
    const quickLinks = [
      { url: "/academics/undergraduate", label: "Faculties & Departments" },
      { url: "/application", label: "Admissions" },
      { url: "/academic-calendar", label: "Academic Calendar" },
      { url: "/news", label: "News & Events" },
      { url: "/portal/student", label: "Student Portal" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<!--[--><nav class="section-padding pt-8 pb-2 flex items-center text-sm text-gray-500 gap-1" aria-label="Breadcrumb">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "hover:underline text-primary-500 font-medium"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Home`);
          } else {
            return [
              createTextVNode("Home")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(ChevronRight), { class: "w-4 h-4 mx-1 text-gray-400" }, null, _parent));
      _push(`<span class="text-gray-700 font-semibold">Accreditation &amp; NUC Approval</span></nav><section id="accreditation-start" class="overflow-hidden"><div class="relative section-padding py-32 bg-cover bg-center text-center text-white" style="${ssrRenderStyle({ "background-image": "url('/images/Federal-University-Ogoni.jpg')" })}"><div class="absolute inset-0 bg-black/60"></div><div class="relative z-10 max-w-3xl mx-auto">`);
      _push(ssrRenderComponent(unref(ShieldCheck), { class: "w-12 h-12 text-primary-400 mx-auto mb-4" }, null, _parent));
      _push(`<h1 class="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight"> NUC-Approved Faculties </h1><p class="text-lg text-gray-200 mt-4"> FUET has obtained approval from the National Universities Commission to commence with the following faculties. </p></div></div><div class="section-padding py-20 bg-gradient-to-br from-green-50 via-white to-green-100"><div class="max-w-5xl mx-auto"><h2 class="text-2xl font-bold text-primary-600 mb-6 flex items-center gap-2">`);
      _push(ssrRenderComponent(unref(Building2), { class: "w-6 h-6 text-primary-400" }, null, _parent));
      _push(` Approved for Takeoff </h2><ul class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"><!--[-->`);
      ssrRenderList(approvedFaculties, (fac) => {
        _push(`<li class="flex items-center gap-3 p-4 bg-white rounded-xl shadow hover:shadow-lg transition">`);
        _push(ssrRenderComponent(unref(CheckCircle), { class: "w-8 h-8 text-primary-400" }, null, _parent));
        _push(`<span class="text-lg font-medium text-gray-700">${ssrInterpolate(fac)}</span></li>`);
      });
      _push(`<!--]--></ul><p class="mt-10 text-gray-700 text-base leading-relaxed">${ssrInterpolate(accDetails)}</p></div></div><div class="bg-primary py-6 section-padding mt-10"><div class="flex flex-wrap gap-x-10 items-center justify-center md:justify-between"><!--[-->`);
      ssrRenderList(quickLinks, (link) => {
        _push(`<div class="h-16 flex-center">`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: link.url,
          class: "flex items-center gap-2 text-white hover:underline text-base font-medium group"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(unref(ChevronRight), { class: "w-4 h-4 text-white opacity-70 group-hover:translate-x-1 transition-transform" }, null, _parent2, _scopeId));
              _push2(` ${ssrInterpolate(link.label)}`);
            } else {
              return [
                createVNode(unref(ChevronRight), { class: "w-4 h-4 text-white opacity-70 group-hover:translate-x-1 transition-transform" }),
                createTextVNode(" " + toDisplayString(link.label), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></div></div></section><!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about/accreditation.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=accreditation-K0I-jnaC.mjs.map
