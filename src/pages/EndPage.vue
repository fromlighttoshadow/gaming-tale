<template>
  <q-page class="flex flex-center">
    <div class="container">
      <!-- <div class="row">
        <div class="col"><h1>Fin</h1></div>
      </div>
      <div class="row">
        <div class="col">Has desbloqueado mi portfolio</div>
      </div>
      <div class="row">
        <div class="col"><q-img src="qr.png" width="150%" height="150%" /></div>
      </div> -->
      <div class="row">
        <div class="col">
          <img :src="'/end-' + languageState + '.png'" />
        </div>
      </div>
      <div class="row">
        <div class="col">
          <q-btn flat to="/" sixe="xl"><h1>Home</h1></q-btn>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { useConfigStore } from "src/stores/config-store";
import { ref } from "vue";

defineOptions({
  name: "EndPage",
});
const configStore = useConfigStore();
const languageState = ref("null");
languageState.value = configStore.language;
</script>
