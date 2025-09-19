<script setup lang="ts">
import { useAuthStore } from "~/stores/auth.store";

const config = useRuntimeConfig();
const authStore = useAuthStore();

definePageMeta({
  layout: "portal-admin"
});

const quickActions = [
  {
    label: "Review Applications",
    to: "/portal/admin/applications",
    icon: "lucide:user-check"
  },
  { label: "Process Payments", icon: "lucide:credit-card" },
  {
    label: "Manage Courses",
    to: "/portal/admin/courses",
    icon: "lucide:book-open"
  },
  { label: "Add Events", icon: "lucide:calendar" }
];

const userName = computed(() => {
  const names = (authStore.user.value?.name ?? "").split(" ");
  return `${names[0]} ${names.at(-1)}`;
});
</script>

<template>
  <div class="space-y-10 p-8">
    <!-- Welcome Section -->
    <div>
      <h1 class="text-2xl font-semibold text-slate-700">
        Welcome back, {{ userName.split(" ")[0] }}
      </h1>
      <p class="text-slate-600">
        Here's what's happening at {{ config.public.schoolNameShort }} today
      </p>
    </div>

    <!-- Quick Stats -->
    <div>
      <AdminDashboardCards />
    </div>

    <!-- Recent Applications -->
    <div class="space-y-3">
      <div class="flex items-center justify-between">
        <div>
          <h2 class="text-lg font-semibold">Recent Applications</h2>
          <p class="text-sm text-muted">Latest admission applications</p>
        </div>

        <NuxtButton
          to="/portal/admin/applications"
          label="View All"
          size="sm"
          variant="subtle"
        />
      </div>

      <AdminDashboardRecentApplications />
    </div>

    <!-- Quick Actions -->
    <div>
      <div class="">
        <h2 class="text-lg font-semibold">Quick Actions</h2>
        <p class="text-sm text-muted">Common administrative tasks</p>
      </div>

      <div class="p-6 grid grid-cols-2 md:grid-cols-4 gap-4">
        <NuxtLink
          v-for="action in quickActions"
          :key="action.label"
          :to="action.to"
        >
          <NuxtCard
            variant="subtle"
            class="hover:scale-105 transition-transform"
          >
            <div class="flex-col-center gap-2.5">
              <NuxtIcon :name="action.icon" size="1.25rem" />
              <p class="text-sm font-semibold text-muted">{{ action.label }}</p>
            </div>
          </NuxtCard>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
