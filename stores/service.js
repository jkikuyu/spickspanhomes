import { defineStore } from "pinia";
import axios from "../plugins/axios";
const $axios = axios().provide.axios;

export const useServiceStore = defineStore("service", {
  state: () => ({
    services: [],
    stepId: "",
    optionId: "",
  }),
  getters: {
    getServicesById: (state) => {
      return () => this.services.filter((service) => service.id === 2);
    },
  },
  actions: {
    findService(id, node) {
      let res = node.filter((n) => n.id == id)[0];
      if (res.id == id) {
        return res;
      } else if (res.children) {
        res.children.forEach((node) => {
          this.findService(id, node);
        });
      }
    },
    async getServiceList() {
      let res = await $axios.get("/services/list");

      this.$state.services = res.data[0];
    },
  },
});
