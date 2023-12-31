// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    baseURL: '/portfolio-2024/',
    buildAssetsDir: 'dist',
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      script: [
        { src: 'https://kit.fontawesome.com/1c1c60ca3e.js', crossorigin: 'anonymous' },
      ],
    },
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  css : [
    '~/assets/css/main.scss',
    '~/assets/css/tailwind.css',
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: [
    '@nuxtjs/tailwindcss'
  ],
})
