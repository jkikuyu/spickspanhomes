<template>
  <top-nav />
  <div>
    <slot />
  </div>
</template>

<script setup>
const route = useRoute();
</script>
