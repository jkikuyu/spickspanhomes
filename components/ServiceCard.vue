<template>
  <div
    class="bg-white overflow-hidden shadow-md max-w-sm border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-500"
  >
    <img
      src="../assets/images/plumberfixing.jpg"
      alt="plumber"
      class="w-full"
    />
    <div>
      <span class="block pl-2"
        >Plumbing service: Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Iste quis autem cumque inventore?</span
      >
      <button
        @click="$generalStore.isFormWizardOpen = true"
        type="button"
        class="mt-9 mb-2 ml-10 inline-block bottom-0 rounded border-2 px-6 pb-[6px] pt-2 font-medium uppercase leading-normal border-neutral-400 text-neutral-800 transition duration-150 ease-in-out hover:bg-neutral-800 hover:bg-opacity-10 focus:outline-none focus:ring-0 dark:bg-neutral-400 dark:hover:bg-neutral-100"
        data-te-ripple-init
        data-te-ripple-color="light"
      >
        KES 2500
      </button>
      <!--         class="mt-9 ml-10 inline-block bottom-0 rounded border-2 border-neutral-800 px-6 pb-[6px] pt-2 font-medium uppercase leading-normal text-neutral-800 transition duration-150 ease-in-out hover:border-neutral-800 hover:bg-neutral-800 hover:bg-opacity-10 hover:text-neutral-800 focus:border-neutral-800 focus:text-neutral-800 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 dark:hover:bg-neutral-100 dark:border-neutral-100 dark:active:border-neutral-100 dark:hover:bg-opacity-50" -->
    </div>
  </div>
</template>

<script setup>
const { $generalStore } = useNuxtApp();
</script>
