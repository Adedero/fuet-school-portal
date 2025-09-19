<script setup lang="ts">
defineProps<{
  upcomingDeadlines: {
    title: string;
    date: string;
    type: "registration" | "payment" | "assignment";
  }[];
}>();
</script>

<template>
  <div class="flex-1 p-6 border border-muted rounded">
    <h3 class="text-lg font-bold mb-6">Upcoming Deadlines</h3>
    <div class="space-y-4">
      <div
        v-for="(deadline, index) in upcomingDeadlines"
        :key="index"
        class="p-4 rounded"
        :class="{
          'border border-red-500 bg-red-50': deadline.type === 'payment',
          'border border-blue-500 bg-blue-50': deadline.type === 'registration',
          'border border-green-500 bg-green-50': deadline.type === 'assignment'
        }"
      >
        <p class="font-bold text-sm">{{ deadline.title }}</p>
        <p class="text-xs text-gray-500">{{ deadline.date }}</p>
        <span
          class="inline-block px-2 py-1 mt-1 rounded text-xs text-white"
          :class="{
            'bg-red-500': deadline.type === 'payment',
            'bg-blue-500': deadline.type === 'registration',
            'bg-green-500': deadline.type === 'assignment'
          }"
        >
          {{ deadline.type.charAt(0).toUpperCase() + deadline.type.slice(1) }}
        </span>
      </div>
    </div>
  </div>
</template>
