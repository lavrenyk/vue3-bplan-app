<template>

  <div v-if="selectedOutlineChapter ? selectedOutlineChapter.length == 0 : true"
    class="d-flex flex-center content-min-h">
    <div class="text-center py-9">
      <div class="spinner-border mb-3" role="status">
        <span class="visually-hidden">
          Loading...
        </span>
      </div>
      <h5>Загрузка ...</h5>
    </div>
  </div>

  <div class="row mt-6 ms-2 w-100">
    <div class="col-12 col-md-12 pl-5" style="max-width: 800px;"
      v-if="selectedOutlineChapter.length != 0">
      <h2 class="font-weight-bold text-primary">
        {{selectedOutlineChapter.title}}
      </h2>
      <div class="mt-2 mb-3"
        v-for="section in selectedOutlineChapter.sections" :key="section.id">
        <h3 class="text-1000 my-3 text-800">
          {{section.title}}
        </h3>
        <div class="mt-2 topic"
          v-for="topic in section.topics"
          :key="topic.id">
          <div class="d-flex align-items-center topic-head">
            <h4
              class="font-proxima mb-0"
              :class="{
                'd-none text-300': topic.showTitle == false,
                'text-600 mt-2': topic.showTitle == true || !topic.showTitle
              }">
              {{topic.title}}
            </h4>
            <div v-if="topic.type == 'textTopic'"
              class="btn btn-phoenix-secondary btn-sm ms-auto edit-btn"
              @click="setTopicToEdit(topic)"
              v-b-modal.topicItemEdit>
              <i class="far fa-edit"></i>
              Изменить
            </div>
          </div>
          <div v-if="topic.body"
            class="d-flex mt-3">
            <p v-html="topic.body" class="font-proxima"></p>
          </div>
          <div v-else-if="topic.type == 'textTopic'">
            <p class="mt-2 fs--1 text-900 pl-4">
              <i>Абзац еще не начат, самое время приступить!</i>
            </p>
          </div>
          <div v-if="topic.type == 'table'"
            class="d-flex mt-3">
            <component :is="topic.component" />
          </div>
          <div v-if="topic.type == 'chart'"
            class="d-flex mt-2 pb-3">
            <div style="height: 300px; z-index: 2; background: rgba(30, 94, 152, 0.1); border-radius: 3px;">
              <!-- <outline-chart-renderer :chartId="topic.chartId" /> -->
            </div>
          </div>
          <div class="d-flex justify-content-between"
            :class="{'mt-3': topic.body == ''}">
            <div class="comments">
              <i class="far fa-comments me-2"></i>
              <small>Комментарии</small>
            </div>
            <div class="text-600 edited-stamp">
              <small>
                <i class="far fa-edit me-2"></i> 
                среда, 23.03.2020
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Модальное окно для редактирования текстовых данных -->
  <topic-edit-modal :topic="topicToEdit"  />
</template>

<script>
import TopicEditModal from "@/views/app/components/widgets/modals/TopicEditModal.vue"

export default {
  data: () => ({
    textToEdit: '',
    topicToEdit: '',
    componentToRender: 'TablePL',
    editorData: '<p>Content of the editor.</p><blockquote><p>Тест цитаты</p></blockquote><p>&nbsp;</p>',
    chartId: ''
  }),

  components: {
    TopicEditModal,
  },

  computed: {
    currentOutline() {
      return this.$store.getters.currentOutline;
    },
    selectedOutlineChapter() {
      return this.$store.getters.getSelectedOutlineChapter;
    },
  },

  methods: {
    setTopicToEdit(topic) {
      this.topicToEdit = topic
    },

    loadCurrentOutline() {
      this.$store.dispatch('fetchCurrentOutline')
    }
  }


}
</script>

<style lang="scss" scoped>

.topic {
  &:hover {
    // border-radius: 3px;
    // background: #132238;
    // padding: 0.5rem;
    margin-bottom: 1.5rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid lightgray;


    .topic-head {
      padding-bottom: 1rem;
      border-bottom: 1px solid #344050;

      h5 {
        display: inline !important;
      }
    }
    .edit-btn {
      display: inline;
    }
    .comments {
      color: #5E6E82;
      display: inline;
    }
    .edited-stamp {
      display: inline;
    }
  }

  .edit-btn {
    display: none;
  }
  .comments {
      display: none;
      color: #344050;
    }
  .edited-stamp {
    display: none;
  }
}

</style>