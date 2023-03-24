<script setup lang="ts">
import { useUserStore } from "~/stores/user";

const data = ref({});
const clubId = ref(0);
const clubColor = ref("transparent");
watch(clubId, () => {
  const newColorClub = subscribedClubs.data.value.filter(
    (club) => club.id === clubId.value
  );
  clubColor.value = newColorClub[0].backgroundColor;
});
const userStore = useUserStore();
const subscribedClubs = useFetch(
  `/api/clubs/subscribes/${userStore.userLogin}`,
  {
    method: "GET",
  }
);
function changeContent(content) {
  data.value = content;
}
async function createPost() {
  console.log(clubId, data.value);
  setTimeout(async () => {
    const newPost = await useFetch(`/api/posts`, {
      method: "POST",
      body: {
        clubId: clubId.value,
        text: data.value,
        login: userStore.userLogin,
      },
    });
    navigateTo(`/`);
  }, 1500);
}
</script>
<template>
  <div>
    <div class="text-lg">{{ $t("postCreation") }}</div>
    <div class="w-full rounded-lg bg-white p-8">
      <div class="flex justify-end gap-x-5">
        <div>{{ $t("postClub") }}</div>
        <select class="w-fit rounded-md outline-none" v-model="clubId">
          <option class="bg-transparent" v-for="club in subscribedClubs.data.value" :value="club.id">
            {{ club.name }}
          </option>
        </select>
      </div>
      <Editor @contentChanged="changeContent" />
      <button @click="createPost" class="btn btn-primary">
        {{ $t("createPost") }}
      </button>
    </div>
  </div>
</template>
