<script setup lang="ts">
import type { ApplicationData } from "./index.vue";

interface Props {
  data: ApplicationData;
}

const { data } = defineProps<Props>();
</script>

<template>
  <header class="text-center">
    <h1 class="text-xl font-bold flex items-end justify-center gap-2.5">
      <AppLogo size="24" />
      <span>
        FUET UNDEGRADUATE APPLICATION ({{ data.schoolSession?.name }})
      </span>
    </h1>
    <p>Federal University of Environment and Technology</p>

    <p class="mt-2">
      APPLICATION NUMBER:
      <b>
        {{ data.applicationNumber }}
      </b>
    </p>
  </header>
</template>
