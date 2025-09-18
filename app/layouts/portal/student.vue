<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui";

const { logout } = useLogout();

const items: NavigationMenuItem[][] = [
  [
    {
      label: "Home",
      type: "label"
    },
    {
      label: "Dashboard",
      icon: "lucide:table-2",
      to: "/portal/student"
    }
  ],
  [
    {
      label: "Students",
      type: "label"
    },
    {
      label: "Applications",
      icon: "lucide:file-pen",
    },
    {
      label: "Current Students",
      icon: "lucide:users"
    },
    {
      label: "Alumni",
      icon: "lucide:graduation-cap"
    }
  ],
  [
    {
      label: "Staffs",
      type: "label"
    },
    {
      label: "Staffs",
      icon: "lucide:briefcase"
    },
    {
      label: "H.O.Ds",
      icon: "lucide:square-user-round"
    }
  ],
  [
    {
      label: "Payments",
      type: "label"
    },
    {
      label: "Admission Fees",
      icon: "lucide:house-plus"
    },
    {
      label: "School Fees",
      icon: "lucide:credit-card"
    }
  ],
  [
    {
      label: "University",
      type: "label"
    },
    {
      label: "Courses",
      icon: "lucide:book-a"
    },
    {
      label: "Faculties",
      icon: "lucide:university"
    },
    {
      label: "Student Classes",
      icon: "lucide:group"
    },
    {
      label: "Academic Sessions",
      icon: "lucide:calendar",
    }
  ],
  [
    {
      label: "Settings",
      type: "label"
    },
    {
      label: "Settings",
      icon: "lucide:settings"
    },
    {
      label: "Preferences",
      icon: "lucide:settings-2"
    },
    {
      label: "My Account",
      icon: "lucide:shield-user"
    }
  ],
  [
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
