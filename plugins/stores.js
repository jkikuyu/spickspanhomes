import { useUserStore } from "../stores/user";
import { useProfileStore } from "../stores/profile";
import { useGeneralStore } from "../stores/general";
import { useServiceStore } from "../stores/service";

export default defineNuxtPlugin((NuxtApp) => {
  return {
    provide: {
      userStore: useUserStore(),
      profileStore: useProfileStore(),
      generalStore: useGeneralStore(),
      serviceStore: useServiceStore(),
    },
  };
});
