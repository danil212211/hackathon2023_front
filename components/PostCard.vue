<script setup lang="ts">
import DateFromNow from "~/components/DateFromNow.vue";
import PostBlocks from "~/components/PostBlocks.vue";

const props = defineProps(["post", "preview"]);
let firstHeader = false;
let firstImage = false;
let firstParagraph = false;
props.post.text.blocks.forEach((block) => {
  if (!firstImage && block.type === "image" ) {
    firstImage = block;
  }
  if (!firstHeader && block.type === "header") {
    firstHeader = block;
  }
  if (!firstParagraph && block.type === "paragraph") {
    firstParagraph = block;
  }
});

function clickPost() {
  navigateTo({ path: `/posts/${props.post?.id}` });
}
</script>
<template>
  <div class="bg-white rounded-4xl p-4 cursor-pointer" >
    <div
        v-if="firstImage"
        class="mb-4 p-0 child:w-full child:object-cover child:rounded-4xl child:max-h-[280px]"
        @click="clickPost"
        v-html="$editorhtml().parseBlock(firstImage)"
    />
    <div  class="flex items-center gap-x-2.5">
      <UserIcon  @click="()=>{navigateTo(`@${post.UserLogin}`)}" class="w-8 h-8" :login="post.UserLogin" />
      <UserName  @click="()=>{navigateTo(`@${post.UserLogin}`)}" class="text-black" :login="post.UserLogin"/>
      <DateFromNow class="text-gray-400" :date-from="new Date(post.createdAt)"/>
    </div>
    <div @click="clickPost">
      <div v-if="firstHeader" class="px-5" v-html="$editorhtml().parseBlock(firstHeader)" />
      <div v-if="firstParagraph" class="px-5" v-html="$editorhtml().parseBlock(firstParagraph)" />
    </div>
  </div>
</template>
