import { _ as _export_sfc, b as _sfc_main$a, a as __nuxt_component_0$1, c as _sfc_main$g } from './server.mjs';
import { defineComponent, mergeProps, withCtx, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { q as publicAssetsURL } from '../_/nitro.mjs';
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
import 'node:crypto';
import 'consola';
import 'ipx';
import 'node:path';

const _imports_0$1 = publicAssetsURL("/images/admin_block.jpg");
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "hero",
  __ssrInlineRender: true,
  setup(__props) {
    const stats = [
      {
        id: 1,
        value: "60",
        label: "Teachers"
      },
      {
        id: 2,
        value: "5k",
        label: "Students"
      },
      {
        id: 3,
        value: "A",
        label: "Accreditation"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtButton = _sfc_main$a;
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<section${ssrRenderAttrs(mergeProps({ id: "hero" }, _attrs))}><div class="section-padding py-10"><div class="grid md:gap-x-10 lg:gap-x-20 gap-y-10 md:grid-cols-2 md:items-center"><div class="text-center md:text-left space-y-5"><h1 class="text-4xl md:text-5xl lg:text-5xl font-bold"> Federal University of Environment &amp; Technology, Ogoni </h1><p>Pioneering Innovation • Nurturing Sustainability</p><p class="text-muted"> We offer accredited programmes in environmental science, technology, and applied research—designed to empower you for global impact. </p><div class="flex items-center justify-center md:justify-normal gap-2">`);
      _push(ssrRenderComponent(_component_NuxtButton, { label: "Join us now" }, null, _parent));
      _push(ssrRenderComponent(_component_NuxtButton, {
        label: "Explore Programs",
        variant: "link"
      }, null, _parent));
      _push(`</div><div class="flex items-center justify-center md:justify-normal gap-5"><!--[-->`);
      ssrRenderList(stats, (stat) => {
        _push(`<div><p class="font-bold"><span class="text-2xl md:text-3xl lg:text-4xl">${ssrInterpolate(stat.value)}</span><span class="text-primary-500 text-lg lg:text-xl">+</span></p><p class="text-muted text-sm">${ssrInterpolate(stat.label)}</p></div>`);
      });
      _push(`<!--]--></div></div><div><div class="bg-muted h-[28rem] overflow-hidden rounded"><img${ssrRenderAttr("src", _imports_0$1)} class="w-full h-full object-cover"></div></div></div></div><div class="bg-primary py-2 section-padding"><div class="flex flex-wrap gap-x-10 items-center justify-center md:justify-between"><!--[-->`);
      ssrRenderList([{ url: "/", label: "Admissions" }, { url: "/", label: "Academic Programs" }, { url: "/", label: "News & Events" }, { url: "https://fuet.netlify.app/portal", label: "Student Portal" }, { url: "/staff-portal", label: "Staff Portal" }], (nav_link) => {
        _push(`<div class="h-20 overflow-y-hidden flex-center">`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: nav_link.url,
          class: "flex items-center gap-2 text-white hover:underline"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(nav_link.label)}`);
            } else {
              return [
                createTextVNode(toDisplayString(nav_link.label), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/hero.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_0 = Object.assign(_sfc_main$5, { __name: "HomeHero" });
const _imports_0 = publicAssetsURL("/images/Federal-University-Ogoni.jpg");
const _sfc_main$4 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_NuxtIcon = _sfc_main$g;
  _push(`<section${ssrRenderAttrs(_attrs)}><div class="section-padding py-20 space-y-10"><div class="grid gap-10 md:grid-cols-2 text-center md:text-left max-w-[1000px] mx-auto items-center"><div md:col-span-1><img${ssrRenderAttr("src", _imports_0)} alt="Professor-Prince-Chinedu-Mmom-JP-DSSRS" class="w-full h-auto rounded-xl"></div><div class="md:col-span-1 flex gap-4 flex-col"><h2 class="text-2xl md:text-3xl lg:text-4xl font-semibold"> About FUET </h2><p class="text-muted text-md"> The Federal University of Environment and Technology (FUET), Ogoni, is one of Nigeria’s newest federal universities, strategically established to drive innovation in environmental science, engineering, and sustainable development. Located in Rivers State, FUET is recognized and accredited by the National Universities Commission (NUC) to provide world-class education, research, and community impact. </p></div></div><div><div class="grid gap-2.5 md:grid-cols-3"><div class="bg-muted border border-default rounded-[1rem] p-5 space-y-2.5">`);
  _push(ssrRenderComponent(_component_NuxtIcon, {
    name: "lucide:graduation-cap",
    size: "4rem"
  }, null, _parent));
  _push(`<p class="text-lg font-semibold text-primary"> World-Class Education </p><p class="text-muted text-sm"> Internationally recognized programs meeting global standards. </p></div><div class="bg-muted border border-default rounded-[1rem] p-5 space-y-2.5">`);
  _push(ssrRenderComponent(_component_NuxtIcon, {
    name: "lucide:trophy",
    size: "4rem"
  }, null, _parent));
  _push(`<p class="text-lg font-semibold text-primary"> Research Excellence </p><p class="text-muted text-sm"> Leading research facilities and innovation centers for breakthroughs. </p></div><div class="bg-muted border border-default rounded-[1rem] p-5 space-y-2.5">`);
  _push(ssrRenderComponent(_component_NuxtIcon, {
    name: "lucide:globe",
    size: "4rem"
  }, null, _parent));
  _push(`<p class="text-lg font-semibold text-primary"> World Recognition </p><p class="text-muted text-sm"> Internationally accredited programs with worldwide mobility. </p></div></div></div></div></section>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/section-1.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$1]]), { __name: "HomeSection1" });
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "section-2",
  __ssrInlineRender: true,
  setup(__props) {
    const skills = [
      {
        title: "Undergraduates",
        links: ["Undergraduate Admission", "Faculties & Departments", "Other Information"]
      },
      {
        title: "Postgraduate",
        links: ["Postgraduate Admission", "Programs Offered", "Postgraduate Portal"]
      },
      {
        title: "Pre-Degree",
        links: ["Basic Studies", "Pre-Degree Certificate", "Other Relevant Links"]
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "bg-slate-950" }, _attrs))}><div class="section-padding py-20 space-y-10"><div class="grid gap-10 md:grid-cols-3 text-center md:text-left"><div class="md:col-span-2 text-white"><h2 class="text-2xl md:text-3xl lg:text-4xl font-semibold"> Academics and Programs </h2></div><div></div></div><ul class="space-y-5 grid gap-10 lg:grid-cols-3"><!--[-->`);
      ssrRenderList(skills, (skill, index) => {
        _push(`<li class="space-y-2 border-1 p-8"><div class="font-mono text-lg font-semibold flex items-baseline gap-2"><p class="text-white">${ssrInterpolate(skill.title)}</p></div><ul class="space-y-2"><!--[-->`);
        ssrRenderList(skill.links, (link, linkIndex) => {
          _push(`<li>`);
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: "/",
            class: "text-primary-500 hover:underline pl-4"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(link)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(link), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</li>`);
        });
        _push(`<!--]--></ul></li>`);
      });
      _push(`<!--]--></ul></div></section>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/section-2.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_2 = Object.assign(_sfc_main$3, { __name: "HomeSection2" });
const _sfc_main$2 = {
  __name: "HomeSection3",
  __ssrInlineRender: true,
  setup(__props) {
    const events = [
      {
        day: "02",
        month: "Sep",
        title: "FUET Signs MoU with Kenule Beeson Saro-Wiwa Polytechnic",
        date: "2025-09-02 @ 10:30 AM",
        venue: "Ken Saro-Wiwa Polytechnic",
        category: "Conference",
        image: "/images/FUET Signs MoU with Kenule Beeson Saro-Wiwa Polytechnic.jpg"
        // education setting
      },
      {
        day: "15",
        month: "Aug",
        title: "Facility Tour",
        date: "2025-08-15 @ 10:00 AM",
        venue: "Federal University of Environment and Technology, Koroma/Sakpenwa, Rivers State.",
        category: "Tour",
        image: "/images/Facility Tour.jpg"
        // campus/lab tour
      },
      // <-- Add comma here
      {
        day: "08",
        month: "Aug",
        title: "FUET Signs MoU with Rivers State University for Academic Collaboration",
        date: "2025-08-08 @ 10:00 AM",
        venue: "Rivers State University (RSU) Nkpolu – Oroworukwo, Port Harcourt, Rivers State.",
        category: "Conference",
        image: "/images/FUET Signs MoU with Rivers State University for Academic Collaboration.jpg"
        // collaboration meeting
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "py-20 bg-gray-50" }, _attrs))}><div class="max-w-7xl mx-auto px-4"><div class="text-center space-y-4 mb-12"><h2 class="text-3xl lg:text-4xl font-bold text-green-700"> Upcoming Events </h2><p class="text-lg text-gray-600 max-w-2xl mx-auto"> Stay informed about the latest conferences, tours, and academic collaborations at FUET. </p></div><div class="grid gap-8 md:grid-cols-3"><!--[-->`);
      ssrRenderList(events, (item) => {
        _push(`<div class="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 flex flex-col"><img${ssrRenderAttr("src", item.image)}${ssrRenderAttr("alt", item.title)} class="h-48 w-full object-cover object-center"><div class="p-5 flex-1 flex flex-col space-y-3"><div class="flex items-center gap-3 text-sm text-gray-500"><div class="text-center bg-green-700 text-white px-3 py-2 rounded-md"><p class="text-lg font-bold leading-none">${ssrInterpolate(item.day)}</p><p class="text-xs uppercase">${ssrInterpolate(item.month)}</p></div><span>${ssrInterpolate(item.date)}</span></div><h3 class="font-semibold text-lg text-green-700">${ssrInterpolate(item.title)}</h3><p class="text-sm text-gray-600"><span class="font-medium">📍 Venue:</span> ${ssrInterpolate(item.venue)}</p><span class="inline-block mt-auto text-xs font-semibold px-3 py-1 rounded-md bg-green-100 text-green-700 w-max">${ssrInterpolate(item.category)}</span></div></div>`);
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/section-3.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtButton = _sfc_main$a;
  _push(`<div${ssrRenderAttrs(_attrs)}><div class="bg-slate-950 flex flex-col md:flex-row items-center justify-center md:justify-between gap-5 flex-wrap section-padding py-10"><p class="text-2xl md:text-3xl lg:text-4xl text-white text-semibold"> Ready to join us? </p>`);
  _push(ssrRenderComponent(_component_NuxtButton, {
    label: "Get Started",
    size: "lg"
  }, null, _parent));
  _push(`</div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/call-to-action.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]), { __name: "HomeCallToAction" });
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_HomeHero = __nuxt_component_0;
      const _component_HomeSection1 = __nuxt_component_1;
      const _component_HomeSection2 = __nuxt_component_2;
      const _component_HomeSection3 = _sfc_main$2;
      const _component_HomeCallToAction = __nuxt_component_4;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_HomeHero, null, null, _parent));
      _push(ssrRenderComponent(_component_HomeSection1, null, null, _parent));
      _push(ssrRenderComponent(_component_HomeSection2, null, null, _parent));
      _push(ssrRenderComponent(_component_HomeSection3, null, null, _parent));
      _push(ssrRenderComponent(_component_HomeCallToAction, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-Cdf2y2n8.mjs.map
