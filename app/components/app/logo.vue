<script setup lang="ts">
interface Props {
  width?: number;
}

const { width = 32 } = defineProps<Props>();
</script>

<template>
  <NuxtImg src="/logo.png" :width />
</template>
