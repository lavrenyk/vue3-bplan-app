<template>
  <div v-if="currentOutline"
    id="navbarVerticalCollapse" class="mt-3">
    <div v-for="(chapter, index) in currentOutline" :key="chapter.id"
      class="nav-item-wrapper">
      <a class="nav-link dropdown-indicator label-1 mx-2 ps-1"
        :href="`#${chapter.id}`"
        role="button"
        data-bs-toggle="collapse"
        :aria-expanded="index == 0"
        :aria-controls="`${chapter.id}`">
        <div class="d-flex align-items-center">
          <div class="dropdown-indicator-icon">
            <span class="fas fa-caret-right"></span>
          </div>
          <span class="nav-link-text fs-1 text-1000">
            {{ chapter.title }}
          </span>
        </div>
      </a>
      <div class="parent-wrapper py-1 label-1">
        <ul class="nav parent collapse"
          :class="{'show': index ==0 }"
          data-bs-parent="#navbarVerticalCollapse" :id="`${chapter.id}`" style="">
          <li v-for="section in chapter.sections" :key="section.id"
            class="nav-item pb-1">
            <a class="nav-link ps-2 py-0"
              href="#"
              data-bs-toggle=""
              :aria-expanded="index == 0">
              <div class="d-flex align-items-center">
                <span class="nav-link-text text-600">
                  {{ section.title }}
                </span>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>

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

  <div v-if="currentOutline">

  </div>
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