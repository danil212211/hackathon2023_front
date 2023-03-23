<script setup lang="ts">
definePageMeta({
  layout: "creation",
});
const requirements = ref([]);
const name = ref("");
const description = ref("");
const contactNumber = ref("");
const contactEmail = ref("");

</script>
<template>
  <div class="w-fit h-fit relative mx-auto">
    <div
        class="absolute right-0 w-[200px] h-[200px] rounded-[500px] top-0 -mt-[30px] -mr-[60px] bg-primary"
    />
    <div
        class="absolute w-[200px] h-[200px] rounded-[500px] left-0 bottom-0 -mb-[20px] -ml-[60px] bg-primary"
    />
    <div
        class="w-fit h-fit p-4 lg:p-[65px] glass-xl relative rounded-lg mx-auto"
    >
      <div class="w-full lg:w-[428px]">
        <form @submit.prevent="handleRegister" novalidate class="space-y-6">
          <div class="text-lg">{{ $t("vacancies") }}</div>

          <input
              v-model="name"
              class="input appearance-none"
              placeholder="Название"
          />
          <input
              v-model="description"
              class="input appearance-none"
              placeholder="Описание вакансии"
          />
          <ListInput v-model="requirements" placeholder="Требование"/>
          <input
              v-model="contactNumber"
              class="input appearance-none"
              placeholder="Телефон для связи"
          />
          <input
              v-model="contactEmail"
              class="input appearance-none"
              placeholder="Почта для связи"
          />

          <button type="submit" class="btn btn-primary w-full">
            Создать
          </button>
        </form>
      </div>
    </div>
  </div>
</template>
