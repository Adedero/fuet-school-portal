<script setup lang="ts">
definePageMeta({
  layout: "application"
});

const {
  data: applications,
  error,
  refresh
} = await useFetch("/api/users/applicant/applications");

export type StudentApplication = NonNullable<
  NonNullable<(typeof applications)["value"]>[number]
>;

const open = ref<boolean>(false);

const handleApplicationInitiation = async () => {
  await refresh();
  open.value = false;
};

const handleApplicationDeletion = (id: string) => {
  if (!applications.value) return;
  applications.value = applications.value.filter((app) => app.id !== id);
};
</script>

<template>
  <div class="section-padding py-5">
    <header class="mb-10 flex items-center gap-5 justify-between">
      <h1 class="text-2xl md:text-3xl lg:text-4xl font-bold">
        Your Applications
      </h1>

      <NuxtButton
        label="New"
        icon="lucide:plus"
        color="neutral"
        variant="soft"
        @click="open = true"
      />
    </header>

    <div v-if="error" class="flex-col-center">
      <FetchErrorAlert
        class="w-fit max-w-96"
        :message="normalizeException(error).message"
        show-retry
        @retry="refresh"
      />
    </div>

    <div v-else-if="applications">
      <div v-if="!applications.length" class="p-10 flex-col-center gap-5">
        <EmptyIcon label="No Applications" />

        <NuxtButton label="Start Application" @click="open = true" />
      </div>

      <div
        v-else
        class="grid gap-2.5 md:grid-cols-[repeat(auto-fit,minmax(28rem,1fr))]"
      >
        <ApplicationCard
          v-for="app in applications"
          :key="app.id"
          :application="app"
          @remove="handleApplicationDeletion"
        />
      </div>
    </div>

    <NuxtModal
      v-model:open="open"
      title="New Application"
      description="Fill out the details in the form below."
      :dismissible="false"
    >
      <template #body>
        <ApplicationInitiationForm
          @done="handleApplicationInitiation"
          @cancel="open = false"
        />
      </template>
    </NuxtModal>
  </div>
</template>
