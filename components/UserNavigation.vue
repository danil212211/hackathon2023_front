<script setup lang="ts">
import {useUserStore} from "~/stores/user";

const runtimeConfig = useRuntimeConfig();
const userStore = useUserStore();
const {data} = await useFetch(`${runtimeConfig.apiBase}/users`, {
  method: "GET",
  params: {
    login: userStore.login
  }
})
</script>
<template>
  <div class="h-20 bg-white card px-4 justify-center cursor-pointer">

    <div v-if="data" @click="()=>{navigateTo(`@${userStore.userLogin}`)}" class="flex items-center gap-x-3 w-full h-full overflow-clip">
      <img class="mask mask-squircle w-10 h-10" :src="`${runtimeConfig.apiBase}${data.avatar}`" />
      <div class="text-lg">{{data.firstName}}</div>
    </div>
    <div v-else @click="() => navigateTo('/login')" class="text-center w-full h-full">Войти</div>
  </div>
</template>
