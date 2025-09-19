import { defineComponent, computed, mergeProps, unref, withCtx, createVNode, toDisplayString, renderSlot, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderList, ssrRenderStyle, ssrRenderSlot } from 'vue/server-renderer';
import { Primitive } from 'reka-ui';
import { d as useRuntimeConfig, b as _sfc_main$a, a as __nuxt_component_0$1, e as _sfc_main$g, k as useAppConfig, t as tv } from './server.mjs';
import { _ as __nuxt_component_6 } from './fetch-error-alert-NcfoVdkM.mjs';
import { _ as _sfc_main$4 } from './Card-CBdj68Ul.mjs';
import { _ as _sfc_main$5 } from './Badge-6Qx_KqaP.mjs';
import { a8 as normalizeException } from '../_/nitro.mjs';
import { u as useFetch } from './fetch-DHT9Ke2D.mjs';
import { useDateFormat } from '@vueuse/core';
import { u as useAuthStore } from './auth.store-BfqdJVn0.mjs';
import 'vue-router';
import 'better-auth/vue';
import 'better-auth/client/plugins';
import 'tailwindcss/colors';
import '@iconify/vue';
import 'tailwind-variants';
import '@iconify/utils/lib/css/icon';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';
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
import './Alert-ZHZvgBf8.mjs';
import '@vue/shared';

const theme = {
  "base": "animate-pulse rounded-md bg-elevated"
};
const _sfc_main$3 = {
  __name: "NuxtSkeleton",
  __ssrInlineRender: true,
  props: {
    as: { type: null, required: false },
    class: { type: null, required: false }
  },
  setup(__props) {
    const props = __props;
    const appConfig = useAppConfig();
    const ui = computed(() => tv({ extend: tv(theme), ...appConfig.ui?.skeleton || {} }));
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Primitive), mergeProps({
        as: __props.as,
        "aria-busy": "true",
        "aria-label": "loading",
        "aria-live": "polite",
        role: "alert",
        class: ui.value({ class: props.class })
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/Skeleton.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "cards",
  __ssrInlineRender: true,
  setup(__props) {
    const { data, error, pending, refresh } = useFetch(
      "/api/users/admin/dashboard/stats",
      {
        lazy: true
      },
      "$4ZB8yovC5B"
    );
    const items = computed(() => {
      if (data.value) {
        return [
          {
            label: "Current Students",
            value: data.value.activeStudents,
            icon: "lucide:users",
            color: "primary"
          },
          {
            label: "Current Staffs",
            value: data.value.totalStaffs,
            icon: "lucide:briefcase",
            color: "neutral"
          },
          {
            label: "Pending applications",
            value: data.value.pendingApplications,
            icon: "lucide:file-clock",
            color: "error"
          },
          {
            label: "Total Departments",
            value: data.value.totalDepartments,
            icon: "lucide:building-2",
            color: "secondary"
          }
        ];
      }
      return [];
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtSkeleton = _sfc_main$3;
      const _component_FetchErrorAlert = __nuxt_component_6;
      const _component_NuxtCard = _sfc_main$4;
      const _component_NuxtBadge = _sfc_main$5;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      if (unref(pending)) {
        _push(`<div class="grid md:grid-cols-2 lg:grid-cols-4 gap-2.5"><!--[-->`);
        ssrRenderList(4, (i) => {
          _push(ssrRenderComponent(_component_NuxtSkeleton, {
            key: i,
            class: "w-full h-36"
          }, null, _parent));
        });
        _push(`<!--]--></div>`);
      } else if (unref(error)) {
        _push(`<div>`);
        _push(ssrRenderComponent(_component_FetchErrorAlert, {
          message: ("normalizeException" in _ctx ? _ctx.normalizeException : unref(normalizeException))(unref(error)).message,
          "show-retry": "",
          onRetry: unref(refresh)
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(data)) {
        _push(`<div class="grid md:grid-cols-2 lg:grid-cols-4 gap-2.5"><!--[-->`);
        ssrRenderList(unref(items), (item) => {
          _push(ssrRenderComponent(_component_NuxtCard, {
            key: item.label
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<div class="space-y-2.5"${_scopeId}><div${_scopeId}>`);
                _push2(ssrRenderComponent(_component_NuxtBadge, {
                  icon: item.icon,
                  size: "lg",
                  color: item.color,
                  variant: "soft"
                }, null, _parent2, _scopeId));
                _push2(`</div><div${_scopeId}><p class="font-mono text-3xl md:text-4xl font-semibold"${_scopeId}>${ssrInterpolate(item.value)}</p></div><div${_scopeId}><p class="text-xs font-semibold uppercase text-muted"${_scopeId}>${ssrInterpolate(item.label)}</p></div></div>`);
              } else {
                return [
                  createVNode("div", { class: "space-y-2.5" }, [
                    createVNode("div", null, [
                      createVNode(_component_NuxtBadge, {
                        icon: item.icon,
                        size: "lg",
                        color: item.color,
                        variant: "soft"
                      }, null, 8, ["icon", "color"])
                    ]),
                    createVNode("div", null, [
                      createVNode("p", { class: "font-mono text-3xl md:text-4xl font-semibold" }, toDisplayString(item.value), 1)
                    ]),
                    createVNode("div", null, [
                      createVNode("p", { class: "text-xs font-semibold uppercase text-muted" }, toDisplayString(item.label), 1)
                    ])
                  ])
                ];
              }
            }),
            _: 2
          }, _parent));
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/admin/dashboard/cards.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = Object.assign(_sfc_main$2, { __name: "AdminDashboardCards" });
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "recent-applications",
  __ssrInlineRender: true,
  setup(__props) {
    const { data, error, pending, refresh } = useFetch(
      "/api/users/admin/dashboard/recent-applications",
      {
        lazy: true
      },
      "$U6SZJwQX4o"
    );
    const getStatusColor = (status) => {
      switch (status) {
        case "submitted":
          return "warning";
        case "accepted":
          return "success";
        case "rejected":
          return "error";
        default:
          return "neutral";
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtSkeleton = _sfc_main$3;
      const _component_FetchErrorAlert = __nuxt_component_6;
      const _component_NuxtBadge = _sfc_main$5;
      const _component_NuxtIcon = _sfc_main$g;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      if (unref(pending)) {
        _push(`<div class="grid gap-2.5">`);
        _push(ssrRenderComponent(_component_NuxtSkeleton, { class: "h-10" }, null, _parent));
        _push(ssrRenderComponent(_component_NuxtSkeleton, { class: "h-40" }, null, _parent));
        _push(`</div>`);
      } else if (unref(error)) {
        _push(`<div>`);
        _push(ssrRenderComponent(_component_FetchErrorAlert, {
          message: `Failed to get recent applications: ${("normalizeException" in _ctx ? _ctx.normalizeException : unref(normalizeException))(unref(error)).message}`,
          "show-retry": "",
          onRetry: unref(refresh)
        }, null, _parent));
        _push(`</div>`);
      } else if (unref(data)) {
        _push(`<div class="overflow-auto"><table class="w-full text-sm"><thead><tr class="border-muted border-b bg-muted text-left"><th class="px-6 py-3 font-semibold text-muted">#</th><th class="px-6 py-3 font-semibold text-muted">Student Name</th><th class="px-6 py-3 font-semibold text-muted">Program</th><th class="px-6 py-3 font-semibold text-muted">Date</th><th class="px-6 py-3 font-semibold text-muted">Status</th></tr></thead><tbody><!--[-->`);
        ssrRenderList(unref(data), (app) => {
          _push(`<tr class="border-b border-muted hover:bg-muted"><td class="px-6 py-3 font-medium text-muted">${ssrInterpolate(app.id.slice(0, 6))}... </td><td class="px-6 py-3">${ssrInterpolate(`${app.firstName} ${app.lastName}`)}</td><td class="px-6 py-3">${ssrInterpolate(app.course)}</td><td class="px-6 py-3">${ssrInterpolate(unref(useDateFormat)(app.createdAt, "YYYY-MM-DD"))}</td><td class="px-6 py-3">`);
          _push(ssrRenderComponent(_component_NuxtBadge, {
            label: app.status === "submitted" ? "pending review" : app.status,
            color: getStatusColor(app.status),
            variant: "soft"
          }, null, _parent));
          _push(`</td></tr>`);
        });
        _push(`<!--]--></tbody></table><div class="flex-center gap-1 my-2.5">`);
        _push(ssrRenderComponent(_component_NuxtIcon, {
          name: "lucide:info",
          class: "text-dimmed"
        }, null, _parent));
        _push(`<p style="${ssrRenderStyle(!unref(data).length ? null : { display: "none" })}" class="text-dimmed text-sm text-center"> No data </p></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/admin/dashboard/recent-applications.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_2 = Object.assign(_sfc_main$1, { __name: "AdminDashboardRecentApplications" });
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const config = useRuntimeConfig();
    const authStore = useAuthStore();
    const quickActions = [
      {
        label: "Review Applications",
        to: "/portal/admin/applications",
        icon: "lucide:user-check"
      },
      { label: "Process Payments", icon: "lucide:credit-card" },
      {
        label: "Manage Courses",
        to: "/portal/admin/courses",
        icon: "lucide:book-open"
      },
      { label: "Add Events", icon: "lucide:calendar" }
    ];
    const userName = computed(() => {
      const names = (authStore.user.value?.name ?? "").split(" ");
      return `${names[0]} ${names.at(-1)}`;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AdminDashboardCards = __nuxt_component_0;
      const _component_NuxtButton = _sfc_main$a;
      const _component_AdminDashboardRecentApplications = __nuxt_component_2;
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_NuxtCard = _sfc_main$4;
      const _component_NuxtIcon = _sfc_main$g;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-10 p-8" }, _attrs))}><div><h1 class="text-2xl font-semibold text-slate-700"> Welcome back, ${ssrInterpolate(unref(userName).split(" ")[0])}</h1><p class="text-slate-600"> Here&#39;s what&#39;s happening at ${ssrInterpolate(unref(config).public.schoolNameShort)} today </p></div><div>`);
      _push(ssrRenderComponent(_component_AdminDashboardCards, null, null, _parent));
      _push(`</div><div class="space-y-3"><div class="flex items-center justify-between"><div><h2 class="text-lg font-semibold">Recent Applications</h2><p class="text-sm text-muted">Latest admission applications</p></div>`);
      _push(ssrRenderComponent(_component_NuxtButton, {
        to: "/portal/admin/applications",
        label: "View All",
        size: "sm",
        variant: "subtle"
      }, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_AdminDashboardRecentApplications, null, null, _parent));
      _push(`</div><div><div class=""><h2 class="text-lg font-semibold">Quick Actions</h2><p class="text-sm text-muted">Common administrative tasks</p></div><div class="p-6 grid grid-cols-2 md:grid-cols-4 gap-4"><!--[-->`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/portal/admin/index/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-Z4jylWTx.mjs.map
