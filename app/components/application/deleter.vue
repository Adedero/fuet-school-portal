<script setup lang="ts">
interface Props {
  applicationId: string;
}

const { applicationId } = defineProps<Props>();

const emit = defineEmits<{
  remove: [id: string];
}>();

const toast = useToast();
const { confirmAsync } = useConfirm();

const confirm = async () => {
  return await confirmAsync({
    title: "Delete Application",
    description:
      "Are you sure you want to delete this application? This action cannot be undone",
    acceptProps: {
      color: "error",
      label: "Delete"
    }
  });
};

const loading = ref<boolean>(false);

const handleDelete = async () => {
  if (!(await confirm())) {
    return;
  }

  try {
    const { message } = await $fetch(
      `/api/users/applicant/applications/${applicationId}`,
      {
        method: "DELETE"
      }
    );
    emit("remove", applicationId);
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
};
</script>

<template>
  <div @click="handleDelete">
    <slot :loading>
      <NuxtButton label="Delete" color="error" variant="soft" :loading />
    </slot>
  </div>
</template>
