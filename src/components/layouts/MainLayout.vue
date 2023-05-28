<template>
  <main class="alternate-landing" style="--phoenix-scroll-margin-top: 1.2rem;">
    <the-top-navbar />
    <router-view/>
  </main>
</template>

<script>
import { defineComponent } from 'vue';
import TheTopNavbar from '@/components/TheTopNavbar.vue'

export default defineComponent({
  components: {
    TheTopNavbar,
  }
})
</script>