<template>
  <div>
    <input
      :type="inputType"
      name="default_radio"
      value=""
      class="bg-gray-100 w-4 h-4 text-blue-600 accent-blue-500 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
    />
  </div>
</template>

<script setup>
const emit = defineEmits(["update:input"]);
const props = defineProps([
  "input",
  "placeholder",
  "inputType",
  "inputName",
  "max",
  "autoFocus",
  "error",
  "selected",
]);
const { input, placeholder, inputType, max, autoFocus, error } = toRefs(props);

onMounted(() => {
  if (autoFocus.value) {
    document.getElementById(`input-$(placeHolder.value)`).focus();
  }
});
const inputComputed = computed({
  get: () => input.value,
  set: (val) => emit("update:input", val),
});
</script>
