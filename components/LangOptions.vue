<script setup lang="ts">
import {useLocaleStore} from "~/stores/locales";

const { locale, locales, setLocale } = useI18n();
const availableLocales = computed(() => {
  return locales.value;
});
const localeSelector = ref(null);
const localeStore = useLocaleStore();
console.log("WHAT IS LOVE",locale);
function handleSelect() {
  const newLocaleCode = localeSelector.value.options[localeSelector.value.selectedIndex].value;
  console.log(newLocaleCode)
  setLocale(newLocaleCode);
  localeStore.changeLocale(newLocaleCode);
}
</script>
<template>
  <select ref="localeSelector" @change="handleSelect">
    <option
      v-for="selectLocale in availableLocales"
      :selected="selectLocale.code === localeStore.activeLocale"
      :value="selectLocale.code"
    >
      {{ selectLocale.name }}
    </option>
  </select>
</template>
