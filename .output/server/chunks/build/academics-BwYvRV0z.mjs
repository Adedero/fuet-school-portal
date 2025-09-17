import { p as __nuxt_component_2 } from './server.mjs';
import { defineComponent, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { _ as __nuxt_component_0, a as __nuxt_component_2$1 } from './header-DAd8WY3b.mjs';
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
import './logo-BvkqO1ow.mjs';
import './Separator-A-GXspeX.mjs';
import './NavigationMenu-B_W-DRU3.mjs';
import './Badge-CB0LwpmB.mjs';
import './Popover-DXpZNoWk.mjs';
import 'reka-ui/namespaced';
import './Kbd-Bv1QKL9A.mjs';
import './Slideover-bZOxFwjx.mjs';
import './use-logout-Dvt5zoeI.mjs';
import './auth.store-D2X7Djdw.mjs';
import './use-navigate-to-portal-B5FNbniG.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "academics",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtPage = __nuxt_component_2;
      _push(`<main${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(unref(__nuxt_component_0), null, null, _parent));
      _push(ssrRenderComponent(_component_NuxtPage, null, null, _parent));
      _push(ssrRenderComponent(unref(__nuxt_component_2$1), null, null, _parent));
      _push(`</main>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/academics.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=academics-BwYvRV0z.mjs.map
