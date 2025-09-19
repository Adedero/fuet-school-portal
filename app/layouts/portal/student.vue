<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui";

const { logout } = useLogout();

const items: NavigationMenuItem[][] = [
  [
    { label: "Main", type: "label" },
    { label: "Dashboard", icon: "lucide:table-2", to: "/portal/student" }
  ],
  [
    { label: "Academics", type: "label" },
    {
      label: "Course Registration",
      icon: "lucide:book-open",
      to: "/portal/student/courses"
    },
    {
      label: "Results",
      icon: "lucide:file-text",
      to: "/portal/student/results"
    },
    {
      label: "Documents",
      icon: "lucide:folder-open"
      // to: "/portal/student/documents",
    }
  ],
  [
    { label: "Payments", type: "label" },
    {
      label: "School Fees",
      icon: "lucide:credit-card"
      // to: "/portal/student/fees",
    },
    {
      label: "Payment History",
      icon: "lucide:receipt"
      // to: "/portal/student/payments",
    }
  ],
  [
    { label: "Account", type: "label" },
    {
      label: "Profile",
      icon: "lucide:circle-user"
    },
    {
      label: "Log out",
      icon: "lucide:log-out",
      onSelect: () => {
        logout();
      }
    }
  ]
];
</script>

<template>
  <PortalLayout>
    <template #sidebar>
      <NuxtNavigationMenu :items orientation="vertical" />
    </template>

    <template #default>
      <NuxtPage />
    </template>
  </PortalLayout>
</template>
