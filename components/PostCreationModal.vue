<script setup lang="ts">
import { useUserStore } from "~/stores/user";
import AppIcon from "~/components/AppIcon.vue";

const file = ref();
const description = ref();
const productLink = ref();
const closeButton = ref();
const userStore = useUserStore();
const runtimeConfig = useRuntimeConfig();
const handleSubmit = () => {
  console.log("huh");
  const { data } = useFetch(`${runtimeConfig.apiBase}/posts`, {
    method: "POST",
    body: {
      login: userStore.login,
      text: postText.value,
    },
  });
  closeButton.value.click();
};
const postText = ref();
function getPostText(data) {
  postText.value = data;
}
</script>
<template>
  <div class="modal" id="post-creation-modal">
    <div
      class="relative w-full desktop:w-[594px] h-[500px] bg-white modal-box relative flex flex-col gap-5"
    >
      <AppIcon class="px-10"/>
      <div class="btn btn-circle absolute right-4 top-2">
        <a ref="closeButton" href="#" class="btn">✕</a>
      </div>
      <div class="text-lg">Создание поста</div>
      <div class="flex-1 flex flex-col">
        <Editor
          class="w-full overflow-x-hidden rounded-lg z-10 flex-1"
          :existing-content="postText"
          @contentChanged="getPostText"
        />
        <button @click="handleSubmit" class="btn btn-primary w-full">
          Опубликовать
        </button>
      </div>
    </div>
  </div>
</template>
