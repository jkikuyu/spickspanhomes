<template>
  <main-layout>
    <div class="pt-[80px] w-[calc(100%-90px)] max-w-[690px]">
      <div v-for="post in $generalStore.posts" :key="post">
        <post-main v-if="post" :post="post" />
      </div>
    </div>
  </main-layout>
</template>

<script setup>
const { $generalStore } = useNuxtApp();
import MainLayout from "../layouts/MainLayout.vue";
onMounted(async () => {
  try {
    $generalStore.getAllUsersAndPosts();
  } catch (error) {
    console.log(error);
  }
});
</script>
