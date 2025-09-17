<script setup lang="ts">
import {
  extendedSessionSchema,
  type ExtendedSession
} from "~~/shared/schemas/session.schema";
import type { FormSubmitEvent } from "@nuxt/ui";
import type { Session } from "~/pages/portal/admin/academic-sessions/index.vue";

const toast = useToast();

const emit = defineEmits<{
  add: [session: Session];
}>();

const open = ref<boolean>(false);

const state = reactive<Partial<ExtendedSession>>({
  name: "",
  startYear: new Date().getFullYear(),
  isCurrent: false
});

const reset = () => {
  state.name = "";
  state.startYear = new Date().getFullYear();
  state.isCurrent = false;
};

async function handleSubmit(event: FormSubmitEvent<ExtendedSession>) {
  const { data } = event;
  try {
    const { message, session } = await $fetch(`/api/users/admin/sessions`, {
      method: "POST",
      body: data
    });
    emit("add", session);

    open.value = false;

    reset();

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
      <slot>
        <NuxtButton label="New" icon="lucide:plus" />
      </slot>
    </div>

    <NuxtModal v-model:open="open" title="Create Session">
      <template #body>
        <NuxtForm
          :state
          :schema="extendedSessionSchema"
          class="space-y-5"
          @submit.prevent="handleSubmit"
        >
          <NuxtFormField name="name" label="Session name" required>
            <NuxtInput v-model="state.name" size="lg" class="w-full" />
          </NuxtFormField>

          <NuxtFormField
            name="startYear"
            label="Official starting year"
            required
          >
            <NuxtInputNumber
              v-model="state.startYear"
              size="lg"
              class="w-full"
              orientation="vertical"
              :format-options="{
                useGrouping: 'false'
              }"
            />
          </NuxtFormField>

          <NuxtFormField name="isCurrent" required>
            <NuxtCheckbox
              v-model="state.isCurrent"
              size="lg"
              label="Set as current session"
            />
          </NuxtFormField>

          <NuxtButton type="submit" loading-auto label="Submit" />
        </NuxtForm>
      </template>
    </NuxtModal>
  </div>
</template>
