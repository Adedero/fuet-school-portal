<script setup lang="ts">
const toast = useToast();

interface Props {
  sessionId: string;
}

const { sessionId } = defineProps<Props>();

const emit = defineEmits<{
  update: [sessionId: string];
}>();

async function handleSubmit() {
  try {
    const { message } = await $fetch(
      `/api/users/admin/sessions/${sessionId}/set-current`,
      {
        method: "PUT"
      }
    );
    emit("update", sessionId);

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
</script>

<template>
  <div>
    <p>Do you want to set this session as the current session?</p>

    <div class="mt-2.5 flex justify-end">
      <NuxtButton label="Proceed" loading-auto @click="handleSubmit" />
    </div>
  </div>
</template>
