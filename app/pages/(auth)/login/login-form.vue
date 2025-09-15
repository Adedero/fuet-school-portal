<script setup lang="ts">
import type { FormSubmitEvent } from "@nuxt/ui";
import { authClient } from "~/lib/auth";
import { loginSchema, type LoginSchema } from "~~/shared/schemas/login.schema";
import normalizeException from "~~/shared/utils/normalize-exception";
import { useAuthStore } from "~/stores/auth.store";

const runtimeConfig = useRuntimeConfig();
const route = useRoute();
const authStore = useAuthStore();
const toast = useToast();

const state = reactive<LoginSchema>({
  email: "",
  password: "",
  rememberMe: true
});

function reset() {
  state.email = "";
  state.password = "";
  state.rememberMe = true;
}

const error = ref<Error | null>(null);

async function onSubmit(event: FormSubmitEvent<LoginSchema>) {
  error.value = null;

  const encodedEmail = btoa(event.data.email);

  await authClient.signIn.email(event.data, {
    onError(ctx) {
      error.value = normalizeException(ctx.error);
    },
    async onSuccess() {
      reset();
      const sessionData = await authClient.getSession();

      if (!sessionData.data) {
        throw createError({
          status: 500,
          statusMessage: runtimeConfig.public.defaultErrorMsg,
          fatal: true
        });
      }

      authStore.setSession(sessionData.data.session);
      authStore.setUser(sessionData.data.user);

      const { redirect } = route.query;

      if (redirect) {
        await navigateTo(redirect.toString());
        return;
      }

      if (!sessionData.data?.user.emailVerified) {
        await navigateTo({
          name: "email-verification",
          query: { email: encodedEmail }
        });
        return;
      }
      const role = sessionData.data?.user.role;
      if (!role) {
        throw createError({
          status: 500,
          statusMessage: runtimeConfig.public.defaultErrorMsg,
          fatal: true
        });
      }

      switch (role) {
        case "applicant":
          await navigateTo("/application/portal");
          break;

        case "student":
          alert(role);
          break;

        case "staff":
          alert(role);
          break;

        case "admin":
          alert(role);
          break;
        default:
          toast.add({
            color: "error",
            title: "Error",
            description: "runtimeConfig.public.defaultErrorMsg"
          });
          break;
      }
    }
  });
}
</script>

<template>
  <div>
    <div v-if="error" class="mb-3">
      <FetchErrorAlert :message="error.message" />
    </div>

    <NuxtForm
      :schema="loginSchema"
      :state="state"
      class="space-y-4"
      @submit.prevent="onSubmit"
    >
      <NuxtFormField label="Email" name="email" required>
        <NuxtInput v-model="state.email" size="lg" class="w-full" />
      </NuxtFormField>

      <NuxtFormField label="Password" name="password" required>
        <VuePassword v-model="state.password" size="lg" class="w-full" />
      </NuxtFormField>

      <div class="flex items-center gap-2 justify-between">
        <NuxtFormField name="rememberMe">
          <NuxtCheckbox v-model="state.rememberMe" label="Remember me" />
        </NuxtFormField>

        <NuxtLink to="/forgot-password" class="link text-sm">
          Forgot password
        </NuxtLink>
      </div>

      <NuxtButton
        type="submit"
        class="mt-2 w-full flex-center"
        size="lg"
        icon="i-lucide:log-in"
        loading-auto
      >
        Submit
      </NuxtButton>
    </NuxtForm>
  </div>
</template>
