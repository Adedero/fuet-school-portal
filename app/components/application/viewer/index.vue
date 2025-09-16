<script setup lang="ts">
interface Props {
  applicationId: string;
}

const { applicationId } = defineProps<Props>();

const { data, error, execute, pending } = useFetch(
  `/api/users/applicant/applications/${applicationId}`
);

/* const dataWithMissingFields = computed(() => {
  return Object.fromEntries(
    Object.entries(data.value ?? {}).map(([key, value]) => {
      if (key === "middleName" || key === "otherNames") {
        return [key, value];
      } else if (typeof value === "string" && !value) {
        return [key, "missing"];
      } else {
        return [key, value];
      }
    })
  );
}); */

export type ApplicationData = NonNullable<typeof data.value>;

const print = () => {
  window.print();
};

defineExpose({
  print
});

onMounted(async () => {
  await execute();
});
</script>

<template>
  <div class="w-full overflow-x-auto">
    <div v-if="pending" class="flex-col-center gap-1">
      <NuxtIcon
        name="lucide:loader"
        size="2rem"
        class="text-muted animate animate-spin"
      />
      <p class="text-sm text-muted font-semibold">Loading</p>
    </div>

    <div v-else-if="error">
      <FetchErrorAlert
        :message="normalizeException(error).message"
        show-retry
        @retry="execute"
      />
    </div>

    <div
      v-else-if="data"
      class="application-document space-y-5 print:space-y-0"
    >
      <div class="application-document-page">
        <ApplicationViewerPageHeader :data />
        <ApplicationViewerSection1 :data />
      </div>

      <div class="application-document-page">
        <ApplicationViewerPageHeader class="hidden print:block" :data />
        <ApplicationViewerSection2 :data />
      </div>

      <div class="application-document-page">
        <ApplicationViewerPageHeader class="hidden print:block" :data />
        <ApplicationViewerSection3 :data />
      </div>

      <div class="application-document-page">
        <ApplicationViewerPageHeader class="hidden print:block" :data />
        <ApplicationViewerSection4 :data />
      </div>
    </div>
  </div>
</template>

<style>
.application-document-page {
  border: 1px solid var(--border-color-default);
  padding: 2rem 1.5rem;
  /* aspect-ratio: 1/1.4142; */
  min-width: 400px;
}

@media print {
  body {
    visibility: hidden;
    margin: 0;
  }

  .application-document {
    visibility: visible;
    position: absolute;
    top: 0;
    left: 0;
    padding: 0;
    margin: 0;
  }

  .application-document-page {
    padding: 0.75in;
    width: 8.27in;
    height: 11.96in;
    border: none;
  }
}
</style>
