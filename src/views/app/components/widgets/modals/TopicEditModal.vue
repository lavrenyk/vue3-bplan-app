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
          <div class="accordion" id="accordionExample" style="height: 60vh;">
              <div class="accordion-item border-300">
                <h2 class="accordion-header" id="headingOne">
                  <button class="accordion-button text-1000" type="button"
                    data-bs-toggle="collapse" data-bs-target="#collapseOne"
                    aria-expanded="true" aria-controls="collapseOne">
                    How long does it take to ship my order?
                  </button>
                </h2>
                <div class="accordion-collapse collapse show" id="collapseOne"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample">
                  <div class="scroll-area pt-2 border-top border-100">
                    <div class="accordion-body text-start text-800 pt-0">
                      <strong>This is the first item&apos;s accordion body.</strong>
                      It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element.
                      These classes control the overall appearance, as well as the showing and hiding via CSS transitions.
                      You can modify any of this with custom CSS or overriding our default variables.
                      It&apos;s also worth noting that just about any HTML can go within the
                      <code>.accordion-body</code>,
                      though the transition does limit overflow.
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
                  <div class="scroll-area pt-2 border-top border-100">
                    <div class="accordion-body text-start text-800 pt-0">
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
              </div>
            <div class="accordion-item border-bottom-0">
              <h2 class="accordion-header" id="headingThree">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                  How long does it take to ship my order?
                </button>
              </h2>
              <div class="accordion-collapse collapse" id="collapseThree" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div class="scroll-area pt-2 border-top border-100">
                  <div class="accordion-body text-start text-800 pt-0">
                    <strong>This is the third item&apos;s accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It&apos;s also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-9 bg-white px-0">
          <div class="d-flex align-items-center">
            <input class="h3 border-0 font-weight-normal p-3 mb-0 me-auto"
              :class="{
                'text-800': updatedTopic.showTitle == true,
                'text-300': updatedTopic.showTitle == false
              }"
              style="font-family: 'Proxima Nova'; background: transparent; outline: none; min-width: 60%"
              type="text"
              ref="title"
              :disabled="!titleEdit"
              v-model.lazy="updatedTopic.title"
            />
            <div class="btn btn-outline-dark btn-sm edit-btn me-3"
              @click="startEditing()">
              <i class="fas fa-pencil-alt"></i>
            </div>
            <div class="form-group form-check mb-0 me-3 ps-0">
              <b-form-checkbox id="showTitle"
                v-model="updatedTopic.showTitle"
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
            v-model="updatedTopic.body"
            :config="editorConfig"
          />

          <div class="d-flex col-12 text-right">
            <div v-if="!savingData"
              class="btn btn-phoenix-success btn-sm ms-auto my-2"
              @click="saveData()">
              Ок, готово!
            </div>
            <div v-if="!savingData"
              class="btn btn-phoenix-danger btn-sm m-2"
              @click="showModal = false">
              Отмена
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

<script setup>
import { ref } from 'vue';

import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import '@ckeditor/ckeditor5-build-classic/build/translations/ru';

let showModal = ref(false);
let savingData = ref(false);
let titleEdit = ref(false);
let updatedTopic = ref({
  showTitle: false,
  title: 'test'
});
let editorConfig = {
  language: 'ru',
  heading: {
    options: [
      { model: 'paragraph', title: 'Paragraph', class: 'ck-heading_paragraph' },
    ]
  },
  disallowedContent: 'blockquote p',
};
let editor = ClassicEditor;


function startEditing() {
  startEditing.value = true;
  setTimeout(() => {
    this.$refs.title.focus()
  }, 100)
}

async function saveData() {
  console.log(updatedTopic.value);
  savingData.value = true;
  await this.$store.dispatch('saveTopicData', updatedTopic.value);
  savingData.value = false;
  showModal.value = false;
}

// export default {
//   props: ['topic'],
//   data: () => ({
//     showModal: false,
//     savingData: false,
//     titleEdit: false,
//     editedTopic: {},
//     editor: ClassicEditor,
//     editorConfig: {
//       language: 'ru',
//       heading: {
//         options: [
//           { model: 'paragraph', title: 'Paragraph', class: 'ck-heading_paragraph' },
//         ]
//       },
//        disallowedContent: 'blockquotep p',
//     }
//   }),

//   methods: {
//     startEditing() {
//       this.titleEdit = true
//       setTimeout(() => {
//         this.$refs.title.focus()
//       }, 100)
//     },
//     async saveData() {
//       console.log(this.topic)
//       this.savingData = true
//       await this.$store.dispatch('saveTopicData', this.topic)
//       this.savingData = false
//       this.showModal = false
//     }
//   }
// }
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

 .scroll-area {
  position: relative;
  height: 58vh;
  overflow-y: scroll;
}

</style>