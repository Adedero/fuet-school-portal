<script setup lang="ts">
import { useAuthStore } from "~/stores/auth.store";

const config = useRuntimeConfig();
const authStore = useAuthStore();
const { logout } = useLogout();

const appName = computed(() => {
  const [first, ...rest] = config.public.app.name.split(" ");
  return {
    val1: first,
    val2: rest.join(" ")
  };
});

const navigateToPortal = async () => {
  if (!authStore.isLoggedIn()) {
    await navigateTo("/login");
    return;
  }
  if (!authStore.user.value || !authStore.user.value.role) {
    await navigateTo("/login");
    return;
  }
  const role = authStore.user.value.role;

  if (role === "applicant") {
    await navigateTo("/application/portal");
    return;
  }
  if (role === "student") {
    await navigateTo("/portal/student");
    return;
  }
  if (role === "admin") {
    await navigateTo("/portal/admin");
    return;
  }
  if (role === "staff") {
    await navigateTo("/portal/staff");
    return;
  }
};
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
        <div v-if="authStore.isLoggedIn()" class="flex items-center gap-2">
          <NuxtButton label="Logout" variant="link" @click="logout" />
          <NuxtButton label="Portal" @click="navigateToPortal" />
        </div>

        <div v-else class="flex items-center gap-2">
          <NuxtButton to="/login" label="Login" variant="link" />
          <NuxtButton to="/application" label="Apply Now" />
        </div>
      </div>
    </div>
  </header>
</template>
