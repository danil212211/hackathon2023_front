import { defineStore, acceptHMRUpdate } from "pinia";
export const useLocaleStore = defineStore("locale", {
    persist:true,
    state: () => ({ activeLang: "ru" }),
    getters: {
        activeLocale: (state) => state.activeLang,
    },
    actions: {
        changeLocale(code) {
            this.activeLang = code;
        },
    },
});
if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useLocaleStore, import.meta.hot));
}
