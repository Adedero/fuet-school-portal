<template>
  <main>
    <MainHeader />

    <div class="md:h-screen flex-center px-5 py-20 md:py-5">
      <NuxtCard class="w-full max-w-96">
        <div>
          <NuxtCard variant="subtle" class="w-fit aspect-square">
            <AppLogo size="36" />
          </NuxtCard>
        </div>

        <div class="mt-5">
          <NuxtPage />
        </div>
      </NuxtCard>
    </div>

    <MainFooter />
  </main>
</template>
