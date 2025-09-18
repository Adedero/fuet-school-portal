<script setup lang="ts">
import { useDateFormat } from "@vueuse/core";
import { departments } from "~/utils/data/faculties";

interface Props {
  applicationId: string;
}
const { applicationId } = defineProps<Props>();

const config = useRuntimeConfig();

const { data, error, pending, refresh } = useFetch(
  `/api/general/applications/review/${applicationId}`,
  {
    pick: [
      "firstName",
      "middleName",
      "otherNames",
      "lastName",
      "gender",
      "jambRegNumber",
      "schoolSessionName",
      "course",
      "degreeType",
      "updatedAt"
    ]
  }
);

const fullName = computed(() => {
  const {
    firstName = "",
    middleName = "",
    otherNames = "",
    lastName = ""
  } = data.value ?? {};

  return `${firstName} ${middleName} ${otherNames} ${lastName}`;
});
</script>

<template>
  <div>
    <div v-if="pending" class="flex-col-center gap-1">
      <NuxtIcon name="lucide:loader" size="2rem" class="animate-spin" />
      <p class="text-sm text-muted font-semibold">Loading</p>
    </div>

    <div v-else-if="error">
      <FetchErrorAlert
        :message="`Failed to load admission letter: ${
          normalizeException(error).message
        }`"
        show-retry
        @retry="refresh"
      />
    </div>

    <div
      v-else-if="data"
      id="admission-letter-document"
      class="overflow-x-auto"
    >
      <div
        class="border border-muted min-w-[400px] print:border-none print:w-[210mm] print:h-[297mm] print:p-[0.75in] p-5"
      >
        <div class="space-y-10">
          <header class="flex-col-center text-center">
            <AppLogo :width="60" />
          </header>

          <section>
            <h1 class="font-bold">
              {{ config.public.schoolNameLong }}
            </h1>
            <p>Office of the Registrar</p>
            <p>
              {{ useDateFormat(data.updatedAt, "MMMM DD, YYYY") }}
            </p>

            <p class="mt-5">Dear {{ fullName }},</p>

            <p class="my-5 text-center font-bold uppercase">Admission Letter</p>
          </section>

          <section class="space-y-5">
            <p>
              I am pleased to inform you that you have been offered provisional
              admission into the {{ config.public.schoolNameLong }} for the
              <b>{{ data.schoolSessionName }}</b> academic session. You have
              been admitted to study:
            </p>

            <div>
              <p>
                Programme: <b>{{ data.course }}, {{ data.degreeType }}</b>
              </p>
              <p>
                Faculty:
                <b>
                  {{
                    departments.find((dept) => dept.name === data?.course)
                      ?.faculty
                  }}
                </b>
              </p>
            </div>

            <p>
              Please note that this offer of admission is conditional. Your
              admission will only be considered valid upon the payment of the
              prescribed admission acceptance and registration fees within the
              stipulated deadline. Failure to complete this requirement will
              lead to the withdrawal of your admission offer.
            </p>

            <p>
              You are also expected to present all relevant academic credentials
              for verification during registration.
            </p>
            <p>
              We congratulate you on your achievement and look forward to
              welcoming you to the Federal University of Environment and
              Technology.
            </p>
            <div>
              <p>Sincerely, [Registrar's Name] Registrar</p>
              <p>{{ config.public.schoolNameLong }}</p>
              <p>[signature]</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
@media print {
  body {
    visibility: hidden;
  }

  #admission-letter-document {
    visibility: visible;
    position: absolute;
    left: 0;
    top: 0;
  }
}
</style>
