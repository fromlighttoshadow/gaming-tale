<template>
  <CharacterTitle title="Capitulo uno" />
  <q-page class="flex flex-center"> ONE </q-page>
  <GameOne />
  <VictoryText />
</template>

<script setup>
import CharacterTitle from "src/components/CharacterTitle.vue";
import GameOne from "src/components/game/GameOne.vue";
import VictoryText from "src/components/VictoryText.vue";

defineOptions({
  name: "GameOnePage",
});
</script>
