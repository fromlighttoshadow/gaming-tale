<template>
  <div class="flex flex-center">
    <q-dialog :model-value="true" maximized auto-close>
      <div class=".bg-image-chapter" :style="background"></div>
    </q-dialog>
  </div>
</template>
<script setup>
import { ref } from "vue";

defineOptions({
  name: "CharacterTitle",
});
const props = defineProps({
  label: {
    type: String,
    required: true,
  },
});

const background = ref(
  "background: url(" +
    props.label +
    "); background-repeat: no-repeat; background-size: cover; background-position: center; height: 100vh;"
);
</script>
<style>
.bg-image-chapter {
  background-repeat: no-repeat;
}
</style>
