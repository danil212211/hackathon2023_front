<script setup lang="ts">
const root = ref(null);
const target = ref(null);
const emits = defineEmits(["show"]);
onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(
        (entry) => {
          if (entry.isIntersecting) emits("show");
        },
        {
          threshold: 0.3,
        }
    );
  });
  observer.observe(target.value);
});
</script>

<template>
  <div ref="root">
    <div ref="target">
      <slot></slot>
    </div>
  </div>
</template>
