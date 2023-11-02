<template>
  <div>
    <!-- <template #[dynamicSlotName]> -->
    <div>
      <slot :name="$serviceStore.stepId" :ask="askQ" />
    </div>

    <div v-for="child in children" :key="child.id">
      <slot
        :name="`option_${activeStepIndex}`"
        :desc="child.desc"
        :value="child.id"
        :findService="findService"
      />
    </div>
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useServiceStore } from "~/stores/service";
const { $serviceStore, $generalStore } = useNuxtApp();

let services = reactive([]);
let children = reactive([]);
let activeStepIndex = ref(1);
services = $serviceStore.services;
children = services.children;

function submitStep() {
  activeStepIndex.value++;
}
const askQ = computed(() => {
  if ($serviceStore.stepId) {
    console.log("computed-", services.ask);
    return services.ask;
  }
});

const findService = (id) => {
  if (id) {
    submitStep();
    services = $serviceStore.findService(id, children);
    $serviceStore.stepId = "ask_" + activeStepIndex.value;
    $serviceStore.optionId = "option_" + activeStepIndex.value;

    console.log($serviceStore.stepId);
    children = services.children;
    console.log("services", services.ask);
    askQ;
  }
};
</script>
