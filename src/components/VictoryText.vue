<template>
  <div v-if="visual" class="flex flex-center">
    <q-dialog :model-value="true" maximized full-width auto-close>
      <div class="row bg-image items-center justify-center">
        <div class="col text-center">
          <q-img src="/victory-es.png" width="20%" height="20%" />
          <q-img v-if="props.ability" :src="progress" class="q-mt-md" />
          <div class="row">
            <div class="col">
              <h1>{{ props.title }}</h1>
              <div>{{ props.bodytext }}</div>
            </div>
          </div>
          <div class="row">
            <div class="col left-tetx">
              <q-img src="public/yellow-hearth.png" width="20%" height="20%" />
            </div>
          </div>
          <div class="row">
            <div class="col">
              <q-btn flat :to="props.next"><h2>Next</h2></q-btn>
            </div>
          </div>
        </div>
      </div>
    </q-dialog>
  </div>
</template>
<script setup>
import { ref } from "vue";

defineOptions({
  name: "VictoryText",
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
    type: String,
    required: true,
  },
  ability: {
    type: Boolean,
    required: true,
  },
});
</script>
