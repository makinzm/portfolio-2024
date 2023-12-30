<template>
  <div>
    <h1>Making Hope Page</h1>
    <img
      src="~/assets/img/favicon.ico"
      alt="Discover Nuxt 3"
    >
    <MyAlert>
      This is an auto-imported component.
    </MyAlert>
    <NuxtPage />
  </div>
</template>
<script setup lang="ts">
// import { useHead }  from '@unhead/vue'

useHead({
  title: 'My App',
  meta: [
    { name: 'description', content: 'My amazing site.' }
  ],
  bodyAttrs: {
    class: 'test'
  },
  script: [ { innerHTML: 'console.log(\'Hello world\')' } ],
  link: [
    { rel: "icon", type: "image/x-icon", href: "https://raw.githubusercontent.com/makinzm/portfolio-2024/main/assets/img/favicon.ico" },
  ],
})
</script>
