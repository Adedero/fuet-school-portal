<script setup lang="ts">
import { AppSettings } from "#components";
import { applicationSchema } from "~~/shared/schemas/application.schema";
import { useDateFormat } from "@vueuse/core";

const { applicationId = "" } = useRouteParams();

const {
  data: app,
  error,
  refresh
} = await useFetch(`/api/users/applicant/applications/${applicationId}`);

const issues = computed(() => {
  const result = applicationSchema.safeParse(app.value ?? {});
  return result.error?.issues ?? [];
});

const hasAgreed = ref<boolean>(false);

const viewer = useTemplateRef("viewer");

const open = ref<boolean>(false);

const handleApplicationSubmit = () => {
  open.value = true;
  refresh();
};
</script>

<template>
  <div class="w-full">
    <div class="lg:max-w-[80%] mx-auto">
      <header>
        <h1 class="text-xl font-bold">Review Application</h1>

        <div class="mt-1 flex items-center gap-2.5 justify-between">
          <div>
            <AppSettings>
              <template #default="{ data: settings }">
                <p class="text-sm">
                  Application deadline:
                  <b v-if="settings.applicationsClosedAt">
                    {{
                      useDateFormat(
                        settings.applicationsClosedAt,
                        "MMMM DD, YYYY"
                      )
                    }}
                  </b>
                </p>
              </template>
            </AppSettings>
          </div>

          <div>
            <NuxtButton
              label="Print"
              icon="lucide:printer"
              color="neutral"
              variant="outline"
              size="sm"
              @click="viewer?.print"
            />
          </div>
        </div>

        <div v-if="issues.length" class="mt-2">
          <NuxtPopover>
            <NuxtAlert
              :title="`Found ${issues.length} ${
                issues.length === 1 ? 'error' : 'errors'
              }`"
              color="error"
              variant="subtle"
              orientation="horizontal"
              :actions="[
                {
                  label: 'View',
                  color: 'error'
                }
              ]"
            />

            <template #content>
              <div class="p-5 space-y-5 max-w-80 max-h-[26rem] overflow-y-auto">
                <ul class="grid gap-2 list-inside list-disc">
                  <li
                    v-for="issue in issues"
                    :key="`${issue.code}-${issue.path}`"
                    class="border-b border-b-default py-1.5"
                  >
                    {{ issue.message }}
                  </li>
                </ul>
              </div>
            </template>
          </NuxtPopover>
        </div>
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
          <ApplicationViewer ref="viewer" :application-id="applicationId" />
        </div>
      </section>

      <div>
        <div class="flex items-start gap-2">
          <NuxtCheckbox v-if="app?.status === 'pending'" v-model="hasAgreed" />
          <NuxtCheckbox v-else :default-value="true" disabled />
          <p class="text-sm text-muted">
            I hereby consent that the information provided in this application
            by me is, to the best of my knowledge, correct and free of errors. I
            also consent to my application being withdrawn if it is discovered
            that I have willfully provided wrong or misleading information.
          </p>
        </div>
      </div>

      <footer v-if="app" class="mt-5 flex items-center gap-2.5 justify-between">
        <NuxtButton
          :to="`/application/portal/${applicationId}/documents`"
          label="Previous"
          color="neutral"
          variant="soft"
        />

        <div class="flex items-center justify-end gap-2.5">
          <ApplicationDeleter
            :application-id="applicationId"
            @remove="() => navigateTo('/application/portal')"
          />
          <ApplicationSubmitter
            v-if="app.status === 'pending'"
            :application="app"
            :application-id="applicationId"
            :condition="hasAgreed"
            condition-message="Please
          accept the terms before submitting"
            @submit="handleApplicationSubmit"
          />

          <NuxtModal v-model:open="open" title="Application Submitted!">
            <template #body>
              <div class="flex-col-center gap-2.5">
                <NuxtIcon
                  name="lucide:circle-check"
                  size="5rem"
                  class="text-emerald-500"
                />

                <p class="font-semibold text-emerald-500 text-center text-lg">
                  Success
                </p>

                <p class="text-sm text-muted text-center">
                  Your application has been submitted successfully
                </p>
              </div>
            </template>
          </NuxtModal>
        </div>
      </footer>
    </div>
  </div>
</template>
