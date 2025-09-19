import { q as useSeoMeta, r as __nuxt_component_1 } from './server.mjs';
import { defineComponent, defineAsyncComponent, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderSuspense } from 'vue/server-renderer';
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
    const AcademicOverview = defineAsyncComponent(() => import('./academic-overview-Uie4CUjK.mjs'));
    const QuickActions = defineAsyncComponent(() => import('./quick-actions-QbwO6S7H.mjs'));
    const RecentGrades = defineAsyncComponent(() => import('./recent-grades-nVoWkyFS.mjs'));
    const UpcomingDeadlines = defineAsyncComponent(() => import('./upcoming-deadlines-D5WTP6Xj.mjs'));
    const AcademicProgress = defineAsyncComponent(() => import('./academic-progress-DMZ_NgMk.mjs'));
    useSeoMeta({ title: "FUET - Student Dashboard", description: "Overview of academic performance and upcoming deadlines.", ogImage: "/images/global/fuet_logo.png", ogUrl: "https://fuet.edu.ng/dashboard" });
    const currentUser = { name: "Jane Doe", studentId: "FUET/2025/12345", department: "Computer Science", level: "300" };
    const academicStats = { currentGPA: 3.75, totalCredits: 45, completedCourses: 15, currentLevel: "300", expectedGraduation: "2026" };
    const recentGrades = [{ course: "ENV 301", title: "Environmental Chemistry", grade: "A", credits: 3 }, { course: "CSC 302", title: "Database Management", grade: "B+", credits: 3 }, { course: "MTH 301", title: "Mathematical Methods", grade: "A-", credits: 3 }, { course: "ENV 305", title: "Pollution Control", grade: "A", credits: 4 }];
    const upcomingDeadlines = [
      { title: "Course Registration", date: "15 Sep 2025", type: "registration" },
      { title: "Semester Fees Payment", date: "20 Sep 2025", type: "payment" },
      { title: "Project Proposal Submission", date: "30 Sep 2025", type: "assignment" }
    ];
    const quickActions = [
      { title: "Register Courses", description: "Select courses for new semester", icon: "book-open", href: "/course-registration", color: "bg-blue-600" },
      { title: "Check Results", description: "View your examination results", icon: "file-text", href: "/results", color: "bg-teal-600" },
      { title: "Pay Fees", description: "Make fee payments online", icon: "credit-card", href: "/fees", color: "bg-green-600" },
      { title: "Download Documents", description: "Access official documents", icon: "download", href: "/documents", color: "bg-purple-600" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "p-8" }, _attrs))}><div class="flex justify-between items-end flex-wrap gap-4 py-4 text-primary"><div class="flex items-center gap-4"><div class="w-14 h-14 rounded-full bg-gray-100 flex items-center justify-center text-lg font-bold">${ssrInterpolate(currentUser?.name?.[0] || "U")}</div><div class="flex flex-col"><h2 class="text-lg font-bold text-slate-700"> Welcome back, ${ssrInterpolate(currentUser?.name)}! </h2><p class="text-slate-400 text-sm">${ssrInterpolate(currentUser?.studentId)} • ${ssrInterpolate(currentUser?.department)} • Level ${ssrInterpolate(currentUser?.level)}</p> <span class="px-2 py-1 w-fit bg-gray-100 text-xs rounded"> 2024/2025 Academic Session </span></div></div><div class="flex flex-col items-end gap-2"><p class="text-sm text-gray-500">Current CGPA</p><h2 class="text-2xl font-bold">${ssrInterpolate(academicStats.currentGPA)}</h2><div class="flex items-center gap-1 text-green-600">`);
      _push(ssrRenderComponent(_component_Icon, { name: "lucide:trending-up" }, null, _parent));
      _push(` <span class="text-sm">Excellent Performance</span></div></div></div>`);
      ssrRenderSuspense(_push, {
        default: () => {
          _push(ssrRenderComponent(unref(AcademicOverview), { "academic-stats": academicStats }, null, _parent));
        },
        _: 1
      });
      ssrRenderSuspense(_push, {
        default: () => {
          _push(ssrRenderComponent(unref(QuickActions), { "quick-actions": quickActions }, null, _parent));
        },
        _: 1
      });
      _push(`<div class="flex flex-col md:flex-row gap-8">`);
      ssrRenderSuspense(_push, {
        default: () => {
          _push(ssrRenderComponent(unref(RecentGrades), { "recent-grades": recentGrades }, null, _parent));
        },
        _: 1
      });
      ssrRenderSuspense(_push, {
        default: () => {
          _push(ssrRenderComponent(unref(UpcomingDeadlines), { "upcoming-deadlines": upcomingDeadlines }, null, _parent));
        },
        _: 1
      });
      _push(`</div>`);
      ssrRenderSuspense(_push, {
        default: () => {
          _push(ssrRenderComponent(unref(AcademicProgress), null, null, _parent));
        },
        _: 1
      });
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/portal/student/index/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-CcSGkDPN.mjs.map
