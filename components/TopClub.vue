<script setup lang="ts">
const props = defineProps(["club"]);
</script>
<template>
  <div class=" group">
    <div
        @click="()=>{navigateTo(`/clubs/${club.id}`)}"
      class="h-[216px] w-[330px] cursor-pointer overflow-hidden relative rounded-t-lg rounded-b-md"
    >
      <img
        :src="`/api/public${club.image}`"
        class="w-full h-full object-cover"
      />
      <div
        class="absolute w-full transition-all min-h-[135px] group-hover:min-h-[145px] group-hover:pt-8   px-4 rounded-t-lg rounded-b-md pt-6 pb-3 glass glass-md bottom-0 flex flex-col"
        :style="{color: club.textColor}"
      >
        <div class="text-md-bold">
          {{ club.name }}
        </div>
        <div class="line-clamp-3 text-xs">
          {{ club.description }}
        </div>
        <div class="flex-1 relative">
          <div class="absolute right-0 bottom-0 text-xs ">
            {{ $t("cubPreviewSubscribers") }} {{ club.userCount }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
