<template>
  <CharacterTitle label="Capitulo dos" />
  <q-page class="flex flex-center"> TWO </q-page>
  <GameTwo />
  <VictoryText />
</template>

<script setup>
import CharacterTitle from "src/components/CharacterTitle.vue";
import GameTwo from "src/components/game/GameTwo.vue";
import VictoryText from "src/components/VictoryText.vue";

defineOptions({
  name: "GameTwoPage",
});
</script>
