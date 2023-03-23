<script setup lang="ts">
definePageMeta({
  layout: "auth",
});

import { useUserStore } from "~/stores/user";

const userStorage = useUserStore();

const login = ref("");
const email = ref("");
const password = ref("");
const passwordRepeat = ref("");
const isLoading = ref(false);
const isInvalid = ref(false);
const handleRegister = async () => {
  if (isInvalid.value === true) return;

  isLoading.value = true;
  const { data } = await useFetch("/api/users/signup", {
    method: "POST",
    body: {
      email,
      login,
      password,
    },
  });
  setTimeout(() => {
    isLoading.value = false;
    userStorage.setUserLogin(login.value);
    navigateTo("/login");
  }, 500);
};

const handlePasswordRepeat = () => {
  if (password.value !== passwordRepeat.value && passwordRepeat.value !== "") {
    isInvalid.value = true;
    return;
  }

  isInvalid.value = false;
};
</script>
<template>
  <div class="w-fit  h-fit my-8 relative mx-auto">
    <div
        class="absolute right-0 w-[200px] h-[200px] rounded-[500px] top-0 -mt-[30px] -mr-[60px]  bg-primary"
    />
    <div
        class="absolute  w-[200px] h-[200px] rounded-[500px] left-0 bottom-0 -mb-[20px] -ml-[60px]  bg-primary"
    />
    <div
      class="w-fit h-fit p-4 lg:p-[65px] glass-xl relative rounded-lg  mx-auto"
    >
      <div class="w-full lg:w-[428px]">
        <form @submit.prevent="handleRegister" novalidate class="space-y-6">
          <div class="text-lg">{{ $t("signup") }}</div>
          <input
            v-model="login"
            class="input appearance-none"
            :placeholder="$t('login')"
          />
          <input
            type="email"
            v-model="email"
            class="input appearance-none"
            :placeholder="$t('email')"
          />
          <input
            :class="`${isInvalid ? 'input-error' : ''}`"
            v-model="password"
            type="password"
            class="input"
            minlength="5"
            :placeholder="$t('password')"
          />
          <input
            :class="`${isInvalid ? 'input-error' : ''}`"
            @input="handlePasswordRepeat"
            v-model="passwordRepeat"
            type="password"
            class="input"
            minlength="5"
            :placeholder="$t('passwordRepeat')"
          />
          <button type="submit" class="btn btn-primary w-full">
            {{ $t("signup") }}
          </button>
        </form>
        <div class="mt-7">
          <div class="text-md">{{ $t("haveAccount") }}</div>
          <a class="text-md" href="/login">{{ $t("signin") }}</a>
        </div>
      </div>
    </div>
  </div>
</template>
