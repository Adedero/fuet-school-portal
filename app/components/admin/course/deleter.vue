<script setup lang="ts">
const toast = useToast();

const { courseId } = defineProps<{
  courseId: string;
}>();

const emit = defineEmits<{
  done: [];
}>();

async function handleDelete() {
  try {
    const { message } = await $fetch(`/api/users/admin/courses/${courseId}`, {
      method: "DELETE"
    });
    emit("done");
    close();
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
}

const isOpen = ref<boolean>(false);

function open() {
  isOpen.value = true;
}
function close() {
  isOpen.value = false;
}

defineExpose({ open, close });
</script>

<template>
  <NuxtModal
    v-model:open="isOpen"
    title="Delete Course"
    description="Are you sure you want to delete this course? This action cannot be undone"
    :dismissible="false"
  >
    <template #body="{ close: closeModal }">
      <div class="flex items-center gap-2.5 justify-end">
        <NuxtButton
          type="button"
          label="Cancel"
          color="neutral"
          variant="soft"
          @click="closeModal"
        />
        <NuxtButton
          label="Delete"
          color="error"
          loading-auto
          @click="handleDelete"
        />
      </div>
    </template>
  </NuxtModal>
</template>
