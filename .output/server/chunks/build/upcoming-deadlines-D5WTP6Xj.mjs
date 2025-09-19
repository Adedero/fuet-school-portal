import { defineComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrInterpolate } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "upcoming-deadlines",
  __ssrInlineRender: true,
  props: {
    upcomingDeadlines: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex-1 p-6 border border-muted rounded" }, _attrs))}><h3 class="text-lg font-bold mb-6">Upcoming Deadlines</h3><div class="space-y-4"><!--[-->`);
      ssrRenderList(_ctx.upcomingDeadlines, (deadline, index) => {
        _push(`<div class="${ssrRenderClass([{
          "border border-red-500 bg-red-50": deadline.type === "payment",
          "border border-blue-500 bg-blue-50": deadline.type === "registration",
          "border border-green-500 bg-green-50": deadline.type === "assignment"
        }, "p-4 rounded"])}"><p class="font-bold text-sm">${ssrInterpolate(deadline.title)}</p><p class="text-xs text-gray-500">${ssrInterpolate(deadline.date)}</p><span class="${ssrRenderClass([{
          "bg-red-500": deadline.type === "payment",
          "bg-blue-500": deadline.type === "registration",
          "bg-green-500": deadline.type === "assignment"
        }, "inline-block px-2 py-1 mt-1 rounded text-xs text-white"])}">${ssrInterpolate(deadline.type.charAt(0).toUpperCase() + deadline.type.slice(1))}</span></div>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/students/dashboard/upcoming-deadlines.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const upcomingDeadlines = Object.assign(_sfc_main, { __name: "StudentsDashboardUpcomingDeadlines" });

export { upcomingDeadlines as default };
//# sourceMappingURL=upcoming-deadlines-D5WTP6Xj.mjs.map
