<script setup lang="ts">
</script>
<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.3s;
  opacity: 1;
}
.page-enter-from,
.page-leave-to {
  opacity: 0.5;
  filter: blur(32px);
}
</style>
