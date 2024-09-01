// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

  plugins: ['~/plugins/storefront-ui.js'],


  css: ['~/assets/css/tailwind.css'],
  build: {
    postcss: {
      postcssOptions: require('./postcss.config.js'),
    },
  },
})
