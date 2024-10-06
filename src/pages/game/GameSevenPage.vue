<template>
  <q-page class="flex flex-center">
    <div class="row">
      <div class="col">
        <!-- <GameTwo /> -->
        <img src="/chapter/chapter-seven-es.png" />
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
    <CharacterTitle label="/chapter-title/chapter-seven-es.png" />
    <!-- <VictoryText /> -->

    <VictoryImg v-if="fin" label="/victory/victory-seven-es.png" next="/8" />
  </q-page>
  <!-- <CharacterTitle label="Capitulo siete" />
  <q-page class="flex flex-center"> 7 </q-page>
  <GameFour />
  <VictoryText /> -->
</template>

<script setup>
import CharacterTitle from "src/components/CharacterTitle.vue";
import GameFour from "src/components/game/GameFour.vue";
import VictoryImg from "src/components/VictoryImg.vue";
import VictoryText from "src/components/VictoryText.vue";
import { ref } from "vue";

defineOptions({
  name: "GameSevenPage",
});
const fin = ref(false);
</script>
