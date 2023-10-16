<template>
  <multi-step-form>
    <!--     <template #header>
      <h1>Get Started -></h1>
    </template> -->
    <template #ask_1="{ ask }">
      <Label class="text-2xl font-medium">{{ ask }}</Label>
    </template>
    <template #option_1="{ desc }">
      <div class="flex items-center mb-4">
        <FieldTextInput
          :name="inputName"
          v-model:input="selected"
          inputType="radio"
        />
        <Label
          class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >{{ desc }}</Label
        >
      </div>
    </template>
    <template #footer>
      <button class="btn btn-primary" type="submit">Get OTP</button>
    </template>
  </multi-step-form>
</template>

<script setup>
const props = defineProps(["desc"]);
const inputName = "radio_1";
let selected = ref(null);
let value = ref(null);
const { $serviceStore } = useNuxtApp();
</script>
