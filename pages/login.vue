<script setup lang="ts">
definePageMeta({
  layout: "auth",
});

import { useUserStore } from "~/stores/user";

const userStorage = useUserStore();

const login = ref();
const password = ref();
const isLoading = ref(false);

const runtimeConfig = useRuntimeConfig();

const handleLogin = async () => {
  isLoading.value = true;

  const { data } = await useFetch(`/api/users/signin`, {
    method: "POST",
    body: {
      login,
      password,
    },
  });
  if (data.value === "OK") {
    navigateTo("/");
    userStorage.setUserLogin(login.value);
    console.log(login.value);
  }
  setTimeout(() => {
    isLoading.value = false;
  }, 500);
};
</script>
<template>
  <div class="overflow-hidden mx-auto">
    <Icon name="cq" class=" overflow-hidden  w-screen h-screen top-0 left-0 absolute"/>
    <div class="w-fit h-fit p-4 lg:p-[65px] glass-xl relative rounded-lg mx-auto">
      <div class="w-full lg:w-[428px]">
        <form @submit.prevent="handleLogin" class="space-y-6">
          <div class="text-lg">{{ $t("signin") }}</div>
          <input
            v-model="login"
            class="input appearance-none"
            :placeholder="$t('login')"
          />
          <input
            v-model="password"
            type="password"
            class="input"
            minlength="5"
            :placeholder="$t('password')"
          />
          <button type="submit" class="btn btn-primary w-full">
            {{ $t("signin") }}
          </button>
        </form>
        <div class="mt-7">
          <div class="text-md">{{ $t("dontHaveAccount") }}</div>
          <a class="text-md" href="/register">{{ $t("signup") }}</a>
        </div>
      </div>
    </div>
  </div>
</template>
