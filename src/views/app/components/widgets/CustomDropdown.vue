<template>

  <div class="me-1 d-grid gap-2">
    <button class="btn mb-1 btn-phoenix-secondary btn-block border"
      :class="{
        'btn-sm fs--1': size == 'sm',
        'text-left': align == 'left',
        'text-right': align == 'right'
      }"
      :disabled="disabled"
      type="text"
      data-bs-toggle="dropdown"
      aria-haspopup="true"
      aria-expanded="false">
      {{selected || placeholder }}
    </button>

    <div class="dropdown-menu dropdown-menu-end">

      <button v-for="(item, index) in modelValue" :key="index"
        class="dropdown-item btn-block"
        :class="{'active': item.title == selected}"
        :disabled="item.disabled"
        @click="input(item)">
        {{item.title}}
      </button>

    </div>
  </div>

</template>

<script>
  export default {
    props: {
      modelValue: {
        type: Array,
        default: function () {
          return []
        }
      },
      placeholder: {
        type: String,
        default: "Выберите из списка..."
      },
      size: String,
      defaultItem: Number,
      align: {
        type: String,
        dafault: 'left'
      },
      stretch: {
        type: Boolean,
        default: true
      },
      disabled: Boolean
    },

    data: () => ({
      selected: null
    }),

    mounted() {
      this.input(this.modelValue[this.defaultItem])
    },

    unmounted() {
      this.input(null)
    },

    computed: {
      selectedTitle() {
        if (this.selected) {
          return this.selected.title
        } else {
          return null
        }
      },
    },

    methods: {
      input(item) {
        if (item) {
          this.selected = item.title
        } else {
          this.selected = null
        }
        this.$emit('update:modelValue', item);
      }
    }
  }
  </script>

  <style lang="scss" scoped>
  .dropdown-item.active, .dropdown-item:active {
    background-color: #2c3c5f;
  }
  </style>