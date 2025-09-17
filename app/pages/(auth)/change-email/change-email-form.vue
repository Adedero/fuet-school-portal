<script setup lang="ts">
import type { FormSubmitEvent } from "@nuxt/ui";
import { authClient } from "~/lib/auth";
import normalizeException from "~~/shared/utils/normalize-exception";
import { useAuthStore } from "~/stores/auth.store";
import z from "zod";

const authStore = useAuthStore();

const schema = z.object({
  newEmail: z.email("Invalid email address")
});

type Schema = z.infer<typeof schema>;

const state = reactive<Schema>({
  newEmail: ""
});

function reset() {
  state.newEmail = "";
}

const error = ref<Error | null>(null);
const open = ref<boolean>(false);

async function onSubmit(event: FormSubmitEvent<Schema>) {
  error.value = null;

  const { newEmail } = event.data;

  await authClient.changeEmail(
    {
      newEmail,
      callbackURL: "/login"
    },
    {
      onError(ctx) {
        error.value = normalizeException(ctx.error);
      },
      onSuccess() {
        reset();
        open.value = true;
        authStore.setUser(null);
        authStore.setSession(null);
      }
    }
  );
}
</script>

<template>
  <div>
    <div v-if="error" class="mb-3">
      <FetchErrorAlert :message="error.message" />
    </div>

    <NuxtForm :schema :state class="space-y-4" @submit.prevent="onSubmit">
      <NuxtFormField label="New Email" name="newEmail">
        <NuxtInput v-model="state.newEmail" size="lg" class="w-full" />
      </NuxtFormField>

      <NuxtButton
        type="submit"
        class="mt-2 w-full flex-center"
        size="lg"
        icon="i-lucide:check-circle"
        loading-auto
      >
        Submit
      </NuxtButton>
    </NuxtForm>

    <NuxtModal
      v-model:open="open"
      title="Success"
      :close="false"
      :dismissible="false"
      :ui="{ footer: 'justify-end' }"
    >
      <template #body>
        <div class="space-y-3">
          <p>
            Click the link that has been sent to your current email to continue
          </p>
        </div>
      </template>

      <template #footer>
        <NuxtButton
          to="/login"
          label="Continue"
          trailing-icon="lucide:circle-arrow-right"
        />
      </template>
    </NuxtModal>
  </div>
</template>
