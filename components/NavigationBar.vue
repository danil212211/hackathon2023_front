<script setup lang="ts">

import {useNavigationStore} from "~/stores/navigation";
import AppIcon from "~/components/AppIcon.vue";

const navStore = useNavigationStore();
const router = useRouter();
async function navigate(link) {
  navStore.navigateTo(link);
  await navigateTo(link);
}
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
  <div class="sticky  top-[112px] space-y-2.5 px-2">
    <button class="h-[56px] w-full rounded-md px-4 transition-all " @click="navigate(navigation.link)" v-for="navigation in navigations" :class="`${navStore.currentNavigation === navigation.link ? 'text-grey-off-white btn-primary' : 'text-primary bg-transparent py-4 hover:bg-primary hover:text-grey-off-white'}`">
      <div class="flex h-full w-full items-center gap-x-4">
        <Icon :name="navigation.icon" class="w-6 h-6"/>
        <div class=" text-sm-bold">
          {{$t(navigation.name)}}
        </div>
      </div>
    </button>
  </div>
</template>
