<template>
  <CharacterTitle title="Capitulo tres" />
  <q-page class="flex flex-center"> Three </q-page>
  <div class="row">
    <div class="col"><q-img /> /* Nerea */</div>
    <div class="col"></div>
  </div>
  <GameThee />
  <VictoryText />
</template>

<script setup>
import CharacterTitle from "src/components/CharacterTitle.vue";
import GameThee from "src/components/game/GameThee.vue";
import VictoryText from "src/components/VictoryText.vue";

defineOptions({
  name: "GameTheePage",
});
</script>
