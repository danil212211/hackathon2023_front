<script setup lang="ts">
const props = defineProps(["dateFrom"]);
const nowDate = new Date();
const oneMinute = 1000 * 60;
const oneHour = oneMinute * 60;
const oneDay = oneHour * 24;

const timeDifference = parseInt(nowDate - props.dateFrom);
const timeDifferenceDate = new Date(props.dateFrom);
</script>
<template>
  <div>
    <div v-if="timeDifference < 60 * oneMinute">
      {{ parseInt(timeDifference / oneMinute) }} минут(ы) назад
    </div>
    <div v-else-if="timeDifference < 24 * oneHour">
      {{ parseInt(timeDifference / oneHour) }} часа(ов) назад
    </div>
    <div v-else>{{ timeDifferenceDate.toLocaleDateString("ru-RU") }}</div>
  </div>
</template>
