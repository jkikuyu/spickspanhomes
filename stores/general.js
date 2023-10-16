import { defineStore } from "pinia";
import { useUserStore } from "./user";
import axios from "../plugins/axios";

const $axios = axios().provide.axios;

export const useGeneralStore = defineStore("general", {
  state: () => ({
    isLoginOpen: false,
    isEditProfileOpen: false,
    isFormWizardOpen: false,
    selectedPost: null,
    ids: null,
    isBackUrl: "/",
    posts: null,
    suggested: null,
    following: null,
  }),
  actions: {
    bodySwitch(val) {
      if (val) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "visible";
      }
    },
    allLowerCaseNoCaps(str) {
      return str.split(" ").join("").toLowerCase();
    },
    setBackUrl(url) {
      this.isBackUrl = url;
    },
    async hasSessionExpired() {
      await $axios.interceptors.response.use(
        (response) => {
          return response;
        },
        (error) => {
          switch (error.response.status) {
            case 401: //  un
            case 419:
            case 503: // down for maintance
              useUserStore().resetUser();
              window.location.href = "/";
              break;
            case 500:
              alert("Oops, something went wrong. The team has been notified");
              break;
            default:
              return Promise.reject(error);
          }
        }
      );
    },
    async getAllUsersAndPosts() {
      let res = await $axios.get("/api/home");
      this.posts = res.data;
    },
    async getPostById(id) {
      let res = await $axios.get(`/api/posts/${id}`);
      this.$state.selectedPost = res.data.post[0];
      this.$state.ids = res.data.ids;
    },

    async getRandomUsers(type) {
      let res = await $axios.get("/api/get-random-users");
      if (type === "suggested") {
        this.suggested = res.data.suggested;
      }
      if (type === "following") {
        this.following = res.data.following;
      }
    },
    updateSideMenuImage(array, user) {
      /*       for (let i = 0; 1 < array.length; i++) {
        const res = array[i];
        if (res.id == user.id) {
          res.image = user.image;
        }
      } */
    },
  },
  persist: true,
});
