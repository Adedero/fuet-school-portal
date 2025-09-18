<script setup lang="ts">
import type { BadgeProps } from "@nuxt/ui";
import { useDateFormat } from "@vueuse/core";

const { data, error, pending, refresh } = useFetch(
  "/api/users/admin/dashboard/recent-applications",
  {
    lazy: true
  }
);

const getStatusColor = (status: string): BadgeProps["color"] => {
  switch (status) {
    case "submitted":
      return "warning";
    case "accepted":
      return "success";
    case "rejected":
      return "error";
    default:
      return "neutral";
  }
};
</script>

<template>
  <div>
    <div v-if="pending" class="grid gap-2.5">
      <NuxtSkeleton class="h-10" />
      <NuxtSkeleton class="h-40" />
    </div>

    <div v-else-if="error">
      <FetchErrorAlert
        :message="`Failed to get recent applications: ${
          normalizeException(error).message
        }`"
        show-retry
        @retry="refresh"
      />
    </div>

    <div v-else-if="data" class="overflow-auto">
      <table class="w-full text-sm">
        <thead>
          <tr class="border-muted border-b bg-muted text-left">
            <th class="px-6 py-3 font-semibold text-muted">#</th>
            <th class="px-6 py-3 font-semibold text-muted">Student Name</th>
            <th class="px-6 py-3 font-semibold text-muted">Program</th>
            <th class="px-6 py-3 font-semibold text-muted">Date</th>
            <th class="px-6 py-3 font-semibold text-muted">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="app in data"
            :key="app.id"
            class="border-b border-muted hover:bg-muted"
            @click="navigateTo(`/portal/admin/applications/${app.id}`)"
          >
            <td class="px-6 py-3 font-medium text-muted">
              {{ app.id.slice(0, 6) }}...
            </td>
            <td class="px-6 py-3">{{ `${app.firstName} ${app.lastName}` }}</td>
            <td class="px-6 py-3">{{ app.course }}</td>
            <td class="px-6 py-3">
              {{ useDateFormat(app.createdAt, "YYYY-MM-DD") }}
            </td>
            <td class="px-6 py-3">
              <NuxtBadge
                :label="
                  app.status === 'submitted' ? 'pending review' : app.status
                "
                :color="getStatusColor(app.status)"
                variant="soft"
              />
            </td>
          </tr>
        </tbody>
      </table>

      <div class="flex-center gap-1 my-2.5">
        <NuxtIcon name="lucide:info" class="text-dimmed" />
        <p v-show="!data.length" class="text-dimmed text-sm text-center">
          No data
        </p>
      </div>
    </div>
  </div>
</template>
