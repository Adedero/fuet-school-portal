import tailwindcss from "@tailwindcss/vite";
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@nuxt/eslint", "@nuxt/image", "@nuxt/ui"],
  pages: true,
  runtimeConfig: {
    public: {
      app: {
        name: process.env.APP_NAME
      }
    }
  },
  ui: {
    prefix: "Nuxt",
    colorMode: false,
    fonts: false
  },
  vite: {
    plugins: [tailwindcss()]
  }
});
