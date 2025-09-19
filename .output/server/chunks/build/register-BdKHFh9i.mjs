import { h as useToast, a as __nuxt_component_0, b as _sfc_main$a } from './server.mjs';
import { _ as __nuxt_component_1 } from './session-select-lnuDFEd9.mjs';
import { defineComponent, ref, mergeProps, withCtx, createVNode, createTextVNode, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrRenderClass, ssrIncludeBooleanAttr, ssrLooseContain } from 'vue/server-renderer';
import { useRouter } from 'vue-router';
import { u as useCourseRegistration } from './use-course-registration-A9yhy0Yc.mjs';
import { _ as _sfc_main$1 } from './Select-BqcGdG9Y.mjs';
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
import './SelectMenu-CqB699TC.mjs';
import './Input-BL7KxnW2.mjs';
import './fetch-error-alert-NcfoVdkM.mjs';
import './Alert-ZHZvgBf8.mjs';
import './fetch-DHT9Ke2D.mjs';
import '@vue/shared';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "register",
  __ssrInlineRender: true,
  setup(__props) {
    const router = useRouter();
    const { addRegistration } = useCourseRegistration();
    const toast = useToast();
    const semester = ref("");
    const level = ref("");
    const session = ref();
    ref([
      { label: "2024/2025", value: "2024/2025" },
      { label: "2025/2026", value: "2025/2026" }
    ]);
    const semesterOptions = ref([
      "First",
      "Second"
    ]);
    const levelOptions = ref([
      "100",
      "200",
      "300",
      "400",
      "500"
    ]);
    const selectedCourses = ref([]);
    const showCourses = ref(false);
    const availableCourses = [
      { id: "1", code: "ENV401", title: "Environmental Impact Assessment", credits: 3, type: "core" },
      { id: "2", code: "ENV403", title: "Water Resources Management", credits: 4, type: "core" },
      { id: "3", code: "CSC401", title: "Software Engineering", credits: 3, type: "elective" }
    ];
    const submitRegistration = () => {
      if (selectedCourses.value.length === 0) {
        alert("Please select at least one course");
        return;
      }
      const courses = availableCourses.filter(
        (c) => selectedCourses.value.includes(c.id)
      );
      addRegistration({
        id: Date.now().toString(),
        session: session.value?.name ?? "",
        semester: semester.value,
        courses
      });
      toast.add({
        color: "success",
        title: "Success",
        description: "Registration Successful!"
      });
      router.back();
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_AppSessionSelect = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "p-5 max-w-5xl mx-auto" }, _attrs))}><nav class="mb-4 flex items-center text-sm text-gray-500 gap-2" aria-label="Breadcrumb">`);
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
      _push(`<span class="mx-1">/</span><span class="text-gray-700 font-medium">Register</span></nav><header><div class="flex items-center gap-5 justify-between mb-4"><h1 class="text-lg font-bold">New Course Registration</h1></div></header><section><div class="bg-white rounded-xl shadow border border-default p-6"><div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6"><div><label class="block mb-2 text-sm font-medium">Session</label>`);
      _push(ssrRenderComponent(_component_AppSessionSelect, {
        modelValue: session.value,
        "onUpdate:modelValue": ($event) => session.value = $event,
        class: "w-full"
      }, null, _parent));
      _push(`</div><div><label class="block mb-2 text-sm font-medium">Semester</label>`);
      _push(ssrRenderComponent(unref(_sfc_main$1), {
        modelValue: semester.value,
        "onUpdate:modelValue": ($event) => semester.value = $event,
        placeholder: "Select semester",
        class: "w-full",
        items: semesterOptions.value
      }, null, _parent));
      _push(`</div><div><label class="block mb-2 text-sm font-medium">Level</label>`);
      _push(ssrRenderComponent(unref(_sfc_main$1), {
        modelValue: level.value,
        "onUpdate:modelValue": ($event) => level.value = $event,
        items: levelOptions.value,
        placeholder: "Select level",
        class: "w-full"
      }, null, _parent));
      _push(`</div></div><div class="mb-6 flex justify-end">`);
      _push(ssrRenderComponent(unref(_sfc_main$a), {
        label: "Show Courses",
        onClick: ($event) => showCourses.value = true,
        size: "sm",
        variant: "outline"
      }, null, _parent));
      _push(`</div>`);
      if (showCourses.value) {
        _push(`<div><div class="overflow-x-auto rounded-lg border border-default mb-6"><table class="min-w-full bg-white rounded-lg"><thead class="bg-gray-50"><tr><th class="border-b border-default p-3"></th><th class="border-b border-default p-3 text-left">Code</th><th class="border-b border-default p-3 text-left">Title</th><th class="border-b border-default p-3 text-left">Credits</th><th class="border-b border-default p-3 text-left">Type</th></tr></thead><tbody><!--[-->`);
        ssrRenderList(availableCourses, (course) => {
          _push(`<tr class="hover:bg-gray-100 transition"><td class="border-b border-default p-3 text-center"><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(selectedCourses.value) ? ssrLooseContain(selectedCourses.value, course.id) : selectedCourses.value) ? " checked" : ""}${ssrRenderAttr("value", course.id)} class="accent-primary-600 w-4 h-4"></td><td class="border-b border-default p-3">${ssrInterpolate(course.code)}</td><td class="border-b border-default p-3">${ssrInterpolate(course.title)}</td><td class="border-b border-default p-3">${ssrInterpolate(course.credits)}</td><td class="border-b border-default p-3 capitalize"><span class="${ssrRenderClass(course.type === "core" ? "bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-medium" : "bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs font-medium")}">${ssrInterpolate(course.type)}</span></td></tr>`);
        });
        _push(`<!--]--></tbody></table></div><div class="flex justify-end">`);
        _push(ssrRenderComponent(unref(_sfc_main$a), {
          label: "Register",
          variant: "solid",
          size: "md",
          onClick: submitRegistration,
          class: "px-8"
        }, null, _parent));
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></section></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/portal/student/courses/register.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=register-BdKHFh9i.mjs.map
