<template>
  <q-page class="flex flex-center bg-image">
    <CharacterTitle label="Capitulo uno" />
    <GameOne />
    <VictoryText title="" bodytext="" next="/2" :progress="1" />
  </q-page>
</template>

<script setup>
import CharacterTitle from "src/components/CharacterTitle.vue";
import GameOne from "src/components/game/GameOne.vue";
import VictoryText from "src/components/VictoryText.vue";

defineOptions({
  name: "GameOnePage",
});
</script>
<style>
.bg-image {
  background-image: url(../../public/background-2.png);
  background-repeat: no-repeat;
  /*background-size: contain;*/
}
</style>
