<template>
  <div v-if="visual">
    <q-btn @click="visual = false">{{ props.title }}</q-btn>
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
});
</script>
