import { useNavigationStore } from "~/stores/navigation";
export default defineNuxtRouteMiddleware((to, from) => {
  const navStore = useNavigationStore();
  const glob = to.path.split("/")[1];
  navStore.navigateTo("/" + glob);
});
