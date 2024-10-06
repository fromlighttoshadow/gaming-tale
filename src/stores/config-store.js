import { defineStore } from "pinia";

export const useConfigStore = defineStore("configStore", {
  state: () => ({
    language: "es",
  }),
  actions: {
    setSpanish() {
      this.language = "es";
    },
    setEnglish() {
      this.language = "en";
    },
  },
});
