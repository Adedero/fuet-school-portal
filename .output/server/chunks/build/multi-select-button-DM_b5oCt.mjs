import { defineComponent, ref, watch, computed, withCtx, mergeProps, unref, createVNode, provide, renderSlot, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderSlot } from 'vue/server-renderer';
import { Primitive } from 'reka-ui';
import { b as _sfc_main$a, e as useAppConfig, t as tv, D as buttonGroupInjectionKey } from './server.mjs';
import { _ as _sfc_main$2 } from './DropdownMenu-D-PSeQp3.mjs';

const theme = {
  "base": "relative",
  "variants": {
    "size": {
      "xs": "",
      "sm": "",
      "md": "",
      "lg": "",
      "xl": ""
    },
    "orientation": {
      "horizontal": "inline-flex -space-x-px",
      "vertical": "flex flex-col -space-y-px"
    }
  }
};
const _sfc_main$1 = {
  __name: "NuxtButtonGroup",
  __ssrInlineRender: true,
  props: {
    as: { type: null, required: false },
    size: { type: null, required: false },
    orientation: { type: null, required: false, default: "horizontal" },
    class: { type: null, required: false },
    ui: { type: null, required: false }
  },
  setup(__props) {
    const props = __props;
    const appConfig = useAppConfig();
    const ui = computed(() => tv({ extend: tv(theme), ...appConfig.ui?.buttonGroup || {} }));
    provide(buttonGroupInjectionKey, computed(() => ({
      orientation: props.orientation,
      size: props.size
    })));
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Primitive), mergeProps({
        as: __props.as,
        class: ui.value({ orientation: __props.orientation, class: props.class })
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
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/ButtonGroup.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "multi-select-button",
  __ssrInlineRender: true,
  props: {
    items: { default: () => [] },
    buttonProps: { default: () => ({}) },
    selectorProps: { default: () => ({ variant: "subtle", icon: "lucide:chevron-down" }) },
    size: { default: "md" }
  },
  setup(__props) {
    const selected = ref(__props.items[0] ?? null);
    watch(
      () => __props.items,
      (value) => selected.value = value[0] ?? null
    );
    const dropdownItems = computed(
      () => __props.items.map((item) => ({
        label: item.label,
        icon: item.icon,
        onSelect: () => {
          selected.value = item;
        }
      }))
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtButtonGroup = _sfc_main$1;
      const _component_NuxtButton = _sfc_main$a;
      const _component_NuxtDropdownMenu = _sfc_main$2;
      _push(ssrRenderComponent(_component_NuxtButtonGroup, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_NuxtButton, mergeProps({
              label: unref(selected)?.label,
              icon: unref(selected)?.icon,
              size: _ctx.size
            }, _ctx.buttonProps, {
              "loading-auto": "",
              onClick: (event) => unref(selected)?.onSelect?.(event)
            }), null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_NuxtDropdownMenu, { items: unref(dropdownItems) }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_NuxtButton, mergeProps(_ctx.selectorProps, { size: _ctx.size }), null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_NuxtButton, mergeProps(_ctx.selectorProps, { size: _ctx.size }), null, 16, ["size"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_NuxtButton, mergeProps({
                label: unref(selected)?.label,
                icon: unref(selected)?.icon,
                size: _ctx.size
              }, _ctx.buttonProps, {
                "loading-auto": "",
                onClick: (event) => unref(selected)?.onSelect?.(event)
              }), null, 16, ["label", "icon", "size", "onClick"]),
              createVNode(_component_NuxtDropdownMenu, { items: unref(dropdownItems) }, {
                default: withCtx(() => [
                  createVNode(_component_NuxtButton, mergeProps(_ctx.selectorProps, { size: _ctx.size }), null, 16, ["size"])
                ]),
                _: 1
              }, 8, ["items"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/vue/multi-select-button.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const VueMultiSelectButton = Object.assign(_sfc_main, { __name: "VueMultiSelectButton" });

export { VueMultiSelectButton as V };
//# sourceMappingURL=multi-select-button-DM_b5oCt.mjs.map
