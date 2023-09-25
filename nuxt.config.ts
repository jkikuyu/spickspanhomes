// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  //devtools: { enabled: true },
  vite: {
    server: {
      fs: {
        strict: false,
      },
    },
  },

  pages: true,
  css: ["~/assets/css/main.css"],
  modules: ["nuxt-icon", "@pinia/nuxt", "@pinia-plugin-persistedstate/nuxt"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  app: {
    head: {
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900&display=swap",
        },
      ],
    },
  },
});
