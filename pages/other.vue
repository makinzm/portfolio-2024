<template>
  <div>
    <p>
      <a
        href="https://makinzm.github.io/my-profile-old/"
      >
        My Old Home Page (External Link)
      </a>
    </p>
  </div>
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
