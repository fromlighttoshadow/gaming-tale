<template>
  <div class="flex flex-center">
    <q-dialog :model-value="true" maximized auto-close>
      <div class="text-right" :style="background">
        <q-btn :to="props.next">Next</q-btn>
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
    "); background-repeat: no-repeat; background-size: cover; background-position: center; height: 100vh;"
);
</script>
