<script setup lang="ts">
import type { FormSubmitEvent } from "@nuxt/ui";
import { authClient } from "~/lib/auth";
import normalizeException from "~~/shared/utils/normalize-exception";
import {
  changePasswordSchema,
  type ChangePasswordSchema
} from "~~/shared/schemas/password-reset.schema";
import { useAuthStore } from "~/stores/auth.store";

const authStore = useAuthStore();

const state = reactive<ChangePasswordSchema>({
  currentPassword: "",
  newPassword: "",
  confirmNewPassword: ""
});

function reset() {
  state.currentPassword = "";
  state.newPassword = "";
  state.confirmNewPassword = "";
}

const error = ref<Error | null>(null);
const open = ref<boolean>(false);

async function onSubmit(event: FormSubmitEvent<ChangePasswordSchema>) {
  error.value = null;

  const { currentPassword, newPassword } = event.data;

  await authClient.changePassword(
    {
      currentPassword,
      newPassword,
      revokeOtherSessions: true
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

    <NuxtForm
      :schema="changePasswordSchema"
      :state="state"
      class="space-y-4"
      @submit.prevent="onSubmit"
    >
      <NuxtFormField label="Current Password" name="currentPassword">
        <VuePassword v-model="state.currentPassword" size="lg" class="w-full" />
      </NuxtFormField>

      <NuxtFormField label="New Password" name="newPassword">
        <VuePassword v-model="state.newPassword" size="lg" class="w-full" />
      </NuxtFormField>

      <NuxtFormField label="Confirm New Password" name="confirmNewPassword">
        <VuePassword
          v-model="state.confirmNewPassword"
          size="lg"
          class="w-full"
        />
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
            Your password has been changed successfully! Sign in now to
            continue.
          </p>
        </div>
      </template>

      <template #footer>
        <NuxtButton
          to="/login"
          label="Log in"
          trailing-icon="lucide:circle-arrow-right"
        />
      </template>
    </NuxtModal>
  </div>
</template>
