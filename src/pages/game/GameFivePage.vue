<template>
  <q-page class="flex flex-center">
    <div class="row">
      <div class="col">
        <!-- <GameTwo /> -->
        <img :src="'/game/game-five-' + languageState + '.png'" />
        <!-- <VictoryText
      title="afasfafafafafafaf"
      bodytext="adsasdfasfasfasf"
      next="/2"
      :progress="'a'"
      :ability="false"
    /> -->
      </div>
    </div>
    <div class="row">
      <div class="col">
        <q-btn flat @click="fin = true">Continue</q-btn>
      </div>
    </div>
    <CharacterTitle
      :label="'/chapter-title/chapter-five-' + languageState + '.png'"
    />
    <!-- <VictoryText /> -->

    <VictoryImg
      v-if="fin"
      :label="'/victory/victory-five-' + languageState + '.png'"
      next="/6"
    />
  </q-page>
  <!-- <CharacterTitle:label="'Capitulo 5" />
  <q-page class="flex flex-center"> 5 </q-page>
  <GameFive />
  <VictoryText /> -->
</template>

<script setup>
import CharacterTitle from "src/components/CharacterTitle.vue";
import GameFive from "src/components/game/GameFive.vue";
import VictoryImg from "src/components/VictoryImg.vue";
import VictoryText from "src/components/VictoryText.vue";
import { useConfigStore } from "src/stores/config-store";
import { ref } from "vue";

defineOptions({
  name: "GameFivePage",
});
const fin = ref(false);
const configStore = useConfigStore();
const languageState = ref("null");
languageState.value = configStore.language;
</script>
