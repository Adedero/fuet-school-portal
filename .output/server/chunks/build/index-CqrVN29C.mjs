import { _ as _sfc_main$2 } from './Separator-A-GXspeX.mjs';
import { a as __nuxt_component_0 } from './server.mjs';
import { defineComponent, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import _sfc_main$1 from './change-password-form-9HCj0cCf.mjs';
import 'reka-ui';
import '@vueuse/core';
import '../nitro/nitro.mjs';
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
import 'tailwind-variants';
import '@iconify/utils/lib/css/icon';
import 'perfect-debounce';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import './fetch-error-alert-Dv2dK2LL.mjs';
import './Alert-_kx_Xl7F.mjs';
import './FormField-BnuTbefu.mjs';
import './password-DjXQGO_M.mjs';
import './Input-B12ViNMG.mjs';
import '../_/password-reset.schema.mjs';
import 'zod';
import '../_/password.schema.mjs';
import './auth.store-D2X7Djdw.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtSeparator = _sfc_main$2;
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)}><h1 class="text-lg font-semibold">Change Password</h1><div class="my-5">`);
      _push(ssrRenderComponent(_sfc_main$1, null, null, _parent));
      _push(`</div><div>`);
      _push(ssrRenderComponent(_component_NuxtSeparator, { class: "my-5" }, null, _parent));
      _push(`<p class="text-xs text-muted"> Are you experiencing any issues? `);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "link text-xs!",
        to: "/contact"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Contact us. `);
          } else {
            return [
              createTextVNode(" Contact us. ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</p></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/(auth)/change-password/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-CqrVN29C.mjs.map
