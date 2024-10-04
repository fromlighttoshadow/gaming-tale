<template>
  <CharacterTitle title="Capitulo cuatro" />
  <q-page class="flex flex-center"> 4 </q-page>
  <GameFour />
  <VictoryText />
</template>

<script setup>
import CharacterTitle from "src/components/CharacterTitle.vue";
import GameFour from "src/components/game/GameFour.vue";
import VictoryText from "src/components/VictoryText.vue";

defineOptions({
  name: "GameFourPage",
});
</script>
