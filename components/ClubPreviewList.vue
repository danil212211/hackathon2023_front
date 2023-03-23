<script setup lang="ts">
const props = defineProps(["clubs"]);
</script>
<template>
  <div class="grid grid-cols-3 gap-y-3 gap-x-2.5">
    <ClubPreview class="col-span-3 lg:col-span-1 mx-auto" v-for="club in clubs" :club="club"/>
  </div>
</template>
