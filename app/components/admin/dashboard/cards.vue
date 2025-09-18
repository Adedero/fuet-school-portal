<script setup lang="ts">
import type { BadgeProps } from "@nuxt/ui";

const { data, error, pending, refresh } = useFetch(
  "/api/users/admin/dashboard/stats",
  {
    lazy: true
  }
);

const items = computed(() => {
  if (data.value) {
    return [
      {
        label: "Current Students",
        value: data.value.activeStudents,
        icon: "lucide:users",
        color: "primary"
      },
      {
        label: "Current Staffs",
        value: data.value.totalStaffs,
        icon: "lucide:briefcase",
        color: "neutral"
      },
      {
        label: "Pending applications",
        value: data.value.pendingApplications,
        icon: "lucide:file-clock",
        color: "error"
      },
      {
        label: "Total Departments",
        value: data.value.totalDepartments,
        icon: "lucide:building-2",
        color: "secondary"
      }
    ];
  }
  return [];
});
</script>

<template>
  <div>
    <div v-if="pending" class="grid md:grid-cols-2 lg:grid-cols-4 gap-2.5">
      <NuxtSkeleton v-for="i in 4" :key="i" class="w-full h-36" />
    </div>

    <div v-else-if="error">
      <FetchErrorAlert
        :message="normalizeException(error).message"
        show-retry
        @retry="refresh"
      />
    </div>

    <div v-if="data" class="grid md:grid-cols-2 lg:grid-cols-4 gap-2.5">
      <NuxtCard v-for="item in items" :key="item.label">
        <div class="space-y-2.5">
          <div>
            <NuxtBadge
              :icon="item.icon"
              size="lg"
              :color="item.color as BadgeProps['color']"
              variant="soft"
            />
          </div>

          <div>
            <p class="font-mono text-3xl md:text-4xl font-semibold">
              {{ item.value }}
            </p>
          </div>

          <div>
            <p class="text-xs font-semibold uppercase text-muted">
              {{ item.label }}
            </p>
          </div>
        </div>
      </NuxtCard>
    </div>
  </div>
</template>
