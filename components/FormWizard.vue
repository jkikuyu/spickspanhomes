<template>
  <multi-step-form>
    <!--     <template #[currentSlot]>
      <h1>Get Started -></h1>
    </template> -->
    <template #[step]="{ ask }">
      <label class="text-2xl font-medium">{{ ask }}</label>
    </template>
    <template #[option]="{ desc, value, findService }">
      <div class="flex items-center mb-4">
        <RadioButton
          :name="inputName"
          inputType="radio"
          :value="value"
          @click="findService(value)"
        />
        <label
          class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >{{ desc }}</label
        >
      </div>
    </template>
    <template #footer>
      <button class="btn btn-primary" type="submit">Get OTP</button>
    </template>
  </multi-step-form>
</template>

<script setup>
const { $serviceStore } = useNuxtApp();

$serviceStore.stepId = "ask_1";
$serviceStore.optionId = "option_1";

const inputName = "radio_1";

const step = computed(() => {
  console.log("step-", $serviceStore.stepId);
  return $serviceStore.stepId;
});
const option = computed(() => {
  console.log("option-", $serviceStore.optionId);
  return $serviceStore.optionId;
});
//let services = ref(null);
</script>
