<script setup lang="ts">
const vacancies = await useFetch(`/api/vacancies`, {
  method: "GET",
});

</script>
<template>
  <div class="space-y-5">
    <div class="text-lg">{{$t("vacancies")}}</div>
    <Vacancy v-for="vacancy in vacancies.data.value" :vacancy="vacancy"/>
  </div>
</template>
