<script setup lang="ts">
import { useWindowSize } from "@vueuse/core";

const { width } = useWindowSize();

const { isOpen, setIsOpen } = useNavOpen("nav:open");

const isLargeScreen = computed(() => width.value >= 1024);
</script>

<template>
  <main class="h-dvh lg:flex">
    <aside
      :class="[
        'hidden overflow-hidden transition-[width] lg:shrink-0 lg:flex lg:flex-col lg:h-full lg:border-r lg:border-r-default',
        isOpen ? 'w-72' : 'w-0'
      ]"
    >
      <header class="p-5 shrink-0 border-b border-b-default">
        <PortalSidebarHeader />
      </header>

      <div class="grow overflow-y-auto p-5">
        <slot name="sidebar" />
      </div>
    </aside>

    <NuxtSlideover
      v-if="!isLargeScreen"
      v-model:open="isOpen"
      :ui="{ content: 'max-w-96' }"
    >
      <template #title>
        <AppLogo size="24" />
      </template>

      <template #body>
        <div class="space-y-5">
          <header>
            <PortalSidebarHeader />
          </header>

          <NuxtSeparator />

          <div>
            <slot name="sidebar" />
          </div>
        </div>
      </template>
    </NuxtSlideover>

    <section class="h-dvh lg:h-auto lg:grow overflow-y-auto">
      <div
        class="flex sticky top-0 z-50 bg-white border-b border-b-muted w-full"
      >
        <div class="flex-center pl-5">
          <NuxtButton
            icon="lucide:panel-left"
            color="neutral"
            variant="ghost"
            @click="setIsOpen(!isOpen)"
          />
        </div>

        <div class="w-full lg:grow">
          <PortalHeader />
        </div>
      </div>

      <div>
        <slot name="default" />
      </div>
    </section>
  </main>
</template>
