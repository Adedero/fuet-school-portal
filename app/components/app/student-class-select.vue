<script setup lang="ts">
const { data, error, status, execute } = useFetch(
  "/api/general/student-classes",
  {
    lazy: true
  }
);

const loading = computed(() => status.value === "pending");

const classes = computed(() => (data.value ?? []).map((c) => c.className));

export type StudentClass = (typeof classes.value)[number];

const value = defineModel<StudentClass>({ default: undefined });
</script>

<template>
  <div>
    <NuxtSelectMenu
      v-if="loading || data"
      v-model="value"
      :items="classes"
      :loading
      v-bind="$attrs"
    />

    <FetchErrorAlert
      v-else-if="error"
      message="Failed to get student classes"
      show-retry
      @retry="execute"
    />
  </div>
</template>
