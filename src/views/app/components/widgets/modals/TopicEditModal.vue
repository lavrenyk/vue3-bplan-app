<template>
  <div class="">
    <b-modal
      id="topicItemEdit"
      body-class="py-0"
      size="xl"
      v-model="showModal"
      hide-header
      hide-footer
      no-stacking>

      <div class="row d-flex" style="min-height: 60vh;">
        <div class="col-3 bg-100 text-center px-1" style="border-top-left-radius: 0.375rem;">
          <h6 class="font-proxima text-uppercase py-2 border-bottom">Что написать?</h6>
          <div id="accordionExample"
            class="accordion border-x border-top rounded align-items-stretch"
            style="max-height: 80vh;">
            <div class="card shadow-none border-bottom">
              <div id="instructions" class="card-header py-0">
                <button
                  class="d-flex btn btn-link text-decoration-none btn-block py-2 px-0 text-left" 
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne">
                  <span class="font-weight-regular font-proxima fs--1 text-900 text-uppercase mr-2">
                    Подсказка
                  </span>
                  <span class="fas fa-caret-right accordion-icon text-600 ml-auto" data-fa-transform="shrink-2"></span>
                </button>
              </div>
              <div
                id="collapseOne"
                class="collapse show"
                aria-labelledby="headingOne"
                data-parent="#accordionExample">
                <div class="card-body pt-1">
                  <div v-html="topic.desc"
                    class="text-left font-proxima fs--1">
                  </div>
                </div>
              </div>
            </div>
            <div v-for="(example, index) in topic.examples" :key="index"
              class="card shadow-none border-bottom">
              <div :id="`heading${index}`" class="card-header py-0">
                <button
                  class="d-flex btn btn-link text-decoration-none btn-block py-2 px-0 text-left collapsed" 
                  data-toggle="collapse"
                  :data-target="`#collapse${index}`"
                  aria-expanded="false"
                  :aria-controls="`collapse${index}`">
                  <span class="font-weight-regular font-proxima fs--1 text-900 text-uppercase mr-2">
                    <small>пример</small>: {{example.title}}
                  </span>
                   <span class="fas fa-caret-right accordion-icon text-600 ml-auto" data-fa-transform="shrink-2"></span>
                </button>
              </div>
              <div
                :id="`collapse${index}`"
                class="collapse"
                aria-labelledby="`heading${index}`"
                data-parent="#accordionExample">
                <perfect-scrollbar class="scroll-area2">
                <div class="card-body pt-2">
                    <div class="text-left font-proxima fs--1">
                      <div v-html="example.body"></div>
                    </div>
                </div>
                </perfect-scrollbar>
              </div>
            </div>
          </div>
        </div>
        <div class="col-9 px-0">
          <div class="d-flex align-items-center">
            <input class="h3 border-0 font-weight-normal p-3 mb-0 mr-auto"
              :class="{
                'text-800': topic.showTitle == true,
                'text-300': topic.showTitle == false
              }"
              style="font-family: 'Proxima Nova'; background: transparent; outline: none; min-width: 60%"
              type="text"
              ref="title"
              :disabled="!titleEdit"
              v-model.lazy="topic.title"
            />
            <div class="btn btn-outline-dark btn-sm edit-btn mr-3"
              @click="startEditing()">
              <i class="fas fa-pencil-alt"></i>
            </div>
            <div class="form-group form-check mb-0 mr-4">
              <b-form-checkbox id="showTitle"
                v-model="topic.showTitle"
                class="form-check-input"
                value="true"
                uncheked-value="false">
                <label class="form-check-label" for="showTitle">
                  Отображать заголовок
                </label>
              </b-form-checkbox>
            </div>
          </div>

          <ckeditor
            :editor="editor"
            v-model="topic.body"
            :config="editorConfig"
          />

          <div class="d-flex col-12 text-right">
            <div v-if="!savingData"
              class="btn btn-outline-success btn-sm ml-auto m-2"
              @click="saveData()">
              Ок, готово!
            </div>
            <div v-if="savingData"
              class="btn btn-outline-success btn-sm ml-auto m-2"
              type="button"
              disabled="">
              <span class="spinner-border spinner-border-sm mr-2"
                role="status"
                aria-hidden="true">
              </span>
              Сохраняем...
            </div>

          </div>
        </div>
      </div>
    </b-modal>
  </div>
</template>

<script>
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'

import '@ckeditor/ckeditor5-build-classic/build/translations/ru'

export default {
  props: ['topic'],
  data: () => ({
    showModal: false,
    savingData: false,
    titleEdit: false,
    editor: ClassicEditor,
    editorConfig: {
      language: 'ru',
      heading: {
        options: [
          { model: 'paragraph', title: 'Paragraph', class: 'ck-heading_paragraph' },
        ]
      },
       disallowedContent: 'blockquotep p',
    }
  }),

  methods: {
    startEditing() {
      this.titleEdit = true
      setTimeout(() => {
        this.$refs.title.focus()
      }, 100)
    },
    async saveData() {
      console.log(this.topic)
      this.savingData = true
      await this.$store.dispatch('saveTopicData', this.topic)
      this.savingData = false
      this.showModal = false
    }
  }
}
</script>

<style lang="scss">

.edit-btn {
  color: rgba(145, 145, 145, 0.2);
  border-color: rgba(145, 145, 145, 0.2) !important;
  &:hover {
    color: rgb(145, 145, 145);
    border-color: rgb(145, 145, 145) !important;
  }
}

.ck {
  height: 65vh;
  border: none !important;
  border-radius: 0 !important;
}

.ck.ck-reset_all, .ck.ck-reset_all * {
  background: #132238 !important;
  color: #989da3 !important;
}

.ck-editor__editable {
    min-height: 65vh !important;
    border: none;
    background-color: #061325 !important;
 }

 .btn-delete {
   &:hover {
     background: #e63757 !important;
   }
 }

 .scroll-area2 {
  position: relative;
  height: 60vh;
}

</style>