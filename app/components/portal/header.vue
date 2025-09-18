<script setup lang="ts">
import type { DropdownMenuItem } from "@nuxt/ui";
import { useAuthStore } from "~/stores/auth.store";

const config = useRuntimeConfig();
const authStore = useAuthStore();
const { logout } = useLogout();

/* Dropdown Menu Items */
const items: DropdownMenuItem[][] = [
  [
    {
      label: authStore.user.value?.name ?? "Anonymous",
      type: "label",
      icon: "lucide:circle-user"
    },
    {
      label: authStore.user.value?.email ?? "unverified",
      icon: "lucide:mail"
    }
  ],
  [
    {
      label: "Update email",
      icon: "lucide:mail-plus",
      to: "/change-email"
    },
    {
      label: "Change password",
      icon: "lucide:lock",
      to: "/change-password"
    }
  ],
  [
    {
      label: "Log out",
      icon: "lucide:log-out",
      onSelect() {
        logout();
      }
    }
  ]
];
</script>

<template>
  <header class="px-5 py-2.5">
    <div class="flex items-center justify-between">
      <NuxtLink class="flex items-center gap-2">
        <AppLogo :width="28" />
        <div>
          <p class="leading-5 text-lg font-bold text-primary-500">
            {{ config.public.schoolNameShort }} Portal
          </p>
          <p class="text-[0.6rem] text-muted uppercase hidden md:block">
            {{ config.public.schoolNameLong }}
          </p>
        </div>
      </NuxtLink>

      <div>
        <div class="flex items-center gap-2">
          <NuxtDropdownMenu
            :items="items"
            :ui="{
              content: 'w-60'
            }"
          >
            <NuxtButton
              color="neutral"
              variant="outline"
              icon="lucide:user-round"
            />
          </NuxtDropdownMenu>

          <NuxtButton label="Logout" @click="logout" />
        </div>
      </div>
    </div>
  </header>
</template>
