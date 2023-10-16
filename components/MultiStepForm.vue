<template>
  <div>
    <!-- <template #[dynamicSlotName]> -->
    <div>
      <slot
        v-if="selected == 0"
        :name="`ask_${$serviceStore.id}`"
        :ask="$serviceStore.ask"
      />
    </div>
    <div v-for="service in services" :key="service.id">
      <slot :name="`option_${$serviceStore.id}`" :desc="service.desc" />
    </div>
    <div v-if="selected == 2" v-for="service in services" :key="service.id">
      <slot :name="`option_${$serviceStore.id}`" :desc="service.desc"></slot>
    </div>
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
const { $serviceStore, $generalStore } = useNuxtApp();
let { services } = storeToRefs($serviceStore);
let selected = ref(0);
let activeStepIndex = ref(0);
function submitStep() {
  activeStepIndex.value++;
}
watch(
  () => selected.value,
  () => {
    if (selected.value) {
      services = $serviceStore.findService(services, selected.value);
    }
  }
);
</script>
