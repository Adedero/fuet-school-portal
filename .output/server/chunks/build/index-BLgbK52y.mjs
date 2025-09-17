import { _ as _sfc_main$3 } from './Badge-CB0LwpmB.mjs';
import { h as useToast, v as useConfirm, b as _sfc_main$a, n as navigateTo, f as _sfc_main$4$1 } from './server.mjs';
import { _ as _sfc_main$4 } from './Popover-DXpZNoWk.mjs';
import { defineComponent, withAsyncContext, useTemplateRef, mergeProps, unref, withCtx, createVNode, createBlock, createCommentVNode, openBlock, ref, isRef, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderSlot } from 'vue/server-renderer';
import { X as normalizeException } from '../nitro/nitro.mjs';
import { _ as _sfc_main$5 } from './Separator-A-GXspeX.mjs';
import { _ as __nuxt_component_6 } from './fetch-error-alert-Dv2dK2LL.mjs';
import { _ as __nuxt_component_7 } from './index-C283uIQJ.mjs';
import { u as useRouteParams } from './use-route-params-BVGD6Lax.mjs';
import { u as useFetch } from './fetch-BknZ0_VD.mjs';
import 'reka-ui';
import 'vue-router';
import 'better-auth/vue';
import 'better-auth/client/plugins';
import 'tailwindcss/colors';
import '@iconify/vue';
import '@vueuse/core';
import 'tailwind-variants';
import '@iconify/utils/lib/css/icon';
import 'perfect-debounce';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
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
import 'reka-ui/namespaced';
import './Alert-_kx_Xl7F.mjs';
import './logo-BvkqO1ow.mjs';
import './Card-CBdj68Ul.mjs';
import '@vue/shared';

const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "accepter",
  __ssrInlineRender: true,
  props: {
    applicationId: {}
  },
  emits: ["done"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const toast = useToast();
    const open = ref(false);
    async function acceptApplication() {
      try {
        const { message } = await $fetch(
          `/api/users/admin/applications/${__props.applicationId}/update-status`,
          {
            method: "post",
            body: {
              status: "accepted"
            }
          }
        );
        emit("done");
        open.value = false;
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
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtModal = _sfc_main$4$1;
      const _component_NuxtButton = _sfc_main$a;
      _push(`<div${ssrRenderAttrs(_attrs)}><div>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
      _push(ssrRenderComponent(_component_NuxtModal, {
        open: unref(open),
        "onUpdate:open": ($event) => isRef(open) ? open.value = $event : null,
        title: "Accept Application",
        description: "Are you sure you want to accept this application?",
        dismissible: false,
        close: false
      }, {
        body: withCtx(({ close }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div${_scopeId}><div class="flex items-center justify-end gap-2.5"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_NuxtButton, {
              label: "Cancel",
              color: "neutral",
              variant: "soft",
              onClick: close
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_NuxtButton, {
              label: "Proceed",
              "loading-auto": "",
              onClick: acceptApplication
            }, null, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", null, [
                createVNode("div", { class: "flex items-center justify-end gap-2.5" }, [
                  createVNode(_component_NuxtButton, {
                    label: "Cancel",
                    color: "neutral",
                    variant: "soft",
                    onClick: close
                  }, null, 8, ["onClick"]),
                  createVNode(_component_NuxtButton, {
                    label: "Proceed",
                    "loading-auto": "",
                    onClick: acceptApplication
                  })
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/application/accepter.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_3 = Object.assign(_sfc_main$2, { __name: "ApplicationAccepter" });
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "rejecter",
  __ssrInlineRender: true,
  props: {
    applicationId: {}
  },
  emits: ["done"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const toast = useToast();
    const open = ref(false);
    async function acceptApplication() {
      try {
        const { message } = await $fetch(
          `/api/users/admin/applications/${__props.applicationId}/update-status`,
          {
            method: "post",
            body: {
              status: "rejected"
            }
          }
        );
        emit("done");
        open.value = false;
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
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtModal = _sfc_main$4$1;
      const _component_NuxtButton = _sfc_main$a;
      _push(`<div${ssrRenderAttrs(_attrs)}><div>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
      _push(ssrRenderComponent(_component_NuxtModal, {
        open: unref(open),
        "onUpdate:open": ($event) => isRef(open) ? open.value = $event : null,
        title: "Accept Application",
        description: "Are you sure you want to reject this application?",
        dismissible: false,
        close: false
      }, {
        body: withCtx(({ close }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div${_scopeId}><div class="flex items-center justify-end gap-2.5"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_NuxtButton, {
              label: "Cancel",
              color: "neutral",
              variant: "soft",
              onClick: close
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_NuxtButton, {
              label: "Proceed",
              "loading-auto": "",
              onClick: acceptApplication
            }, null, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", null, [
                createVNode("div", { class: "flex items-center justify-end gap-2.5" }, [
                  createVNode(_component_NuxtButton, {
                    label: "Cancel",
                    color: "neutral",
                    variant: "soft",
                    onClick: close
                  }, null, 8, ["onClick"]),
                  createVNode(_component_NuxtButton, {
                    label: "Proceed",
                    "loading-auto": "",
                    onClick: acceptApplication
                  })
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/application/rejecter.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_4 = Object.assign(_sfc_main$1, { __name: "ApplicationRejecter" });
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const toast = useToast();
    const { confirmAsync } = useConfirm();
    const { applicationId = "" } = useRouteParams();
    const {
      data: application,
      error,
      refresh
    } = ([__temp, __restore] = withAsyncContext(() => useFetch(`/api/users/admin/applications/${applicationId}`, "$d99B_tMvGW")), __temp = await __temp, __restore(), __temp);
    const viewer = useTemplateRef("viewer");
    const colors = {
      pending: "secondary",
      submitted: "warning",
      accepted: "success",
      rejected: "error"
    };
    const handleDelete = async () => {
      const confirm = async () => {
        return await confirmAsync({
          title: "Delete Application",
          description: "Are you sure you want to delete this application? This action cannot be undone",
          acceptProps: {
            color: "error",
            label: "Delete"
          }
        });
      };
      if (!await confirm()) {
        return;
      }
      try {
        const { message } = await $fetch(
          `/api/users/admin/applications/${applicationId}`,
          {
            method: "DELETE"
          }
        );
        navigateTo("/portal/admin/applications");
        toast.add({
          color: "success",
          title: "Success",
          description: message
        });
      } catch (error2) {
        toast.add({
          color: "error",
          title: "Error",
          description: normalizeException(error2).message
        });
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtBadge = _sfc_main$3;
      const _component_NuxtButton = _sfc_main$a;
      const _component_NuxtPopover = _sfc_main$4;
      const _component_ApplicationAccepter = __nuxt_component_3;
      const _component_ApplicationRejecter = __nuxt_component_4;
      const _component_NuxtSeparator = _sfc_main$5;
      const _component_FetchErrorAlert = __nuxt_component_6;
      const _component_ApplicationViewer = __nuxt_component_7;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "p-5" }, _attrs))}><header><div class="flex items-center gap-5 justify-between"><div class="flex items-center gap-2"><h1 class="text-lg font-bold"> Application <b>${ssrInterpolate(unref(application)?.applicationNumber)}</b></h1>`);
      if (unref(application)) {
        _push(ssrRenderComponent(_component_NuxtBadge, {
          label: unref(application).status,
          color: colors[unref(application).status],
          variant: "subtle"
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="mb-5 flex items-center justify-end gap-2.5">`);
      _push(ssrRenderComponent(_component_NuxtButton, {
        label: "Print",
        icon: "lucide:printer",
        color: "neutral",
        variant: "outline",
        onClick: unref(viewer)?.print
      }, null, _parent));
      if (unref(application)) {
        _push(ssrRenderComponent(_component_NuxtPopover, null, {
          content: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="p-5"${_scopeId}><div class="w-40 grid gap-1"${_scopeId}>`);
              if (unref(application).status === "pending" || unref(application).status === "rejected") {
                _push2(ssrRenderComponent(_component_ApplicationAccepter, {
                  "application-id": unref(applicationId),
                  onDone: () => unref(refresh)()
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(ssrRenderComponent(_component_NuxtButton, {
                        label: "Accept",
                        color: "neutral",
                        variant: "ghost",
                        "trailing-icon": "lucide:circle-check",
                        block: ""
                      }, null, _parent3, _scopeId2));
                    } else {
                      return [
                        createVNode(_component_NuxtButton, {
                          label: "Accept",
                          color: "neutral",
                          variant: "ghost",
                          "trailing-icon": "lucide:circle-check",
                          block: ""
                        })
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              if (unref(application).status === "pending" || unref(application).status === "accepted") {
                _push2(ssrRenderComponent(_component_ApplicationRejecter, {
                  "application-id": unref(applicationId),
                  onDone: () => unref(refresh)()
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(ssrRenderComponent(_component_NuxtButton, {
                        label: "Reject",
                        color: "neutral",
                        variant: "ghost",
                        "trailing-icon": "lucide:circle-x",
                        block: ""
                      }, null, _parent3, _scopeId2));
                    } else {
                      return [
                        createVNode(_component_NuxtButton, {
                          label: "Reject",
                          color: "neutral",
                          variant: "ghost",
                          "trailing-icon": "lucide:circle-x",
                          block: ""
                        })
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              _push2(ssrRenderComponent(_component_NuxtSeparator, null, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_NuxtButton, {
                label: "Delete",
                color: "error",
                variant: "ghost",
                "trailing-icon": "lucide:trash-2",
                block: "",
                "loading-auto": "",
                onClick: handleDelete
              }, null, _parent2, _scopeId));
              _push2(`</div></div>`);
            } else {
              return [
                createVNode("div", { class: "p-5" }, [
                  createVNode("div", { class: "w-40 grid gap-1" }, [
                    unref(application).status === "pending" || unref(application).status === "rejected" ? (openBlock(), createBlock(_component_ApplicationAccepter, {
                      key: 0,
                      "application-id": unref(applicationId),
                      onDone: () => unref(refresh)()
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_NuxtButton, {
                          label: "Accept",
                          color: "neutral",
                          variant: "ghost",
                          "trailing-icon": "lucide:circle-check",
                          block: ""
                        })
                      ]),
                      _: 1
                    }, 8, ["application-id", "onDone"])) : createCommentVNode("", true),
                    unref(application).status === "pending" || unref(application).status === "accepted" ? (openBlock(), createBlock(_component_ApplicationRejecter, {
                      key: 1,
                      "application-id": unref(applicationId),
                      onDone: () => unref(refresh)()
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_NuxtButton, {
                          label: "Reject",
                          color: "neutral",
                          variant: "ghost",
                          "trailing-icon": "lucide:circle-x",
                          block: ""
                        })
                      ]),
                      _: 1
                    }, 8, ["application-id", "onDone"])) : createCommentVNode("", true),
                    createVNode(_component_NuxtSeparator),
                    createVNode(_component_NuxtButton, {
                      label: "Delete",
                      color: "error",
                      variant: "ghost",
                      "trailing-icon": "lucide:trash-2",
                      block: "",
                      "loading-auto": "",
                      onClick: handleDelete
                    })
                  ])
                ])
              ];
            }
          }),
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_NuxtButton, {
                icon: "lucide:ellipsis-vertical",
                color: "neutral",
                variant: "outline"
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_NuxtButton, {
                  icon: "lucide:ellipsis-vertical",
                  color: "neutral",
                  variant: "outline"
                })
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></header><section class="mt-5">`);
      if (unref(error)) {
        _push(`<div>`);
        _push(ssrRenderComponent(_component_FetchErrorAlert, {
          message: ("normalizeException" in _ctx ? _ctx.normalizeException : unref(normalizeException))(unref(error)).message,
          "show-retry": "",
          onRetry: unref(refresh)
        }, null, _parent));
        _push(`</div>`);
      } else if (unref(application)) {
        _push(`<div><div>`);
        _push(ssrRenderComponent(_component_ApplicationViewer, {
          ref_key: "viewer",
          ref: viewer,
          "application-id": unref(application).id
        }, null, _parent));
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</section></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/portal/admin/applications/[applicationId]/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-BLgbK52y.mjs.map
