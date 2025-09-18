<script setup lang="ts">
import type { BadgeProps } from "@nuxt/ui";
const config = useRuntimeConfig();
const { applicationId = "" } = useRouteParams();

const {
  data: app,
  error,
  refresh
} = await useFetch(`/api/users/applicant/applications/${applicationId}`);

const badgeColor = computed<BadgeProps["color"]>(() => {
  switch (app.value?.status ?? "") {
    case "pending":
      return "info";
    case "submitted":
      return "warning";
    case "accepted":
      return "success";
    case "rejected":
      return "error";
    default:
      return "neutral";
  }
});

const print = () => window.print()
</script>

<template>
  <div class="w-full">
    <div class="lg:max-w-[70%] mx-auto">
      <header>
        <h1 class="text-xl font-bold">
          Admission Status
          <NuxtBadge
            :label="app?.status ?? 'uknown'"
            :color="badgeColor"
            variant="subtle"
          />
        </h1>
      </header>

      <section class="my-5">
        <div v-if="error">
          <FetchErrorAlert
            :message="normalizeException(error).message"
            show-retry
            @retry="refresh"
          />
        </div>

        <div v-else-if="app" class="mt-10">
          <div v-if="app.status === 'pending'" class="flex-col-center gap-2.5">
            <NuxtIcon name="lucide:clock" size="5rem" class="text-muted" />
            <div class="text-center">
              <p class="text-sm font-semibold">Application Pending</p>
              <small class="block max-w-80 text-center">
                Your application has not been submitted.
              </small>
            </div>
          </div>

          <div
            v-if="app.status === 'submitted'"
            class="flex-col-center gap-2.5"
          >
            <NuxtIcon name="lucide:view" size="5rem" class="text-muted" />
            <div class="text-center">
              <p class="text-sm font-semibold">Application Submitted</p>
              <small class="block max-w-80 text-center">
                Your application has been submitted and is being reviewed.
              </small>
            </div>
          </div>

          <div v-if="app.status === 'rejected'" class="flex-col-center gap-2.5">
            <NuxtIcon name="lucide:circle-x" size="5rem" class="text-red-500" />
            <div class="text-center">
              <p class="font-semibold text-red-500">Application Rejected</p>
              <small class="block max-w-80 text-center">
                We regret to inform you that your application has been rejected.
              </small>
            </div>
          </div>

          <div v-if="app.status === 'accepted'" class="flex-col-center gap-2.5">
            <NuxtIcon
              name="lucide:circle-check"
              size="5rem"
              class="text-green-500"
            />
            <div class="text-center">
              <p class="font-semibold text-green-500">Congratulations</p>
              <small class="block max-w-80 text-center">
                You have been granted admission into the
                {{ config.public.schoolNameLong }} ({{
                  config.public.schoolNameShort
                }})
              </small>
            </div>

            <div>
              <NuxtButton
                :to="`/application/portal/${applicationId}/payment`"
                label="Pay Admission Fees"
                icon="lucide:credit-card"
              />
            </div>

            <div class="w-full">
              <NuxtSeparator class="my-5" />

              <div>
                <div class="flex items-center gap-2 justify-between">
                  <p class="font-semibold">Admission Letter</p>
                  <NuxtButton
                    label="Print"
                    icon="lucide:printer"
                    color="neutral"
                    variant="outline"
                    size="sm"
                    @click="print"
                  />
                </div>

                <div class="mt-5">
                  <AppAdmissionLetter :application-id="applicationId" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
