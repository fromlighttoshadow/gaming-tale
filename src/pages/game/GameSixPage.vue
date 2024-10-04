<template>
  <CharacterTitle title="Capitulo uno" />
  <q-page class="flex flex-center"> ONE </q-page>
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
