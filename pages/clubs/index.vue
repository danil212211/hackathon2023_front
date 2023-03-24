<script setup lang="ts">
const allClubs = await useFetch("/api/clubs",{
  method: "GET"
})
const topClubs = await useFetch("/api/clubs/top",{
  method: "GET"
})
const newClubs = await useFetch("/api/clubs/new",{
  method: "GET"
})
</script>
<template>
  <div class="space-y-3">
    <div class="text-lg">{{ $t("topClubs") }}</div>
    <div class="flex flex-wrap gap-3 justify-center lg:justify-start">
      <TopClub v-for="club in topClubs.data.value" :club="club"/>
    </div>
    <div class="text-lg">{{ $t("newClubs") }}</div>
    <div class="flex flex-wrap gap-3 justify-center lg:justify-start">
      <NewClub v-for="club in newClubs.data.value" :club="club"/>
    </div>
    <div class="text-lg">{{$t("allClubs")}}</div>
    <ClubPreviewList :clubs="allClubs.data.value"/>

  </div>
</template>
