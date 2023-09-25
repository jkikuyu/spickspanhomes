<template>
  <top-nav />

  <div>
    <div><main-page /></div>
  </div>
</template>

<script setup>
const { $generalStore } = useNuxtApp();
import BaseLayout from "../layouts/BaseLayout.vue";
</script>
