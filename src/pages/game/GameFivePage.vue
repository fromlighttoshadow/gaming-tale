<template>
  <CharacterTitle label="Capitulo 5" />
  <q-page class="flex flex-center"> 5 </q-page>
  <GameFive />
  <VictoryText />
</template>

<script setup>
import CharacterTitle from "src/components/CharacterTitle.vue";
import GameFive from "src/components/game/GameFive.vue";
import VictoryText from "src/components/VictoryText.vue";

defineOptions({
  name: "GameFivePage",
});
</script>
