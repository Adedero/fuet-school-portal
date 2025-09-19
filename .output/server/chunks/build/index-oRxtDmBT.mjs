import { a as __nuxt_component_0, b as _sfc_main$a } from './server.mjs';
import { defineComponent, mergeProps, unref, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
import { u as useCourseRegistration } from './use-course-registration-CRPWrEbB.mjs';
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
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const { registrations } = useCourseRegistration();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_NuxtButton = _sfc_main$a;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "p-6 max-w-4xl mx-auto" }, _attrs))}><h1 class="text-2xl font-bold mb-6">My Course Registrations</h1>`);
      if (unref(registrations).length === 0) {
        _push(`<div class="text-gray-400 font-[500] py-8 grid place-items-center"><p>No registrations yet.</p></div>`);
      } else {
        _push(`<div><div class="overflow-x-auto rounded-lg border border-default"><table class="min-w-full bg-white rounded-lg"><thead class="bg-gray-50"><tr><th class="border-b border-default p-3 text-left">Session</th><th class="border-b border-default p-3 text-left">Semester</th><th class="border-b border-default p-3 text-left">Courses Registered</th><th class="border-b border-default p-3 text-left">Action</th></tr></thead><tbody><!--[-->`);
        ssrRenderList(unref(registrations), (reg) => {
          _push(`<tr class="hover:bg-gray-100 transition"><td class="border-b border-default p-3 font-semibold">${ssrInterpolate(reg.session)}</td><td class="border-b border-default p-3">${ssrInterpolate(reg.semester)}</td><td class="border-b border-default p-3">${ssrInterpolate(reg.courses.length)}</td><td class="border-b border-default p-3">`);
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: `courses/registration/${reg.id}`
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(_component_NuxtButton, {
                  label: "view",
                  variant: "ghost"
                }, null, _parent2, _scopeId));
              } else {
                return [
                  createVNode(_component_NuxtButton, {
                    label: "view",
                    variant: "ghost"
                  })
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</td></tr>`);
        });
        _push(`<!--]--></tbody></table></div></div>`);
      }
      _push(`<div class="mt-4 flex justify-center w-full">`);
      _push(ssrRenderComponent(_component_NuxtButton, {
        to: "courses/register",
        label: "Register Courses",
        size: "sm",
        variant: "solid"
      }, null, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/portal/student/courses/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-oRxtDmBT.mjs.map
