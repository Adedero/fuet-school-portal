import { _ as _sfc_main$1 } from './SelectMenu-CqB699TC.mjs';
import { _ as __nuxt_component_6 } from './fetch-error-alert-NcfoVdkM.mjs';
import { defineComponent, mergeModels, computed, useModel, unref, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { u as useFetch } from './fetch-DHT9Ke2D.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "session-select",
  __ssrInlineRender: true,
  props: /* @__PURE__ */ mergeModels({
    size: { default: "md" },
    placeholder: { default: "Select session" }
  }, {
    "modelValue": { default: void 0 },
    "modelModifiers": {}
  }),
  emits: ["update:modelValue"],
  setup(__props) {
    const { data, error, pending, execute } = useFetch(
      "/api/general/academic-sessions",
      "$gt_KmGtjQ6"
    );
    const sessions = computed(() => data.value ?? []);
    const value = useModel(__props, "modelValue");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtSelectMenu = _sfc_main$1;
      const _component_FetchErrorAlert = __nuxt_component_6;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      if (unref(pending) || unref(data)) {
        _push(ssrRenderComponent(_component_NuxtSelectMenu, mergeProps({
          modelValue: value.value,
          "onUpdate:modelValue": ($event) => value.value = $event,
          items: unref(sessions),
          "label-key": "name",
          loading: unref(pending),
          size: _ctx.size,
          placeholder: _ctx.placeholder
        }, _ctx.$attrs), null, _parent));
      } else if (unref(error)) {
        _push(ssrRenderComponent(_component_FetchErrorAlert, {
          message: "Failed to get academic sessions",
          "show-retry": "",
          onRetry: unref(execute)
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/app/session-select.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = Object.assign(_sfc_main, { __name: "AppSessionSelect" });

export { __nuxt_component_1 as _ };
//# sourceMappingURL=session-select-lnuDFEd9.mjs.map
