<template>
  <div>
    <label class="block text-sm font-medium mb-1">
      {{ label }}
      <span v-if="required" class="text-violet-600">*</span>
    </label>
    <div class="relative">
      <select
        class="w-full appearance-none border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring focus:border-violet-500"
        :value="modelValue"
        @change="$emit('update:modelValue', $event.target.value)"
      >
        <option disabled value="">{{ placeholder }}</option>
        <option
          v-for="(option, index) in options"
          :key="index"
          :value="option"
        >
          {{ option }}
        </option>
      </select>
      <div class="absolute inset-y-0 right-3 flex items-center pointer-events-none">
        <svg class="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
          <path d="M7 7l3-3 3 3H7z" />
        </svg>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  label: String,
  placeholder: String,
  required: Boolean,
  options: {
    type: Array,
    default: () => [],
  },
  modelValue: String
})

defineEmits(['update:modelValue'])
</script>
