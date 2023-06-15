<template>
	<h1>{{ title }}</h1>
	<h2>{{ computedTitle }}</h2>
	<h2>{{ computedTitle = 'dfd' }}</h2>
	<h2>{{ print('test') }}</h2>


</template>

<script setup>

import { ref, onMounted, computed } from 'vue';

const title = ref("start!");

const computedTitle = computed({
	get: () => title.value + ' get',
	set: (value) => {
		title.value = 'set' + value;
	}
});

onMounted(() => {
	console.log("Mounted test!!!");
});

function print(value) {
	return 'Hello from function! ' + value;
}

</script>

<style>

</style>