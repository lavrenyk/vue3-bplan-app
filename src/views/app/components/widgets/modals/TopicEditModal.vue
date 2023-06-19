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
          <div class="accordion" id="helpSection" style="height: 60vh;">
            <div class="accordion-item border-300">
              <h2 class="accordion-header" id="headingOne">
                <button class="accordion-button text-1000" type="button"
                  data-bs-toggle="collapse" data-bs-target="#collapseHelp"
                  aria-expanded="true" aria-controls="collapseOne">
                  Что написать?
                  <span class="badge badge-phoenix badge-phoenix-info fs--3"
                    style="position: absolute; top: 0px; right: -7px;">
                    Подсказка
                  </span>
                </button>
              </h2>
              <div class="accordion-collapse collapse show" id="collapseHelp"
                aria-labelledby="headingOne"
                data-bs-parent="#helpSection">
                <perfect-scrollbar>
                  <div class="card-body pt-2 border-top border-100">
                    <div v-html="topic.desc" class="accordion-body text-start text-800 pt-0 fs--1">
                    </div>
                  </div>
                </perfect-scrollbar>

              </div>
            </div>
            <!-- <div v-for="(example, index) in topic.examples" :key="example.title"
              class="accordion-item" :class="{'border-bottom-0': topic.examples.length - 1 == index}">
              <h2 class="accordion-header" id="headingTwo">
                <button class="accordion-button collapsed" type="button"
                  data-bs-toggle="collapse" :data-bs-target="'#example' + index"
                  aria-expanded="false" aria-controls="collapseTwo">
                  {{ example.title }}
                  <span class="badge badge-phoenix badge-phoenix-info fs--3"
                    style="position: absolute; top: 0px; right: -7px;">
                    Пример {{ index + 1 }}
                  </span>
                </button>
              </h2>
              <div class="accordion-collapse collapse" :id="'example' + index"
                aria-labelledby="headingTwo"
                data-bs-parent="#helpSection">
                <perfect-scrollbar>
                  <div class="pt-2 border-top border-100">
                    <div v-html="example.body" class="accordion-body text-start text-800 pt-0">
                    </div>
                  </div>
                </perfect-scrollbar>
              </div>
            </div> -->
          </div>
        </div>
        <div class="col-9 bg-white px-0">
          <div class="d-flex align-items-center">
            <input class="h3 border-0 font-weight-normal p-3 mb-0 me-auto"
              :class="{
                'text-800': initialTopic.showTitle == true,
                'text-300': initialTopic.showTitle == false
              }"
              style="font-family: 'Proxima Nova'; background: transparent; outline: none; min-width: 60%"
              type="text"
              ref="title"
              :disabled="!titleEdit"
              v-model.lazy="initialTopic.title"
            />
            <div class="btn btn-outline-dark btn-sm edit-btn me-3"
              @click="startEditing()">
              <i class="fas fa-pencil-alt"></i>
            </div>
            <div class="form-group form-check mb-0 me-3 ps-0">
              <b-form-checkbox id="showTitle"
                v-model="initialTopic.showTitle"
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
            v-model="initialTopic.body"
            :config="editorConfig"
          />

          <div class="d-flex col-12 text-right">
            <button
              class="btn btn-phoenix-success btn-sm ms-auto my-2"
              @click="saveData()">
              Сохранить изменения!
            </button>
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
import { ref, defineProps, computed } from 'vue';
import { db, doc, setDoc } from '@/firebase';

import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import '@ckeditor/ckeditor5-build-classic/build/translations/ru';

const props = defineProps(['initialTopic']);

let showModal = ref(false);
let savingData = ref(false);
let titleEdit = ref(false);
let updatedTopic = null;
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

const topic = computed({
  get: () => {
    if (updatedTopic) {
      return updatedTopic.value
    } else {
      console.log('initialTopic ', props.initialTopic.value )
      return props.initialTopic.value
    }
  },
  set(newValue) {
    updatedTopic.value = newValue;
  }
})

function startEditing() {
  startEditing.value = true;
  setTimeout(() => {
    this.$refs.title.focus()
  }, 100)
}

async function saveData() {
  const topic = updatedTopic.value;
  savingData.value = true;

  try {
    const topicDocRef = doc(db, `${topic.path}`);
    await setDoc(
      topicDocRef,
      {
        title: topic.title,
        showTitle: topic.showTitle,
        body: topic.body
      },
      {
        merge: true
      }
    );
  } catch (error) {
    console.log('Unable save topic updated data: ', error)
  }

  savingData.value = false;
  showModal.value = false;
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

 .ps {
  height: 58vh;
 }

</style>

<style scoped>
.accordion-button::after {
  position: relative;
  top: 7px;
}
</style>