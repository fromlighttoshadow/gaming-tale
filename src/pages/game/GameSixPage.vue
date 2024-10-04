<template>
  <CharacterTitle label="Capitulo seis" />
  <q-page class="flex flex-center"> 6 </q-page>
  <GameSix />
  <VictoryText />
</template>

<script setup>
import CharacterTitle from "src/components/CharacterTitle.vue";
import GameSix from "src/components/game/GameSix.vue";
import VictoryText from "src/components/VictoryText.vue";

defineOptions({
  name: "GameSixPage",
});
</script>
