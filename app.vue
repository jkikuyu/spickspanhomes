<template>
  <!--   
    https://nuxt.com/modules/icon   
  https://www.npmjs.com/package/@pinia/nuxt
  https://prazdevs.github.io/pinia-plugin-persistedstate/frameworks/nuxt-3.html
  npm i pinia -f
  -->
  <NuxtPage />
  <form-wizard-overlay v-if="isFormWizardOpen" />
</template>
<script setup>
import { storeToRefs } from "pinia";

const { $generalStore } = useNuxtApp();
const { isFormWizardOpen } = storeToRefs($generalStore);
onMounted(async () => {
  isFormWizardOpen.value = false;
});
</script>
