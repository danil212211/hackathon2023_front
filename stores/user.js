import { defineStore, acceptHMRUpdate } from "pinia";
export const useUserStore = defineStore("user", {
  persist: {
    storage: persistedState.cookiesWithOptions({
      expires: new Date(new Date().getTime() + 1000*36000*120),
    }),
  },
  state: () => ({
    login: "",
  }),
  getters: {
    userLogin: (state) => state.login,
  },
  actions: {
    setUserLogin(login) {
      this.login = login;
    },
  },
});
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot));
}
