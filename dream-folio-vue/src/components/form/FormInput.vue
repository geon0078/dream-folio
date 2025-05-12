<template>
  <div>
    <label class="block text-sm font-medium mb-1">
      {{ label }}
      <span v-if="required" class="text-violet-600">*</span>
    </label>
    <input
      :placeholder="placeholder"
      class="w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring focus:border-violet-500"
    />
  </div>
</template>

<script setup>
defineProps({
  label: String,
  placeholder: String,
  required: Boolean
})
</script>
