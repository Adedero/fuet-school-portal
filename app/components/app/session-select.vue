<script setup lang="ts">
import type { SelectMenuProps } from "@nuxt/ui";

interface Props {
  size?: SelectMenuProps["size"];
  placeholder?: string;
}

const { size = "md", placeholder = "Select session" } = defineProps<Props>();

const { data, error, pending, execute } = useFetch(
  "/api/general/academic-sessions"
);

const sessions = computed(() => data.value ?? []);

export type Session = (typeof sessions.value)[number];

const value = defineModel<Session>({ default: undefined });

onMounted(async () => {
  await execute();
});
</script>

<template>
  <div>
    <NuxtSelectMenu
      v-if="pending || data"
      v-model="value"
      :items="sessions"
      label-key="name"
      :loading="pending"
      :size
      :placeholder
      v-bind="$attrs"
    />

    <FetchErrorAlert
      v-else-if="error"
      message="Failed to get academic sessions"
      show-retry
      @retry="execute"
    />
  </div>
</template>
