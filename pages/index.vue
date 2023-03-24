<script setup lang="ts">

import {useUserStore} from "~/stores/user";
import Post from "~/components/Post.vue";
import PostBlocks from "~/components/PostBlocks.vue";
import LangOptions from "~/components/LangOptions.vue";
import DocumentUpload from "~/components/DocumentUpload.vue";

const userStore = useUserStore();
const posts = await useFetch(`/api/posts`,{
  method: "GET",
  query: {
    login: userStore.userLogin
  }
})

</script>
<template>
  <div class="py-5 ">
    <div class="text-lg">{{ $t("feed") }}</div>
    <PostList :posts="posts.data.value"/>
  </div>
</template>
