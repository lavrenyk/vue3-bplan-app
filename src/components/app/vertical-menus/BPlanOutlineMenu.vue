<template>
  <nav class="navbar navbar-vertical navbar-expand-xl mt-8 border-top border-600">
    <div v-if="currentOutline"
      id="navbarVerticalCollapse" class="mt-3">
      <ul v-for="(chapter, index) in currentOutline"
        :key="chapter.id"
        class="navbar-nav flex-column">
        <li class="nav-item fs-1">
          <a v-b-toggle="`${chapter.id}`"
            class="nav-link dropdown-indicator"
            :href= "chapter.id"
            data-toggle="collapse"
            role="button" aria-expanded="false"
            :aria-controls="chapter.id"
            @click.prevent="showChapter(index)">
            <div class="d-flex align-items-center">
              <span>{{chapter.title}}</span>
            </div>
          </a>
          <b-collapse :id="`${chapter.id}`"  :visible="index == 0" accordion="chapters-list">
            <ul v-for="section in chapter.sections"
              :key="section.id"
              class="nav collapse show"
              data-parent="#navbarVerticalCollapse">
              <li class="nav-item">
                <a class="nav-link"
                  @click.prevent="showChapter(index)">
                  {{section.title}}
                </a>
              </li>
            </ul>
          </b-collapse>
        </li>
      </ul>

      <div class="px-3 px-xl-0 mt-3">
        <hr class="border-300 my-2">
      </div>

     <div class="alert alert-light mt-5">
        <h6 class="alert-heading font-weight-bold border-bottom mb-2 pb-2">
          Структура документа
        </h6>
        <p class="fs--2 mb-2">
          Выбирете раздел бизнес-плана для просмотра и редактирования.
        </p>
        <p class="fs--2 mb-2">
          Для изменения структуры документы, перейдите в раздел меню - "Структура"
        </p>
      </div>
    </div>
  </nav>
</template>

<script>
// import { reactive } from 'vue';

export default {
  data: () => ({
    isEditing: false,
  }),
  async created() {
    if (!this.currentOutline) {
      await this.$store.dispatch('fetchCurrentOutline');
    }
  },

  mounted() {
    this.showChapter(0);
  },

  updated() {
    this.showChapter(0);
  },

  computed: {
    currentOutline() {
      let currentOutline = this.$store.getters.getCurrentOutline;
      console.log(
        "show current outline in the menu!",
        currentOutline);
      return currentOutline;
    }
  },
  methods: {
    showChapter(index) {
      this.$store.commit('selectOutlineChapter', index);
    }
  },

}
</script>

<style lang="css" scoped>

</style>