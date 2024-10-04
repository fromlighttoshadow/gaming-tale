<template>
  <div class="flex flex-center">
    <q-dialog :model-value="true" maximized auto-close>
      <div class="row bg-image-chapter items-center justify-center">
        <div class="col text-center">
          <h1>{{ props.label }}</h1>
        </div>
      </div>
    </q-dialog>
  </div>
</template>
<script setup>
defineOptions({
  name: "CharacterTitle",
});

const props = defineProps({
  label: {
    type: String,
    required: true,
  },
});
</script>
<style>
.bg-image-chapter {
  background-image: url(../../public/chapter.png);
  background-repeat: no-repeat;
  /*background-size: contain;*/
}
</style>
