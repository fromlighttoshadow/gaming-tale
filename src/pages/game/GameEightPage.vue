<template>
  <CharacterTitle title="Capitulo ocho" />
  <q-page class="flex flex-center"> 8 </q-page>
  <GameEight />
  <VictoryText />
</template>

<script setup>
import CharacterTitle from "src/components/CharacterTitle.vue";
import GameEight from "src/components/game/GameEight.vue";
import VictoryText from "src/components/VictoryText.vue";

defineOptions({
  name: "GameEightPage",
});
</script>
