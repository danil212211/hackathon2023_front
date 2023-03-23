<script setup lang="ts">
import { defineProps } from "@vue/runtime-core";

const props = defineProps(["clubId"]);
const club = await useFetch(`/api/clubs/get/${props.clubId}`, { method: "GET" });
const clubData = club.data.value;
</script>

<template>
  <div :style="{backgroundColor: clubData.backgroundColor,color: clubData.textColor}" class="p-2 text-xs rounded-md w-fit">

    {{club.data.value.name}}
  </div>
</template>