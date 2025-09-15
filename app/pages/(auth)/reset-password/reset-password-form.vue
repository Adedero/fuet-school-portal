<script setup lang="ts">
import type { FormSubmitEvent } from "@nuxt/ui";
import { authClient } from "~/lib/auth";
import normalizeException from "~~/shared/utils/normalize-exception";
import {
  resetPasswordSchema,
  type ResetPasswordSchema
} from "~~/shared/schemas/password-reset.schema";

const route = useRoute();

const token = route.query.token?.toString();

const state = reactive<ResetPasswordSchema>({
  password: "",
  confirmPassword: ""
});

function reset() {
  state.password = "";
  state.confirmPassword = "";
}

const error = ref<Error | null>(null);
const open = ref<boolean>(false);

async function onSubmit(event: FormSubmitEvent<ResetPasswordSchema>) {
  error.value = null;

  if (!token) {
    error.value = new Error("Invalid or expired token. Try again later.");
    return;
  }
  const { password } = event.data;

  await authClient.resetPassword(
    {
      newPassword: password,
      token
    },
    {
      onError(ctx) {
        error.value = normalizeException(ctx.error);
      },
      onSuccess() {
        reset();
        open.value = true;
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
      :schema="resetPasswordSchema"
      :state="state"
      class="space-y-4"
      @submit.prevent="onSubmit"
    >
      <NuxtFormField label="New Password" name="password">
        <VuePassword v-model="state.password" size="lg" class="w-full" />
      </NuxtFormField>

      <NuxtFormField label="Confirm New Password" name="confirmPassword">
        <VuePassword v-model="state.confirmPassword" size="lg" class="w-full" />
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
            Your password has been reset successfully! Sign in now to continue.
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
