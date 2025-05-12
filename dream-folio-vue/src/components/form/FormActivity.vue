<template>
  <div class="flex gap-2">
    <select
      class="w-24 border border-gray-300 rounded-md px-2 py-2 text-sm focus:outline-none focus:ring focus:border-violet-500"
    >
      <option>{{ type }}</option>
    </select>
    <input
      :placeholder="placeholder"
      class="flex-1 border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring focus:border-violet-500"
    />
  </div>
</template>

<script setup>
defineProps({
  type: String,
  placeholder: String
})
</script>
