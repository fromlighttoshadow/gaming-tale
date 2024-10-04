<template>
  <q-page class="flex flex-center bg-image">
    <div class="column">
      <div class="row q-pa-lg"><q-btn flat to="/1">Start</q-btn></div>
      <div class="row q-pa-lg"><q-btn flat>Idioma</q-btn></div>
      <div class="row q-pa-lg"><q-btn flat>Volumen</q-btn></div>
    </div>
  </q-page>
</template>

<script setup>
defineOptions({
  name: "IndexPage",
});
</script>
<style>
.bg-image {
  background-image: url(..\..\src\assets\background-2.png);
  background-repeat: no-repeat;
  /*background-size: contain;*/
}
</style>
