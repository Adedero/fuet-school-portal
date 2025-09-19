import { a as __nuxt_component_0, d as useRuntimeConfig, b as _sfc_main$a } from './server.mjs';
import { _ as __nuxt_component_2 } from './logo-BvkqO1ow.mjs';
import { defineComponent, mergeProps, withCtx, createVNode, createTextVNode, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { useRoute } from 'vue-router';
import { u as useCourseRegistration } from './use-course-registration-A9yhy0Yc.mjs';
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
    const route = useRoute();
    const { getRegistration } = useCourseRegistration();
    const reg = getRegistration(route.params.id);
    const printPage = () => {
      (void 0).print();
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_AppLogo = __nuxt_component_2;
      const _component_NuxtButton = _sfc_main$a;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "p-6 max-w-4xl mx-auto bg-white text-subtle-600 print:p-0 print:m-0" }, _attrs))}><nav class="mb-4 flex items-center text-sm text-gray-500 gap-2 print:hidden" aria-label="Breadcrumb">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/portal/student",
        class: "hover:text-primary-600 flex items-center gap-1"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<i class="i-lucide-home w-4 h-4"${_scopeId}></i><span${_scopeId}>Student Portal</span>`);
          } else {
            return [
              createVNode("i", { class: "i-lucide-home w-4 h-4" }),
              createVNode("span", null, "Student Portal")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<span class="mx-1">/</span>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/portal/student/courses",
        class: "hover:text-primary-600"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Courses`);
          } else {
            return [
              createTextVNode("Courses")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<span class="mx-1">/</span><span class="text-gray-700 font-medium">Registration Slip</span></nav><div class="text-center mb-6 border-b border-muted pb-4"><div class="grid place-items-center">`);
      _push(ssrRenderComponent(_component_AppLogo, { class: "w-28" }, null, _parent));
      _push(`</div><h1 class="text-xl font-bold uppercase text-primary-500">${ssrInterpolate(unref(config).public.schoolNameShort)} Student Portal </h1><p class="text-lg">${ssrInterpolate(unref(config).public.schoolNameLong)}</p><p clas="text-sm"> Koroma/Sakpenwa, Rivers State</p><p class="text-xl mt-8 font-semibold">Official Course Registration Slip</p></div><div class="grid grid-cols-2 gap-4 text-sm mb-6"><div><p><strong>Name:</strong> Jane Doe</p><p><strong>Matric No:</strong> FUET/2025/12345</p><p><strong>Department:</strong> Computer Science</p></div><div><p><strong>Session:</strong> ${ssrInterpolate(unref(reg)?.session)}</p><p><strong>Semester:</strong> ${ssrInterpolate(unref(reg)?.semester)}</p><p><strong>Level:</strong> 500</p></div></div><table class="w-full border text-sm mb-6"><thead class="bg-gray-100"><tr><th class="border p-2">Code</th><th class="border p-2">Course Title</th><th class="border p-2">Credits</th><th class="border p-2">Type</th></tr></thead><tbody><!--[-->`);
      ssrRenderList(unref(reg)?.courses, (course) => {
        _push(`<tr><td class="border p-2 text-center">${ssrInterpolate(course.code)}</td><td class="border p-2">${ssrInterpolate(course.title)}</td><td class="border p-2 text-center">${ssrInterpolate(course.credits)}</td><td class="border p-2 text-center capitalize">${ssrInterpolate(course.type)}</td></tr>`);
      });
      _push(`<!--]--></tbody></table><div class="text-sm mb-12 flex items-center gap-4 justify-center"><p><strong>Total Courses:</strong> ${ssrInterpolate(unref(reg)?.courses.length)}</p><p><strong>Total Credits:</strong> ${ssrInterpolate(unref(reg)?.courses.reduce((sum, c) => sum + c.credits, 0))}</p></div><div class="flex justify-between mt-12 text-sm"><div class="text-center"> __________________________ <br> Student&#39;s Signature &amp; Date </div><div class="text-center"> __________________________ <br> HOD’s Signature &amp; Date </div></div><div class="mt-6 print:hidden flex items-center">`);
      _push(ssrRenderComponent(_component_NuxtButton, {
        label: "Print",
        onClick: printPage,
        variant: "solid",
        class: "mx-auto px-8"
      }, null, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/portal/student/courses/registration/[id]/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-BeDTDacP.mjs.map
