<script setup lang="ts">
const { locale, locales, setLocale } = useI18n();
const availableLocales = computed(() => {
  return locales.value;
});
const localeSelector = ref(null);
function handleSelect() {
  setLocale(localeSelector.value.options[localeSelector.value.selectedIndex].value);
}
</script>
<template>
  <select ref="localeSelector" @change="handleSelect">
    <option
      v-for="selectLocale in availableLocales"
      :selected="locale === selectLocale"
      :value="selectLocale.code"
    >
      {{ selectLocale.name }}
    </option>
  </select>
</template>
