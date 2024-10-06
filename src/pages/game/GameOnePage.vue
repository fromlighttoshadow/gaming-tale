<template>
  <q-page class="flex flex-center">
    <div class="row">
      <div class="col">
        <!-- <GameOne /> -->
        <img src="/chapter/chapter-one-es.png" />
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
    <CharacterTitle label="/chapter-title/chapter-one-es.png" />

    <VictoryImg v-if="fin" label="/victory/victory-one-es.png" next="/2" />
  </q-page>
</template>

<script setup>
import CharacterTitle from "src/components/CharacterTitle.vue";
import GameOne from "src/components/game/GameOne.vue";
import VictoryImg from "src/components/VictoryImg.vue";
import VictoryText from "src/components/VictoryText.vue";
import { ref } from "vue";

defineOptions({
  name: "GameOnePage",
});
const fin = ref(false);
</script>
