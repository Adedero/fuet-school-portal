import { _ as __nuxt_component_0 } from './layout-DRCkN0q6.mjs';
import { _ as _sfc_main$1 } from './NavigationMenu-BnWKO_vN.mjs';
import { S as __nuxt_component_2 } from './server.mjs';
import { defineComponent, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { u as useLogout } from './use-logout-Ba6pM6E_.mjs';
import './auth.store-BfqdJVn0.mjs';
import './Slideover-CXWNYUSs.mjs';
import 'reka-ui';
import '@vueuse/core';
import './logo-BvkqO1ow.mjs';
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
import './Separator-Cxtlj3w1.mjs';
import './DropdownMenu-ByJ7aAi2.mjs';
import 'reka-ui/namespaced';
import './Kbd-Bv1QKL9A.mjs';
import './Badge-6Qx_KqaP.mjs';
import './Popover-7B_X7naD.mjs';
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
import 'unhead/plugins';
import 'unhead/utils';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "student",
  __ssrInlineRender: true,
  setup(__props) {
    const { logout } = useLogout();
    const items = [
      [
        { label: "Main", type: "label" },
        { label: "Dashboard", icon: "lucide:table-2", to: "/portal/student" }
      ],
      [
        { label: "Academics", type: "label" },
        {
          label: "Course Registration",
          icon: "lucide:book-open",
          to: "/portal/student/courses"
        },
        {
          label: "Results",
          icon: "lucide:file-text",
          to: "/portal/student/results"
        },
        {
          label: "Documents",
          icon: "lucide:folder-open"
          // to: "/portal/student/documents",
        }
      ],
      [
        { label: "Payments", type: "label" },
        {
          label: "School Fees",
          icon: "lucide:credit-card"
          // to: "/portal/student/fees",
        },
        {
          label: "Payment History",
          icon: "lucide:receipt"
          // to: "/portal/student/payments",
        }
      ],
      [
        { label: "Account", type: "label" },
        {
          label: "Profile",
          icon: "lucide:circle-user"
        },
        {
          label: "Log out",
          icon: "lucide:log-out",
          onSelect: () => {
            logout();
          }
        }
      ]
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_PortalLayout = __nuxt_component_0;
      const _component_NuxtNavigationMenu = _sfc_main$1;
      const _component_NuxtPage = __nuxt_component_2;
      _push(ssrRenderComponent(_component_PortalLayout, _attrs, {
        sidebar: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_NuxtNavigationMenu, {
              items,
              orientation: "vertical"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_NuxtNavigationMenu, {
                items,
                orientation: "vertical"
              })
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_NuxtPage, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_NuxtPage)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/portal/student.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=student-2CvMRbno.mjs.map
