<template>
    <div class="dropdown fornt-proxima mb-1 form-group">    
      <div class="input-group">
        <button
          id="accountTypeSelector" 
          class="btn btn-light btn-block font-weight-normal pl-3 py-1 border" 
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
      value: {
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
      this.input(this.value[this.defaultItem])
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