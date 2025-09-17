import { a as __nuxt_component_0 } from './server.mjs';
import { defineComponent, withCtx, createTextVNode, unref, createVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderList } from 'vue/server-renderer';
import { w as publicAssetsURL } from '../_/nitro.mjs';
import { ChevronRight, Building2, Target, Eye, User, ArrowRight } from 'lucide-vue-next';
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

const _imports_0 = publicAssetsURL("/images/Professor-Prince-Chinedu-Mmom-JP-DSSRS.webp");
const aboutFuet = `The Federal University of Environment and Technology (FUET), located at Koroma/Sakpenwa in Rivers State, is a specialized institution committed to advancing knowledge in environmental sciences, engineering, technology, and sustainable development. FUET is designed to be a hub for cutting-edge research, innovation, and capacity building—equipping graduates with the skills needed to tackle global and national challenges in sustainability and environmental management.`;
const mission = `To provide high-quality education, research, and training in environmental sciences, engineering, technology, and applied disciplines, empowering students to contribute to national and global sustainable development.`;
const vision = `To be a world-class university of environment and technology, renowned for innovation, excellence, and leadership in sustainability.`;
const vcMessage = `Welcome to our website. I am honored to be the new Vice Chancellor of Federal University of Environment and Technology, Koroma/Sakpenwa. I have been entrusted with continuing the academic excellence of this university and enriching the quality of student life.`;
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const quickLinks = [
      { url: "/faculties", label: "Faculties & Departments" },
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
      _push(`<span class="text-gray-700 font-semibold">About FUET</span></nav><section id="about-fuet"><div class="section-padding py-20 bg-gradient-to-br from-green-50 via-white to-green-100"><div class="max-w-4xl mx-auto text-center space-y-6"><h1 class="text-4xl md:text-5xl font-extrabold tracking-tight">`);
      _push(ssrRenderComponent(unref(Building2), { class: "inline w-10 h-10 text-primary-500 mb-2" }, null, _parent));
      _push(` <br> About FUET </h1><p class="text-lg text-gray-600 max-w-2xl mx-auto"> Learn about the Federal University of Environment and Technology, our mission, vision, and leadership. </p></div></div><div class="w-full h-1 bg-gradient-to-r from-green-200 via-green-100 to-green-200 my-10 rounded-full"></div><div class="section-padding py-20 bg-slate-950"><div class="max-w-5xl mx-auto space-y-6 text-center"><p class="text-lg text-white leading-relaxed">${ssrInterpolate(aboutFuet)}</p></div></div><div class="section-padding py-20 bg-gradient-to-br from-green-50 via-white to-green-100"><div class="max-w-6xl mx-auto grid md:grid-cols-2 gap-10"><div class="bg-white p-8 border rounded-2xl shadow-md hover:shadow-xl transition"><h2 class="flex items-center gap-2 text-2xl font-bold text-primary-600 mb-4">`);
      _push(ssrRenderComponent(unref(Target), { class: "w-6 h-6" }, null, _parent));
      _push(` Mission </h2><p class="text-gray-700 leading-relaxed">${ssrInterpolate(mission)}</p></div><div class="bg-white p-8 border rounded-2xl shadow-md hover:shadow-xl transition"><h2 class="flex items-center gap-2 text-2xl font-bold text-primary-600 mb-4">`);
      _push(ssrRenderComponent(unref(Eye), { class: "w-6 h-6" }, null, _parent));
      _push(` Vision </h2><p class="text-gray-700 leading-relaxed">${ssrInterpolate(vision)}</p></div></div></div><div class="w-full h-1 bg-gradient-to-r from-green-200 via-green-100 to-green-200 my-10 rounded-full"></div><div class="section-padding py-20 bg-gradient-to-br from-green-50 via-white to-green-100"><div class="max-w-3xl mx-auto"><div class="bg-white rounded-2xl shadow-xl p-8 flex flex-col md:flex-row items-center gap-8 border border-green-100"><div class="flex-shrink-0 w-32 h-32 rounded-full overflow-hidden border-4 border-primary-500 bg-gray-100 flex items-center justify-center"><img${ssrRenderAttr("src", _imports_0)} alt="Vice Chancellor" class="w-full h-full object-cover"></div><div class="flex-1 text-center md:text-left space-y-3"><h2 class="text-2xl font-bold text-primary-600 flex items-center gap-2 justify-center md:justify-start">`);
      _push(ssrRenderComponent(unref(User), { class: "w-7 h-7 text-primary-500" }, null, _parent));
      _push(` Vice Chancellor&#39;s Welcome Note </h2><p class="text-lg text-gray-700 leading-relaxed italic"> “${ssrInterpolate(vcMessage)}” </p></div></div></div></div><div class="bg-primary py-6 section-padding"><div class="flex flex-wrap gap-x-10 items-center justify-center md:justify-between"><!--[-->`);
      ssrRenderList(quickLinks, (link) => {
        _push(`<div class="h-16 overflow-y-hidden flex-center">`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: link.url,
          class: "flex items-center gap-2 text-white hover:underline text-base font-medium group"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(unref(ArrowRight), { class: "w-4 h-4 text-white opacity-70 group-hover:translate-x-1 transition-transform" }, null, _parent2, _scopeId));
              _push2(` ${ssrInterpolate(link.label)}`);
            } else {
              return [
                createVNode(unref(ArrowRight), { class: "w-4 h-4 text-white opacity-70 group-hover:translate-x-1 transition-transform" }),
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-DaEr9WtA.mjs.map
