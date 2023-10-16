import { defineStore } from "pinia";
import axios from "../plugins/axios";
const $axios = axios().provide.axios;

export const useServiceStore = defineStore("service", {
  state: () => ({
    id: 1,
    desc: "plumbing",
    ask: "Do you want to install or repair?",
    services: [
      {
        id: 2,
        parent: 1,
        desc: "Repair",
        ask: "What needs to be repaired?",
        services: [
          {
            id: 4,
            parent: 2,
            desc: "Sink",
            ask: "What issue has been noticed?",
            services: [
              { id: 5, parent: 4, desc: "Tap Leak" },
              { id: 6, parent: 4, desc: "No water flow" },
              { id: 7, parent: 4, desc: "Clogged or slow drain" },
              { id: 8, parent: 4, desc: "Leaking drain pipe below sink" },
            ],
          },
          {
            id: 9,
            parent: 2,
            desc: "Toilet",
            services: [
              { id: 10, parent: 4, desc: "Loose flush handle" },
              { id: 11, parent: 4, desc: "Toilet flusher not working" },
              {
                id: 12,
                parent: 4,
                desc: "Water pouring out of the overflow tube",
              },
              {
                id: 12,
                parent: 4,
                desc: "Toilet content not fully flushed",
              },
            ],
          },
        ],
      },
      {
        id: 3,
        parent: 1,
        desc: "Installation",
        services: [
          {
            id: 20,
            parent: 3,
            desc: "Sink",
            services: [
              { id: 21, parent: 20, desc: "Pedestal" },
              { id: 22, parent: 20, desc: "Top mount" },
            ],
          },
        ],
      },
    ],
  }),
  actions: {
    findService(arrElement, matchingID) {
      if (arrElement._id === matchingID) {
        return arrElement;
      } else if (arrElement.children.length) {
        let services = null;
        arrElement.children.forEach((element) => {
          services = findServices(element, matchingID);
        });
        return services;
      }
      return null;
    },
  },
});
