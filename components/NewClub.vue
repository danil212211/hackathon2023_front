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
      class="h-[184px] w-[330px] cursor-pointer overflow-hidden relative group overflow-hidden rounded-lg"
    >
      <img
        class="w-full h-full object-cover z-0 absolute"
        :src="`/api/public${club.image}`"
      />
      <div
        class="absolute h-full w-[240px] right-0 rounded-lg glass transition-all group-hover:right-[90px] duration-500"
      />
      <div
        class="absolute h-full w-[212px] px-10 text-clip absolute right-0 z-20"
      >
        <div
          class="h-full flex flex-col justify-center items-center "
          :style="{ color: club.textColor }"
        >
          <div class="text-md-bold">
            {{ club.name }}
          </div>
          <div class="line-clamp-3 text-xs">
            {{ club.description }}
          </div>
        </div>
      </div>
      <Icon
        name="NewClub"
        class="absolute h-full w-auto right-0 z-10"
        :style="{ color: club.backgroundColor }"
      />
    </div>
  </div>
</template>
