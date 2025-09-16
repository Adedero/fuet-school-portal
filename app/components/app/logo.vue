<script setup lang="ts">
import logo from "~~/public/logo.png";
interface Props {
  width?: number;
}

const { width = 32 } = defineProps<Props>();
</script>

<template>
  <img :src="logo" :width />
</template>
