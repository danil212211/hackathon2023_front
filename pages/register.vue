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
  <div class="px-2">
    <div class="w-full max-w-[620px] lg:w-fit h-fit p-8 lg:p-[65px] glass-xl rounded-lg">
      <div class="w-full lg:w-[428px]">
        <form @submit.prevent="handleRegister" class="space-y-6">
          <div class="text-lg">{{ $t("signup") }}</div>
          <input
            required
            v-model="login"
            class="input appearance-none"
            :placeholder="$t('login')"
          />
          <input
            required
            type="email"
            v-model="email"
            class="input appearance-none"
            :placeholder="$t('email')"
          />
          <input
            required
            :class="`${isInvalid ? 'input-error' : ''}`"
            v-model="password"
            type="password"
            class="input"
            minlength="5"
            :placeholder="$t('password')"
          />
          <input
            required
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
