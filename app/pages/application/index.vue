<script setup lang="ts">
import { useDateFormat } from "@vueuse/core";

definePageMeta({
  layout: "main"
});

const { data, error, refresh } = await useFetch("/api/general/settings", {
  pick: ["applicationsOpen", "applicationsOpenAt", "applicationsClosedAt"]
});
</script>

<template>
  <div class="py-10 px-5">
    <div v-if="error" class="min-h-dvh md:min-h-[60dvh] flex-col-center">
      <div class="max-w-96">
        <FetchErrorAlert
          :message="normalizeException(error).message"
          show-retry
          @retry="refresh"
        />
      </div>
    </div>

    <div v-else-if="data">
      <div
        v-if="!data.applicationsOpen"
        class="min-h-dvh md:min-h-[60dvh] flex-col-center gap-5"
      >
        <h1
          class="text-center text-2xl md:text-3xl lg:text-4xl font-semibold text-red-500"
        >
          Application Closed!
        </h1>

        <p class="text-muted max-w-96 text-center">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis
          autem itaque pariatur quaerat unde? Unde odio aperiam neque
          cupiditate. Enim excepturi fuga magni assumenda qui amet iusto libero
          nesciunt non.
        </p>

        <div class="flex-col-center gap-1 text-center">
          <p class="font-bold">Application dates</p>

          <p>
            <span>
              {{
                useDateFormat(
                  new Date(data.applicationsOpenAt ?? Date.now()),
                  "MMM DD, YYYY"
                )
              }}
            </span>
            -
            <span>
              {{
                useDateFormat(
                  new Date(data.applicationsClosedAt ?? Date.now()),
                  "MMM DD, YYYY"
                )
              }}
            </span>
          </p>
        </div>

        <div class="flex items-center gap-2.5">
          <NuxtButton
            label="Go Back"
            icon="lucide:arrow-left"
            color="neutral"
            variant="soft"
            @click="$router.back()"
          />

          <NuxtButton
            to="/login"
            label="Existing Applications"
            trailing-icon="lucide:arrow-right"
          />
        </div>
      </div>

      <div
        v-else
        class="min-h-dvh md:min-h-[70dvh] flex gap-5 flex-col md:flex-row md:items-center md:justify-center flex-wrap"
      >
        <div class="w-full flex-col-center gap-1 text-center">
          <h1
            class="text-center text-2xl md:text-3xl lg:text-4xl font-semibold"
          >
            <span class="text-primary-500">Applications</span> Are Welcome!
          </h1>

          <p class="text-muted max-w-96 text-center">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>

          <p class="mt-2 font-bold">Application dates</p>

          <p>
            <span>
              {{
                useDateFormat(
                  new Date(data.applicationsOpenAt ?? Date.now()),
                  "MMM DD, YYYY"
                )
              }}
            </span>
            -
            <span>
              {{
                useDateFormat(
                  new Date(data.applicationsClosedAt ?? Date.now()),
                  "MMM DD, YYYY"
                )
              }}
            </span>
          </p>
        </div>
        <div class="w-full md:w-96">
          <NuxtCard>
            <div class="flex-col-center gap-2 text-center">
              <div
                class="bg-muted border border-default p-5 rounded-full flex-center"
              >
                <NuxtIcon name="lucide:user-plus" size="3.5rem" />
              </div>
              <p class="text-2xl font-semibold">
                <span class="text-primary">New</span> Application
              </p>
              <p class="text-sm text-muted">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </p>

              <NuxtModal
                title="New Application"
                description="Fill out the details in the form below."
                :dismissible="false"
              >
                <NuxtButton
                  label="Start Now"
                  block
                  variant="soft"
                  class="mt-2"
                />

                <template #body="{ close }">
                  <ApplicationInitiationForm
                    redirect="/login"
                    @cancel="() => close()"
                  />
                </template>
              </NuxtModal>
            </div>
          </NuxtCard>
        </div>

        <div class="w-full md:w-96">
          <NuxtCard>
            <div class="flex-col-center gap-2 text-center">
              <div
                class="bg-muted border border-default p-5 rounded-full flex-center"
              >
                <NuxtIcon name="lucide:bookmark-check" size="3.5rem" />
              </div>
              <p class="text-2xl font-semibold">
                <span class="text-primary">Existing</span> Application
              </p>
              <p class="text-sm text-muted">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </p>

              <NuxtButton
                to="/login"
                label="Continue"
                block
                variant="soft"
                class="mt-2"
              />
            </div>
          </NuxtCard>
        </div>
      </div>
    </div>
  </div>
</template>
