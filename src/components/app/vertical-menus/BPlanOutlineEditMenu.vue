<script setup>
import { onBeforeMount, computed } from "vue";
import { useStore } from "vuex";
import draggable from "vuedraggable";

// var list1 = ref([
//   { name: "John", id: 1 },
//   { name: "Joao", id: 2 },
//   { name: "Jean", id: 3 },
//   { name: "Gerard", id: 4 }
// ]);
// import { ref, created, computed, onMounted } from "vue";
// import { useStore } from "vuex";
// import draggable from "draggable";

const store = useStore();

// let isEditable = ref(false);
// let scrollSettings = ref({});
// let controlOnStart = ref(true);
// let customChapter = [{ id: '0', title: 'Новая глава', sections: [] }];
// let customSection = [{ id: '0', title: 'Новый раздел', topics:[] }];
// let customTopic = [{ id: '0', title: 'Новый параграф', type: 'textTopic' }];
// let tables = [{ id: 'tb0', title: 'Доходы и расходы', type: 'table', system: true }];
// let charts = [{ id: 'ch0', title: 'Годовые финансовые показатели', type: 'chart', system: true }];

const loadingOutlineDate = computed(() => store.getters.getLoadingOutlineData);
// const currentOutline = computed(() => store.getters.getCurrentOutline);
const outlineTopics = computed(() => store.getters.getOutlineTopics);
// const outlineTables = computed(() => store.getters.getOutlineTables);
// const outlineCharts = computed(() => store.getters.getOutlineCharts);

onBeforeMount(() => {
  // if (currentOutline.length == 0) {
  //   store.dispatch("fetchCurrentOutline");
  // };
  if (outlineTopics.value.length == 0) {
    store.dispatch("fetchEditOutline");
  }
  console.log('onBeforeMount');
});


// onMounted(() => {

// })

</script>

<template>
  <div class="h-100">
    <div class="text-center">
      <div class="btn-group" role="tablist" aria-label="Меню структуры документа">
        <a class="btn btn-secondary active"
          type="button"
          id="topics-tab"
          href="#tab-topics"
          data-bs-toggle="tab"
          role="tab"
          aria-controls="tab-topics"
          aria-selected="true">
          <i class="far fa-file-alt"></i>
        </a>
        <a id="tables-tab"
          class="btn btn-secondary"
          href="#tab-tables"
          type="button"
          role="tab"
          data-bs-toggle="tab"
          aria-controls="tab-tables"
          aria-selected="false">
          <i class="fas fa-th-list"></i>
        </a>
        <a id="charts-tab"
          class="btn btn-secondary"
          href="#tab-charts"
          type="button"
          role="tab"
          data-bs-toggle="tab"
          aria-controls="tab-charts"
          aria-selected="false">
          <i class="fas fa-chart-bar"></i>
        </a>
        <a id="tools-tab"
          class="btn btn-secondary"
          href="#tab-tools"
          type="button"
          role="tab"
          data-bs-toggle="tab"
          aria-controls="tools-tab"
          aria-selected="false">
          <i class="fas fa-tools"></i>
        </a>
      </div>
    </div>
    <div class="tab-content mt-3 mx-2" id="myTabContent">
      <div class="tab-pane fade show active" id="tab-topics" role="tabpanel" aria-labelledby="topics-tab">
        <div v-if="loadingOutlineDate" class="ms-2 mt-3">
          <!-- Loading placeholder -->
          <p class="placeholder-glow"><span class="placeholder placeholder-lg col-10"></span></p>
          <p class="placeholder-glow"><span class="placeholder placeholder-lg col-8"></span></p>
          <p class="placeholder-glow"><span class="placeholder placeholder-lg col-10"></span></p>
          <p class="placeholder-glow"><span class="placeholder placeholder-lg col-8"></span></p>
          <p class="placeholder-glow"><span class="placeholder placeholder-lg col-10"></span></p>
          <p class="placeholder-glow"><span class="placeholder placeholder-lg col-8"></span></p>
        </div>
        <draggable
          class="border-bottom"
          :list="outlineTopics"
          :emptyInsertThreshold="50"
          :sort="false"
          group="people"
          @change="log"
          itemKey="title">
          <template #item="{ element }">
            <div class="row hover-actions-trigger btn-reveal-trigger border-100 py-2 gx-0 cursor-pointer border-top">
              <p class="mb-0">
                <i class="far fa-file-alt fs-1 me-2"></i>
                {{ element.title }}
              </p>
          </div>
          </template>
        </draggable>
      </div>
      <div class="tab-pane fade" id="tab-tables" role="tabpanel" aria-labelledby="tables-tab">
        Таблицы
      </div>
      <div class="tab-pane fade" id="tab-charts" role="tabpanel" aria-labelledby="graphs-tab">
        Графики
      </div>
      <div class="tab-pane fade" id="tab-tools" role="tabpanel" aria-labelledby="tools-tab">
        Прочее
      </div>
    </div>
  </div>
</template>

<style scoped>

.btn {
  --phoenix-btn-color: gray;
}
.btn.active {
  --phoenix-btn-active-color: #fff !important;
}
.topic {
  width: 100%;
  border: 1px solid rgba(145, 145, 145, 0.4);
  padding-top: 0.4rem !important;
}
</style>