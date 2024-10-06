<template>
  <q-page class="flex flex-center bg-image-front">
    <div class="row">
      <div class="col">
        <div class="row">
          <h2>Nerea González</h2>
        </div>
        <div class="row flex-center">
          <router-link to="/1"
            ><q-img flat src="/start-es.png" width="200px" height="200px"
          /></router-link>
        </div>
        <div class="row flex-center">
          <q-img src="/language-es.png" width="200px" height="200px" />>
        </div>
        <div class="row flex-center">
          <q-img src="/volumen-es.png" width="200px" height="200px" />>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup>
defineOptions({
  name: "IndexPage",
});
</script>
