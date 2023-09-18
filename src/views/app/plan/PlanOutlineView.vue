<script setup>
import { ref } from "vue";
import draggable from "vuedraggable";

var list2 = ref([
  { title: "Juan", id: 5 },
  { title: "Edgard", id: 6 },
  { title: "Johnson", id: 7 }
]);

</script>

<template>
  <div class="nav-slim">
    <main class="main" id="top">
      <div class="pb-5">
        <div class="row g-4">
          <div class="d-flex flex-center content-min-h">
            <div class="text-center py-9">
              <h1 class="text-800 fw-normal mb-5">
                Структура!
              </h1>
              <draggable
                class="list-group"
                :list="list2"
                group="people"
                @change="log"
                itemKey="title">
                <template #item="{ element, index }">
                  <div class="list-group-item">
                    {{ element.title }} {{ index }}
                  </div>
                </template>
              </draggable>
          </div>
        </div>
        </div>
      </div>
    </main>
  </div>
</template>

<style>

</style>