<script setup lang="ts">
import {useUserStore} from "~/stores/user";

const userStore = useUserStore();
const events = await useFetch(`/api/events`, {
  method: "GET",
  query: {
    login: userStore.userLogin
  }
});

</script>
<template>
  <div class="space-y-2.5">
    <div class="text-lg">
      {{ $t("events") }}
    </div>
    <Event v-for="event in events.data.value" :event="event"/>
  </div>
</template>
