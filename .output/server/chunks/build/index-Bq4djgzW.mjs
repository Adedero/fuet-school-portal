import { _ as __nuxt_component_6 } from './fetch-error-alert-NcfoVdkM.mjs';
import { _ as _sfc_main$1 } from './Alert-ZHZvgBf8.mjs';
import { g as useRoute, h as useToast, i as authClient, d as useRuntimeConfig, b as _sfc_main$a, a as __nuxt_component_0 } from './server.mjs';
import { _ as _sfc_main$2 } from './Separator-Cxtlj3w1.mjs';
import { defineComponent, ref, unref, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
import { useAsyncState } from '@vueuse/core';
import 'reka-ui';
import '../_/nitro.mjs';
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

function maskEmail(email, asterisks = 5) {
  if (!email) {
    return "";
  }
  const [user, domain] = email.split("@");
  if (!user || !domain) {
    return email;
  }
  const visible = user.slice(0, 3);
  return `${visible}${"*".repeat(asterisks)}@${domain}`;
}
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const runtimeConfig = useRuntimeConfig();
    const route = useRoute();
    const toast = useToast();
    const email = route.query.email?.toString();
    const decodedEmail = ref(atob(email ?? ""));
    const { state, executeImmediate: sendEmail } = useAsyncState(async function() {
      return await authClient.sendVerificationEmail(
        {
          email: decodedEmail.value,
          callbackURL: "/token-validation"
        },
        {
          onSuccess: () => {
            toast.add({
              color: "success",
              title: "Success",
              description: "Email sent successfully"
            });
          }
        }
      );
    }, null);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_FetchErrorAlert = __nuxt_component_6;
      const _component_NuxtAlert = _sfc_main$1;
      const _component_NuxtButton = _sfc_main$a;
      const _component_NuxtSeparator = _sfc_main$2;
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)}><h1 class="text-lg font-semibold">Verify Your Email</h1><div class="text-sm text-muted"> You must verify your email address to continue on ${ssrInterpolate(unref(runtimeConfig).public.appName)}. </div><div class="my-5">`);
      if (unref(state)?.error) {
        _push(`<div>`);
        _push(ssrRenderComponent(_component_FetchErrorAlert, {
          message: unref(state)?.error?.message ?? unref(state)?.error?.statusText,
          "show-retry": "",
          onRetry: ($event) => unref(sendEmail)()
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<div><div>`);
        if (unref(decodedEmail)) {
          _push(`<p><b>${ssrInterpolate(("maskEmail" in _ctx ? _ctx.maskEmail : unref(maskEmail))(unref(decodedEmail)))}</b></p>`);
        } else {
          _push(`<!---->`);
        }
        _push(ssrRenderComponent(_component_NuxtAlert, {
          variant: "subtle",
          description: "A verification link has been sent to your email. Click on it to\r\n              verify your account.",
          icon: "lucide:circle-alert",
          class: "mt-4"
        }, null, _parent));
        _push(`</div><div class="mt-4 flex items-center gap-3 justify-between"><p class="text-muted text-sm">Didn&#39;t receive the email?</p>`);
        _push(ssrRenderComponent(_component_NuxtButton, {
          "loading-auto": "",
          label: "Resend",
          onClick: ($event) => unref(sendEmail)()
        }, null, _parent));
        _push(`</div></div>`);
      }
      _push(`</div><div>`);
      _push(ssrRenderComponent(_component_NuxtSeparator, { class: "my-5" }, null, _parent));
      _push(`<p class="text-sm text-muted"> Are you experiencing any issues? `);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/contact",
        class: "link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Contact us. `);
          } else {
            return [
              createTextVNode(" Contact us. ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</p></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/(auth)/email-verification/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-Bq4djgzW.mjs.map
