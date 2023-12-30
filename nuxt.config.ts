// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    baseURL: '/portfolio-2024/', // baseURL: '/<repository>/'
    buildAssetsDir: '.output/public/assets', // don't use "_" at the begining of the folder name to avoids nojkill conflict
  },
})
