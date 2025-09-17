<script setup lang="ts">
import type { ApplicationData } from "./index.vue";

interface Props {
  data: ApplicationData;
}

const { data } = defineProps<Props>();

const state = computed(() => {
  return [
    {
      label: "Passport Photograph",
      value: data.passportUrl ?? ""
    },
    {
      label: "Birth Certificate",
      value: data.birthCertificateUrl ?? ""
    },
    {
      label: "State of Origin Certificate",
      value: data.stateOfOriginUrl ?? ""
    },
    {
      label: "O Level Result",
      value: data.oLevelResultUrl ?? ""
    },
    {
      label: "Post UTME Registration Slip",
      value: data.postUTMESlipUrl ?? ""
    },
    {
      label: "Admission Form Payment Receipt",
      value: data.admissionFormPaymentReceiptUrl ?? ""
    }
  ];
});
</script>

<template>
  <div class="print:mt-10 space-y-10">
    <h3 class="text-xl font-bold">Section IV: Documents Submitted</h3>

    <section class="space-y-16">
      <div class="grid gap-5">
        <NuxtCard v-for="doc in state" :key="doc.label" class="rounded-none">
          <div>
            <div class="flex items-center gap-2">
              <NuxtIcon
                v-if="doc.value"
                name="lucide:circle-check"
                class="text-success"
                size="1.5rem"
              />
              <NuxtIcon
                v-else
                name="lucide:circle-x"
                class="text-error"
                size="1.5rem"
              />
              <div>
                <p class="text-sm font-semibold">
                  {{ doc.label }}
                </p>
                <p class="text-xs text-muted">
                  {{ doc.value ? "submitted" : "not submitted" }}
                </p>
              </div>
            </div>
          </div>
        </NuxtCard>
      </div>
    </section>
  </div>
</template>
