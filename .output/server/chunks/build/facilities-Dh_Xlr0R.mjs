import { a as __nuxt_component_0 } from './server.mjs';
import { defineComponent, withCtx, createTextVNode, unref, createVNode, resolveDynamicComponent, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderStyle, ssrRenderList, ssrRenderAttr, ssrRenderVNode, ssrInterpolate } from 'vue/server-renderer';
import { ChevronRight, School, Users, Leaf, ShieldCheck } from 'lucide-vue-next';
import '../nitro/nitro.mjs';
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
import 'perfect-debounce';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "facilities",
  __ssrInlineRender: true,
  setup(__props) {
    const facilities = [
      {
        title: "Academic Excellence",
        desc: "Cutting-edge lecture halls, digital libraries, and research hubs designed to support world-class learning.",
        img: "/images/facilities/academic.jpg",
        icon: School
      },
      {
        title: "Student Life",
        desc: "Modern hostels, dining halls, student union activities, and recreational spaces for a vibrant campus life.",
        img: "/images/facilities/student-life.jpg",
        icon: Users
      },
      {
        title: "Eco-Smart Campus",
        desc: "A green, sustainable environment powered by smart energy, landscaped gardens, and ICT-driven systems.",
        img: "/images/facilities/eco-campus.jpg",
        icon: Leaf
      },
      {
        title: "Health & Safety",
        desc: "Fully equipped medical center, 24/7 security, and responsive campus emergency services.",
        img: "/images/facilities/health-safety.jpg",
        icon: ShieldCheck
      }
    ];
    const quickLinks = [
      { url: "/application", label: "Admissions" },
      { url: "/faculties", label: "Faculties & Departments" },
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
      _push(`<span class="text-gray-700 font-semibold">Campus &amp; Facilities</span></nav><section id="campus-facilities"><div class="relative section-padding py-32 bg-cover bg-center text-center text-white" style="${ssrRenderStyle({ "background-image": "url('/images/admin_block.jpg')" })}"><div class="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/60"></div><div class="relative z-10 max-w-3xl mx-auto"><h1 class="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 flex items-center justify-center gap-3">`);
      _push(ssrRenderComponent(unref(School), { class: "w-10 h-10 text-primary-400" }, null, _parent));
      _push(` Campus &amp; Facilities </h1><p class="text-lg text-gray-200"> A modern, sustainable, and student-centered environment designed for learning, growth, and innovation. </p></div></div><div class="w-full h-1 bg-gradient-to-r from-green-200 via-green-100 to-green-200 my-10 rounded-full"></div><div class="section-padding py-20 bg-gradient-to-br from-green-50 via-white to-green-100"><div class="max-w-6xl mx-auto grid md:grid-cols-2 gap-10"><!--[-->`);
      ssrRenderList(facilities, (facility) => {
        _push(`<div class="relative group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition border border-green-100"><img${ssrRenderAttr("src", facility.img)}${ssrRenderAttr("alt", facility.title)} class="w-full h-72 object-cover group-hover:scale-105 transition duration-500"><div class="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition"></div><div class="absolute inset-0 flex flex-col justify-end p-8"><div class="flex items-center gap-2 mb-2">`);
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(facility.icon), { class: "w-7 h-7 text-primary-400 drop-shadow" }, null), _parent);
        _push(`<h3 class="text-2xl font-bold text-white">${ssrInterpolate(facility.title)}</h3></div><p class="text-gray-200 text-base">${ssrInterpolate(facility.desc)}</p></div></div>`);
      });
      _push(`<!--]--></div></div><div class="bg-primary py-6 section-padding mt-10"><div class="flex flex-wrap gap-x-10 items-center justify-center md:justify-between"><!--[-->`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about/facilities.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=facilities-Dh_Xlr0R.mjs.map
