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
  <div class="w-fit  h-fit my-8 relative mx-auto">
    <div
      class="absolute right-0 w-[200px] h-[200px] rounded-[500px] top-0 -mt-[30px] -mr-[60px] bg-primary"
    />
    <div
      class="absolute w-[200px] h-[200px] rounded-[500px] left-0 bottom-0 -mb-[20px] -ml-[60px] bg-primary"
    />
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
