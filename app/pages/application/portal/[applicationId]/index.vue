<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui";

definePageMeta({
  layout: "application"
});

const { applicationId = "" } = useRouteParams();

const { data, error, refresh } = await useFetch(
  `/api/users/applicant/applications/${applicationId}`,
  {
    pick: ["applicationNumber"]
  }
);

const items: NavigationMenuItem[][] = [
  [
    {
      label: "FUET Admission Application",
      type: "label"
    },
    {
      label: "Back to Applications",
      icon: "lucide:arrow-left",
      to: "/application/portal"
    }
  ],
  [
    {
      label: `Application: ${data.value?.applicationNumber ?? "#"}`,
      type: "label"
    },
    {
      label: "Overview & Requirements",
      icon: "lucide:info",
      to: `/application/portal/${applicationId}`
    }
  ],
  [
    {
      label: "Personal Info",
      icon: "lucide:user-circle",
      to: `/application/portal/${applicationId}/personal-info`
    },
    {
      label: "Familiy Info",
      icon: "lucide:users",
      to: `/application/portal/${applicationId}/family-info`
    },
    {
      label: "Academic Info",
      icon: "lucide:graduation-cap",
      to: `/application/portal/${applicationId}/academic-info`
    },
    {
      label: "Documents",
      icon: "lucide:file-up"
    },
    {
      label: "Review Application",
      icon: "lucide:view",
      to: `/application/portal/${applicationId}/review`
    }
  ],
  [
    {
      label: "More",
      type: "label"
    },
    {
      label: "Check Admission Status",
      icon: "lucide:circle-check",
      to: `/application/portal/${applicationId}/admission-status`
    },
    {
      label: "Pay Admission Fees",
      icon: "lucide:credit-card",
      to: `/application/portal/${applicationId}/payment`
    }
  ]
];
</script>

<template>
  <div class="md:flex h-[calc(100dvh-3.5rem)]">
    <nav class="hidden md:block border-r border-r-default p-2.5">
      <NuxtNavigationMenu :items orientation="vertical" />
    </nav>

    <div class="grow">
      <div class="md:hidden px-5 py-2.5">
        <NuxtDropdownMenu :items>
          <NuxtButton
            icon="lucide:menu"
            color="neutral"
            variant="soft"
            size="sm"
          />
        </NuxtDropdownMenu>
      </div>

      <div v-if="error" class="p-5">
        <FetchErrorAlert
          :message="normalizeException(error).message"
          show-retry
          @retry="refresh"
        />
      </div>

      <div v-else-if="data" class="px-5 pb-5 md:pt-5">
        <NuxtPage />
      </div>
    </div>
  </div>
</template>
