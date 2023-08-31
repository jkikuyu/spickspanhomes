<template>
  <div class="text-center text-[28px] mb-4 font-bold">Sign up</div>
  <div class="px-6 pb-1.5 text-[15px]">Full Name</div>
  <div class="px-6 pb-2">
    <TextInput
      placeholder="Full Name"
      v-model:input="name"
      :autofocus="true"
      :error="errors && errors.name ? errors.name[0] : ''"
    />
  </div>
  <div class="px-6 pb-1.5 text-[15px]">Email</div>
  <div class="px-6 pb-2">
    <TextInput
      placeholder="Email"
      v-model:input="email"
      inputType="email"
      :autofocus="true"
      :error="errors && errors.email ? errors.email[0] : ''"
    />
  </div>

  <div class="px-6 pb-1.5 text-[15px]">Password</div>

  <div class="px-6 pb-2">
    <TextInput
      placeholder="Password"
      v-model:input="password"
      :autofocus="true"
      inputType="password"
      :error="errors && errors.password ? errors.password[0] : ''"
    />
  </div>

  <div class="px-6 pb-1.5 text-[15px]">Confirm password</div>

  <div class="px-6 pb-2">
    <TextInput
      placeholder="Confirm password"
      v-model:input="confirmPassword"
      inputType="password"
      :autofocus="true"
      :error="errors && errors.confirmPassword ? errors.confirmPassword[0] : ''"
    />
  </div>
  <div class="px-6 text-[12px] text-gray-600">Forgot password</div>
  <div class="px-6 pb-2 mt-6">
    <button
      :disabled="!email || !password || !name || !confirmPassword"
      :class="
        !email || !password || !name || !confirmPassword
          ? 'bg-gray-200'
          : 'bg-[#F02C56]'
      "
      @click="register"
      class="w-full text-[17px] font-semibold text-white py-3 rounded-sm"
    >
      Sign up
    </button>
  </div>
</template>

<script setup>
const { $userStore, $generalStore } = useNuxtApp();

let name = ref(null);
let password = ref(null);
let email = ref(null);
let confirmPassword = ref(null);
let errors = ref(null);

const register = async () => {
  errors.value = null;
  try {
    await $userStore.getTokens();
    await $userStore.register(
      name.value,
      email.value,
      password.value,
      confirmPassword.value
    );
    await $userStore.getUser();
    await $generalStore.getRandomUsers("suggested");
    await $generalStore.getRandomUsers("following");

    $generalStore.isLoginOpen = false;
  } catch (error) {
    console.log(error);
    errors.value = error.response.data.errors;
  }
};
</script>
