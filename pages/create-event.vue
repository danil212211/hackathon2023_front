<script setup lang="ts">
import DocumentUpload from "~/components/DocumentUpload.vue";
import { useUserStore } from "~/stores/user";

definePageMeta({
  layout: "creation",
});
const name = ref("");
const description = ref("");
const image = ref("");
const level = ref("");
const date = ref(null);
const place = ref("");
const userStore = useUserStore();
async function handleCreateEvent() {
  console.log(level.value, date.value);
  await useFetch(`/api/events`, {
    method: "POST",
    body: {
      name: name.value,
      description: description.value,
      level: level.value,
      date: date.value,
      place: place.value,
      image: image.value,
      login: userStore.userLogin,
    },
  });
  navigateTo(`/events`);
}
</script>
<template>
  <div class="px-4 min-w-screen max-w-[528px] mx-auto">
    <div class="p-4 lg:p-[65px] glass-xl relative rounded-lg mx-auto">
      <div class="w-full">
        <form @submit.prevent="handleCreateEvent" class="space-y-6">
          <div class="text-lg">{{ $t("event") }}</div>

          <input
            required
            v-model="name"
            class="input appearance-none"
            :placeholder="$t('title')"
          />
          <div class="flex gap-x-3">
            <input
              required
              id="enterDate"
              v-model="date"
              type="date"
              class="input appearance-none"
              :placeholder="$t('date')"
            />

            <select
              required
              class="input cursor-pointer appearance-none"
              v-model="level"
            >
              <option value="" disabled selected>{{ $t("level") }}</option>

              <option value="Городской">{{ $t("level-city") }}</option>
              <option value="Республиканский">{{ $t("level-republic") }}</option>
              <option value="Всероссийский">{{ $t("level-russia") }}</option>
            </select>
          </div>
          <textarea
            required
            v-model="description"
            class="input appearance-none"
            :placeholder="$t('eventDescription')"
          />

          <input
            required
            v-model="place"
            class="flex-1 input appearance-none"
            :placeholder="$t('place')"
          />
          <DocumentUpload class="flex-1" v-model="image">
            {{ $t("eventImage") }}
          </DocumentUpload>
          <button type="submit" class="btn btn-primary w-full">{{ $t("create") }}</button>
        </form>
      </div>
    </div>
  </div>
</template>
