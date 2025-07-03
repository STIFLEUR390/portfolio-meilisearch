<script setup>
const props = defineProps({
  label: { type: String, required: true },
  value: { type: Number, required: true },
  gradient: { type: String, required: true },
  animated: { type: Boolean, default: false },
});

const width = ref("0%");

watch(
  () => props.animated,
  (val) => {
    if (val) {
      setTimeout(() => {
        width.value = props.value + "%";
      }, 200);
    } else {
      width.value = "0%";
    }
  },
  { immediate: true }
);
</script>

<template>
  <div>
    <div class="flex justify-between mb-1">
      <span class="text-sm text-gray-700 dark:text-gray-100">{{
        props.label
      }}</span>
      <span class="text-sm text-gray-700 dark:text-gray-100"
        >{{ props.value }}%</span
      >
    </div>
    <div class="w-full h-2 rounded-full bg-gray-200 dark:bg-gray-800">
      <div
        class="h-2 rounded-full transition-all duration-700 shadow-sm"
        :class="'bg-gradient-to-r ' + props.gradient"
        :style="{ width }"
      ></div>
    </div>
  </div>
</template> 