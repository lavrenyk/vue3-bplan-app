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
        <div class="col-3 bg-soft text-center px-1" style="border-top-left-radius: 0.375rem;">
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
                  <div v-html="localTopic.desc"
                    class="text-left font-proxima fs--1">
                  </div>
                </div>
              </div>
            </div>

            <div class="accordion" id="accordionExample" style="max-height: 80vh;">
              <div class="accordion-item border-top border-300">
                <h2 class="accordion-header" id="headingOne">
                  <button class="accordion-button" type="button"
                    data-bs-toggle="collapse" data-bs-target="#collapseOne" 
                    aria-expanded="true" aria-controls="collapseOne">
                    How long does it take to ship my order?
                  </button>
                </h2>
                <div class="accordion-collapse collapse show" id="collapseOne" 
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample">
                  <div class="accordion-body pt-0">
                    <strong>This is the first item&apos;s accordion body.</strong>
                    It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element.
                    These classes control the overall appearance, as well as the showing and hiding via CSS transitions.
                    You can modify any of this with custom CSS or overriding our default variables.
                    It&apos;s also worth noting that just about any HTML can go within the
                    <code>.accordion-body</code>,
                    though the transition does limit overflow.
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingTwo">
                  <button class="accordion-button collapsed" type="button"
                    data-bs-toggle="collapse" data-bs-target="#collapseTwo"
                    aria-expanded="false" aria-controls="collapseTwo">
                    How long does it take to ship my order?
                  </button>
                </h2>
                <div class="accordion-collapse collapse" id="collapseTwo"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#accordionExample">
                  <div class="accordion-body pt-0">
                    <strong>This is the second item&apos;s accordion body.</strong>
                    It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element.
                    These classes control the overall appearance, as well as the showing and hiding via CSS transitions.
                    You can modify any of this with custom CSS or overriding our default variables.
                    It&apos;s also worth noting that just about any HTML can go within the
                    <code>.accordion-body</code>,
                    though the transition does limit overflow.
                  </div>
                </div>
              </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingThree">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                  How long does it take to ship my order?
                </button>
              </h2>
              <div class="accordion-collapse collapse" id="collapseThree" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div class="accordion-body pt-0">
                  <strong>This is the third item&apos;s accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It&apos;s also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
              </div>
            </div>
          </div>
            <div v-for="(example, index) in localTopic.examples" :key="index"
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
        <div class="col-9 bg-white px-0">
          <div class="d-flex align-items-center">
            <input class="h3 border-0 font-weight-normal p-3 mb-0 mr-auto"
              :class="{
                'text-800': localTopic.showTitle == true,
                'text-300': localTopic.showTitle == false
              }"
              style="font-family: 'Proxima Nova'; background: transparent; outline: none; min-width: 60%"
              type="text"
              ref="title"
              :disabled="!titleEdit"
              v-model.lazy="localTopic.title"
            />
            <div class="btn btn-outline-dark btn-sm edit-btn mr-3"
              @click="startEditing()">
              <i class="fas fa-pencil-alt"></i>
            </div>
            <div class="form-group form-check mb-0 mr-4">
              <b-form-checkbox id="showTitle"
                v-model="localTopic.showTitle"
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
            v-model="localTopic.body"
            :config="editorConfig"
          />

          <div class="d-flex col-12 text-right">
            <div v-if="!savingData"
              class="btn btn-phoenix-danger btn-sm ms-auto m-2"
              @click="saveData()">
              Отмена
            </div>
            <div v-if="!savingData"
              class="btn btn-phoenix-success btn-sm ms-1 m-2"
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
    localTopic: {},
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
  // background: #132238 !important;
  background-color: rgba(var(--phoenix-soft-rgb), var(--phoenix-bg-opacity)) !important;
  color: #989da3 !important;
}

.ck-editor__editable {
    min-height: 65vh !important;
    border: none;
    // background-color: #061325 !important;
    background-color: rgba(var(--phoenix-100-rgb), var(--phoenix-bg-opacity)) !important;
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