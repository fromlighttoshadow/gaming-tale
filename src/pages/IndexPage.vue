<template>
  <q-page class="flex flex-center bg-image-front">
    <div class="row">
      <div class="col">
        <div class="row">
          <h2>Nerea González</h2>
        </div>
        <div class="row flex-center">
          <router-link to="/1"
            ><q-img
              :src="'/button/start-' + languageState + '.png'"
              width="300px"
              height="300px"
          /></router-link>
        </div>
        <div class="row flex-center">
          <q-img
            :src="'/button/language-' + languageState + '.png'"
            @click="languageDialog = true"
          />
        </div>
        <!-- <div class="row flex-center">
          <q-img src="/button/volumen-es.png" width="200px" height="200px" />
        </div> -->
      </div>
    </div>
    <q-dialog :model-value="true" auto-close>
      <q-card
        ><div class="row">
          <div class="col">
            <h2>
              Si la pantalla victoria no se ve completa baja el tamaño del
              navegador al 60%
            </h2>
          </div>
        </div></q-card
      >
    </q-dialog>
    <q-dialog :model-value="languageDialog">
      <q-img src="/button/english-button-es.png" @click="setEnglish()" />
      <q-img src="/button/spanish-button-es.png" @click="setSpanish()" />
    </q-dialog>
  </q-page>
</template>

<script setup>
import { useConfigStore } from "src/stores/config-store";
import { ref } from "vue";

defineOptions({
  name: "IndexPage",
});

const languageDialog = ref(false);
const configStore = useConfigStore();
const languageState = ref("es");
languageState.value = configStore.language;

function setSpanish() {
  configStore.setSpanish();
  languageState.value = configStore.language;
  languageDialog.value = false;
}
function setEnglish() {
  configStore.setEnglish();
  languageState.value = configStore.language;
  languageDialog.value = false;
}
</script>
