// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    baseURL: '/portfolio-2024/',
    buildAssetsDir: '/assets',
  },
  css : [
    '~/assets/colors.scss'
  ],
})
