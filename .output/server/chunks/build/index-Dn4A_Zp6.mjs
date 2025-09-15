import { b as _sfc_main$a, f as _sfc_main$4, j as useToast, o as useConfirm, d as _sfc_main$g } from './server.mjs';
import { _ as __nuxt_component_0 } from './fetch-error-alert-B8bl2QEk.mjs';
import { defineComponent, withAsyncContext, ref, mergeProps, unref, isRef, withCtx, createVNode, createTextVNode, toDisplayString, createBlock, createCommentVNode, openBlock, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrRenderStyle, ssrInterpolate } from 'vue/server-renderer';
import { _ as _sfc_main$3 } from './Card-HL6icAYQ.mjs';
import { _ as _sfc_main$5 } from './Badge-CXRRu9Es.mjs';
import { useDateFormat } from '@vueuse/core';
import { S as normalizeException } from '../nitro/nitro.mjs';
import { _ as __nuxt_component_5 } from './initiation-form-eFfzDwR2.mjs';
import { u as useFetch } from './fetch-CBnx1667.mjs';
import 'vue-router';
import 'better-auth/vue';
import 'better-auth/client/plugins';
import 'tailwindcss/colors';
import '@iconify/vue';
import 'reka-ui';
import 'tailwind-variants';
import '@iconify/utils/lib/css/icon';
import 'perfect-debounce';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
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
import './Alert-Cl3Q0djP.mjs';
import './Input-CCJ7d-_Y.mjs';
import './Select-C7uJeeGx.mjs';
import './password-BNdafKmy.mjs';
import './calendar-XO0HMjV5.mjs';
import '../_/application-initiation.schema.mjs';
import 'zod';
import '../_/password.schema.mjs';
import '@vue/shared';

const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "empty-icon",
  __ssrInlineRender: true,
  props: {
    label: { type: String, required: false, default: "" },
    size: { type: String, required: false, default: "120px" },
    fill: { type: String, required: false, default: "var(--ui-text-dimmed)" },
    variant: { type: Number, required: false, default: 1 }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex-col-center gap-2" }, _attrs))}>`);
      if (!__props.variant || __props.variant === 1) {
        _push(`<svg${ssrRenderAttr("fill", __props.fill)}${ssrRenderAttr("height", __props.size)}${ssrRenderAttr("width", __props.size)} version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><g><g><path d="M493.297,159.693c-12.477-30.878-31.231-59.828-56.199-84.792c-24.964-24.967-53.914-43.722-84.793-56.199 C321.426,6.222,288.617,0,255.823,0c-32.748,0-65.497,6.249-96.315,18.743c-30.814,12.491-59.695,31.244-84.607,56.159 c-24.915,24.912-43.668,53.793-56.158,84.607C6.25,190.325,0.001,223.073,0.001,255.823c0,32.794,6.222,65.602,18.701,96.484 c12.477,30.878,31.231,59.828,56.199,84.793c24.964,24.967,53.914,43.722,84.792,56.199c30.882,12.48,63.69,18.701,96.484,18.701 c32.748,0,65.497-6.249,96.314-18.743c30.814-12.49,59.695-31.242,84.607-56.158c24.917-24.913,43.67-53.794,56.16-84.608 c12.493-30.817,18.743-63.566,18.743-96.315C511.999,223.383,505.778,190.575,493.297,159.693z M461.611,339.661 c-10.821,26.683-27.019,51.648-48.659,73.291c-21.643,21.64-46.608,37.837-73.292,48.657 c-26.679,10.818-55.078,16.241-83.484,16.241c-28.477,0-56.947-5.405-83.688-16.213c-26.744-10.813-51.76-27.007-73.441-48.685 c-21.678-21.682-37.873-46.697-48.685-73.441C39.554,312.77,34.149,284.3,34.149,255.823c0-28.406,5.423-56.804,16.241-83.484 c10.821-26.683,27.018-51.648,48.659-73.291c21.643-21.64,46.608-37.837,73.291-48.659c26.679-10.818,55.078-16.241,83.484-16.241 c28.477,0,56.947,5.405,83.688,16.214c26.744,10.813,51.76,27.008,73.441,48.685c21.677,21.681,37.873,46.697,48.685,73.441 c10.808,26.741,16.214,55.211,16.214,83.688C477.852,284.583,472.429,312.981,461.611,339.661z"></path></g></g> <g><g><path d="M385.946,126.055c-6.524-6.525-17.102-6.525-23.626,0l-36.278,36.278c-7.82-5.861-16.298-10.691-25.249-14.389 c-14.036-5.803-29.225-8.832-44.792-8.83c-15.572-0.002-30.761,3.027-44.797,8.83c-14.037,5.799-26.917,14.372-37.901,25.36 c-11.376,11.375-19.956,24.598-25.656,38.689c-5.704,14.094-8.547,29.054-8.548,44.007c0,14.954,2.843,29.914,8.548,44.007 c3.693,9.131,8.603,17.892,14.691,26.027l-36.285,36.285c-6.524,6.524-6.524,17.102,0,23.627c6.525,6.524,17.102,6.524,23.627,0 l36.278-36.278c7.82,5.861,16.298,10.691,25.249,14.389c14.036,5.803,29.225,8.832,44.792,8.83 c15.572,0.002,30.761-3.027,44.797-8.83c14.037-5.799,26.917-14.372,37.901-25.359c11.376-11.375,19.955-24.599,25.656-38.689 c5.704-14.094,8.547-29.054,8.548-44.007c0-14.954-2.843-29.914-8.548-44.008c-3.693-9.131-8.603-17.892-14.691-26.027 l36.285-36.285C392.47,143.157,392.47,132.579,385.946,126.055z M178.621,287.472c-4.066-10.044-6.108-20.754-6.107-31.471 c0-10.717,2.042-21.428,6.107-31.472c4.07-10.047,10.146-19.431,18.31-27.599c7.908-7.906,17.06-13.98,27.036-18.106 c9.978-4.122,20.783-6.295,32.033-6.296c11.245,0.002,22.051,2.174,32.03,6.297c4.897,2.025,9.593,4.525,14.044,7.476 L186.305,302.069C183.229,297.418,180.669,292.53,178.621,287.472z M333.38,287.472c-4.07,10.047-10.146,19.431-18.31,27.599 c-7.908,7.906-17.06,13.98-27.036,18.106c-9.978,4.122-20.783,6.295-32.033,6.296c-11.245-0.002-22.05-2.174-32.03-6.297 c-4.897-2.025-9.593-4.526-14.044-7.476l115.769-115.769c3.076,4.651,5.636,9.539,7.684,14.597 c4.066,10.044,6.108,20.754,6.107,31.472C339.488,266.717,337.446,277.427,333.38,287.472z"></path></g></g></g></svg>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.variant === 2) {
        _push(`<svg id="Capa_1"${ssrRenderAttr("height", __props.size)}${ssrRenderAttr("width", __props.size)} version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 226.512 226.512" xml:space="preserve"${ssrRenderAttr("fill", __props.fill)}><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><g><path style="${ssrRenderStyle({ fill: __props.fill })}" d="M186.268,9.011H38.929c0,0-3.04,0-6.799,0c-3.753,0-8.577,4.536-10.764,10.128L3.009,65.958 c-2.187,5.591-3.47,14.974-2.856,20.951l12.287,119.774c0.609,5.978,5.983,10.818,11.988,10.818h177.672 c6.005,0,11.379-4.846,11.988-10.818l12.287-119.774c0.609-5.978-0.87-15.273-3.312-20.755l-21.414-47.238 C199.158,13.444,192.272,9.011,186.268,9.011z M148.162,148.615H78.362c-6.005,0-10.878-4.873-10.878-10.878v-24.476 c0-6.005,4.873-10.878,10.878-10.878h69.799c6.005,0,10.878,4.873,10.878,10.878v24.476 C159.04,143.742,154.166,148.615,148.162,148.615z M28.834,68.514l6.88-20.201c1.936-5.684,8.376-10.296,14.386-10.296h122.896 c6.005,0,12.863,4.444,15.311,9.932l9.361,20.935c2.448,5.488-0.435,9.932-6.445,9.932H36.209 C30.199,78.816,26.898,74.204,28.834,68.514z"></path></g></g></svg>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.label) {
        _push(`<p class="text-dimmed">${ssrInterpolate(__props.label)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/empty-icon.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_2 = Object.assign(_sfc_main$2, { __name: "EmptyIcon" });
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "card",
  __ssrInlineRender: true,
  props: {
    application: {}
  },
  emits: ["remove"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const toast = useToast();
    const { confirmAsync } = useConfirm();
    const handleDelete = async () => {
      const confirm = await confirmAsync({
        title: "Delete application",
        description: "Are you sure you want to proceed? This cannot be undone.",
        acceptProps: {
          label: "Proceed"
        },
        rejectProps: {
          label: "Cancel",
          color: "neutral",
          variant: "soft"
        }
      });
      if (!confirm) {
        return;
      }
      try {
        const { message } = await $fetch(
          `/api/users/applicant/applications/${__props.application.id}`,
          {
            method: "DELETE"
          }
        );
        toast.add({
          color: "success",
          title: "Success",
          description: message
        });
      } catch (error) {
        toast.add({
          color: "error",
          title: "Error",
          description: normalizeException(error).message
        });
      }
      emit("remove", "12323");
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtCard = _sfc_main$3;
      const _component_NuxtBadge = _sfc_main$5;
      const _component_NuxtIcon = _sfc_main$g;
      const _component_NuxtButton = _sfc_main$a;
      _push(ssrRenderComponent(_component_NuxtCard, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div${_scopeId}><div${_scopeId}><p class="text-sm"${_scopeId}>${ssrInterpolate(_ctx.application.course ?? "unknown course")}, <b${_scopeId}>${ssrInterpolate(_ctx.application.degreeType ?? "unknown degree")}</b></p><h4 class="font-mono text-2xl font-semibold"${_scopeId}>${ssrInterpolate(_ctx.application.schoolSession?.name ?? "Unknown Session")}</h4>`);
            _push2(ssrRenderComponent(_component_NuxtBadge, {
              label: _ctx.application.status,
              color: _ctx.application.status === "open" ? "success" : "error",
              variant: "subtle"
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="text-sm mt-2.5 space-y-5"${_scopeId}><div class="flex items-center justify-between gap-2.5"${_scopeId}><div class="flex items-center gap-1"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_NuxtIcon, { name: "lucide:calendar" }, null, _parent2, _scopeId));
            _push2(`<p${_scopeId}> Started: ${ssrInterpolate(unref(useDateFormat)(_ctx.application.createdAt, "MMM DD, YYYY. hh:mm aa"))}</p></div><div class="flex items-center gap-2.5"${_scopeId}>`);
            if (_ctx.application.status === "closed") {
              _push2(ssrRenderComponent(_component_NuxtButton, {
                to: `/application/portal/${_ctx.application.id}`,
                size: "sm",
                label: "Review",
                icon: "lucide:view"
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            if (_ctx.application.status === "open") {
              _push2(ssrRenderComponent(_component_NuxtButton, {
                to: `/application/portal/${_ctx.application.id}`,
                size: "sm",
                label: "Edit",
                icon: "lucide:file-pen"
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(ssrRenderComponent(_component_NuxtButton, {
              size: "sm",
              label: "Delete",
              icon: "lucide:trash-2",
              color: "error",
              variant: "soft",
              "loading-auto": "",
              onClick: handleDelete
            }, null, _parent2, _scopeId));
            _push2(`</div></div></div></div>`);
          } else {
            return [
              createVNode("div", null, [
                createVNode("div", null, [
                  createVNode("p", { class: "text-sm" }, [
                    createTextVNode(toDisplayString(_ctx.application.course ?? "unknown course") + ", ", 1),
                    createVNode("b", null, toDisplayString(_ctx.application.degreeType ?? "unknown degree"), 1)
                  ]),
                  createVNode("h4", { class: "font-mono text-2xl font-semibold" }, toDisplayString(_ctx.application.schoolSession?.name ?? "Unknown Session"), 1),
                  createVNode(_component_NuxtBadge, {
                    label: _ctx.application.status,
                    color: _ctx.application.status === "open" ? "success" : "error",
                    variant: "subtle"
                  }, null, 8, ["label", "color"])
                ]),
                createVNode("div", { class: "text-sm mt-2.5 space-y-5" }, [
                  createVNode("div", { class: "flex items-center justify-between gap-2.5" }, [
                    createVNode("div", { class: "flex items-center gap-1" }, [
                      createVNode(_component_NuxtIcon, { name: "lucide:calendar" }),
                      createVNode("p", null, " Started: " + toDisplayString(unref(useDateFormat)(_ctx.application.createdAt, "MMM DD, YYYY. hh:mm aa")), 1)
                    ]),
                    createVNode("div", { class: "flex items-center gap-2.5" }, [
                      _ctx.application.status === "closed" ? (openBlock(), createBlock(_component_NuxtButton, {
                        key: 0,
                        to: `/application/portal/${_ctx.application.id}`,
                        size: "sm",
                        label: "Review",
                        icon: "lucide:view"
                      }, null, 8, ["to"])) : createCommentVNode("", true),
                      _ctx.application.status === "open" ? (openBlock(), createBlock(_component_NuxtButton, {
                        key: 1,
                        to: `/application/portal/${_ctx.application.id}`,
                        size: "sm",
                        label: "Edit",
                        icon: "lucide:file-pen"
                      }, null, 8, ["to"])) : createCommentVNode("", true),
                      createVNode(_component_NuxtButton, {
                        size: "sm",
                        label: "Delete",
                        icon: "lucide:trash-2",
                        color: "error",
                        variant: "soft",
                        "loading-auto": "",
                        onClick: handleDelete
                      })
                    ])
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/application/card.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_3 = Object.assign(_sfc_main$1, { __name: "ApplicationCard" });
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const {
      data: applications,
      error,
      refresh
    } = ([__temp, __restore] = withAsyncContext(() => useFetch("/api/users/applicant/applications", "$HYeTK76L4v")), __temp = await __temp, __restore(), __temp);
    const open = ref(false);
    const handleApplicationInitiation = async () => {
      await refresh();
      open.value = false;
    };
    const handleApplicationDeletion = (id) => {
      if (!applications.value) return;
      applications.value = applications.value.filter((app) => app.id !== id);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtButton = _sfc_main$a;
      const _component_FetchErrorAlert = __nuxt_component_0;
      const _component_EmptyIcon = __nuxt_component_2;
      const _component_ApplicationCard = __nuxt_component_3;
      const _component_NuxtModal = _sfc_main$4;
      const _component_ApplicationInitiationForm = __nuxt_component_5;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "section-padding py-5" }, _attrs))}><header class="mb-10 flex items-center gap-5 justify-between"><h1 class="text-2xl md:text-3xl lg:text-4xl font-bold"> Your Applications </h1>`);
      _push(ssrRenderComponent(_component_NuxtButton, {
        label: "New",
        icon: "lucide:plus",
        color: "neutral",
        variant: "soft",
        onClick: ($event) => open.value = true
      }, null, _parent));
      _push(`</header>`);
      if (unref(error)) {
        _push(`<div class="flex-col-center">`);
        _push(ssrRenderComponent(_component_FetchErrorAlert, {
          class: "w-fit max-w-96",
          message: ("normalizeException" in _ctx ? _ctx.normalizeException : unref(normalizeException))(unref(error)).message,
          "show-retry": "",
          onRetry: unref(refresh)
        }, null, _parent));
        _push(`</div>`);
      } else if (unref(applications)) {
        _push(`<div>`);
        if (!unref(applications).length) {
          _push(`<div class="p-10 flex-col-center gap-5">`);
          _push(ssrRenderComponent(_component_EmptyIcon, { label: "No Applications" }, null, _parent));
          _push(ssrRenderComponent(_component_NuxtButton, {
            label: "Start Application",
            onClick: ($event) => open.value = true
          }, null, _parent));
          _push(`</div>`);
        } else {
          _push(`<div class="grid gap-2.5 md:grid-cols-[repeat(auto-fit,minmax(28rem,1fr))]"><!--[-->`);
          ssrRenderList(unref(applications), (app) => {
            _push(ssrRenderComponent(_component_ApplicationCard, {
              key: app.id,
              application: app,
              onRemove: handleApplicationDeletion
            }, null, _parent));
          });
          _push(`<!--]--></div>`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_component_NuxtModal, {
        open: unref(open),
        "onUpdate:open": ($event) => isRef(open) ? open.value = $event : null,
        title: "New Application",
        description: "Fill out the details in the form below.",
        dismissible: false
      }, {
        body: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_ApplicationInitiationForm, {
              onDone: handleApplicationInitiation,
              onCancel: ($event) => open.value = false
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_ApplicationInitiationForm, {
                onDone: handleApplicationInitiation,
                onCancel: ($event) => open.value = false
              }, null, 8, ["onCancel"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/application/portal/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-Dn4A_Zp6.mjs.map
