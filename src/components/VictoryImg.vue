<template>
  <div class="flex flex-center">
    <q-dialog :model-value="true" maximized>
      <div class="text-right q-ma-md" :style="background">
        <q-btn :to="props.next" size="xl"><h1>Next</h1></q-btn>
      </div>
    </q-dialog>
  </div>
</template>
<script setup>
import { ref } from "vue";

const props = defineProps({
  label: {
    type: String,
    required: true,
  },
  next: {
    type: String,
    required: true,
  },
});
const background = ref(
  "background: url(" +
    props.label +
    "); background-repeat: no-repeat; background-size: contain; background-position: center; height: 100vh; background-color: white"
);
</script>
