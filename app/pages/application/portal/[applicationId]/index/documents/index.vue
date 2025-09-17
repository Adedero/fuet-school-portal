<script setup lang="ts">
const { applicationId = "" } = useRouteParams();

const {
  data: app,
  error,
  refresh
} = await useFetch(`/api/users/applicant/applications/${applicationId}`);

const state = computed(() => {
  return [
    {
      label: "Passport Photograph",
      value: app.value?.passportUrl ?? "",
      key: "passportUrl"
    },
    {
      label: "Birth Certificate",
      value: app.value?.birthCertificateUrl ?? "",
      key: "birthCertificateUrl"
    },
    {
      label: "State of Origin Certificate",
      value: app.value?.stateOfOriginUrl ?? "",
      key: "stateOfOriginUrl"
    },
    {
      label: "O Level Result",
      value: app.value?.oLevelResultUrl ?? "",
      key: "oLevelResultUrl"
    },
    {
      label: "Post UTME Registration Slip",
      value: app.value?.postUTMESlipUrl ?? "",
      key: "postUTMESlipUrl"
    },
    {
      label: "Admission Form Payment Receipt",
      value: app.value?.admissionFormPaymentReceiptUrl ?? "",
      key: "admissionFormPaymentReceiptUrl"
    }
  ];
});
</script>

<template>
  <div class="w-full">
    <div class="lg:max-w-[70%] mx-auto">
      <header>
        <h1 class="text-xl font-bold">Documents</h1>
        <p class="text-sm muted">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        </p>
      </header>

      <section class="my-5">
        <div v-if="error">
          <FetchErrorAlert
            :message="normalizeException(error).message"
            show-retry
            @retry="refresh"
          />
        </div>

        <div v-else-if="app">
          <ApplicationDocumentUploadForm
            v-if="app.status === 'pending'"
            :application-id="applicationId"
            @upload="() => refresh()"
          />

          <div class="mt-10">
            <p class="text-lg font-semibold">Uploaded</p>
            <NuxtSeparator class="mt-1 mb-5" />

            <div class="grid gap-2.5">
              <ApplicationDocumentCard
                v-for="document in state"
                :key="document.label"
                :document
                :application-id="applicationId"
                :status="app.status"
                @remove="() => refresh()"
              />
            </div>
          </div>
        </div>
      </section>

      <footer v-if="app" class="flex items-center gap-2.5 justify-between">
        <NuxtButton
          :to="`/application/portal/${applicationId}/academic-info`"
          label="Previous"
          color="neutral"
          variant="soft"
        />
        <NuxtButton
          v-if="app.status !== 'pending'"
          :to="`/application/portal/${applicationId}/review`"
          label="Next"
        />
        <NuxtButton
          v-else
          :to="`/application/portal/${applicationId}/review`"
          label="Continue"
        />
      </footer>
    </div>
  </div>
</template>
