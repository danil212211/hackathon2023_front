<script setup lang="ts">
definePageMeta({
  layout: "creation",
});
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
          <div class="text-lg">{{ $t("event") }}</div>

          <input
            v-model="login"
            class="input appearance-none"
            placeholder="Название"
          />
          <div class="flex gap-x-3">
            <input
                id="enterDate"
                type="date"
                class="input appearance-none"
                placeholder="Дата проведения"
            />

            <select
              class="input cursor-pointer appearance-none"

            >
              <option value="" disabled selected>Уровень</option>

              <option>Городской</option>
              <option>Республиканский</option>
              <option>Всероссийский</option>

            </select>

          </div>
          <textarea
            v-model="login"
            class="input appearance-none"
            placeholder="Описание мероприятия"
          />
          <input
            v-model="login"
            class="input appearance-none"
            placeholder="Место проведения"
          />

          <button type="submit" class="btn btn-primary w-full">
            Создать
          </button>
        </form>
      </div>
    </div>
  </div>
</template>
