import { a as __nuxt_component_0, b as _sfc_main$a } from './server.mjs';
import { defineComponent, withCtx, createTextVNode, unref, createVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { ChevronRight, GraduationCap, BookOpen, Building2, Users, ArrowRight } from 'lucide-vue-next';
import '../nitro/nitro.mjs';
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
import 'unhead/utils';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "undergraduate",
  __ssrInlineRender: true,
  setup(__props) {
    const faculties = [
      {
        name: "Faculty of Science",
        departments: [
          "Biochemistry",
          "Biology & Biotechnology",
          "Mathematics",
          "Forensic Science",
          "Geology",
          "Chemical Sciences",
          "Microbiology",
          "Physics",
          "Statistics",
          "Animal & Environmental Biology"
        ]
      },
      {
        name: "Faculty of Engineering",
        departments: [
          "Agricultural & Biosystems Engineering",
          "Biomedical Engineering",
          "Mining Engineering",
          "Civil & Environmental Engineering",
          "Computer Engineering",
          "Electrical & Electronics Engineering",
          "Mechanical Engineering",
          "Robotics & Mechatronics Engineering"
        ]
      },
      {
        name: "Faculty of Environmental Science",
        departments: [
          "Architecture",
          "Building Technology",
          "Estate Management & Valuation",
          "Environmental Science & Management",
          "Industrial Design",
          "Quantity Surveying",
          "Surveying & Geoinformatics",
          "Urban & Regional Planning",
          "Forestry & Climate Smart Studies",
          "Environmental Chemistry & Toxicology"
        ]
      },
      {
        name: "Faculty of ICT",
        departments: [
          "Software Engineering",
          "Cyber Security",
          "Artificial Intelligence",
          "Data Science",
          "Information Technology"
        ]
      }
    ];
    const requirements = [
      "Choose FUET as your first choice on JAMB CAPS.",
      "Score a minimum of 150 in UTME.",
      "Have at least 5 O’Level credits including English and Mathematics (WAEC, NECO, NABTEB).",
      "Results may be in one or two sittings.",
      "Applicants must be at least 16 years old."
    ];
    const quickLinks = [
      { url: "/application", label: "Post-UTME / Apply Now" },
      { url: "/scholarships", label: "Scholarships" },
      { url: "/academic-calendar", label: "Academic Calendar" },
      { url: "/news", label: "News & Events" },
      { url: "/portal/student", label: "Student Portal" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_NuxtButton = _sfc_main$a;
      _push(`<div${ssrRenderAttrs(_attrs)}><nav class="section-padding pt-8 pb-2 flex items-center text-sm text-gray-500 gap-1" aria-label="Breadcrumb">`);
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
        to: "/academics",
        class: "hover:underline text-primary-500 font-medium"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Academics`);
          } else {
            return [
              createTextVNode("Academics")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(ChevronRight), { class: "w-4 h-4 mx-1 text-gray-400" }, null, _parent));
      _push(`<span class="text-gray-700 font-semibold">Undergraduate</span></nav><section id="admissions"><div class="section-padding py-20 bg-gradient-to-br from-green-50 via-white to-green-100"><div class="max-w-4xl mx-auto text-center space-y-6"><h1 class="text-4xl md:text-5xl font-extrabold tracking-tight"><span class="inline-block align-middle mx-2">`);
      _push(ssrRenderComponent(unref(GraduationCap), { class: "inline w-8 h-8 text-primary-500" }, null, _parent));
      _push(`</span><br> Faculties &amp; Departments </h1><p class="text-lg text-gray-600 max-w-2xl mx-auto"> Explore the faculties and departments at FUET, and review the requirements for admission into our accredited programmes. </p></div></div><div class="section-padding py-16 bg-slate-950 text-white"><div class="max-w-5xl mx-auto"><h2 class="text-2xl font-bold mb-6 flex items-center gap-2">`);
      _push(ssrRenderComponent(unref(BookOpen), { class: "w-6 h-6 text-primary-500" }, null, _parent));
      _push(` Admission Requirements </h2><ul class="space-y-3 text-gray-200 list-disc list-inside text-lg"><!--[-->`);
      ssrRenderList(requirements, (req, idx) => {
        _push(`<li>${ssrInterpolate(req)}</li>`);
      });
      _push(`<!--]--></ul></div></div><div class="w-full h-1 bg-gradient-to-r from-green-200 via-green-100 to-green-200 my-10 rounded-full"></div><div class="bg-gradient-to-br from-green-50 via-white to-green-100 section-padding py-20"><div class="max-w-6xl mx-auto"><h2 class="text-2xl font-bold mb-10 text-center flex gap-2">`);
      _push(ssrRenderComponent(unref(Building2), { class: "w-6 h-6 text-primary-500" }, null, _parent));
      _push(` Faculties &amp; Departments </h2><div class="grid md:grid-cols-2 lg:grid-cols-2 gap-8"><!--[-->`);
      ssrRenderList(faculties, (faculty) => {
        _push(`<div class="bg-white p-7 border duration-300 group"><h3 class="font-semibold text-lg mb-4 flex items-center gap-2">`);
        _push(ssrRenderComponent(unref(Users), { class: "w-5 h-5 text-primary-500 group-hover:text-primary-500 transition-colors" }, null, _parent));
        _push(` ${ssrInterpolate(faculty.name)}</h3><ul class="space-y-2 text-gray-600 list-disc list-inside"><!--[-->`);
        ssrRenderList(faculty.departments, (dept) => {
          _push(`<li class="flex items-center gap-2">`);
          _push(ssrRenderComponent(unref(ArrowRight), { class: "w-4 h-4 text-primary-400" }, null, _parent));
          _push(`<span>${ssrInterpolate(dept)}</span></li>`);
        });
        _push(`<!--]--></ul></div>`);
      });
      _push(`<!--]--></div></div></div><div class="section-padding py-20 text-center bg-gradient-to-br from-green-100 via-white to-green-50"><h2 class="text-2xl font-bold text-primary-500 mb-4 flex items-center justify-center gap-2">`);
      _push(ssrRenderComponent(unref(GraduationCap), { class: "w-6 h-6 text-primary-500" }, null, _parent));
      _push(` Ready to Apply? </h2><p class="text-gray-600 mb-6 text-lg"> Begin your journey at the Federal University of Environment &amp; Technology today. </p>`);
      _push(ssrRenderComponent(_component_NuxtButton, {
        to: "/application",
        label: "Apply Now",
        class: "text-lg px-8 py-3 rounded-full shadow-md hover:shadow-lg transition"
      }, null, _parent));
      _push(`</div><div class="bg-primary py-6 section-padding"><div class="flex flex-wrap gap-x-10 items-center justify-center md:justify-between"><!--[-->`);
      ssrRenderList(quickLinks, (link) => {
        _push(`<div class="h-16 overflow-y-hidden flex-center">`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: link.url,
          class: "flex items-center gap-2 text-white hover:underline text-base font-medium"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(unref(ArrowRight), { class: "w-4 h-4 text-white opacity-70" }, null, _parent2, _scopeId));
              _push2(` ${ssrInterpolate(link.label)}`);
            } else {
              return [
                createVNode(unref(ArrowRight), { class: "w-4 h-4 text-white opacity-70" }),
                createTextVNode(" " + toDisplayString(link.label), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></div></div></section></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/academics/undergraduate.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=undergraduate-wyV5V5RU.mjs.map
