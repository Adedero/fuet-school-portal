<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui";

const { logout } = useLogout();

const items: NavigationMenuItem[][] = [
  [
    { label: "Main", type: "label" },
    {
      label: "Dashboard", icon: "lucide:table-2",
      // to: "/portal/staff/hod" 
    }
  ],
  [
    { label: "Department", type: "label" },
    { label: "Students", icon: "lucide:users", to: "/portal/staff/hod/students" },
    {
      label: "Alumni", icon: "lucide:graduation-cap",
      // to: "/portal/staff/hod/alumni" 
    }
  ],
  [
    { label: "Approvals", type: "label" },
    {
      label: "Course Registrations", icon: "lucide:check-circle",
      // to: "/portal/staff/hod/approvals" 
    }
  ],
  [
    { label: "Courses", type: "label" },
    {
      label: "Manage Courses", icon: "lucide:book-open",
      // to: "/portal/staff/hod/courses" 
    },
    {
      label: "Class Lists", icon: "lucide:group",
      // to: "/portal/staff/hod/classes" 
    }
  ],
  [
    { label: "Events", type: "label" },
    {
      label: "Department Events", icon: "lucide:calendar",
      // to: "/portal/staff/hod/events" 

    }
  ],
  [
    { label: "Account", type: "label" },
    {
      label: "My Account", icon: "lucide:shield-user",
      // to: "/portal/staff/hod/account" 
    },
    {
      label: "Settings", icon: "lucide:settings",
      // to: "/portal/staff/hod/settings" 

    }
  ],
  [
    { label: "Log out", icon: "lucide:log-out", onSelect: () => { logout(); } }
  ]
];
</script>

<template>
  <PortalLayout>
    <template #sidebar>
      <NuxtNavigationMenu :items="items" orientation="vertical" />
    </template>

    <template #default>
      <NuxtPage />
    </template>
  </PortalLayout>
</template>
