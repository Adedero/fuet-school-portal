<script setup lang="ts">
const config = useRuntimeConfig();

const appName = computed(() => {
  const [first, ...rest] = config.public.app.name.split(" ");
  return {
    val1: first,
    val2: rest.join(" ")
  };
});
</script>

<template>
  <footer class="bg-muted section-padding pt-16 pb-10">
    <div class="flex flex-wrap gap-10">
      <div class="md:w-1/2 space-y-3">
        <NuxtLink to="/" class="flex items-end gap-2">
          <AppLogo :width="40" />
          <p class="font-extrabold text-2xl">
            <span class="text-primary-500">
              {{ appName.val1 }}
            </span>
            <span class="text-muted">
              {{ appName.val2 }}
            </span>
          </p>
        </NuxtLink>

        <p class="text-sm text-muted">
          Pioneering Innovation • Nurturing Sustainability
        </p>

        <div class="flex items-center gap-2.5">
          <NuxtButton to="#" size="sm" icon="lucide:facebook" variant="soft" class="rounded-full" />
          <NuxtButton to="#" size="sm" icon="lucide:linkedin" variant="soft" class="rounded-full" />
          <NuxtButton to="#" size="sm" icon="lucide:twitter" variant="soft" class="rounded-full" />
        </div>
      </div>

      <div class="md:grow grid md:grid-cols-3">
        <div class="space-y-2.5">
          <p class="text-sm font-semibold">Pages</p>

          <div class="grid gap-1 text-xs">
            <NuxtLink to="/">Home</NuxtLink>
            <NuxtLink to="/">About</NuxtLink>
            <NuxtLink to="/">Contact</NuxtLink>
          </div>
        </div>

        <div class="space-y-2.5">
          <p class="text-sm font-semibold">Admissions</p>

          <div class="grid gap-1 text-xs">
            <NuxtLink to="/">Apply</NuxtLink>
            <NuxtLink to="/">Check Status</NuxtLink>
          </div>
        </div>

        <div class="space-y-2.5">
          <p class="text-sm font-semibold">Account</p>

          <div class="grid gap-1 text-xs">
            <NuxtLink to="/">Portal</NuxtLink>
            <NuxtLink to="/">Profile</NuxtLink>
          </div>
        </div>
      </div>
    </div>

    <NuxtSeparator class="mt-5 mb-2.5" />

    <div class="text-xs text-muted flex flex-wrap gap-5 justify-between items-center">
      <p>&copy; {{ config.public.app.name }} 2025. All Rights Reserved.</p>
      <p>Made by <b>Adedero</b></p>
    </div>
  </footer>
</template>
