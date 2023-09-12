<template>
  <main-layout>
    <div class="pt-[20px] pl-40 w-[calc(100%-90px)] max-w-[1200px]">
      <div><post-main /></div>
    </div>
  </main-layout>
</template>

<script setup>
const { $generalStore } = useNuxtApp();
import MainLayout from "../layouts/MainLayout.vue";
</script>
