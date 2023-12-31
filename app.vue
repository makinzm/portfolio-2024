<template>
  <NuxtLayout>
    <header class="header">
      <div>Making it hope</div>
      <nuxt-link to="/">
        Home
      </nuxt-link> |
      <nuxt-link to="/other">
        Past Profile
      </nuxt-link> |
    </header>
    <div>
      <NuxtPage />
    </div>
    <Footer />
  </NuxtLayout>
</template>

<script setup lang="ts">

useHead({
  title: 'makinzm-portfolio',
  meta: [
    { name: 'description', content: 'My amazing site.' }
  ],
  bodyAttrs: {
    class: 'test'
  },
  script: [ { innerHTML: 'console.log(\'Hello Top\')' } ],
  link: [
    { rel: "icon", type: "image/", href: "https://raw.githubusercontent.com/makinzm/portfolio-2024/main/public/img/hope.ico" },
  ],
})
</script>
