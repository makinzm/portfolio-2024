<template>
  <section>
    <p>
      <a
        href="https://makinzm.github.io/my-profile-old/"
        target="_blank"
      >
        My Old Home Page
      </a>
    </p>
  </section>
</template>

<script setup lang="ts">

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
