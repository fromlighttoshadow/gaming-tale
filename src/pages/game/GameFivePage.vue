<template>
  <q-page class="flex flex-center">
    <div class="row">
      <div class="col">
        <!-- <GameTwo /> -->
        <img src="/chapter/chapter-five-es.png" />
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
    <CharacterTitle label="/chapter-title/chapter-five-es.png" />
    <!-- <VictoryText /> -->

    <VictoryImg v-if="fin" label="/victory/victory-five-es.png" next="/6" />
  </q-page>
  <!-- <CharacterTitle label="Capitulo 5" />
  <q-page class="flex flex-center"> 5 </q-page>
  <GameFive />
  <VictoryText /> -->
</template>

<script setup>
import CharacterTitle from "src/components/CharacterTitle.vue";
import GameFive from "src/components/game/GameFive.vue";
import VictoryImg from "src/components/VictoryImg.vue";
import VictoryText from "src/components/VictoryText.vue";
import { ref } from "vue";

defineOptions({
  name: "GameFivePage",
});
const fin = ref(false);
</script>
