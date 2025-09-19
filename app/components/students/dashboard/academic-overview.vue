<script setup lang="ts">
defineProps<{
  academicStats: {
    currentLevel: string;
    totalCredits: number;
    completedCourses: number;
    expectedGraduation: string;
  };
}>();
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
    <div class="p-6 border border-muted rounded text-center">
      <p class="text-xs flex items-center justify-center gap-1">
        <Icon name="lucide:award" /> Current Level
      </p>
      <p class="text-3xl font-bold text-primary">{{ academicStats.currentLevel }}</p>
    </div>
    <div class="p-6 border border-muted rounded text-center">
      <p class="text-xs flex items-center justify-center gap-1">
        <Icon name="lucide:book-open" /> Total Credits
      </p>
      <p class="text-3xl font-bold">{{ academicStats.totalCredits }}</p>
    </div>
    <div class="p-6 border border-muted rounded text-center">
      <p class="text-xs flex items-center justify-center gap-1">
        <Icon name="lucide:file-text" /> Completed Courses
      </p>
      <p class="text-3xl font-bold">{{ academicStats.completedCourses }}</p>
    </div>
    <div class="p-6 border border-muted rounded text-center">
      <p class="text-xs flex items-center justify-center gap-1">
        <Icon name="lucide:calendar" /> Expected Graduation
      </p>
      <p class="text-3xl font-bold">{{ academicStats.expectedGraduation }}</p>
    </div>
  </div>
</template>
