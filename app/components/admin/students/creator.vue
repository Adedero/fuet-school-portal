<script setup lang="ts">
const open = defineModel<boolean>("open");
</script>

<template>
  <NuxtModal v-model:open="open" :dismissible="false">
    <template #body>
      <div></div>
    </template>
  </NuxtModal>
</template>
