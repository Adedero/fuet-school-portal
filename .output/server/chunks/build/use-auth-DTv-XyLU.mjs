import { c as __nuxt_component_0$1, k as authClient } from './server.mjs';
import { defineComponent, mergeProps, computed, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "logo",
  __ssrInlineRender: true,
  props: {
    width: { default: 32 }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = __nuxt_component_0$1;
      _push(ssrRenderComponent(_component_NuxtImg, mergeProps({
        src: "/logo.png",
        width: _ctx.width
      }, _attrs), null, _parent));
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
//# sourceMappingURL=use-auth-DTv-XyLU.mjs.map
