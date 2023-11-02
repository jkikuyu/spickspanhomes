<template>
  <div
    id="formwizardoverlay"
    class="fixed flex items-center justify-center z-50 top-0 left-0 w-full h-full bg-black bg-opacity-50"
  >
    <div class="relative bg-white w-full max-w-[470px] h-[90%] rounded-lg">
      <div class="w-full bg-gray-200 rounded-full h-1.5 dark:bg-gray-700">
        <div class="bg-blue-600 h-1.5 rounded-full" style="width: 10%"></div>
      </div>

      <div class="flex">
        <div class="justify-center mx-auto">
          <img src="../assets/images/logo.png" alt="" width="95" />
        </div>
        <div>
          <button
            @click="$generalStore.isFormWizardOpen = false"
            class="p-1.5 rounded-full bg-gray-100 z-50"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 26 26"
              fill="currentColor"
              class="h-5 w-5"
            >
              <path
                d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
              />
            </svg>
          </button>
        </div>
      </div>
      <div class="p-4">
        <form-wizard v-if="isNextStep" />
      </div>
      <!--       <div
        class="absolute inline-flex items-center justify-center left-0 bottom-0 mb-6 w-full rounded px-6 pb-[6px]"
      >
        <button
          v-if="isPrevStep"
          @click="prevStep"
          class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
        >
          <span>Prev</span>
        </button> -->
      <!--         <button
          @click="isNextStep = !isNextStep"
          class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r"
        >
          <span v-if="isNextStep">Next</span>
        </button>
      </div> -->
    </div>
  </div>
</template>

<script setup>
/* const { $generalStore, $serviceStore } = useNuxtApp();
let isNextStep = ref(true);
let isPrevStep = ref(false);
const prevStep = () => {};
const nextStep = () => {}; */
try {
  await $serviceStore.getServiceList();
} catch (error) {
  console.log(error);
}
</script>
