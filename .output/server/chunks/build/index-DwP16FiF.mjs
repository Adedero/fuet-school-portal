import { _ as _sfc_main$1 } from './Card-CBdj68Ul.mjs';
import { b as _sfc_main$a, a as __nuxt_component_0, e as _sfc_main$g } from './server.mjs';
import { defineComponent, computed, mergeProps, unref, withCtx, createVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderList } from 'vue/server-renderer';
import { u as useAuthStore } from './auth.store-BfqdJVn0.mjs';
import 'reka-ui';
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
    const authStore = useAuthStore();
    const quickActions = [
      { label: "View My Courses", to: "/portal/staff/lecturer/courses", icon: "lucide:book-open" },
      { label: "Grade Submissions", to: "/portal/staff/lecturer/grades", icon: "lucide:check-circle" },
      { label: "Class Lists", to: "/portal/staff/lecturer/classes", icon: "lucide:group" },
      { label: "Department Events", to: "/portal/staff/lecturer/events", icon: "lucide:calendar" }
    ];
    const userName = computed(() => {
      const names = (authStore.user.value?.name ?? "").split(" ");
      return `${names[0]} ${names.at(-1)}`;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtCard = _sfc_main$1;
      const _component_NuxtButton = _sfc_main$a;
      const _component_NuxtLink = __nuxt_component_0;
      const _component_NuxtIcon = _sfc_main$g;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-10 p-8" }, _attrs))}><div><h1 class="text-2xl font-semibold text-slate-700"> Welcome, ${ssrInterpolate(unref(userName).split(" ")[0])}</h1><p class="text-slate-600"> Quick overview and actions for lecturers </p></div><div><div class="grid grid-cols-2 md:grid-cols-4 gap-4">`);
      _push(ssrRenderComponent(_component_NuxtCard, {
        variant: "subtle",
        class: "flex flex-col items-center p-4"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="text-2xl font-bold text-blue-700"${_scopeId}>4</span><span class="text-sm text-muted"${_scopeId}>Courses</span>`);
          } else {
            return [
              createVNode("span", { class: "text-2xl font-bold text-blue-700" }, "4"),
              createVNode("span", { class: "text-sm text-muted" }, "Courses")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtCard, {
        variant: "subtle",
        class: "flex flex-col items-center p-4"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="text-2xl font-bold text-green-700"${_scopeId}>120</span><span class="text-sm text-muted"${_scopeId}>Students</span>`);
          } else {
            return [
              createVNode("span", { class: "text-2xl font-bold text-green-700" }, "120"),
              createVNode("span", { class: "text-sm text-muted" }, "Students")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtCard, {
        variant: "subtle",
        class: "flex flex-col items-center p-4"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="text-2xl font-bold text-yellow-600"${_scopeId}>12</span><span class="text-sm text-muted"${_scopeId}>Pending Grades</span>`);
          } else {
            return [
              createVNode("span", { class: "text-2xl font-bold text-yellow-600" }, "12"),
              createVNode("span", { class: "text-sm text-muted" }, "Pending Grades")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtCard, {
        variant: "subtle",
        class: "flex flex-col items-center p-4"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="text-2xl font-bold text-purple-700"${_scopeId}>1</span><span class="text-sm text-muted"${_scopeId}>Upcoming Event</span>`);
          } else {
            return [
              createVNode("span", { class: "text-2xl font-bold text-purple-700" }, "1"),
              createVNode("span", { class: "text-sm text-muted" }, "Upcoming Event")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="space-y-3"><div class="flex items-center justify-between"><div><h2 class="text-lg font-semibold">Recent Activities</h2><p class="text-sm text-muted">Latest grading and submissions</p></div>`);
      _push(ssrRenderComponent(_component_NuxtButton, {
        to: "/portal/staff/lecturer/grades",
        label: "View All",
        size: "sm",
        variant: "subtle"
      }, null, _parent));
      _push(`</div><div class="bg-white rounded-lg shadow p-4 text-sm text-gray-600"><p>No recent activities yet.</p></div></div><div><div class=""><h2 class="text-lg font-semibold">Quick Actions</h2><p class="text-sm text-muted">Lecturer management tasks</p></div><div class="p-6 grid grid-cols-2 md:grid-cols-4 gap-4"><!--[-->`);
      ssrRenderList(quickActions, (action) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          key: action.label,
          to: action.to
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_NuxtCard, {
                variant: "subtle",
                class: "hover:scale-105 transition-transform"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="flex-col-center gap-2.5"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_NuxtIcon, {
                      name: action.icon,
                      size: "1.25rem"
                    }, null, _parent3, _scopeId2));
                    _push3(`<p class="text-sm font-semibold text-muted"${_scopeId2}>${ssrInterpolate(action.label)}</p></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "flex-col-center gap-2.5" }, [
                        createVNode(_component_NuxtIcon, {
                          name: action.icon,
                          size: "1.25rem"
                        }, null, 8, ["name"]),
                        createVNode("p", { class: "text-sm font-semibold text-muted" }, toDisplayString(action.label), 1)
                      ])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_NuxtCard, {
                  variant: "subtle",
                  class: "hover:scale-105 transition-transform"
                }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "flex-col-center gap-2.5" }, [
                      createVNode(_component_NuxtIcon, {
                        name: action.icon,
                        size: "1.25rem"
                      }, null, 8, ["name"]),
                      createVNode("p", { class: "text-sm font-semibold text-muted" }, toDisplayString(action.label), 1)
                    ])
                  ]),
                  _: 2
                }, 1024)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/portal/staff/lecturer/index/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-DwP16FiF.mjs.map
