<script setup lang="ts">
const runtimeConfig = useRuntimeConfig();

const emit = defineEmits(["update:modelValue"]);
const fileName = ref();
const documentInput = ref();
const uploadDocument = async (e) => {
  const formData = new FormData();
  formData.append("document", documentInput.value.files[0]);

  const { data } = await useFetch(`${runtimeConfig.apiBase}/documents/`, {
    method: "POST",
    body: formData,
  });
  fileName.value = documentInput.value.files[0].name;
  emit("update:modelValue", data?.value?.file);
  return data.value;
};
</script>
<template>
  <input @change="uploadDocument" ref="documentInput" type="file" />
</template>
