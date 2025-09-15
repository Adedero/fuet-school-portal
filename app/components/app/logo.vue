<script setup lang="ts">
interface Props {
  width?: number;
}


const { width = 32 } = defineProps<Props>();
</script>

<template>
  <img src="/fuet_logo.png" :width />
</template>
