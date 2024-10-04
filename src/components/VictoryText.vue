<template>
  <div v-if="visual">
    <q-btn :to="props.next">Victoria</q-btn>
    <q-linear-progress :value="progress" class="q-mt-md" />
    <h1>{{ props.title }}</h1>
    <div>{{ props.bodytext }}</div>
  </div>
</template>
<script setup>
import { ref } from "vue";

defineOptions({
  name: "CharacterTitle",
});

const visual = ref(true);

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
  progress: {
    type: Number,
    required: true,
  },
});
</script>
