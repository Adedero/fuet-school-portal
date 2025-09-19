import { a as __nuxt_component_0 } from './server.mjs';
import { defineComponent, withCtx, createTextVNode, unref, createVNode, resolveDynamicComponent, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderList, ssrRenderVNode, ssrInterpolate, ssrRenderStyle } from 'vue/server-renderer';
import { ChevronRight, MapPin, Phone, Mail, Clock, Send } from 'lucide-vue-next';
import '../nitro/nitro.mjs';
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
import 'reka-ui';
import '@vueuse/core';
import 'tailwind-variants';
import '@iconify/utils/lib/css/icon';
import 'perfect-debounce';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "contact",
  __ssrInlineRender: true,
  setup(__props) {
    const contactInfo = [
      {
        icon: MapPin,
        title: "Address",
        detail: "Federal University of Environment & Technology, Koroma/Sakpenwa, Rivers State, Nigeria"
      },
      {
        icon: Phone,
        title: "Phone",
        detail: "+234 000 0000 000"
      },
      {
        icon: Mail,
        title: "Email",
        detail: "info@fuet.edu.ng"
      },
      {
        icon: Clock,
        title: "Office Hours",
        detail: "Mon - Fri: 8:00am - 4:00pm"
      }
    ];
    const quickLinks = [
      { url: "/application", label: "Admissions" },
      { url: "/faculties", label: "Faculties & Departments" },
      { url: "/academic-calendar", label: "Academic Calendar" },
      { url: "/news", label: "News & Events" },
      { url: "/portal/student", label: "Student Portal" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<!--[--><nav class="section-padding pt-8 pb-2 flex items-center text-sm text-gray-500 gap-1" aria-label="Breadcrumb">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "hover:underline text-primary-500 font-medium"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Home`);
          } else {
            return [
              createTextVNode("Home")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(ChevronRight), { class: "w-4 h-4 mx-1 text-gray-400" }, null, _parent));
      _push(`<span class="text-gray-700 font-semibold">Contact Us</span></nav><section id="contact-us"><div class="section-padding py-20 bg-gradient-to-br from-green-50 via-white to-green-100 text-center"><h1 class="text-4xl md:text-5xl font-extrabold tracking-tight mb-4"> We Are Ready To Help </h1><p class="text-lg text-gray-600 max-w-2xl mx-auto"> Get in touch with the Federal University of Environment and Technology. We’re here to answer your questions and support your journey. </p></div><div class="section-padding py-16 bg-slate-950"><div class="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8"><!--[-->`);
      ssrRenderList(contactInfo, (info) => {
        _push(`<div class="border rounded-md shadow-sm p-6 text-center hover:shadow-md transition">`);
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(info.icon), { class: "w-8 h-8 text-primary-500 mx-auto mb-3" }, null), _parent);
        _push(`<h3 class="font-bold text-lg text-white mb-2">${ssrInterpolate(info.title)}</h3><p class="text-gray-200 text-sm">${ssrInterpolate(info.detail)}</p></div>`);
      });
      _push(`<!--]--></div></div><div class="section-padding py-20 bg-gradient-to-br from-green-50 via-white to-green-100"><div class="max-w-4xl mx-auto bg-white p-8 shadow-sm"><h2 class="text-2xl font-bold text-primary-600 mb-6">Send us a Message</h2><form class="space-y-5"><div class="grid md:grid-cols-2 gap-6"><input type="text" placeholder="Your Name" class="w-full border px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-400"><input type="email" placeholder="Your Email" class="w-full border px-4 py-3 rounded-md-xl focus:outline-none focus:ring-2 focus:ring-primary-400"></div><input type="text" placeholder="Subject" class="w-full border px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-400"><textarea placeholder="Your Message" rows="5" class="w-full border px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-400"></textarea><button type="submit" class="flex items-center gap-2 bg-primary text-white font-semibold px-6 py-3 rounded-md hover:bg-primary-600 transition">`);
      _push(ssrRenderComponent(unref(Send), { class: "w-4 h-4" }, null, _parent));
      _push(` Send Message </button></form></div></div><div class="section-padding"><div class="w-full h-96 rounded-md overflow-hidden shadow"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3973.437!2d7.1875!3d4.6785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1069d47aabf27f77%3A0x8ff2b4b5f6e8a3!2sKoroma%2FSaakpenwa%2C%20Rivers!5e0!3m2!1sen!2sng!4v1691234567890" width="100%" height="100%" style="${ssrRenderStyle({ "border": "0" })}" allowfullscreen="true" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div></div><div class="bg-primary py-6 section-padding mt-10"><div class="flex flex-wrap gap-x-10 items-center justify-center md:justify-between"><!--[-->`);
      ssrRenderList(quickLinks, (link) => {
        _push(`<div class="h-16 flex-center">`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: link.url,
          class: "flex items-center gap-2 text-white hover:underline text-base font-medium"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(unref(ChevronRight), { class: "w-4 h-4 text-white opacity-70" }, null, _parent2, _scopeId));
              _push2(` ${ssrInterpolate(link.label)}`);
            } else {
              return [
                createVNode(unref(ChevronRight), { class: "w-4 h-4 text-white opacity-70" }),
                createTextVNode(" " + toDisplayString(link.label), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></div></div></section><!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about/contact.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=contact--3awLMNl.mjs.map
