import { defineStore, acceptHMRUpdate } from "pinia";
export const useShoppingCart = defineStore("shoppingCart", {
  persist: true,
  state: () => ({ products: [] }),
  getters: { getShoppingCart: (state) => state.products },
  actions: {
    addProduct(product) {
      this.products.push(product);
    },
    clearCart() {
      this.products = [];
    },
    deleteProduct(index) {
      this.products.splice(index, 1);
    },
    navigateTo(link) {
      this.activeLink = link;
    },
  },
});
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useShoppingCart, import.meta.hot));
}
