import { _ as _export_sfc, b as _sfc_main$a, c as __nuxt_component_0$1, d as _sfc_main$g, e as _sfc_main$d } from './server.mjs';
import { defineComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { _ as _sfc_main$6 } from './Separator-BAycmyMV.mjs';
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
    const sponsors = [
      {
        url: "/sponsors/oracle.svg",
        width: 110
      },
      {
        url: "/sponsors/python.svg",
        width: 120
      },
      {
        url: "/sponsors/cisco.svg",
        width: 80
      },
      {
        url: "/sponsors/microsoft.svg",
        width: 120
      },
      {
        url: "/sponsors/ted.svg",
        width: 60
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtButton = _sfc_main$a;
      const _component_NuxtImg = __nuxt_component_0$1;
      _push(`<section${ssrRenderAttrs(mergeProps({ id: "hero" }, _attrs))}><div class="section-padding py-10"><div class="grid md:gap-x-10 lg:gap-x-20 gap-y-10 md:grid-cols-2 md:items-center"><div class="text-center md:text-left space-y-5"><h1 class="text-4xl md:text-5xl lg:text-6xl font-bold"> Lorem ipsum dolor sit amet consectetur adipisicing elit. </h1><p class="text-muted"> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur alias repellat optio quo nostrum, eaque perspiciatis blanditiis, laboriosam ipsam molestias quae. Ab, dolorum placeat ex est pariatur nulla ipsa. Impedit? </p><div class="flex items-center justify-center md:justify-normal gap-2">`);
      _push(ssrRenderComponent(_component_NuxtButton, { label: "Join us now" }, null, _parent));
      _push(ssrRenderComponent(_component_NuxtButton, {
        label: "Get to know more",
        variant: "link"
      }, null, _parent));
      _push(`</div><div class="flex items-center justify-center md:justify-normal gap-5"><!--[-->`);
      ssrRenderList(stats, (stat) => {
        _push(`<div><p class="font-bold"><span class="text-2xl md:text-3xl lg:text-4xl">${ssrInterpolate(stat.value)}</span><span class="text-primary-500 text-lg lg:text-xl">+</span></p><p class="text-muted text-sm">${ssrInterpolate(stat.label)}</p></div>`);
      });
      _push(`<!--]--></div></div><div><div class="bg-muted h-[28rem] overflow-hidden rounded">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "https://media.gettyimages.com/id/1336667150/video/female-college-student-apologize-to-professor-for-late-arrival-to-class.jpg?s=640x640&k=20&c=n19Aj3x_5MZa6abztQdJzMfPiIsRJEJmVyas-rQ5Nmk=",
        placeholder: "",
        class: "w-full h-full object-cover"
      }, null, _parent));
      _push(`</div></div></div></div><div class="bg-primary py-2 section-padding"><div class="flex flex-wrap gap-x-10 items-center justify-center md:justify-between"><!--[-->`);
      ssrRenderList(sponsors, (sponsor) => {
        _push(`<div class="h-20 overflow-y-hidden flex-center">`);
        _push(ssrRenderComponent(_component_NuxtImg, {
          src: sponsor.url,
          width: sponsor.width
        }, null, _parent));
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
const _sfc_main$4 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  const _component_NuxtIcon = _sfc_main$g;
  _push(`<section${ssrRenderAttrs(_attrs)}><div class="section-padding py-20 space-y-10"><div class="grid gap-10 md:grid-cols-3 text-center md:text-left"><div class="md:col-span-2"><h2 class="text-2xl md:text-3xl lg:text-4xl font-semibold"> Lorem ipsum dolor sit amet consectetur adipisicing elit. </h2></div><div><p class="text-muted text-sm"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet pariatur recusandae quidem nostrum, animi eius vero, nisi est doloribus laudantium exercitationem? Quae inventore error distinctio quas, tempore quod saepe quia. </p></div></div><div><div class="grid gap-2.5 md:grid-cols-3"><div class="bg-muted border border-default rounded-[1rem] p-5 space-y-2.5">`);
  _push(ssrRenderComponent(_component_NuxtIcon, {
    name: "lucide:graduation-cap",
    size: "4rem"
  }, null, _parent));
  _push(`<p class="text-lg font-semibold"> Lorem ipsum dolor sit amet <span class="text-primary">consectetur</span> adipisicing elit. Quam dolor ab voluptatum possimus. </p><p class="text-muted text-sm"> libero et obcaecati voluptas, impedit inventore! Perferendis repellat dicta distinctio. </p></div><div class="bg-muted border border-default rounded-[1rem] p-5 space-y-2.5">`);
  _push(ssrRenderComponent(_component_NuxtIcon, {
    name: "lucide:trophy",
    size: "4rem"
  }, null, _parent));
  _push(`<p class="text-lg font-semibold"> Lorem ipsum dolor sit amet <span class="text-primary">consectetur</span> adipisicing elit. Quam dolor ab voluptatum possimus. </p><p class="text-muted text-sm"> libero et obcaecati voluptas, impedit inventore! Perferendis repellat dicta distinctio. </p></div><div class="bg-muted border border-default rounded-[1rem] p-5 space-y-2.5">`);
  _push(ssrRenderComponent(_component_NuxtIcon, {
    name: "lucide:user-star",
    size: "4rem"
  }, null, _parent));
  _push(`<p class="text-lg font-semibold"> Lorem ipsum dolor sit amet <span class="text-primary">consectetur</span> adipisicing elit. Quam dolor ab voluptatum possimus. </p><p class="text-muted text-sm"> libero et obcaecati voluptas, impedit inventore! Perferendis repellat dicta distinctio. </p></div></div></div></div></section>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/section-1.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$2]]), { __name: "HomeSection1" });
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "section-2",
  __ssrInlineRender: true,
  setup(__props) {
    const skills = [
      {
        title: "Lorem Ipsum",
        description: "Incidunt quis ipsa fugiat voluptates corporis eos ut dolorum explicabo doloremque, quidem commodi temporibus quaerat."
      },
      {
        title: "Dolor sit ammet",
        description: "laudantium exercitationem? Quae inventore error distinctioquas, tempore quod saepe quia."
      },
      {
        title: "Fugiat tempus sunt",
        description: "Incidunt quis ipsa fugiat voluptates corporis eos ut dolorum explicabo doloremque, quidem commodi temporibus quaerat."
      },
      {
        title: "Amet pariatur",
        description: "laudantium exercitationem? Quae inventore error distinctioquas, tempore quod saepe quia."
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = __nuxt_component_0$1;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "bg-slate-950" }, _attrs))}><div class="section-padding py-20 space-y-10"><div class="grid gap-10 md:grid-cols-3 text-center md:text-left"><div class="md:col-span-2 text-white"><h2 class="text-2xl md:text-3xl lg:text-4xl font-semibold"> Lorem ipsum dolor sit amet consectetur adipisicing elit. </h2></div><div><p class="text-dimmed text-sm"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet pariatur recusandae quidem nostrum, animi eius vero, nisi est doloribus laudantium exercitationem? Quae inventore error distinctio quas, tempore quod saepe quia. </p></div></div><div class="grid gap-10 lg:grid-cols-2"><ul class="space-y-5"><!--[-->`);
      ssrRenderList(skills, (skill, index) => {
        _push(`<li class="space-y-2"><div class="font-mono text-lg font-semibold flex items-baseline gap-2"><span class="text-primary-500 text-sm"> 0${ssrInterpolate(index + 1)}</span><p class="text-white">${ssrInterpolate(skill.title)}</p></div><p class="text-sm text-dimmed">${ssrInterpolate(skill.description)}</p></li>`);
      });
      _push(`<!--]--></ul><div>`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "https://s29814.pcdn.co/wp-content/uploads/2022/12/shutterstock_1847661151.jpg.optimal.jpg",
        placeholder: "",
        class: "rounded"
      }, null, _parent));
      _push(`</div></div></div></section>`);
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
const _sfc_main$2 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_NuxtSeparator = _sfc_main$6;
  const _component_NuxtAvatar = _sfc_main$d;
  _push(`<section${ssrRenderAttrs(_attrs)}><div class="section-padding py-20 space-y-10"><h2 class="text-center text-2xl md:text-3xl lg:text-4xl font-semibold"> Accusantium qui amet, iste maxime voluptatem earum animi corrupti. </h2><div class="grid gap-2.5 md:grid-cols-[repeat(auto-fit,minmax(24rem,1fr))]"><!--[-->`);
  ssrRenderList(6, (i) => {
    _push(`<div class="bg-muted border border-default rounded-[1rem] p-5 space-y-4"><p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis doloremque vero impedit dolorum inventore veniam molestias aut consequuntur, facilis, fugiat officia corporis dicta illum fuga illo facere voluptas, exercitationem ratione? </p>`);
    _push(ssrRenderComponent(_component_NuxtSeparator, null, null, _parent));
    _push(`<div class="flex items-center gap-2">`);
    _push(ssrRenderComponent(_component_NuxtAvatar, {
      src: "https://github.com/benjamincanac.png",
      size: "lg"
    }, null, _parent));
    _push(`<div><p class="text-sm font-semibold">John Doe</p><p class="text-xs text-muted">Lorem ipsum dolor sit.</p></div></div></div>`);
  });
  _push(`<!--]--></div></div></section>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/section-3.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1]]), { __name: "HomeSection3" });
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
      const _component_HomeSection3 = __nuxt_component_3;
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
//# sourceMappingURL=index-CAqsh5t2.mjs.map
