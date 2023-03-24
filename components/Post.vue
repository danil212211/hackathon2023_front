<script setup lang="ts">
import DateFromNow from "~/components/DateFromNow.vue";
import PostBlocks from "~/components/PostBlocks.vue";

const props = defineProps(["post", "preview"]);
</script>
<template>
  <div class="bg-white shadow-md rounded-lg p-4">
    <div class="flex justify-between">
      <div class="text-grey-label space-x-1 text-xs">
        <div class="inline-block">{{$t("postAuthor")}}</div>
        <UserName class="inline-block" :login="post.userLogin"/>
      </div>

      <ClubTag :clubId="post.clubId"/>
    </div>
    <PostBlocks :blocks="post.text.blocks"/>
  </div>

</template>
