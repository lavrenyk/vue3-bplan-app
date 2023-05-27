<template>
  <component :is="layout">
    <router-view/>
  </component>
</template>

<script>
import { defineComponent } from 'vue'
import EmptyLayout from '@/components/layouts/EmptyLayout.vue'
import MainLayout from '@/components/layouts/MainLayout.vue'

export default defineComponent({
  name: 'BPlan.app',
  components: {
    EmptyLayout,
    MainLayout
  },
  computed: {
    layout() {
      return (this.$route.meta.layout || 'empty') + '-layout'
    }
  }
})
</script>

<style lang="scss">

</style>