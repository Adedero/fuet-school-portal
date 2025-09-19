<script setup lang="ts">
import { useAuthStore } from "~/stores/auth.store";
const config = useRuntimeConfig();
const authStore = useAuthStore();

definePageMeta({ layout: "portal-hod" });

const quickActions = [
    { label: "Approve Course Registrations", 
    to: "/portal/staff/hod/approvals", icon: "lucide:check-circle" },
    { label: "Manage Department Courses", to: "/portal/staff/hod/courses", icon: "lucide:book-open" },
    { label: "View Students", to: "/portal/staff/hod/students", icon: "lucide:users" },
    { label: "Department Events", to: "/portal/staff/hod/events", icon: "lucide:calendar" }
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
                Welcome, Dr. {{ userName.split(" ")[0] }}
            </h1>
            <p class="text-slate-600">
                Departmental overview and actions for HOD
            </p>
        </div>

        <!-- Quick Stats (Placeholder) -->
        <div>
            <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                <NuxtCard variant="subtle" class="flex flex-col items-center p-4">
                    <span class="text-2xl font-bold text-blue-700">120</span>
                    <span class="text-sm text-muted">Students</span>
                </NuxtCard>
                <NuxtCard variant="subtle" class="flex flex-col items-center p-4">
                    <span class="text-2xl font-bold text-green-700">18</span>
                    <span class="text-sm text-muted">Courses</span>
                </NuxtCard>
                <NuxtCard variant="subtle" class="flex flex-col items-center p-4">
                    <span class="text-2xl font-bold text-yellow-600">5</span>
                    <span class="text-sm text-muted">Pending Approvals</span>
                </NuxtCard>
                <NuxtCard variant="subtle" class="flex flex-col items-center p-4">
                    <span class="text-2xl font-bold text-purple-700">2</span>
                    <span class="text-sm text-muted">Upcoming Events</span>
                </NuxtCard>
            </div>
        </div>

        <!-- Recent Approvals (Placeholder) -->
        <div class="space-y-3">
            <div class="flex items-center justify-between">
                <div>
                    <h2 class="text-lg font-semibold">Recent Approvals</h2>
                    <p class="text-sm text-muted">Latest course registration approvals</p>
                </div>
                <NuxtButton to="/portal/staff/hod/approvals" label="View All" size="sm" variant="subtle" />
            </div>
            <div class="bg-white rounded-lg shadow p-4 text-sm text-gray-600">
                <p>No recent approvals yet.</p>
            </div>
        </div>

        <!-- Quick Actions -->
        <div>
            <div class="">
                <h2 class="text-lg font-semibold">Quick Actions</h2>
                <p class="text-sm text-muted">Departmental management tasks</p>
            </div>
            <div class="p-6 grid grid-cols-2 md:grid-cols-4 gap-4">
                <NuxtLink v-for="action in quickActions" :key="action.label" :to="action.to">
                    <NuxtCard variant="subtle" class="hover:scale-105 transition-transform">
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
