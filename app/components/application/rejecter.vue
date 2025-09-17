<script setup lang="ts">
interface Props {
  applicationId: string;
}

const { applicationId } = defineProps<Props>();

const emit = defineEmits<{
  done: [];
}>();

const toast = useToast();

const open = ref<boolean>(false);
async function acceptApplication() {
  try {
    const { message } = await $fetch(
      `/api/users/admin/applications/${applicationId}/update-status`,
      {
        method: "post",
        body: {
          status: "rejected"
        }
      }
    );
    emit("done")
    open.value = false;

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
    <div @click="open = true">
      <slot />
    </div>

    <NuxtModal
      v-model:open="open"
      title="Accept Application"
      description="Are you sure you want to reject this application?"
      :dismissible="false"
      :close="false"
    >
      <template #body="{ close }">
        <div>
          <div class="flex items-center justify-end gap-2.5">
            <NuxtButton
              label="Cancel"
              color="neutral"
              variant="soft"
              @click="close"
            />

            <NuxtButton
              label="Proceed"
              loading-auto
              @click="acceptApplication"
            />
          </div>
        </div>
      </template>
    </NuxtModal>
  </div>
</template>
