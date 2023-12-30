<template>
  <NuxtLayout>
    <header class="header">
      <div>Making it hope</div>
      <NuxtLink to="/">
        Home
      </NuxtLink> |
      <NuxtLink to="/pastPageLink">
        Past Profile
      </NuxtLink> |
    </header>
    <div>
      <NuxtPage />
    </div>
    <Footer />
  </NuxtLayout>
</template>
<script setup lang="ts">

useHead({
  title: 'My App',
  meta: [
    { name: 'description', content: 'My amazing site.' }
  ],
  bodyAttrs: {
    class: 'test'
  },
  script: [ { innerHTML: 'console.log(\'Hello world\')' } ],
})
</script>
