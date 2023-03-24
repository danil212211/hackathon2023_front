<script setup lang="ts">
import { Collapse } from "vue-collapsed";
const props = defineProps(["vacancy"]);
const isFull = ref(false);
</script>
<template>
  <div class="w-full bg-white shadow-md rounded-lg p-6">
    <div class="text-md-bold">
      {{ vacancy.name }}
    </div>
    <div class="text-xs">
      {{ vacancy.description }}
    </div>
    <Collapse
      :when="isFull"
      style="transition: height 500ms cubic-bezier(0.3, 0, 0.6, 1)"
      class="space-y-2.5"
    >
      <div class="text-sm-bold">Требования</div>
      <ul class="list-disc px-8 space-y-4 text-md">
        <li
          v-for="requirement in vacancy.requirements"
          v-show="requirement.value"
          :key="requirement.id"
        >
          {{ requirement.value }}
        </li>
      </ul>
      <div class="text-sm-bold">Контакты</div>
      <div class="flex items-center gap-x-2.5">
        <Icon name="Device Phone" class="w-6 h-6" />
        <div>{{ vacancy.contactNumber }}</div>
      </div>
      <div class="flex items-center gap-x-2.5">
        <Icon name="World Net" class="w-6 h-6" />
        <div>{{ vacancy.contactEmail }}</div>
      </div>
    </Collapse>
    <button
      @click="
        () => {
          isFull = !isFull;
        }
      "
      class="rounded-[500px] mx-auto bg-grey-line hover:bg-secondary transition-all duration-500 w-8 h-8 flex items-center justify-center"
    >
      <Icon name="ArrowDown" class="w-6 h-6 text-white transition-all" :class="`${isFull ? 'rotate-180' : ''}`" />
    </button>
  </div>
</template>
