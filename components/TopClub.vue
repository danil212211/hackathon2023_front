<script setup lang="ts">
const props = defineProps(["club"]);
</script>
<template>
  <div class="my-8 group">
    <div
        @click="()=>{navigateTo(`/clubs/${club.id}`)}"
      class="h-[216px] w-[330px] cursor-pointer overflow-hidden relative rounded-t-lg rounded-b-md"
    >
      <img
        :src="`/api/public${club.image}`"
        class="w-full h-full object-cover"
      />
      <div
        class="absolute w-full transition-all h-[135px]   px-4 rounded-t-lg rounded-b-md pt-6 pb-3 glass bottom-0 flex flex-col"
        :style="{color: club.textColor}"
      >
        <div>
          {{ club.name }}
        </div>
        <div class="line-clamp-3">
          {{ club.description }}
        </div>
        <div class="flex-1 relative">
          <div class="absolute right-0 bottom-0 ">
            Участников: {{ club.userCount }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
