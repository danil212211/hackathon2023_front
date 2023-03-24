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
  <div class="px-2">
    <div class="w-full max-w-[620px] lg:w-fit h-fit p-8 lg:p-[65px] glass-xl rounded-lg">
      <div class="w-full w-[428px]">
        <form @submit.prevent="handleLogin" class="space-y-6">
          <div class="text-lg">{{ $t("signin") }}</div>
          <input
            required
            v-model="login"
            class="input appearance-none"
            :placeholder="$t('login')"
          />
          <input
            required
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
