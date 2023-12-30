<template>
  <section>
    <p>This page will be displayed at the /about route.</p>
  </section>
</template>

<script setup lang="ts">
import { useHead }  from '@unhead/vue'

useHead({
  title: 'About',
  meta: [
    { name: 'About Description', content: 'Just about pages' }
  ],
  bodyAttrs: {
    class: 'about'
  },
  script: [ { innerHTML: 'console.log(\'Hello `About Page`\')' } ]
})
</script>
