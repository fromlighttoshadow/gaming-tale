<template>
  <q-page class="flex flex-center">
    <div class="row">
      <div class="col">
        <!-- <GameTwo /> -->
        <img src="/chapter/chapter-eight-es.png" />
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
    <CharacterTitle label="/chapter-title/chapter-eight-es.png" />
    <!-- <VictoryText /> -->

    <VictoryImg v-if="fin" label="/victory/victory-eight-es.png" next="/9" />
  </q-page>
  <!-- <CharacterTitle label="Capitulo ocho" />
  <q-page class="flex flex-center"> 8 </q-page>
  <GameEight />
  <VictoryText /> -->
</template>

<script setup>
import CharacterTitle from "src/components/CharacterTitle.vue";
import GameEight from "src/components/game/GameEight.vue";
import VictoryImg from "src/components/VictoryImg.vue";
import VictoryText from "src/components/VictoryText.vue";
import { ref } from "vue";

defineOptions({
  name: "GameEightPage",
});
const fin = ref(false);
</script>
