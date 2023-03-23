<script setup lang="ts">
import NavigationBar from "~/components/NavigationBar.vue";
import UserNavigation from "~/components/UserNavigation.vue";
import CreateNavigation from "~/components/CreateNavigation.vue";
import { ModalsContainer } from 'vue-final-modal'
import ShoppingCart from "~/components/ShoppingCart.vue";

</script>
<template>
  <div class="w-full bg-grey-bg min-h-screen relative">
    <Header class="relative z-50"/>
    <div class="px-8 lg:px-0 container mx-auto mt-3 z-0">
      <div class="grid grid-cols-8">
        <div class="hidden lg:block col-span-2">
          <NavigationBar/>
        </div>
        <div class="relative col-span-8 lg:col-span-6">
          <NuxtPage class="w-full pb-2" :key="$route.fullPath" />
        </div>
      </div>
    </div>
  </div>
</template>
