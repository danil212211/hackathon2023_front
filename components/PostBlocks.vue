<script setup>
const props = defineProps(["blocks"]);
</script>
<template>
  <div>
    <div v-for="block in blocks">
      <div
        v-if="block.type === 'embed'"
        class="mt-2.5 p-0 child:w-full"
        v-html="$editorhtml().parseBlock(block)"
      />
      <div
        v-else-if="block.type === 'image' || block.type ==='dalleImage'"
        class="mt-2.5 p-0 child:w-full child:object-cover child:rounded-4xl child:max-h-[500px]"
        v-html="$editorhtml().parseBlock(block)"
      />
      <div v-else class="px-5" v-html="$editorhtml().parseBlock(block)" />
    </div>
  </div>
</template>
