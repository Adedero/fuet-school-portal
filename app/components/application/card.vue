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

const toast = useToast();
const { confirmAsync } = useConfirm();

const handleDelete = async () => {
  const confirm = await confirmAsync({
    title: "Delete application",
    description: "Are you sure you want to proceed? This cannot be undone.",
    acceptProps: {
      label: "Proceed"
    },
    rejectProps: {
      label: "Cancel",
      color: "neutral",
      variant: "soft"
    }
  });

  if (!confirm) {
    return;
  }

  try {
    const { message } = await $fetch(
      `/api/users/applicant/applications/${application.id}`,
      {
        method: "DELETE"
      }
    );
    toast.add({
      color: "success",
      title: "Success",
      description: message
    });
  } catch (error) {
    toast.add({
      color: "error",
      title: "Error",
      description: normalizeException(error).message
    });
  }

  emit("remove", "12323");
};
</script>

<template>
  <NuxtCard>
    <div>
      <div>
        <p class="text-sm">
          {{ application.course ?? "unknown course" }},
          <b>{{ application.degreeType ?? "unknown degree" }}</b>
        </p>
        <h4 class="font-mono text-2xl font-semibold">
          {{ application.schoolSession?.name ?? "Unknown Session" }}
        </h4>
        <NuxtBadge
          :label="application.status"
          :color="application.status === 'open' ? 'success' : 'error'"
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
              v-if="application.status === 'closed'"
              :to="`/application/portal/${application.id}`"
              size="sm"
              label="Review"
              icon="lucide:view"
            />
            <NuxtButton
              v-if="application.status === 'open'"
              :to="`/application/portal/${application.id}`"
              size="sm"
              label="Edit"
              icon="lucide:file-pen"
            />
            <NuxtButton
              size="sm"
              label="Delete"
              icon="lucide:trash-2"
              color="error"
              variant="soft"
              loading-auto
              @click="handleDelete"
            />
          </div>
        </div>
      </div>
    </div>
  </NuxtCard>
</template>
