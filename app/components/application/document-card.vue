<script setup lang="ts">
const toast = useToast();
const { confirmAsync } = useConfirm();

interface ApplicationDocument {
  label: string;
  value: string;
  key: string;
}
interface Props {
  document: ApplicationDocument;
  applicationId: string;
  status?: string;
}

const {
  applicationId,
  document: doc,
  status = undefined
} = defineProps<Props>();

const emit = defineEmits<{
  remove: [];
}>();

async function deleteDocument() {
  const confirm = await confirmAsync({
    title: "Delete Document",
    description: "Are you sure you want to proceed?"
  });

  if (!confirm) {
    return;
  }

  try {
    const res = await $fetch(
      `/api/users/applicant/applications/${applicationId}/documents`,
      {
        method: "PUT",
        body: {
          key: doc.key
        }
      }
    );
    emit("remove");
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
  <NuxtCard>
    <div class="flex items-center gap-1 justify-between">
      <div class="flex items-center gap-1">
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
        <p class="text-sm font-semibold text-muted">
          {{ doc.label }}
        </p>
      </div>

      <div v-if="doc.value" class="flex items-center gap-2.5">
        <NuxtButton
          v-if="!status || status === 'pending'"
          icon="lucide:trash"
          size="sm"
          color="error"
          variant="soft"
          loading-auto
          @click="deleteDocument"
        />
        <a :href="doc.value" download>
          <NuxtButton
            icon="lucide:download"
            size="sm"
            color="neutral"
            variant="soft"
          />
        </a>
      </div>
    </div>
  </NuxtCard>
</template>
