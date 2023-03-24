<script setup lang="ts">

function getNewInput() {
  return {
    value: "",
    id: Math.floor(Math.random() * 10000),
  };
}
const props = defineProps({
  placeholder: {
    type: String,
    default: "",
  },
  name: {
    type: String,
    default: "",
  },
  initialValue: {
    type: Array,
    required: false,
  },
});
const emits = defineEmits(["update:modelValue"]);
const inputArray = ref([]);
onBeforeUpdate(() => {
  inputArray.value = [];
});

const list = ref(
    props.initialValue || [
      {
        value: "",
        id: 0,
      },
    ]
);
async function handleEnter() {
  list.value.push(getNewInput());
  await nextTick();
  inputArray.value[inputArray.value.length - 1].focus();
}
async function handleClick(index) {
  if (index === list.value.length - 1) {
    list.value.push(getNewInput());
  }
}
function handleDelete(id, el) {
  console.log(el);
  if (id !== 0) {
    const input = list.value.findIndex((value) => value.id === id);
    if (input !== -1 && list.value[input].value === "") {
      list.value.splice(input, 1);
      inputArray.value[input - 1].focus();
    }
  } else if (
      list.value.length >= 2 &&
      (list.value[0].value === "" || el.key === "Delete")
  ) {
    handleDelete(list.value[1].id);
  }
}
watch(
    () => list.value,
    () => {
      emits("update:modelValue", list.value);
    },
    { deep: true }
);
const mounted = ref(false);
onMounted(() => {
  mounted.value = true;
});
</script>
<template>
  <div>
    <TransitionGroup
        v-if="mounted"
        class="duration-700"
        enter-from-class="opacity-0 translate-x-5"
        enter-to-class="opacity-1"
        leave-from-class="opacity-1"
        leave-to-class="opacity-0 translate-x-5"
    >
      <div
          v-for="(input, index) in list"
          :key="input.id"
          class="flex items-center group h-full gap-4 mb-5 duration-700 relative"
      >
        <h2>·</h2>
        <input
            :id="`listInput_${name}#${input.id}`"
            :ref="(el) => (inputArray[index] = el)"
            v-model="input.value"
            class="input "
            @keydown.delete="(el) => handleDelete(input.id, el)"
            @keydown.enter.prevent="handleEnter"
            @focusin="inputArray[index].isFocus = true"
            @focusout="inputArray[index].isFocus = false"
            @click="handleClick(index)"
        />
        <label
            v-if="placeholder"
            class="pointer-events-none text-base text-grey-label font-montserrat-regular absolute ml-10 left-0 h-full inset-center-y transition-all flex items-center"
            :class="`
                ${
                  inputArray[index]?.value || input.value ? ' opacity-0' : ' '
                }`"
            :for="`listInput_${name}#${input.id}`"
        >
          {{ placeholder }}
        </label>
      </div>
    </TransitionGroup>
  </div>
</template>
