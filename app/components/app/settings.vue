<script setup lang="ts">
const { data, error, status, refresh, execute } = useFetch(
  "/api/general/settings",
  { lazy: true }
);

const loading = computed(() => status.value === "pending");

const getSettings = async () => {
  await execute();
  return data;
};

defineExpose({ getSettings });
</script>

<template>
  <div>
    <div v-if="loading">
      <slot name="loading" :loading>
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
