<template>
  <header class="bg-white">
    <nav
      class="flex justify-between items-center mx-auto bg-[#FAFAFA] border-b h-12 px-5"
    >
      <div>
        <nuxt-link to="/">
          <img
            class="cursor-pointer"
            src="../assets/images/logo.png"
            alt=""
            width="95"
          />
        </nuxt-link>
      </div>
      <div
        id="topnav"
        class="flex absolute nav-links duration-500 z-30 items-center w-full md:static md:min-h-fit min-h-[60vh] left-0 top-[-100%] md:w-auto px-5"
      >
        <ul
          class="flex flex-col md:flex-row md:items-center w-full text-sm text-[#333333] font-light px-3"
        >
          <li
            class="border-r border-r-gray-r-400 px-3 hover:text-[#FF4646] cursor-pointer"
          >
            Fix or Improve
          </li>
          <li
            class="border-r border-r-gray-r-400 px-3 hover:text-[#FF4646] cursor-pointer"
          >
            DIY
          </li>
          <li
            class="border-r border-r-gray-r-400 px-3 hover:text-[#FF4646] cursor-pointer"
          >
            where to buy
          </li>
          <li
            class="border-r border-r-gray-r-400 px-3 hover:text-[#FF4646] cursor-pointer"
          >
            Instant quotes
          </li>
          <li
            class="border-r border-r-gray-r-400 px-3 hover:text-[#FF4646] cursor-pointer"
          >
            another one
          </li>
          <li
            class="border-r border-r-gray-r-400 px-3 hover:text-[#FF4646] cursor-pointer"
          >
            more items
          </li>
        </ul>
      </div>

      <div
        class="flex items-center gap-6 hover:text-[#FF4646] text-sm text-[#333333] font-light cursor-pointer"
      >
        Sign in
      </div>
    </nav>
  </header>
</template>

<script setup>
const { $userStore, $generalStore } = useNuxtApp();
const route = useRoute();
const router = useRouter();

let showMenu = ref(false);
onMounted(() => {
  document.addEventListener("mouseup", function (e) {
    let popupmenu = document.getElementById("popupmenu");
    if (popupmenu === null || !popupmenu.contains(e.target)) {
      showMenu.value = false;
    }
  });
});
const isLoggedIn = () => {
  if ($userStore.id) {
    router.push("/upload");
  } else {
    $generalStore.isLoginOpen = true;
  }
};
const logout = () => {
  console.log("logging out....");
  try {
    $userStore.logout();
    router.push("/");
  } catch (error) {
    console.log(error);
  }
};
</script>
