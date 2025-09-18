<script setup lang="ts">
defineProps<{
  recentGrades: {
    course: string;
    title: string;
    grade: string;
    credits: number;
  }[];
}>();
</script>

<template>
  <div class="flex-1 p-6 border border-muted rounded">
    <div class="flex justify-between items-center mb-6">
      <h3 class="text-lg font-bold">Recent Grades</h3>
      <NuxtLink to="/results" class="text-blue-600 text-sm hover:underline">
        View All
      </NuxtLink>
    </div>
    <div class="space-y-4">
      <div
        v-for="(grade, index) in recentGrades"
        :key="index"
        class="flex justify-between items-center p-4 bg-gray-50 rounded"
      >
        <div>
          <p class="font-bold">{{ grade.course }}</p>
          <p class="text-sm text-slate-400">{{ grade.title }}</p>
          <p class="text-xs text-gray-500">{{ grade.credits }} Credits</p>
        </div>
        <span
          class="px-3 py-1 rounded text-white text-sm"
          :class="grade.grade.startsWith('A') ? 'bg-green-600' : 'bg-blue-600'"
        >
          {{ grade.grade }}
        </span>
      </div>
    </div>
  </div>
</template>
