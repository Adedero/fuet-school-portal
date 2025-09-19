import { e as _sfc_main$g } from './server.mjs';
import { _ as __nuxt_component_6 } from './fetch-error-alert-NcfoVdkM.mjs';
import { ab as normalizeException } from '../_/nitro.mjs';
import { defineComponent, computed, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderSlot, ssrRenderComponent } from 'vue/server-renderer';
import { u as useFetch } from './fetch-DHT9Ke2D.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "settings",
  __ssrInlineRender: true,
  setup(__props, { expose: __expose }) {
    const { data, error, status, refresh, execute } = useFetch(
      "/api/general/settings",
      { lazy: true },
      "$BCIsi-YFc7"
    );
    const loading = computed(() => status.value === "pending");
    const getSettings = async () => {
      await execute();
      return data;
    };
    __expose({ getSettings });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtIcon = _sfc_main$g;
      const _component_FetchErrorAlert = __nuxt_component_6;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      if (unref(loading)) {
        _push(`<div>`);
        ssrRenderSlot(_ctx.$slots, "loading", { loading: unref(loading) }, () => {
          _push(`<div class="flex-center">`);
          _push(ssrRenderComponent(_component_NuxtIcon, {
            name: "lucide:loader",
            size: "2rem",
            class: "text-muted animate animate-spin"
          }, null, _parent));
          _push(`</div>`);
        }, _push, _parent);
        _push(`</div>`);
      } else if (unref(error)) {
        _push(`<div>`);
        ssrRenderSlot(_ctx.$slots, "error", {
          error: ("normalizeException" in _ctx ? _ctx.normalizeException : unref(normalizeException))(unref(error)),
          refresh: unref(refresh)
        }, () => {
          _push(ssrRenderComponent(_component_FetchErrorAlert, {
            message: "Failed to get settings",
            "show-retry": "",
            onRetry: unref(refresh)
          }, null, _parent));
        }, _push, _parent);
        _push(`</div>`);
      } else if (unref(data)) {
        _push(`<div>`);
        ssrRenderSlot(_ctx.$slots, "default", { data: unref(data) }, null, _push, _parent);
        _push(`</div>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/app/settings.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = Object.assign(_sfc_main, { __name: "AppSettings" });

export { __nuxt_component_0 as _ };
//# sourceMappingURL=settings-DUbfgrJe.mjs.map
