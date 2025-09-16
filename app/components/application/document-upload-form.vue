<script setup lang="ts">
import type { FormSubmitEvent } from "@nuxt/ui";
import type z from "zod";
import applicationDocuments from "~/utils/data/application-documents";
import { documentUploadSchema } from "~~/shared/schemas/application.schema";

const toast = useToast();

interface Props {
  applicationId: string;
}

const { applicationId } = defineProps<Props>();

const emit = defineEmits<{
  upload: [];
}>();

const MAX_FILE_SIZE = 2 * 1024 * 1024; // 2MB
const ACCEPTED_FILE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
  "application/pdf"
];

const schema = documentUploadSchema({
  maxFileSize: MAX_FILE_SIZE,
  acceptedFileTypes: ACCEPTED_FILE_TYPES
});

type Schema = z.infer<typeof schema>;

const state = reactive<Partial<Schema>>({
  documentType: undefined,
  file: undefined
});

async function handleSubmit(event: FormSubmitEvent<Schema>) {
  const { data } = event;

  const result = await createServerFile(data.file);
  if (result.error || !result.data) {
    toast.add({
      color: "error",
      title: "Error",
      description:
        result.error?.message ?? "Failed to process file. Try again later"
    });

    return;
  }

  const payload = {
    type: data.documentType,
    file: result.data
  };

  try {
    const res = await $fetch(
      `/api/users/applicant/applications/${applicationId}/documents`,
      { method: "POST", body: payload }
    );
    emit("upload");
    state.documentType = undefined;
    state.file = undefined;
    toast.add({
      color: "success",
      title: "Success",
      description: res.message
    });
  } catch (error) {
    toast.add({
      color: "error",
      title: "Error",
      description: normalizeException(error).message
    });
  }
}
</script>

<template>
  <NuxtForm :state :schema class="space-y-5" @submit="handleSubmit">
    <NuxtFormField name="documentType" label="Document Type" required>
      <NuxtSelectMenu
        v-model="state.documentType"
        :items="applicationDocuments"
        size="lg"
        class="w-full"
      />
    </NuxtFormField>

    <NuxtFormField name="file" label="Document" required>
      <NuxtFileUpload
        v-model="state.file"
        :description="`PDF or Image file (max: ${formatBytes(MAX_FILE_SIZE)})`"
        layout="list"
        :accept="ACCEPTED_FILE_TYPES.join()"
        class="min-h-40"
      />
    </NuxtFormField>

    <div class="flex justify-end">
      <NuxtButton type="submit" label="Submit" loading-auto />
    </div>
  </NuxtForm>
</template>
