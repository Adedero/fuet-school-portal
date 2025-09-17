<script setup lang="ts">
import useLogout from "~/composables/use-logout";
import { useAuthStore } from "~/stores/auth.store";
import { links } from "./links";
const config = useRuntimeConfig();
const authStore = useAuthStore();
const { logout } = useLogout();
const navigate = useNavigateToPortal();
</script>

<template>
  <header
    class="sticky top-0 z-50 bg-white px-5 md:px-10 py-4 border-b border-b-muted"
  >
    <div class="flex items-center justify-between">
      <!-- Logo -->
      <NuxtLink to="/" class="flex items-center gap-2">
        <AppLogo :width="40" />
        <div>
          <p
            class="font-extrabold text-lg lg:text-base xl:text-lg text-primary-500"
          >
            <span class="lg:hidden">
              {{ config.public.schoolNameShort }}
            </span>
            <span class="hidden lg:inline">
              {{ config.public.schoolNameLong }}
            </span>
          </p>
          <p class="text-muted text-xs hidden md:block">
            {{ config.public.schoolLocation }}
          </p>
        </div>
      </NuxtLink>

      <!-- Navbar Links -->
      <div class="flex items-center gap-6">
        <div class="hidden lg:block">
          <NuxtNavigationMenu :items="links" />
        </div>

        <!-- Auth Buttons -->
        <div>
          <div class="flex items-center gap-2">
            <div v-if="authStore.isLoggedIn()">
              <NuxtButton label="Portal" @click="navigate" />
              <NuxtButton label="Log out" variant="link" @click="logout" />
            </div>

            <div v-else class="flex items-center gap-2">
              <NuxtButton to="/application" label="Apply Now" />
              <NuxtButton to="/login" label="Log in" variant="link" />
            </div>

            <div class="lg:hidden">
              <NuxtSlideover :ui="{ content: 'max-w-96' }">
                <NuxtButton
                  icon="lucide:menu"
                  color="neutral"
                  variant="ghost"
                />

                <template #title>
                  <AppLogo />
                </template>

                <template #body>
                  <NuxtNavigationMenu :items="links" orientation="vertical" />
                </template>
              </NuxtSlideover>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
