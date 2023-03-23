<script>
const getSvgIcon = async (name) => {
  const module = await import(`~/public/icons/${name}.svg?raw`);
  return module.default;
};

export default {
  props: {
    name: String,
  },
  data() {
    return {
      svg: null,
    };
  },
  watch: {
    name: {
      async handler(name) {
        this.svg = await getSvgIcon(name);
      },
      immediate: true,
    },
  },
};
</script>

<template>
  <div v-html="svg"></div>
</template>
