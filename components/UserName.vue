<script setup lang="ts">
const runtimeConfig = useRuntimeConfig();
const props = defineProps(["login"]);
const { data } = await useFetch(`/api/users`, {
  method: "GET",
  params: {
    login: props.login
  },
});
</script>
<template>
  <div>
    {{data.login}}
  </div>
</template>
