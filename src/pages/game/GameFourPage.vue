<template>
  <CharacterTitle title="Capitulo uno" />
  <q-page class="flex flex-center"> Four </q-page>
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
