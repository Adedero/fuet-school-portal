<script setup lang="ts">
defineProps<{
  quickActions: {
    title: string;
    description: string;
    icon: string;
    href: string;
    color: string;
  }[];
}>();
</script>

<template>
  <div class="py-6 rounded">
    <h3 class="text-lg font-bold mb-6">Quick Actions</h3>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <NuxtLink
        v-for="(action, index) in quickActions"
        :key="index"
        :to="action.href"
        class="p-6 border border-muted rounded hover:shadow-md transition flex flex-col items-center text-center gap-3"
      >
        <div :class="['w-12 h-12 rounded-full flex items-center justify-center text-white', action.color]">
          <Icon :name="`lucide:${action.icon}`" size="20" />
        </div>
        <div>
          <p class="font-bold">{{ action.title }}</p>
          <p class="text-sm text-gray-500">{{ action.description }}</p>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>
