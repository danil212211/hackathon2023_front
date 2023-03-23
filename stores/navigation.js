import { defineStore, acceptHMRUpdate } from "pinia";
export const useNavigationStore = defineStore("navigation", {
  state: () => ({ activeLink: "/" }),
  getters: {
    currentNavigation: (state) => state.activeLink,
  },
  actions: {
    navigateTo(link) {
      this.activeLink = link;
    },
  },
});
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useNavigationStore, import.meta.hot));
}
