<script setup lang="ts">
import { useRoute } from 'vue-router'
const route = useRoute()
console.log(route)
console.log(route.params.id)
const postId = route.params.id

</script>
<template>
  <section>
    <p>This page will be displayed at the /posts/{{ postId }} route.</p>
  </section>
</template>