import { defineComponent, mergeProps, computed, useSSRContext } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';
import { q as publicAssetsURL } from '../_/nitro.mjs';
import { i as authClient } from './server.mjs';

const _imports_0 = publicAssetsURL("/fuet_logo.png");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "logo",
  __ssrInlineRender: true,
  props: {
    width: { default: 32 }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<img${ssrRenderAttrs(mergeProps({
        src: _imports_0,
        width: _ctx.width
      }, _attrs))}>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/app/logo.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_2 = Object.assign(_sfc_main, { __name: "AppLogo" });
function useAuth() {
  const authSession = authClient.useSession();
  const isLoggedIn = computed(() => {
    return authSession.value.data !== null;
  });
  const user = computed(() => {
    return authSession.value.data?.user ?? null;
  });
  const session = computed(() => {
    return authSession.value.data?.session ?? null;
  });
  return {
    isLoggedIn,
    user,
    session
  };
}

export { __nuxt_component_2 as _, useAuth as u };
//# sourceMappingURL=use-auth-CVG_VBvu.mjs.map
