<template>
  <q-page class="flex flex-center">
    <div class="row">
      <div class="col">
        <!-- <GameOne /> -->
        <img :src="'/game/game-one-' + languageState + '.png'" />
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
        <q-btn flat @click="fin = true" size="xl">Continue</q-btn>
      </div>
    </div>
    <CharacterTitle
      :label="'/chapter-title/chapter-one-' + languageState + '.png'"
    />

    <VictoryImg
      v-if="fin"
      :label="'/victory/victory-one-' + languageState + '.png'"
      next="/2"
    />
  </q-page>
</template>

<script setup>
import CharacterTitle from "src/components/CharacterTitle.vue";
import GameOne from "src/components/game/GameOne.vue";
import VictoryImg from "src/components/VictoryImg.vue";
import VictoryText from "src/components/VictoryText.vue";
import { useConfigStore } from "src/stores/config-store";
import { ref } from "vue";

defineOptions({
  name: "GameOnePage",
});
const fin = ref(false);
const configStore = useConfigStore();
const languageState = ref("null");
languageState.value = configStore.language;
</script>
