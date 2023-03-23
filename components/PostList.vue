<script setup lang="ts">
const props = defineProps(["posts"]);
</script>
<template>
<div class="space-y-5 my-5">
  <Post v-for="post in posts" :post="post"/>
</div>
</template>
