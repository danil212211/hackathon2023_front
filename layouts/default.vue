<script setup lang="ts">
import NavigationBar from "~/components/NavigationBar.vue";
import { useUserStore } from "~/stores/user";

const userStore = useUserStore();
const navigations = [
  {
    link: "/",
    icon: "Grid Feed Cards",
    name: "feed",
  },
  {
    link: "/vacancies",
    icon: "Briefcase Portfolio",
    name: "vacancies"
  },
  {
    link: "/events",
    icon: "Compass",
    name: "events"
  },
  {
    link: "/clubs",
    icon: "Three People",
    name: "clubs"
  },

]
</script>
<template>
  <div class="w-full bg-grey-bg min-h-screen relative">
    <Header class="relative z-50" />
    <div class="px-8 lg:px-0 container mx-auto mt-3 z-0">
      <div class="grid grid-cols-8">
        <div class="hidden lg:block col-span-2">
          <NavigationBar />
        </div>
        <div class="relative col-span-8 lg:col-span-6">
          <NuxtPage class="w-full pb-12" :key="$route.fullPath" />
        </div>
      </div>
    </div>
    <div
      v-if="userStore.userLogin"
      class="block lg:hidden fixed w-full items-center bottom-0 h-[60px] glass-xl flex justify-around z-50"
    >
      <div
        v-for="navigation in navigations"
        class="cursor-pointer"
        @click="
          () => {
            navigateTo(navigation.link);
          }
        "
      >
        <Icon :name="navigation.icon" class="w-6 h-6 text-grey-off-black" />
      </div>
    </div>
  </div>
</template>
