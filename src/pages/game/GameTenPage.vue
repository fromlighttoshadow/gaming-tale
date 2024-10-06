<template>
  <q-page class="flex flex-center">
    <div class="row">
      <div class="col">
        <!-- <GameTwo /> -->
        <img src="/chapter/chapter-ten-es.png" />
        <!-- <VictoryText
      title="afasfafafafafafaf"
      bodytext="adsasdfasfasfasf"
      next="/2"
      :progress="'a'"
      :ability="false"
    /> -->
      </div>
    </div>
    <div class="row">
      <div class="col">
        <q-btn flat @click="fin = true">Finalizar juego</q-btn>
      </div>
    </div>
    <CharacterTitle label="/chapter-title/chapter-ten-es.png" />
    <!-- <VictoryText /> -->

    <VictoryImg v-if="fin" label="/victory/victory-ten-es.png" next="/end" />
  </q-page>
  <!-- <CharacterTitle label="Capitulo diez" />
  <q-page class="flex flex-center"> 10 </q-page> -->
</template>

<script setup>
import CharacterTitle from "src/components/CharacterTitle.vue";
import VictoryImg from "src/components/VictoryImg.vue";
import { ref } from "vue";

defineOptions({
  name: "GameTenPage",
});
const fin = ref(false);
</script>
