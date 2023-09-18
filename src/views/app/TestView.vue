<script setup>
import { ref } from "vue";
import draggable from "vuedraggable";

var list1 = ref([
  { name: "John", id: 1 },
  { name: "Joao", id: 2 },
  { name: "Jean", id: 3 },
  { name: "Gerard", id: 4 }
]);

var list2 = ref([
  { name: "Juan", id: 5 },
  { name: "Edgard", id: 6 },
  { name: "Johnson", id: 7 }
]);


</script>

<template>
	<div class="row">
    <!-- LIST1 -->
    <div class="col-3">
      <h3>List 1</h3>
      <draggable
        class="list-group"
        :list="list1"
        group="people"
        @change="log"
        itemKey="name">
        <template #item="{ element, index }">
          <div class="list-group-item">
            {{ element.name }} {{ index }}
          </div>
        </template>
      </draggable>
    </div>
    <!-- LIST2 -->
    <div class="col-3">
      <h3>List 2</h3>
      <draggable
        class="list-group"
        :list="list2"
        group="people"
        @change="log"
        itemKey="name">
        <template #item="{ element, index }">
          <div class="list-group-item">
            {{ element.name }} {{ index }}
          </div>
        </template>
      </draggable>
    </div>
    <!-- RAW DISPLAY LIST1 -->
    <rawDisplay class="col-3" :value="list1" title="List 1" />
    <!-- RAW DISPLAY LIST2 -->
    <rawDisplay class="col-3" :value="list2" title="List 2" />
  </div>
</template>

<style>

</style>