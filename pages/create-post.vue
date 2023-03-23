<script setup lang="ts">
import { useUserStore } from "~/stores/user";

const data = ref({});
const clubId = ref(0);
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
    <div class="text-lg">Создание поста</div>
    <div class="w-full rounded-lg bg-white p-8">
      <div class="flex justify-end gap-x-5">
        <div>Категория</div>
        <select v-model="clubId">
          <option  v-for="club in subscribedClubs.data.value" :value="club.id">
            {{ club.name }}
          </option>
        </select>
      </div>
      <Editor @contentChanged="changeContent" />
      <button @click="createPost" class="btn btn-primary">Создать пост</button>
    </div>
  </div>
</template>
