<template>
  <div class="flex gap-2">
    <select
      class="w-24 border border-gray-300 rounded-md px-2 py-2 text-sm focus:outline-none focus:ring focus:border-violet-500"
      disabled
    >
      <option>{{ type }}</option>
    </select>
    <input
      :placeholder="placeholder"
      class="flex-1 border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring focus:border-violet-500"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </div>
</template>

<script setup>
defineProps({
  type: String,
  placeholder: String,
  modelValue: String // v-model 값
})

defineEmits(['update:modelValue']) // v-model 이벤트
</script>
