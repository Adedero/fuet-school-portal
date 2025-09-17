import { _ as _sfc_main$1 } from './NavigationMenu-B_W-DRU3.mjs';
import { _ as _sfc_main$2 } from './DropdownMenu-N0o3f2tr.mjs';
import { b as _sfc_main$a, p as __nuxt_component_2 } from './server.mjs';
import { _ as __nuxt_component_6 } from './fetch-error-alert-Dv2dK2LL.mjs';
import { X as normalizeException } from '../nitro/nitro.mjs';
import { defineComponent, withAsyncContext, mergeProps, withCtx, createVNode, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { u as useRouteParams } from './use-route-params-BVGD6Lax.mjs';
import { u as useFetch } from './fetch-BknZ0_VD.mjs';
import 'reka-ui';
import '@vueuse/core';
import './Badge-CB0LwpmB.mjs';
import './Popover-DXpZNoWk.mjs';
import 'reka-ui/namespaced';
import './Kbd-Bv1QKL9A.mjs';
import 'vue-router';
import 'better-auth/vue';
import 'better-auth/client/plugins';
import 'tailwindcss/colors';
import '@iconify/vue';
import 'tailwind-variants';
import '@iconify/utils/lib/css/icon';
import 'perfect-debounce';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
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
import './Alert-_kx_Xl7F.mjs';
import '@vue/shared';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { applicationId = "" } = useRouteParams();
    const { data, error, refresh } = ([__temp, __restore] = withAsyncContext(() => useFetch(
      `/api/users/applicant/applications/${applicationId}`,
      {
        pick: ["applicationNumber"]
      },
      "$nxvyipRgoR"
    )), __temp = await __temp, __restore(), __temp);
    const items = [
      [
        {
          label: "FUET Admission Application",
          type: "label"
        },
        {
          label: "Back to Applications",
          icon: "lucide:arrow-left",
          to: "/application/portal"
        }
      ],
      [
        {
          label: `Application: ${data.value?.applicationNumber ?? "#"}`,
          type: "label"
        },
        {
          label: "Overview & Requirements",
          icon: "lucide:info",
          to: `/application/portal/${applicationId}`
        }
      ],
      [
        {
          label: "Personal Info",
          icon: "lucide:user-circle",
          to: `/application/portal/${applicationId}/personal-info`
        },
        {
          label: "Familiy Info",
          icon: "lucide:users",
          to: `/application/portal/${applicationId}/family-info`
        },
        {
          label: "Academic Info",
          icon: "lucide:graduation-cap",
          to: `/application/portal/${applicationId}/academic-info`
        },
        {
          label: "Documents",
          icon: "lucide:file-up",
          to: `/application/portal/${applicationId}/documents`
        },
        {
          label: "Review Application",
          icon: "lucide:view",
          to: `/application/portal/${applicationId}/review`
        }
      ],
      [
        {
          label: "More",
          type: "label"
        },
        {
          label: "Check Admission Status",
          icon: "lucide:circle-check",
          to: `/application/portal/${applicationId}/admission-status`
        },
        {
          label: "Pay Admission Fees",
          icon: "lucide:credit-card",
          to: `/application/portal/${applicationId}/payment`
        }
      ]
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtNavigationMenu = _sfc_main$1;
      const _component_NuxtDropdownMenu = _sfc_main$2;
      const _component_NuxtButton = _sfc_main$a;
      const _component_FetchErrorAlert = __nuxt_component_6;
      const _component_NuxtPage = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "md:flex md:h-[calc(100dvh-4rem)]" }, _attrs))}><nav class="hidden md:block border-r border-r-default p-2.5">`);
      _push(ssrRenderComponent(_component_NuxtNavigationMenu, {
        items,
        orientation: "vertical"
      }, null, _parent));
      _push(`</nav><div class="grow overflow-y-auto"><div class="md:hidden px-5 py-2.5">`);
      _push(ssrRenderComponent(_component_NuxtDropdownMenu, { items }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_NuxtButton, {
              icon: "lucide:menu",
              color: "neutral",
              variant: "soft",
              size: "sm"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_NuxtButton, {
                icon: "lucide:menu",
                color: "neutral",
                variant: "soft",
                size: "sm"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      if (unref(error)) {
        _push(`<div class="p-5">`);
        _push(ssrRenderComponent(_component_FetchErrorAlert, {
          message: ("normalizeException" in _ctx ? _ctx.normalizeException : unref(normalizeException))(unref(error)).message,
          "show-retry": "",
          onRetry: unref(refresh)
        }, null, _parent));
        _push(`</div>`);
      } else if (unref(data)) {
        _push(`<div class="px-5 pb-5 md:pt-5">`);
        _push(ssrRenderComponent(_component_NuxtPage, null, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/application/portal/[applicationId]/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-D-CbZ1WS.mjs.map
