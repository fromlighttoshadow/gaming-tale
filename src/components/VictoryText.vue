<template>
  <div v-if="visual">
    <q-btn :to="props.next">Victoria</q-btn>
    <q-linear-progress :value="progress" class="q-mt-md" />
    <h1>{{ props.title }}</h1>
    <div>{{ props.bodytext }}</div>
  </div>
</template>
<script setup>
defineOptions({
  name: "CharacterTitle",
});
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  next: {
    type: String,
    required: true,
  },
  bodytext: {
    type: String,
    required: true,
  },
});
</script>
