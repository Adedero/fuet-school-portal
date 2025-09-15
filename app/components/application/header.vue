<script setup lang="ts">
import type { DropdownMenuItem } from "@nuxt/ui";
import { authClient } from "~/lib/auth";
import { useAuthStore } from "~/stores/auth.store";

const config = useRuntimeConfig();
const { confirmAsync } = useConfirm();
const { user } = useAuth();
const authStore = useAuthStore();

const appName = computed(() => {
  const [first, ...rest] = config.public.app.name.split(" ");
  return {
    val1: first,
    val2: rest.join(" ")
  };
});

const logout = async () => {
  const confirm = await confirmAsync({
    title: "Log Out",
    description: "Are you sure you want to proceed?",
    acceptProps: {
      label: "Proceed"
    },
    rejectProps: {
      label: "Cancel",
      color: "neutral",
      variant: "soft"
    }
  });

  if (!confirm) return;

  await authClient.signOut({
    fetchOptions: {
      onSuccess: async () => {
        await authClient.revokeSessions();
        authStore.setSession(null);
        authStore.setUser(null);
        window.location.href = "/";
      }
    }
  });
};

/* Dropdown Menu Items */
const items: DropdownMenuItem[][] = [
  [
    {
      label: user.value?.name ?? "Anonymous",
      type: "label",
      icon: "lucide:circle-user"
    },
    {
      label: user.value?.email ?? "unverified",
      icon: "lucide:mail"
    }
  ],
  [
    {
      label: "Update email",
      icon: "lucide:mail-plus"
    },
    {
      label: "Change password",
      icon: "lucide:lock"
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
  <header
    class="sticky top-0 z-50 bg-white px-5 md:px-10 lg:px-20 py-2.5 border-b border-b-muted"
  >
    <div class="flex items-center justify-between">
      <NuxtLink to="/" class="flex items-end gap-2">
        <AppLogo :width="28" />
        <p class="font-extrabold text-xl">
          <span class="text-primary-500">
            {{ appName.val1 }}
          </span>
          <span class="text-muted">
            {{ appName.val2 }}
          </span>
        </p>
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
