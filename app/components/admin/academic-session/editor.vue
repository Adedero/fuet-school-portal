<script setup lang="ts">
import {
  sessionSchema,
  type Session as TSession
} from "~~/shared/schemas/session.schema";
import type { FormSubmitEvent } from "@nuxt/ui";
import type { Session } from "~/pages/portal/admin/academic-sessions/index.vue";

const toast = useToast();

interface Props {
  session: Session;
}

const { session } = defineProps<Props>();

const emit = defineEmits<{
  update: [session: Session];
}>();

const state = reactive<Partial<TSession>>({
  name: session.name,
  startYear: session.startYear
});

const reset = () => {
  state.name = "";
  state.startYear = new Date().getFullYear();
};

async function handleSubmit(event: FormSubmitEvent<TSession>) {
  const { data } = event;
  try {
    const { message, session: updated } = await $fetch(
      `/api/users/admin/sessions/${session.id}`,
      {
        method: "PUT",
        body: data
      }
    );
    emit("update", updated);

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
    <NuxtForm
      :state
      :schema="sessionSchema"
      class="space-y-5"
      @submit.prevent="handleSubmit"
    >
      <NuxtFormField name="name" label="Session name" required>
        <NuxtInput v-model="state.name" size="lg" class="w-full" />
      </NuxtFormField>

      <NuxtFormField name="startYear" label="Official starting year" required>
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

      <NuxtButton type="submit" loading-auto label="Submit" />
    </NuxtForm>
  </div>
</template>
