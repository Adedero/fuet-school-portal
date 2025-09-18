<script setup lang="ts">
import { useDateFormat } from "@vueuse/core";
import type { StudentApplication } from "~/pages/application/portal/index.vue";

interface Props {
  application: StudentApplication;
}

const { application } = defineProps<Props>();

const emit = defineEmits<{
  remove: [id: string];
}>();
</script>

<template>
  <NuxtCard>
    <div>
      <div>
        <p class="text-sm mb-2">
          {{ application.course ?? "unknown course" }},
          <b>{{ application.degreeType ?? "unknown degree" }}</b>
        </p>
        <h4 class="font-mono text-2xl font-semibold">
          {{ application.applicationNumber }}
        </h4>
        <p class="font-mono">
          Session:
          {{ application.schoolSessionName }}
        </p>
        <NuxtBadge
          :label="
            application.status === 'pending' ||
            application.status === 'submitted'
              ? application.status
              : 'application processed'
          "
          :color="application.status === 'pending' ? 'success' : 'error'"
          variant="subtle"
        />
      </div>

      <div class="text-sm mt-2.5 space-y-5">
        <div class="flex items-center justify-between gap-2.5">
          <div class="flex items-center gap-1">
            <NuxtIcon name="lucide:calendar" />
            <p>
              Started:
              {{
                useDateFormat(application.createdAt, "MMM DD, YYYY. hh:mm aa")
              }}
            </p>
          </div>

          <div class="flex items-center gap-2.5">
            <NuxtButton
              v-if="application.status !== 'pending'"
              :to="`/application/portal/${application.id}`"
              size="sm"
              label="Review"
              icon="lucide:view"
            />
            <NuxtButton
              v-else
              :to="`/application/portal/${application.id}`"
              size="sm"
              label="Edit"
              icon="lucide:file-pen"
            />
            <ApplicationDeleter
              v-if="!application.hasPaidAdmissionFee"
              :application-id="application.id"
              @remove="(id) => emit('remove', id)"
            >
              <template #default="{ loading }">
                <NuxtButton
                  size="sm"
                  label="Delete"
                  icon="lucide:trash-2"
                  color="error"
                  variant="soft"
                  :loading
                />
              </template>
            </ApplicationDeleter>
          </div>
        </div>
      </div>
    </div>
  </NuxtCard>
</template>
