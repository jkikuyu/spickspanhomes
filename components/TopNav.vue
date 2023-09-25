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
        class="flex absolute nav-links duration-500 z-50 items-center w-full md:static md:min-h-fit left-0 top-[-100%] md:w-auto px-5"
      >
        <ul
          class="flex flex-col md:flex-row md:items-center w-full text-sm text-[#333333] font-light px-3"
        >
          <li
            class="border-r border-r-gray-r-400 relative group px-3 py-2 hover:text-[#FF4646] cursor-pointer"
          >
            <button class="hover:opacity-50 cursor-default">
              Fix or Improve
            </button>
            <div
              class="absolute top-0 -left-2 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[260px] transform"
            >
              <div
                class="relative top-6 p-6 bg-gray-200 rounded-xl shadow-xl w-full"
              >
                <div
                  class="w-10 h-10 bg-gray-200 transform rotate-45 absolute top-0 z-0 -translate-x-4 transition-transform group-hover:translate-x-3 duration-500 ease-in-out rounded-sm"
                ></div>
                <div class="relative z-10">
                  <p
                    class="uppercase tracking-wider font-normal text-gray-500 text-[15px]"
                  >
                    Contractor:
                  </p>
                  <mega-menu />
                  <div>
                    <p
                      class="uppercase tracking-wider text-gray-500 font-normal text-[15px] pt-3"
                    >
                      Projects
                    </p>
                    <div>
                      <div>
                        <ul class="mt-3 text-[15px]">
                          <li>
                            <a
                              href="#"
                              class="text-sm text-[#333333] font-light py-1 block"
                            >
                              Concrete repair
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              class="text-sm text-[#333333] font-light py-1 block"
                            >
                              Window repair
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              class="text-sm text-[#333333] font-light py-1 block"
                            >
                              TV Mounting services
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              class="text-sm text-[#333333] font-light py-1 block"
                            >
                              Fence trimming
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              class="text-sm text-[#333333] font-light py-1 block"
                            >
                              Water Tank Cleaner
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li
            class="border-r border-r-gray-r-400 px-3 hover:text-[#FF4646] cursor-pointer"
          >
            Instant quotes
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
        </ul>
      </div>
      <div>
        <nuxt-link to="/"
          ><button>
            <span
              class="flex items-center gap-6 text-sm text-[#333333] font-light cursor-pointer hover:text-[#FF4646]"
              >Sign in</span
            >
          </button></nuxt-link
        >

        <button
          class="md:hidden rounded-full p-1.5 -mt-[4px] hover:bg-gray-200"
        >
          <Icon
            name="line-md:close-to-menu-transition"
            color="#A1A2A7"
            size="22"
          />
        </button>
        <!-- <Icon name="radix-icons:hamburger-menu" size="22" /> -->
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
