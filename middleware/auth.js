import { useUserStore, useUserStore } from "~/stores/user";

export default defineNuxtRouteMiddleware((to, from) => {
  const useUserStore = useUserStore();
  if (to !== "/" && !useUserStore.id) {
    return navigateTo("/");
  }
});
