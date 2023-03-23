<script setup lang="ts">
const runtimeConfig = useRuntimeConfig();
const props = defineProps(["login"]);
const { data } = await useFetch(`${runtimeConfig.apiBase}/users`, {
  method: "GET",
  params: {
    login: props.login
  },
});
</script>
<template>
  <img
    class="mask mask-squircle"
    :src="`${runtimeConfig.apiBase}${data.avatar}`"
  />
</template>
