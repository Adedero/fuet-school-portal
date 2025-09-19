<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui";

const { logout } = useLogout();

const items: NavigationMenuItem[][] = [
  [
    { label: "Main", type: "label" },
    { label: "Dashboard", icon: "lucide:table-2", to: "/portal/student" },
    { label: "Profile", icon: "lucide:user", to: "/portal/student/profile" }
  ],
  [
    { label: "Academics", type: "label" },
    { label: "Courses", icon: "lucide:book-open", to: "/portal/student/courses" },
    { label: "Results", icon: "lucide:file-text", to: "/portal/student/results" },
    { label: "Academic Calendar", icon: "lucide:calendar", to: "/portal/student/calendar" },
    { label: "Class Schedule", icon: "lucide:clock", to: "/portal/student/schedule" }
  ],
  [
    { label: "Payments", type: "label" },
    { label: "School Fees", icon: "lucide:credit-card", to: "/portal/student/fees" },
    { label: "Payment History", icon: "lucide:receipt", to: "/portal/student/payments" }
  ],
  [
    { label: "Resources", type: "label" },
    { label: "Documents", icon: "lucide:folder-open", to: "/portal/student/documents" },
    { label: "Scholarships", icon: "lucide:award", to: "/portal/student/scholarships" },
    { label: "Support", icon: "lucide:help-circle", to: "/portal/student/support" }
  ],
  [
    { label: "Settings", type: "label" },
    { label: "Preferences", icon: "lucide:settings-2", to: "/portal/student/preferences" },
    { label: "My Account", icon: "lucide:shield-user", to: "/portal/student/account" }
  ],
  [
    { label: "Log out", icon: "lucide:log-out", onSelect: () => { logout(); } }
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
