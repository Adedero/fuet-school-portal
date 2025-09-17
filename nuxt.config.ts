import tailwindcss from "@tailwindcss/vite";
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: process.env.APP_NAME
    }
  },
  compatibilityDate: "2025-07-15",
  css: ["./app/assets/css/main.css"],
  devtools: { enabled: true },
  modules: ["@nuxt/eslint", "@nuxt/image", "@nuxt/ui", "@nuxt/scripts"],
  pages: true,
  runtimeConfig: {
    public: {
      app: {
        name: process.env.APP_NAME
      },
      schoolNameLong: process.env.SCHOOL_NAME_LONG,
      schoolNameShort: process.env.SCHOOL_NAME_SHORT,
      schoolLocation: process.env.SCHOOL_LOCATION,
      defaultErrorMsg:
        "Something happened and we're currently working on it. Try again later."
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
