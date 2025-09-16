<script setup lang="ts">
import { applicationSchema } from "~~/shared/schemas/application.schema";

interface Props {
  application: unknown;
  condition?: boolean;
  conditionMessage?: string;
  applicationId: string;
}

const {
  applicationId,
  application,
  condition = true,
  conditionMessage = ""
} = defineProps<Props>();

const emit = defineEmits<{
  submit: [];
}>();

const toast = useToast();
const { confirmAsync } = useConfirm();

const confirm = async () => {
  return await confirmAsync({
    title: "Submit Application",
    description:
      "Are you sure you want to submit this application? Once submitted, you cannot edit any part of the application"
  });
};

const loading = ref<boolean>(false);
async function submitApplication() {
  if (!condition) {
    toast.add({
      color: "error",
      title: "Error",
      description: conditionMessage
    });
    return;
  }

  const result = applicationSchema.safeParse(application);
  if (!result.success) {
    toast.add({
      color: "error",
      title: "Error",
      description:
        result.error.issues[0]?.message ??
        "Some fields are missing. Check your applictaion and try again."
    });
    return;
  }

  if (!(await confirm())) {
    return;
  }

  loading.value = true;
  try {
    const res = await $fetch(
      `/api/users/applicant/applications/${applicationId}/submit`,
      {
        method: "POST"
      }
    );
    emit("submit");
    toast.add({
      color: "success",
      title: "Success",
      description: res.message
    });
  } catch (err) {
    toast.add({
      color: "error",
      title: "Error",
      description: normalizeException(err).message
    });
  } finally {
    loading.value = false;
  }
}
</script>

<template>
  <div @click="submitApplication">
    <slot :loading>
      <NuxtButton label="Submit" :loading />
    </slot>
  </div>
</template>
