<template>
  <BaseLayout>
    <template #header>
      <Header />
    </template>

    <template #default>
      <PageContent />
    </template>

    <template #footer>
      <Footer />
    </template>
  </BaseLayout>
</template>
<script setup>
import BaseLayout from "../layouts/BaseLayout.vue";
</script>
