<script setup lang="ts">
import { useAuthStore } from "~/stores/auth.store";

const authStore = useAuthStore();

const userName = computed(() => {
  const names = (authStore.user.value?.name ?? "").split(" ");
  return `${names[0]} ${names.at(-1)}`;
});
</script>

<template>
  <div class="flex-col-center gap-2.5 text-center">
    <NuxtAvatar
      :src="authStore.user.value?.image ?? undefined"
      :alt="userName"
      :ui="{ root: 'size-20 text-3xl' }"
    />

    <div class="flex-col-center text-center">
      <p class="text-sm font-semibold">{{ authStore.user.value?.name }}</p>
      <p class="text-xs text-muted">{{ authStore.user.value?.email }}</p>
      <p class="text-xs font-semibold text-error uppercase">
        {{ authStore.user.value?.role }}
      </p>
    </div>
  </div>
</template>
