<script setup lang="ts">
import { ChevronDown } from 'lucide-vue-next';
defineProps<{
  label: string
  items: { label: string, to: string }[]
}>()
</script>

<template>
  <div class="relative group">
    <button
      class="font-semibold text-gray-700 hover:text-primary-500 focus:outline-none cursor-pointer flex items-center gap-1"
    >
      {{ label }}
      <ChevronDown class="w-4 h-4 text-gray-500 group-hover:text-primary-500 transition-colors" />
    </button>
    <div
      class="absolute left-0 mt-2 w-56 bg-white border border-gray-200 rounded shadow-lg opacity-0 group-hover:opacity-100 group-hover:pointer-events-auto pointer-events-none transition-opacity z-50"
    >
      <ul class="py-2">
        <li v-for="(item, idx) in items" :key="idx">
          <NuxtLink :to="item.to" class="block px-4 py-2 hover:bg-gray-100">
            {{ item.label }}
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>
