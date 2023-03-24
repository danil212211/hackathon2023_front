<script setup lang="ts">
const emits = defineEmits(["update:modelValue"]);

const props = defineProps(["accept", "buttonStyle", "initialValue"]);

const documentInput = ref(null);

const activeFileName = ref(props?.initialValue || null);
const activeFileURL = ref(props?.initialValue || null);
const isLoading = ref(false);
const isSuccess = ref(false);
async function uploadDocument() {
  activeFileName.value = documentInput.value.files[0].name;
  isLoading.value = true;

  const formData = new FormData();
  formData.append("document", documentInput.value.files[0]);

  const uploadedDocument = (
    await useFetch(`/api/documents`, {
      method: "POST",

      body: formData,
    })
  ).data.value;
  console.log(uploadedDocument);
  isLoading.value = false;
  if (uploadedDocument.success) {
    isSuccess.value = true;
    activeFileURL.value = uploadedDocument.file.url;
    emits("update:modelValue", activeFileURL.value);
  }
}
async function removeDocument() {
  activeFileURL.value = null;
  activeFileName.value = null;
  isLoading.value = false;
  isSuccess.value = false;
  documentInput.value.value = null;
  emits("update:modelValue", "");
}
</script>
<template>
  <div class="space-y-2.5">
    <button
        type="button"
      class="w-full h-full btn-outline btn-primary relative"
      :class="buttonStyle"
    >
      <h5><slot></slot></h5>
      <input
        ref="documentInput"
        :accept="accept"
        required
        type="file"
        class="absolute cursor-pointer opacity-0 text-[0px] w-full h-full overflow-hidden top-0 left-0"
        @change="uploadDocument"
        @click="removeDocument"
      />
    </button>
    <div v-if="activeFileName" class="flex justify-around">
      <div>
        <NuxtLink v-if="activeFileURL" target="_blank" :href="activeFileURL">
          {{ activeFileName }}
        </NuxtLink>
        <div v-else>
          {{ activeFileName }}
        </div>
      </div>
      <div>
        <Icon
          v-if="isLoading"
          name="Loading"
          class="animate-spin text-app-primary w-6 h-6 my-auto"
        />
        <Icon
          v-else-if="activeFileURL"
          name="ActionMinus"
          @click="removeDocument"
          class="text-app-gray-light-xl hover:text-app-gray-light cursor-pointer w-6 h-6"
        />
      </div>
    </div>
  </div>
</template>
