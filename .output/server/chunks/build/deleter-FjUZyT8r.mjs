import { h as useToast, b as _sfc_main$a } from './server.mjs';
import { defineComponent, ref, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderSlot, ssrRenderComponent } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "deleter",
  __ssrInlineRender: true,
  props: {
    applicationId: {}
  },
  emits: ["remove"],
  setup(__props, { emit: __emit }) {
    useToast();
    const loading = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtButton = _sfc_main$a;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      ssrRenderSlot(_ctx.$slots, "default", { loading: unref(loading) }, () => {
        _push(ssrRenderComponent(_component_NuxtButton, {
          label: "Delete",
          color: "error",
          variant: "soft",
          loading: unref(loading)
        }, null, _parent));
      }, _push, _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/application/deleter.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_6 = Object.assign(_sfc_main, { __name: "ApplicationDeleter" });

export { __nuxt_component_6 as _ };
//# sourceMappingURL=deleter-FjUZyT8r.mjs.map
