import { _ as _export_sfc, a as __nuxt_component_0 } from './server.mjs';
import { defineComponent, withCtx, createTextVNode, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { ChevronRight, Crown, UserRound, Landmark, ArrowDown, Star, Users } from 'lucide-vue-next';
import '../_/nitro.mjs';
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
  __name: "leadership",
  __ssrInlineRender: true,
  setup(__props) {
    const leadership2 = {
      vc: {
        name: "Prof. Chinedu Mmom",
        title: "Vice-Chancellor",
        department: "Geography & Environmental Management, University of Port Harcourt",
        photo: "/images/Professor-Prince-Chinedu-Mmom-JP-DSSRS.webp"
      },
      proChancellor: {
        name: "Prof. Don Mon Baridam",
        title: "Pro-Chancellor / Chairman, Governing Council",
        background: "Professor of Management, Organisational Behaviour; formerly at University of Port Harcourt",
        photo: "/images/leadership/pro_chancellor_baridam.jpg"
      },
      councilMembers: [
        { name: "Mr. Emmanuel Onoja", region: "North Central", photo: "" },
        { name: "Mr. Hamid Adekunle", region: "South West", photo: "" },
        { name: "Prof. Chima Oji", region: "South East", photo: "" },
        { name: "Alhaji Abdullahi Magaji Lamda", region: "North West", photo: "" }
      ],
      principalOfficers: [
        {
          name: "Dr. Mpigi Monday Douglas",
          role: "Registrar",
          region: "South South",
          photo: ""
        },
        {
          name: "Zoryii Josco Nwaimanie",
          role: "Bursar",
          region: "North Central",
          photo: ""
        },
        {
          name: "Dr. Saghanen Ntogo G. B.",
          role: "Librarian",
          region: "South South",
          photo: ""
        }
      ]
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-c1af6ceb><nav class="section-padding pt-8 pb-2 flex items-center text-sm text-gray-500 gap-1" aria-label="Breadcrumb" data-v-c1af6ceb>`);
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
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/about",
        class: "hover:underline text-primary-500 font-medium"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`About FUET`);
          } else {
            return [
              createTextVNode("About FUET")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(ChevronRight), { class: "w-4 h-4 mx-1 text-gray-400" }, null, _parent));
      _push(`<span class="text-gray-700 font-semibold" data-v-c1af6ceb>Leadership &amp; Management</span></nav><section class="section-padding py-20 bg-gradient-to-br from-green-50 via-white to-green-100" data-v-c1af6ceb><div class="max-w-5xl mx-auto text-center space-y-6" data-v-c1af6ceb><h1 class="text-4xl md:text-5xl font-extrabold text-slate-950 tracking-tight flex items-center justify-center gap-3" data-v-c1af6ceb>`);
      _push(ssrRenderComponent(unref(Crown), { class: "w-8 h-8 text-primary-500 block" }, null, _parent));
      _push(` Leadership &amp; Management </h1><p class="text-lg text-gray-600" data-v-c1af6ceb> Meet the key figures guiding the vision, governance, and operations of FUET Ogoni. </p></div></section><section class="py-20 bg-slate-950" data-v-c1af6ceb><div class="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-10 rounded-2xl p-8 border border-green-100" data-v-c1af6ceb><div class="flex-shrink-0 w-48 h-48 rounded-full overflow-hidden border-4 border-green-600 bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center" data-v-c1af6ceb><img${ssrRenderAttr("src", leadership2.vc.photo)} alt="Vice Chancellor" class="w-full h-full object-cover" data-v-c1af6ceb></div><div class="space-y-4 text-center md:text-left" data-v-c1af6ceb><h2 class="text-3xl font-extrabold text-primary-500 flex items-center gap-2" data-v-c1af6ceb>`);
      _push(ssrRenderComponent(unref(UserRound), { class: "w-7 h-7 text-primary-500" }, null, _parent));
      _push(` ${ssrInterpolate(leadership2.vc.name)}</h2><p class="text-xl text-gray-50" data-v-c1af6ceb>${ssrInterpolate(leadership2.vc.title)}</p><p class="text-gray-100 flex items-center gap-2" data-v-c1af6ceb>`);
      _push(ssrRenderComponent(unref(Landmark), { class: "w-5 h-5 text-primary-400" }, null, _parent));
      _push(` ${ssrInterpolate(leadership2.vc.department)}</p></div></div></section><div class="flex justify-center my-2" data-v-c1af6ceb>`);
      _push(ssrRenderComponent(unref(ArrowDown), { class: "w-8 h-8 text-primary-400" }, null, _parent));
      _push(`</div><section class="py-20 bg-gradient-to-br from-green-50 via-white to-green-100" data-v-c1af6ceb><div class="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-10 rounded-2xl p-8 border border-green-100" data-v-c1af6ceb><div class="flex-shrink-0 w-48 h-48 rounded-full overflow-hidden border-4 border-green-600 bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center" data-v-c1af6ceb><img${ssrRenderAttr("src", leadership2.proChancellor.photo)} alt="Pro Chancellor" class="w-full h-full object-cover" data-v-c1af6ceb></div><div class="space-y-4 text-center md:text-left" data-v-c1af6ceb><h2 class="text-2xl font-bold text-primary-500flex items-center gap-2" data-v-c1af6ceb>`);
      _push(ssrRenderComponent(unref(Star), { class: "w-6 h-6 text-primary-500" }, null, _parent));
      _push(` ${ssrInterpolate(leadership2.proChancellor.name)}</h2><p class="text-lg text-gray-700" data-v-c1af6ceb>${ssrInterpolate(leadership2.proChancellor.title)}</p><p class="text-gray-600" data-v-c1af6ceb>${ssrInterpolate(leadership2.proChancellor.background)}</p></div></div></section><div class="flex justify-center my-2" data-v-c1af6ceb>`);
      _push(ssrRenderComponent(unref(ArrowDown), { class: "w-8 h-8 text-primary-400" }, null, _parent));
      _push(`</div><div class="w-full h-1 bg-gradient-to-r from-green-200 via-green-100 to-green-200 my-10 rounded-full" data-v-c1af6ceb></div><section class="section-padding py-16 bg-white" data-v-c1af6ceb><div class="max-w-6xl mx-auto" data-v-c1af6ceb><h3 class="text-2xl font-bold text-primary-500mb-8 text-center flex items-center justify-center gap-2 mb-8" data-v-c1af6ceb>`);
      _push(ssrRenderComponent(unref(Users), { class: "w-6 h-6 text-primary-500" }, null, _parent));
      _push(` Governing Council Members </h3><div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10" data-v-c1af6ceb><!--[-->`);
      ssrRenderList(leadership2.councilMembers, (member) => {
        _push(`<div class="p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl transition-shadow border border-green-100 flex flex-col items-center" data-v-c1af6ceb><div class="w-20 h-20 rounded-full overflow-hidden bg-gray-200 flex items-center justify-center mb-3 border-2 border-primary-300" data-v-c1af6ceb><img${ssrRenderAttr("src", member.photo || "https://placehold.co/80x80?text=👤")} alt="Council Member" class="w-full h-full object-cover" data-v-c1af6ceb></div><div class="text-lg font-semibold text-gray-800 mb-1 text-center flex items-center gap-1" data-v-c1af6ceb>`);
        _push(ssrRenderComponent(unref(UserRound), { class: "w-4 h-4 text-primary-400" }, null, _parent));
        _push(` ${ssrInterpolate(member.name)}</div><div class="text-sm text-gray-600" data-v-c1af6ceb>${ssrInterpolate(member.region)}</div></div>`);
      });
      _push(`<!--]--></div></div></section><div class="flex justify-center my-2" data-v-c1af6ceb>`);
      _push(ssrRenderComponent(unref(ArrowDown), { class: "w-8 h-8 text-primary-400" }, null, _parent));
      _push(`</div><section class="section-padding py-16 bg-gradient-to-br from-green-50 via-white to-green-100" data-v-c1af6ceb><div class="max-w-6xl mx-auto" data-v-c1af6ceb><h3 class="text-2xl font-bold text-primary-500mb-8 text-center flex items-center justify-center gap-2 mb-8" data-v-c1af6ceb>`);
      _push(ssrRenderComponent(unref(Star), { class: "w-6 h-6 text-primary-500" }, null, _parent));
      _push(` Principal Officers </h3><div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10" data-v-c1af6ceb><!--[-->`);
      ssrRenderList(leadership2.principalOfficers, (officer) => {
        _push(`<div class="p-6 bg-white rounded-xl transition-shadow border border-green-100 flex flex-col items-center" data-v-c1af6ceb><div class="w-20 h-20 rounded-full overflow-hidden bg-gray-200 flex items-center justify-center mb-3 border-2 border-primary-300" data-v-c1af6ceb><img${ssrRenderAttr("src", officer.photo || "https://placehold.co/80x80?text=👤")} alt="Officer" class="w-full h-full object-cover" data-v-c1af6ceb></div><div class="text-lg font-semibold text-gray-800 mb-1 text-center flex items-center gap-1" data-v-c1af6ceb>`);
        _push(ssrRenderComponent(unref(UserRound), { class: "w-4 h-4 text-primary-400" }, null, _parent));
        _push(` ${ssrInterpolate(officer.name)}</div><div class="text-gray-600" data-v-c1af6ceb>${ssrInterpolate(officer.role)}</div><div class="text-sm text-gray-500" data-v-c1af6ceb>${ssrInterpolate(officer.region)}</div></div>`);
      });
      _push(`<!--]--></div></div></section><section class="py-16 bg-white text-center" data-v-c1af6ceb><div class="max-w-4xl mx-auto space-y-4" data-v-c1af6ceb><p class="text-lg text-gray-700 flex items-center justify-center gap-2" data-v-c1af6ceb>`);
      _push(ssrRenderComponent(unref(Crown), { class: "w-6 h-6 text-primary-500" }, null, _parent));
      _push(` The Governing Council and Principal Officers play critical roles in steering FUET towards its mission of excellence in environment &amp; technology education. </p></div></section></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about/leadership.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const leadership = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-c1af6ceb"]]);

export { leadership as default };
//# sourceMappingURL=leadership-Cvyjd09l.mjs.map
