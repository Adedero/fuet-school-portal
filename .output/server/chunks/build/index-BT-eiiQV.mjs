import { _ as __nuxt_component_0 } from './settings-DUbfgrJe.mjs';
import { _ as _sfc_main$1 } from './Separator-Cxtlj3w1.mjs';
import { h as useToast, b as _sfc_main$a, d as useRuntimeConfig, T as useNuxtApp, U as injectHead$1 } from './server.mjs';
import { defineComponent, useTemplateRef, mergeProps, withCtx, createVNode, toDisplayString, reactive, getCurrentInstance, onMounted, isRef, watch, onScopeDispose, ref, hasInjectionContext, inject, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { u as useAuthStore } from './auth.store-BfqdJVn0.mjs';
import { ab as normalizeException, T as defu, ae as generateTransactionRef } from '../_/nitro.mjs';
import { useScript as useScript$2 } from 'unhead/scripts';
import { u as useRouteParams } from './use-route-params-BVGD6Lax.mjs';
import './fetch-error-alert-NcfoVdkM.mjs';
import './Alert-ZHZvgBf8.mjs';
import 'reka-ui';
import './fetch-DHT9Ke2D.mjs';
import '@vue/shared';
import '@vueuse/core';
import 'vue-router';
import 'better-auth/vue';
import 'better-auth/client/plugins';
import 'tailwindcss/colors';
import '@iconify/vue';
import 'tailwind-variants';
import '@iconify/utils/lib/css/icon';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';
import 'nanoid';
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

const headSymbol = "usehead";
function injectHead() {
  if (hasInjectionContext()) {
    const instance = inject(headSymbol);
    if (!instance) {
      throw new Error("useHead() was called without provide context, ensure you call it through the setup() function.");
    }
    return instance;
  }
  throw new Error("useHead() was called without provide context, ensure you call it through the setup() function.");
}
const onNuxtReady = (callback) => {
  {
    return;
  }
};
function registerVueScopeHandlers(script, scope) {
  if (!scope) {
    return;
  }
  const _registerCb = (key, cb) => {
    if (!script._cbs[key]) {
      cb(script.instance);
      return () => {
      };
    }
    let i = script._cbs[key].push(cb);
    const destroy = () => {
      if (i) {
        script._cbs[key]?.splice(i - 1, 1);
        i = null;
      }
    };
    onScopeDispose(destroy);
    return destroy;
  };
  script.onLoaded = (cb) => _registerCb("loaded", cb);
  script.onError = (cb) => _registerCb("error", cb);
  onScopeDispose(() => {
    script._triggerAbortController?.abort();
  });
}
function useScript$1(_input, _options) {
  const input = typeof _input === "string" ? { src: _input } : _input;
  const options = _options || {};
  const head = options?.head || injectHead();
  options.head = head;
  const scope = getCurrentInstance();
  options.eventContext = scope;
  if (scope && typeof options.trigger === "undefined") {
    options.trigger = onMounted;
  } else if (isRef(options.trigger)) {
    const refTrigger = options.trigger;
    let off;
    options.trigger = new Promise((resolve) => {
      off = watch(refTrigger, (val) => {
        if (val) {
          resolve(true);
        }
      }, {
        immediate: true
      });
      onScopeDispose(() => resolve(false), true);
    }).then((val) => {
      off?.();
      return val;
    });
  }
  head._scriptStatusWatcher = head._scriptStatusWatcher || head.hooks.hook("script:updated", ({ script: s }) => {
    s._statusRef.value = s.status;
  });
  const script = useScript$2(head, input, options);
  script._statusRef = script._statusRef || ref(script.status);
  registerVueScopeHandlers(script, scope);
  return new Proxy(script, {
    get(_, key, a) {
      return Reflect.get(_, key === "status" ? "_statusRef" : key, a);
    }
  });
}
function useNuxtScriptRuntimeConfig() {
  return useRuntimeConfig().public["nuxt-scripts"];
}
function resolveScriptKey(input) {
  return input.key || input.src || (typeof input.innerHTML === "string" ? input.innerHTML : "");
}
function useScript(input, options) {
  input = typeof input === "string" ? { src: input } : input;
  options = defu(options, useNuxtScriptRuntimeConfig()?.defaultScriptOptions);
  const id = String(resolveScriptKey(input));
  const nuxtApp = useNuxtApp();
  options.head = options.head || injectHead$1();
  if (!options.head) {
    throw new Error("useScript() has been called without Nuxt context.");
  }
  nuxtApp.$scripts = nuxtApp.$scripts || reactive({});
  !!nuxtApp.$scripts?.[id];
  if (options.trigger === "onNuxtReady" || options.trigger === "client") {
    if (!options.warmupStrategy) {
      options.warmupStrategy = "preload";
    }
    if (options.trigger === "onNuxtReady") {
      options.trigger = onNuxtReady;
    }
  }
  const instance = useScript$1(input, options);
  const _remove = instance.remove;
  instance.remove = () => {
    nuxtApp.$scripts[id] = void 0;
    return _remove();
  };
  nuxtApp.$scripts[id] = instance;
  return instance;
}
function useAdmissionFeePayment() {
  const config = useRuntimeConfig();
  useScript("https://newwebpay.interswitchng.com/inline-checkout.js", {
    tagPosition: "bodyClose"
  });
  function checkout(options) {
    const {
      amount,
      currencyISOCode = 566,
      customerEmail,
      redirectUrl = `${(void 0).location.origin}${(void 0).location.pathname}`
    } = options;
    return new Promise((resolve, reject) => {
      const request = {
        pay_item_id: config.public.interswitch.admissionFeeItemId,
        pay_item_name: config.public.interswitch.admissionFeeItemName,
        txn_ref: generateTransactionRef(),
        amount,
        currency: currencyISOCode,
        cust_email: customerEmail,
        mode: "TEST",
        merchant_code: config.public.interswitch.merchantCode,
        site_redirect_url: redirectUrl,
        onComplete: (response) => {
          resolve(response);
        }
      };
      if (!(void 0).webpayCheckout) {
        reject(new Error("Interswitch WebPay Checkout is not enabled."));
      }
      try {
        (void 0).webpayCheckout(request);
      } catch (error) {
        reject(error);
      }
    });
  }
  return {
    checkout
  };
}
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const config = useRuntimeConfig();
    const authStore = useAuthStore();
    const { checkout } = useAdmissionFeePayment();
    const toast = useToast();
    const appSettings = useTemplateRef("app-settings");
    const { applicationId = "" } = useRouteParams();
    const initiatePayment = async () => {
      try {
        const email = authStore.user.value?.email;
        if (!email) {
          throw new Error("Log in session expired. Please, log in to conitnue");
        }
        const settings = await appSettings.value?.getSettings();
        if (!settings?.value) {
          throw new Error(
            "Something happened and we're working on it. Please, try again later"
          );
        }
        const amount = (settings.value.admissionFee ?? 0) * 100;
        const checkoutResponse = await checkout({
          customerEmail: email,
          amount: 1e3
        });
        const { transactionStatus, response } = await $fetch(
          `/api/users/applicant/applications/${applicationId}/process-admission-fee`,
          {
            method: "POST",
            body: {
              merchantCode: config.public.interswitch.merchantCode,
              transactionRef: checkoutResponse.txnref,
              amount: checkoutResponse.amount
            }
          }
        );
        if (transactionStatus === "failed") {
          throw new Error(`Transaction failed with response: ${response}`);
        }
        toast.add({
          color: transactionStatus === "successful" ? "success" : "warning",
          title: transactionStatus === "successful" ? "Success" : "Pending",
          description: `Transaction is ${transactionStatus}: ${response}`
        });
      } catch (error) {
        toast.add({
          color: "error",
          title: "Error",
          description: normalizeException(error).message
        });
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppSettings = __nuxt_component_0;
      const _component_NuxtSeparator = _sfc_main$1;
      const _component_NuxtButton = _sfc_main$a;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full" }, _attrs))}><div class="lg:max-w-[70%] mx-auto"><header><h1 class="text-xl font-bold">Admission Fees Payment</h1></header><section class="my-5"><div><div class="flex items-baseline gap-2.5 justify-between"><p>Total</p>`);
      _push(ssrRenderComponent(_component_AppSettings, { ref: "app-settings" }, {
        default: withCtx(({ data }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p class="text-2xl font-semibold"${_scopeId}> ₦ ${ssrInterpolate(data.admissionFee?.toLocaleString())}</p>`);
          } else {
            return [
              createVNode("p", { class: "text-2xl font-semibold" }, " ₦ " + toDisplayString(data.admissionFee?.toLocaleString()), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
      _push(ssrRenderComponent(_component_NuxtSeparator, { class: "mt-1 mb-5" }, null, _parent));
      _push(`<div><div class="flex items-end gap-2.5 justify-between"><div><p class="font-semibold">Admission Fees</p><p class="text-sm text-muted"> Paid on September 24, 2025 06:50 a.m | Unpaid </p></div><div>`);
      _push(ssrRenderComponent(_component_NuxtButton, {
        label: "Download Receipt",
        icon: "lucide:download",
        color: "neutral",
        variant: "outline",
        class: "hidden"
      }, null, _parent));
      _push(ssrRenderComponent(_component_NuxtButton, {
        label: "Pay Now",
        icon: "lucide-credit-card",
        "loading-auto": "",
        onClick: initiatePayment
      }, null, _parent));
      _push(`</div></div></div></section></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/application/portal/[applicationId]/index/payment/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-BT-eiiQV.mjs.map
