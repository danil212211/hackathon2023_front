<script setup lang="ts">
import DateFromNow from "~/components/DateFromNow.vue";
import PostBlocks from "~/components/PostBlocks.vue";

const props = defineProps(["post", "preview"]);
</script>
<template>
  <div class="bg-white rounded-lg p-4">
    <div class="flex justify-end">
      <ClubTag :clubId="post.clubId"/>
    </div>
    <div>

      <div class="inline-block">Автор статьи:</div>
      <UserName class="inline-block" :login="post.userLogin"/>
    </div>
    <PostBlocks :blocks="post.text.blocks"/>
  </div>

</template>
