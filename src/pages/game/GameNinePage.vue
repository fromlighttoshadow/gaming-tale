<template>
  <CharacterTitle title="Capitulo uno" />
  <q-page class="flex flex-center"> ONE </q-page>
  <GameNine />
  <VictoryText />
</template>

<script setup>
import CharacterTitle from "src/components/CharacterTitle.vue";
import GameNine from "src/components/game/GameNine.vue";
import VictoryText from "src/components/VictoryText.vue";

defineOptions({
  name: "GameNinePage",
});
</script>
