<script setup lang="ts">
const input = ref("");
const output = ref("");

function generateLocale() {
  output.value = "";
  let pairs = input.value.split("\n");
  let i = 0;

  for (let pair of pairs) {
    const pairSplit = pair.split("\t");
    let key  = pairSplit[0];
    let value = pairSplit[1];
    output.value +=`"${key}": "${value}",\n`;
  }

}
</script>
<template>
  <div class="h-[5000px]">
    {{$t("signin")}}
    <textarea v-model="input"/>
    <button class="btn btn-primary" @click="generateLocale">
      Конвертировать
    </button>
    <div>
      {{output}}
    </div>
  </div>
</template>
