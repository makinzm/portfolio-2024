<template>
  <div>
    <h1 class="hello-scss">
      Welcome to the homepage
    </h1>
    <MyAlert>
      This is an auto-imported component
    </MyAlert>
    <br>
    <nuxt-link to="/about">
      Go to About Page
    </nuxt-link>
    <ul>
      <li>
        <nuxt-link to="/posts/1">
          Go to Post 1
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
// import { useHead }  from '@unhead/vue'

useHead({
  title: 'Index App',
  meta: [
    { name: 'description', content: 'My amazing site.' }
  ],
  bodyAttrs: {
    class: 'test'
  },
  script: [ { innerHTML: 'console.log(\'Hello world\')' } ],
  link: [
    { rel: "icon", type: "image/", href: "" },
  ],
})
</script>