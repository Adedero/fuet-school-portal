import { _ as _sfc_main$1 } from './SelectMenu-Da07R2ba.mjs';
import { _ as __nuxt_component_6$1 } from './fetch-error-alert-NcfoVdkM.mjs';
import { defineComponent, mergeModels, computed, useModel, unref, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { u as useFetch } from './fetch-C9FsSXkc.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "faculty-select",
  __ssrInlineRender: true,
  props: /* @__PURE__ */ mergeModels({
    item: {}
  }, {
    "faculty": { default: void 0 },
    "facultyModifiers": {},
    "department": { default: void 0 },
    "departmentModifiers": {}
  }),
  emits: /* @__PURE__ */ mergeModels(["select"], ["update:faculty", "update:department"]),
  setup(__props, { expose: __expose }) {
    const { data, error, status, execute } = useFetch("/api/general/faculties", {
      lazy: true
    }, "$LFDtR5hVR6");
    const faculties = computed(() => {
      return (data.value ?? []).map((d) => ({ label: d.name, value: d.code })).sort((a, b) => a.label.localeCompare(b.label));
    });
    const departments = computed(() => {
      return (data.value ?? []).flatMap(
        (faculty) => faculty.departments.map((dept2) => ({
          label: dept2.name,
          value: dept2.code,
          faculty: faculty.name
        }))
      );
    });
    const fac = useModel(__props, "faculty");
    const dept = useModel(__props, "department");
    const getDepartment = (by, value) => {
      if (by === "name") {
        return departments.value.find((dept2) => dept2.label === value);
      }
      if (by === "code") {
        return departments.value.find((dept2) => dept2.value === value);
      }
      if (by === "faculty") {
        return departments.value.find((dept2) => dept2.faculty === value);
      }
    };
    __expose({ getDepartment });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtSelectMenu = _sfc_main$1;
      const _component_FetchErrorAlert = __nuxt_component_6$1;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      if (unref(status) === "pending" || unref(data)) {
        _push(`<div>`);
        if (_ctx.item === "faculty") {
          _push(ssrRenderComponent(_component_NuxtSelectMenu, mergeProps({
            modelValue: fac.value,
            "onUpdate:modelValue": ($event) => fac.value = $event,
            items: unref(faculties),
            loading: unref(status) === "pending"
          }, _ctx.$attrs, {
            "onUpdate:modelValue": (value) => _ctx.$emit("select", value)
          }), null, _parent));
        } else {
          _push(`<!---->`);
        }
        if (_ctx.item === "department") {
          _push(ssrRenderComponent(_component_NuxtSelectMenu, mergeProps({
            modelValue: dept.value,
            "onUpdate:modelValue": ($event) => dept.value = $event,
            items: unref(departments),
            loading: unref(status) === "pending"
          }, _ctx.$attrs), null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else if (unref(error)) {
        _push(ssrRenderComponent(_component_FetchErrorAlert, {
          message: `Failed to get ${_ctx.item} data`,
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/app/faculty-select.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_6 = Object.assign(_sfc_main, { __name: "AppFacultySelect" });

export { __nuxt_component_6 as _ };
//# sourceMappingURL=faculty-select-Cq2qIe2M.mjs.map
