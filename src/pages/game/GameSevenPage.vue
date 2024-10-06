<template>
  <q-page class="flex flex-center">
    <div class="row">
      <div class="col">
        <!-- <GameTwo /> -->
        <img :src="'/game/game-seven-' + languageState + '.png'" />
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
      :label="'/chapter-title/chapter-seven-' + languageState + '.png'"
    />
    <!-- <VictoryText /> -->

    <VictoryImg
      v-if="fin"
      :label="'/victory/victory-seven-' + languageState + '.png'"
      next="/8"
    />
  </q-page>
  <!-- <CharacterTitle:label="'Capitulo siete" />
  <q-page class="flex flex-center"> 7 </q-page>
  <GameFour />
  <VictoryText /> -->
</template>

<script setup>
import CharacterTitle from "src/components/CharacterTitle.vue";
import GameFour from "src/components/game/GameFour.vue";
import VictoryImg from "src/components/VictoryImg.vue";
import VictoryText from "src/components/VictoryText.vue";
import { useConfigStore } from "src/stores/config-store";
import { ref } from "vue";

defineOptions({
  name: "GameSevenPage",
});
const fin = ref(false);
const configStore = useConfigStore();
const languageState = ref("null");
languageState.value = configStore.language;
</script>
