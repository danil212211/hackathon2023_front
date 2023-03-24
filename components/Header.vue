<script setup lang="ts">
import { useUserStore } from "~/stores/user";
import LangOptions from "~/components/LangOptions.vue";

const userStore = useUserStore();
const canShowDropdown = ref(false);
const pressedDropdownButton = ref(false);
const $t= useI18n().t;
const userNavigations = [
  {
    link: "/subscribed-events",
    name: $t("myEvents"),
    icon: "Compass",
  },
  {
    link: "/create-post",
    name: $t("createPost"),
    icon: "Grid Feed Cards",
  },
  {
    link: "/create-event",
    name: $t("createEvent"),
    icon: "Compass",
  },
  {
    link: "/create-vacancy",
    name: $t("createVacancy"),
    icon: "Briefcase Portfolio",
  },
  {
    link: "exit",
    name: $t("signOut"),
    icon: "Backspace",
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
  <div class="sticky relative w-full h-[70px] lg:h-[98px] top-0 bg-transparent">
    <div
      class="absolute z-0 top-0 left-0 w-full h-full glass glass-md border border-b-[3px] border-grey-input"
    />
    <div
      class="px-2 lg:px-0 container relative z-20 mx-auto flex justify-between items-center h-full"
    >
      <AppIcon @click="navigateTo('/')" class="cursor-pointer w-[160px]" />
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
          <div class="mx-auto text-center w-[60px]">
            {{ $t("signin") }}
          </div>
          <Icon name="Forward Arrow" />
        </button>
        <div class="relative" v-else>
          <button
            @click="
              () => {
                if (canShowDropdown === true) {
                  canShowDropdown = false;
                  pressedDropdownButton = false;
                } else {
                  canShowDropdown = true;
                  pressedDropdownButton = true;
                }
              }
            "
            :class="`${canShowDropdown ? 'bg-primary' : ''}`"
            class="relative z-20 rounded-[500px] bg-secondary hover:bg-primary hover:scale-110 transition-all duration-500 w-[50px] h-[50px]"
          ></button>

          <div
            :class="`${
              canShowDropdown ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`"
            class="absolute transition-all -top-5 rounded-md border border-[2px] border-grey-placehold -right-1 lg:-right-4 mt-2 pb-4 pt-18 w-[229px] z-0 glass glass-md space-y-2.5"
            v-click-outside="
              () => {
                if (pressedDropdownButton === true) {
                  pressedDropdownButton = false;
                } else {
                  canShowDropdown = false;
                }
              }
            "
          >
            <button
              @click="handleNavigation(navigation)"
              v-for="navigation in userNavigations"
              class="w-full py-4 px-4 items-center flex justify-start transition-all hover:bg-grey-line active:bg-grey-label gap-x-2.5"
            >
              <div class="shrink-0">
                <Icon :name="navigation.icon" class="w-6 h-6" />
              </div>
              <div class="flex-1 text-start text-sm-bold">
                {{ navigation.name }}
              </div>
            </button>
            <button
              class="w-full py-4 px-4 items-center flex justify-start transition-all hover:bg-grey-line active:bg-grey-label gap-x-2.5"
            >
              <div class="shrink-0">
                <Icon name="World Net" class="w-6 h-6"/>
              </div>

                <div class="flex-1 text-start text-sm-bold">
                  <LangOptions/>
                </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
