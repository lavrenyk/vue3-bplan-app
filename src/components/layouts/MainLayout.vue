<template>
  <main class="alternate-landing" style="--phoenix-scroll-margin-top: 1.2rem;">
    <top-navbar />
    <router-view/>
  </main>
</template>

<script>
import { defineComponent } from 'vue';
import TopNavbar from '@/components/TopNavbar.vue'

export default defineComponent({
  components: {
    TopNavbar,
  }
})
</script>