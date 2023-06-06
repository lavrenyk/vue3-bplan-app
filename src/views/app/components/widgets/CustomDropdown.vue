<template>

<div class="me-1 d-grid gap-2">
  <button class="btn mb-1 btn-phoenix-secondary btn-sm btn-block border"
    :class="{
      'btn-sm fs--1': size == 'sm',
      'text-left': align == 'left',
      'text-right': align == 'right'
    }"
    type="text"
    data-bs-toggle="dropdown"
    aria-haspopup="true"
    aria-expanded="false">
    {{selected || placeholder }}
  </button>
  {{  modelValue }}
  <div class="dropdown-menu dropdown-menu-end">

    <button v-for="(item, index) in modelValue" :key="index"
      class="dropdown-item btn-block"
      :disabled="item.disabled"
      @click="input(item)">
      {{item.title}}
    </button>

  </div>
</div>



    <div class="dropdown mb-1 form-group">    
      <div class="input-group">
        <button
          id="accountTypeSelector" 
          class="btn btn-phoenix-light btn-block font-weight-normal ps-3 py-1 border" 
          :class="{
            'btn-sm fs--1': size == 'sm',
            'text-left': align == 'left',
            'text-right': align == 'right'
          }" 
          :disabled="disabled"
          data-toggle="dropdown" 
          aria-haspopup="true" 
          aria-expanded="false"
          type="text" >
          {{selected || placeholder }}
        </button>
          <div 
            class="dropdown-menu"
            :class="{'stretch': stretch}"
            aria-labelledby="accountTypeSelector">
            <perfect-scrollbar style="position: relative; margin: auto; height: 160px;">
              <div class="main-menu-item">
                <button v-for="(item, index) in value" :key="index"
                  class="dropdown-item btn-block"
                  :disabled="item.disabled"
                  @click="input(item)">
                  {{item.title}}
                </button>
              </div>
            </perfect-scrollbar>
          </div>
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
        this.$emit('input', item)
      }
    }
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