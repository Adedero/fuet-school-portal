<script setup lang="ts">
const { data, error, pending, refresh, execute } = useFetch(
  "/api/general/settings",
  {}
);

onMounted(async () => {
  await execute();
});
</script>

<template>
  <div>
    <div v-if="pending">
      <slot name="loading" :loading="pending">
        <div class="flex-center">
          <NuxtIcon
            name="lucide:loader"
            size="2rem"
            class="text-muted animate animate-spin"
          />
        </div>
      </slot>
    </div>

    <div v-else-if="error">
      <slot name="error" :error="normalizeException(error)" :refresh>
        <FetchErrorAlert
          message="Failed to get settings"
          show-retry
          @retry="refresh"
        />
      </slot>
    </div>

    <div v-else-if="data">
      <slot name="default" :data />
    </div>
  </div>
</template>
