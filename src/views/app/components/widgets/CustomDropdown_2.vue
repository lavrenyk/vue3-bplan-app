<template>

  <div class="me-1 d-grid gap-2">
    <button class="btn mb-1 btn-phoenix-secondary btn-sm btn-block border"
      type="text"
      data-bs-toggle="dropdown"
      aria-haspopup="true"
      aria-expanded="false">
    </button>
    {{  modelValue }}
    <div class="dropdown-menu">

      <button v-for="(item, index) in modelValue" :key="index"
        class="dropdown-item btn-block"
        :disabled="item.disabled"
        @click="input(item)">
        {{item.title}}
      </button>

    </div>
  </div>

</template>
  
<script>
export default {
  props: ['modelValue'],
  emits: ['update:modelValue'],
}
</script>

<style lang="scss" scoped>
.component-scroll-area {
  position: relative;
  margin: auto;
  height: 250px !important;
}
.stretch {
  width: 100%;
}
</style>