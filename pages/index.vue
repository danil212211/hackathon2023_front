<script setup lang="ts">

import {useUserStore} from "~/stores/user";
import Post from "~/components/Post.vue";
import PostBlocks from "~/components/PostBlocks.vue";
import LangOptions from "~/components/LangOptions.vue";

const userStore = useUserStore();
const posts = await useFetch(`/api/posts`,{
  method: "GET",
  query: {
    login: userStore.userLogin
  }
})

</script>
<template>
  <div class="py-5">
    <LangOptions/>
    <PostList :posts="posts.data.value"/>
  </div>
</template>
