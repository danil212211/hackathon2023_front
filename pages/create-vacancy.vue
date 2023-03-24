<script setup lang="ts">
import { useUserStore } from "~/stores/user";

definePageMeta({
  layout: "creation",
});
const requirements = ref([]);
const name = ref("");
const description = ref("");
const contactNumber = ref("");
const contactEmail = ref("");
const userStore = useUserStore();
async function handleCreateVacancy() {
  const newVacancy = await useFetch(`api/vacancies/`, {
    method: "POST",
    body: {
      login: userStore.userLogin,
      name: name.value,
      requirements: requirements.value,
      description: description.value,
      contactNumber: contactNumber.value,
      contactEmail: contactEmail.value,
    },
  });
  navigateTo("/vacancies");
}
</script>
<template>
  <div class="px-4 min-w-screen max-w-[528px] mx-auto">
    <div class="px-4 lg:p-[65px] glass-xl relative rounded-lg mx-auto">
      <div >
        <form @submit.prevent="handleCreateVacancy" class="space-y-6 ">
          <div class="text-lg">{{ $t("vacancies") }}</div>

          <input
            required
            v-model="name"
            class="input appearance-none"
            :placeholder="$t('title')"
          />
          <input
            required
            v-model="description"
            class="input appearance-none"
            :placeholder="$t('vacancyDescription')"
          />
          <ListInput v-model="requirements" :placeholder="$t('requirement')" />
          <input
            required
            v-model="contactNumber"
            class="input appearance-none"
            :placeholder="$t('contactNumber')"
          />
          <input
            required
            v-model="contactEmail"
            class="input appearance-none"
            :placeholder="$t('contactEmail')"
          />

          <button
              type="submit"
            class="btn btn-primary w-full"
          >
            {{ $t('create') }}
          </button>
        </form>
      </div>
    </div>
  </div>
</template>
