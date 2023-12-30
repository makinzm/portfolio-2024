<script setup lang="ts">
import { useRoute } from 'vue-router'
const route = useRoute()
console.log(route)
console.log(route.params.id)
</script>