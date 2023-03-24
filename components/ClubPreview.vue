<script setup lang="ts">
const props = defineProps(["club"]);
</script>
<template>
  <div>
    <div
      @click="
        () => {
          navigateTo(`/clubs/${club.id}`);
        }
      "
      class="h-[216px] w-[216px] cursor-pointer transition-all hover:scale-105 active:scale-95 overflow-hidden  relative rounded-t-lg rounded-b-md"
    >
      <img
        :src="`/api/public${club.image}`"
        class="w-full h-full object-cover"
      />
      <div
        class="absolute left-0 bottom-0 w-[216px] h-[130px]"
        :style="{
          backgroundColor: club.backgroundColor,
        }"
      >
        <div
          class="flex flex-col h-full px-3"
          :style="{ color: club.textColor }"
        >
          <div class="text-md-bold mt-3">
            {{ club.name }}
          </div>
          <div class="line-clamp-3 text-xs">
            {{ club.description }}
          </div>
          <div class="flex-1 relative">
            <div class="absolute right-0 bottom-0 text-grey-off-white text-xs">
              {{ $t("clubPreviewSubscribers") }} {{ club.userCount }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
