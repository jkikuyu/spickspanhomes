<template>
  <div
    id="editprofileoverlay"
    class="fixed flex justify-center pt-14 md:pt-[105px] z-50 top-0 left-0 w-full h-full bg-black bg-opacity-50 overflow-auto"
  >
    <div
      :class="uploadedImage ? 'h-[580px]' : 'h-[655px]'"
      class="relative bg-white w-full max-w-[700px] sm:h-[580px] h-[655px] mx-3 p-4 rounded-lg mb-10"
    >
      <div
        class="absolute flex items-center justify-between w-full p-5 left-0 top-0 border-b border-b-gray-300"
      >
        <div class="text-[22px] font-medium">Edit profile</div>
        <button @click="$generalStore.isEditProfileOpen = false">
          <Icon name="mdi:close" size="25" />
        </button>
      </div>
      <div
        class="h-[calc(500px-200px)]"
        :class="uploadedImage ? 'mt-[58px]' : 'mt-16'"
      >
        <div v-if="!uploadedImage">
          <div
            id="profilephotoselection"
            class="flex flex-col border-b sm:h-[118px] h-[145px] px-1.5 py-2 w-full"
          >
            <div
              class="font-semibold text-[15px] sm:mb-0 mb-1 text-gray-700 sm:w-[160px] sm:text-left text-center"
            >
              Profile photo
            </div>
            <div class="flex items-center justify-center sm:-mt-6">
              <label for="image" class="relative cursor-pointer">
                <img :src="userImage" class="rounded-full" width="95" />
                <div
                  class="absolute bottom-0 right-0 rounded-full bg-white shadow-xl border p-1 border-gray-300 inline-block w-[32px]"
                >
                  <Icon
                    name="ph:pencil-simple-line-bold"
                    size="17"
                    class="-mt-1 ml-0.5"
                  />
                </div>
              </label>
              <input
                type="file"
                class="hidden"
                id="image"
                @input="getUploadedImage"
                accept="image/png, image/jpeg, image/jpg"
              />
            </div>
          </div>
          <div
            class="flex flex-col border-b sm:h-[118px] px-1.5 py-2 mt-1.5 w-full"
          >
            <div
              class="font-semibold text-[15px] sm:mb-0 mb-1 text-gray-700 sm:w-[160px] sm:text-left text-center"
            >
              User name
            </div>
            <div class="flex items-center justify-center sm:-mt-6">
              <div class="sm:w-[68%] w-full max-w-md">
                <TextInput
                  placeholder="Username"
                  v-model:input="userName"
                  inputType="text"
                  max="30"
                />
                <div class="text-11px text-gray-500 mt-4">
                  Usernames can only contain letters, numbers underscores and
                  periods. Changing your username will also change your profile
                  link.
                </div>
              </div>
            </div>
          </div>
          <div
            id="biosection"
            class="flex flex-col sm:h-[130px] px-1.5 py-2 mt-2 w-full"
          >
            <div
              class="font-semibold text-[15px] sm:mb-0 mb-1 text-gray-700 sm:w-[160px] sm:text-left text-center"
            >
              Bio
            </div>
            <div class="flex items-center justify-center sm:-mt-6">
              <div class="sm:w-[60%] w-full max-w-md">
                <textarea
                  class="resize-none w-full bg-[#F1F1F2] text-gray-800 border border-gray-300 rounded-md py-2.5 px-3 focus:outline-none"
                  v-model="userBio"
                  maxlength="80"
                  cols="30"
                  rows="4"
                ></textarea>
                <div v-if="userBio" class="text-[11px] text-gray-500">
                  {{ userBio.length }}/80
                </div>
              </div>
            </div>
          </div>
        </div>
        <div v-else class="w-full h-[430px]">
          <Cropper
            class="h-[430px]"
            ref="cropper"
            :stencil-component="CircleStencil"
            :src="uploadedImage"
          />
        </div>
      </div>
      <div
        id="buttonselection"
        class="absolute p-3 left-0 bottom-0 border-t border-t-gray-300 w-full"
      >
        <div
          id="updateinfobuttons"
          v-if="!uploadedImage"
          class="flex items-center justify-end"
        >
          <button
            @click="$generalStore.isEditProfileOpen = false"
            class="flex items-center border rounded-sm px-3 py-[6px] hover:bg-gray-100"
          >
            <span class="px-2 font-medium text-[15px]">Cancel</span>
          </button>
          <button
            :disabled="!isUpdated"
            @click="updateUserInfo"
            :class="isUpdated ? 'bg-[#F02C56]' : 'bg-gray-200'"
            class="flex items-center bg-[#F02C56] text-white border rounded-md ml-3 px-3 py-[6px]"
          >
            <span class="mx-4 font-medium text-[15px]">Apply</span>
          </button>
        </div>
        <div id="cropperbuttons" v-else class="flex items-center justify-end">
          <button
            @click="uploadedImage = null"
            class="flex items-center rounded-sm px-3 py-[16px] hover:bg-gray-100"
          >
            <span class="px-2 font-medium text-[15px]">Cancel</span>
          </button>
          <button
            @click="cropAndUpdateImage"
            class="flex items-center bg-[#F02C56] text-white border rounded-md ml-3 px-3 py-[6px]"
          >
            <span class="mx-4 font-medium text-[15px]">Apply</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Cropper, CircleStencil } from "vue-advanced-cropper";

import "vue-advanced-cropper/dist/style.css";
import { storeToRefs } from "pinia";
const route = useRoute();
const { $generalStore, $userStore, $profileStore } = useNuxtApp();
const { name, bio, image } = storeToRefs($userStore);

let file = ref(null);
let cropper = ref(null);
let uploadedImage = ref(null);
let userImage = ref(null);
let userName = ref(null);
let userBio = ref(null);
let isUpdated = ref(false);

onMounted(() => {
  userName.value = name.value;
  userBio.value = bio.value;
  userImage.value = image.value;
});
const getUploadedImage = (e) => {
  file.value = e.target.files[0];
  uploadedImage.value = URL.createObjectURL(file.value);
};
const cropAndUpdateImage = async () => {
  const { coordinates } = cropper.value.getResult();

  let data = new FormData();

  data.append("image", file.value || "");
  data.append("height", coordinates.height || "");
  data.append("width", coordinates.width || "");
  data.append("left", coordinates.left || "");
  data.append("top", coordinates.top || "");
  try {
    await $userStore.updateUserImage(data);
    await $userStore.getUser();
    await $profileStore.getProfile(route.params.id);

    //$generalStore.updateSideMenuImage($generalStore.suggested, $userStore);

    //$generalStore.updateSideMenuImage($generalStore.following, $userStore);
    userImage = image.value;

    uploadedImage.value = null;
  } catch (error) {
    console.log(error);
  }
};
const updateUserInfo = async () => {
  try {
    await $userStore.updateUser(userName.value, userBio.value);
    await $userStore.getUser();
    await $profileStore.getProfile(route.params.id);

    userName.value = name.value;
    userBio.value = bio.value;
    setTimeout(() => {
      $generalStore.isEditProfileOpen = false;
    }, 100);
  } catch (error) {
    console.log(error);
  }
};

watch(
  () => userName.value,
  () => {
    if (!userName.value || userName.value === name.value) {
      isUpdated.value = false;
    } else {
      isUpdated.value = true;
    }
  }
);
watch(
  () => userBio.value,
  () => {
    if (!userName.value || userBio.value.length < 1) {
      isUpdated.value = false;
    } else {
      isUpdated.value = true;
    }
  }
);
</script>
