<template>
  <q-page class="flex flex-center">
    <div class="row">
      <div class="col">
        <!-- <GameTwo /> -->
        <img src="/chapter/chapter-six-es.png" />
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
    <CharacterTitle label="/chapter-title/chapter-six-es.png" />
    <!-- <VictoryText /> -->

    <VictoryImg v-if="fin" label="/victory/victory-six-es.png" next="/7" />
  </q-page>
  <!-- <CharacterTitle label="Capitulo seis" />
  <q-page class="flex flex-center"> 6 </q-page>
  <GameSix />
  <VictoryText /> -->
</template>

<script setup>
import CharacterTitle from "src/components/CharacterTitle.vue";
import GameSix from "src/components/game/GameSix.vue";
import VictoryImg from "src/components/VictoryImg.vue";
import VictoryText from "src/components/VictoryText.vue";
import { ref } from "vue";

defineOptions({
  name: "GameSixPage",
});
const fin = ref(false);
</script>
