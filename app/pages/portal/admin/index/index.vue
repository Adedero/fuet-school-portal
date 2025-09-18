<script setup lang="ts">
definePageMeta({
  layout: "portal-admin"
});
const dashboardStats = [
  {
    title: "Total Students",
    value: "15,247",
    change: "+12%",
    changeType: "positive",
    icon: "lucide:users",
    color: "blue",
  },
  {
    title: "Pending Applications",
    value: "342",
    change: "+8%",
    changeType: "positive",
    icon: "lucide:user-check",
    color: "orange",
  },
  {
    title: "Total Revenue",
    value: "₦125.4M",
    change: "+15%",
    changeType: "positive",
    icon: "lucide:credit-card",
    color: "green",
  },
  {
    title: "Active Courses",
    value: "156",
    change: "+3%",
    changeType: "positive",
    icon: "lucide:book-open",
    color: "purple",
  },
];

const adminRecentApplications = [
  {
    id: "APP001",
    name: "John Doe",
    program: "Computer Engineering",
    date: "2024-01-15",
    status: "pending",
  },
  {
    id: "APP002",
    name: "Jane Smith",
    program: "Environmental Science",
    date: "2024-01-14",
    status: "approved",
  },
  {
    id: "APP003",
    name: "Mike Johnson",
    program: "Mechanical Engineering",
    date: "2024-01-13",
    status: "under_review",
  },
  {
    id: "APP004",
    name: "Sarah Wilson",
    program: "Information Technology",
    date: "2024-01-12",
    status: "approved",
  },
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "approved":
      return "bg-green-100 text-green-700";
    case "pending":
      return "bg-orange-100 text-orange-700";
    case "under_review":
      return "bg-blue-100 text-blue-700";
    case "rejected":
      return "bg-red-100 text-red-700";
    default:
      return "bg-gray-100 text-gray-700";
  }
};

const quickActions = [
  { label: "Review Applications", icon: "lucide:user-check", color: "primary" },
  { label: "Process Payments", icon: "lucide:credit-card", color: "secondary" },
  { label: "Manage Courses", icon: "lucide:book-open", color: "purple" },
  { label: "Add Events", icon: "lucide:calendar", color: "orange" },
];

import { NuxtIcon } from "#components";
import { useAuthStore } from "~/stores/auth.store";

const authStore = useAuthStore();

const userName = computed(() => {
  const names = (authStore.user.value?.name ?? "").split(" ");
  return `${names[0]} ${names.at(-1)}`;
});
</script>

<template>
  <div class="space-y-8 p-8">
    <!-- Welcome Section -->
    <div>
      <h1 class="text-2xl font-semibold text-slate-700">Welcome back, {{ userName.split(" ")[0] }}</h1>
      <p class="text-slate-600">Here's what's happening at FUET today</p>
    </div>

    <!-- Quick Stats -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <div v-for="stat in dashboardStats" :key="stat.title"
        class="bg-white rounded-xl p-6 flex flex-col gap-4 border border-muted">
        <div class="flex items-start justify-between">
          <div class="p-3 rounded-lg" :class="`bg-${stat.color}-100 text-${stat.color}-600`">
            <NuxtIcon :name="stat.icon" />
            <!-- <component :is="stat.icon" class="w-6 h-6" /> -->
          </div>
          <span class="px-2 py-1 rounded-md text-xs font-medium"
            :class="stat.changeType === 'positive' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'">
            {{ stat.change }}
          </span>
        </div>
        <div>
          <p class="text-2xl font-bold text-slate-700">{{ stat.value }}</p>
          <p class="text-sm text-slate-600">{{ stat.title }}</p>
        </div>
      </div>
    </div>

    <!-- Recent Applications -->
    <div class=" rounded-xl">
      <div class="flex items-center justify-between">
        <div>
          <h2 class="text-lg font-semibold text-slate-700">Recent Applications</h2>
          <p class="text-sm text-slate-600">Latest admission applications</p>
        </div>
        <button class="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/90 text-sm">
          View All
        </button>
      </div>
      <div class="overflow-x-auto">
        <table class="w-full text-sm">
          <thead>
            <tr class=" border-muted border-b bg-gray-50 text-left">
              <th class="px-6 py-3 font-medium text-slate-600">Application ID</th>
              <th class="px-6 py-3 font-medium text-slate-600">Student Name</th>
              <th class="px-6 py-3 font-medium text-slate-600">Program</th>
              <th class="px-6 py-3 font-medium text-slate-600">Date</th>
              <th class="px-6 py-3 font-medium text-slate-600">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="app in adminRecentApplications" :key="app.id" class="border-b border-muted hover:bg-gray-50">
              <td class="px-6 py-3 font-medium text-slate-700">{{ app.id }}</td>
              <td class="px-6 py-3">{{ app.name }}</td>
              <td class="px-6 py-3">{{ app.program }}</td>
              <td class="px-6 py-3">{{ app.date }}</td>
              <td class="px-6 py-3">
                <span class="px-2 py-1 rounded-md text-xs font-medium" :class="getStatusColor(app.status)">
                  {{ app.status.replace('_', ' ') }}
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- Quick Actions -->
    <div class="">
      <div class="">
        <h2 class="text-lg font-semibold text-slate-700">Quick Actions</h2>
        <p class="text-sm text-slate-600">Common administrative tasks</p>
      </div>
      <div class="p-6 grid grid-cols-2 md:grid-cols-4 gap-4">
        <button v-for="action in quickActions" :key="action.label"
          class="flex flex-col items-center justify-center gap-2 border border-muted cursor-pointer rounded-lg p-6 text-sm font-medium hover:bg-gray-50 bg-gray-100 hover:scale-105 transition">
          <NuxtIcon :name="action.icon"  />
          <!-- <component :is="action.icon" class="w-6 h-6 text-gray-700" /> -->
          <span>{{ action.label }}</span>
        </button>
      </div>
    </div>
  </div>
</template>
