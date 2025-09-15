<template>
  <div>
    <NuxtLoadingIndicator />
    <NuxtRouteAnnouncer />
    <NuxtApp>
      <VueConfirmDialog />
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </NuxtApp>
  </div>
</template>
