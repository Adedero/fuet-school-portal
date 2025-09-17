import { _ as _sfc_main$1 } from './Separator-A-GXspeX.mjs';
import { b as _sfc_main$a, q as useNuxtApp, r as injectHead$1, d as useRuntimeConfig } from './server.mjs';
import { defineComponent, mergeProps, reactive, getCurrentInstance, onMounted, isRef, watch, onScopeDispose, ref, hasInjectionContext, inject, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { E as defu } from '../nitro/nitro.mjs';
import { useScript as useScript$2 } from 'unhead/scripts';
import 'reka-ui';
import '@vueuse/core';
import 'vue-router';
import 'better-auth/vue';
import 'better-auth/client/plugins';
import 'tailwindcss/colors';
import '@iconify/vue';
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
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useScript("https://newwebpay.qa.interswitchng.com/inline-checkout.js", {
      tagPosition: "bodyClose"
    });
    const initiatePayment = () => {
      if (!(void 0).webpayCheckout) return;
      const request = {
        merchant_code: "MX104269",
        pay_item_id: "MX104269_MERCHANT_APP",
        txn_ref: "1ytjOnt8eASgS8+WSLZUlSn8FtPW/qpL4mg2iYIdc9s=",
        site_redirect_url: "https://google.com/",
        amount: 1e4,
        currency: 566,
        onComplete: () => {
        },
        mode: "LIVE"
      };
      (void 0).webpayCheckout(request);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtSeparator = _sfc_main$1;
      const _component_NuxtButton = _sfc_main$a;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full" }, _attrs))}><div class="lg:max-w-[70%] mx-auto"><header><h1 class="text-xl font-bold">Admission Fees Payment</h1></header><section class="my-5"><div><div class="flex items-baseline gap-2.5 justify-between"><p>Total</p><p class="text-2xl">₦ 67,850.00</p></div></div>`);
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
//# sourceMappingURL=index-B4wEXC1h.mjs.map
