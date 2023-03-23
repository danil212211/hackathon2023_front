<script setup lang="ts">
import { useUserStore } from "~/stores/user";

const userStore = useUserStore();
const canShowDropdown = ref(false);
const userNavigations = [
  {
    link: "/",
    name: "Мои события",
    icon: "Compass",
  },
  {
    link: "/create-post",
    name: "Создать пост",
    icon: "Grid Feed Cards",
  },
  {
    link: "/",
    name: "Создание событие",
    icon: "Compass",
  },
  {
    link: "/",
    name: "Создать вакансию",
    icon: "Briefcase Portfolio",
  },
  {
    link: "exit",
    name: "Выйти",
    icon: "Briefcase Portfolio",
  },
];
function handleNavigation(navigation) {
  if (navigation.link === "exit") {
    userStore.setUserLogin("");
    navigateTo("/login");
    return;
  }
  navigateTo(navigation.link);
}
</script>
<template>
  <div class="sticky relative w-full h-[98px] top-0  bg-transparent">
    <div class="absolute z-0 top-0 left-0 w-full h-full glass glass-md border border-b-[3px] border-grey-input"/>
    <div class="px-2 lg:px-0 container relative z-20   mx-auto flex justify-between items-center h-full">
      <AppIcon @click="navigateTo('/')" class="cursor-pointer w-[160px] "/>
      <div>
        <button
          @click="
            () => {
              navigateTo('/login');
            }
          "
          v-if="userStore.userLogin === ''"
          class="btn btn-primary"
        >
          <div>
            {{ $t("signin") }}
          </div>
          <Icon name="Forward Arrow" />
        </button>
        <div class="relative" v-else>
          <button
            @click="
              () => {
                canShowDropdown = true;
              }
            "
            class="relative z-20 rounded-[500px] bg-secondary hover:bg-primary transition-all duration-500 w-[50px] h-[50px] "
          >
          </button>

          <div
            class="absolute -top-5 rounded-md border border-[2px] border-grey-placehold -right-1 lg:-right-4 mt-2 pt-18 w-[229px] z-0 glass glass-md space-y-2.5"
            v-click-outside="
              () => {
                canShowDropdown = false;
              }
            "
            v-if="canShowDropdown"
          >
            <button
              @click="handleNavigation(navigation)"
              v-for="navigation in userNavigations"
              class="w-full py-4 px-4 items-center flex justify-start gap-x-2.5"
            >
              <div class="shrink-0">
                <Icon :name="navigation.icon" class="w-6 h-6"/>
              </div>
              <div class="flex-1 text-start text-sm-bold">{{navigation.name}}</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
