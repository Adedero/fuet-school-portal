<script setup lang="ts">
import type { FormSubmitEvent } from "@nuxt/ui";
import type {
  RouteLocationAsPathGeneric,
  RouteLocationAsRelativeGeneric
} from "vue-router";
import { Calendar } from "~/utils/data/calendar";
import {
  applicationInitiationSchema,
  type ApplicationInitiationSchema
} from "~~/shared/schemas/application-initiation.schema";

interface Props {
  redirect?:
    | string
    | RouteLocationAsRelativeGeneric
    | RouteLocationAsPathGeneric
    | null;
}

const { redirect = undefined } = defineProps<Props>();

const emit = defineEmits<{
  done: [state: ApplicationInitiationSchema];
  cancel: [];
}>();

const toast = useToast();

const state = reactive<ApplicationInitiationSchema>({
  firstName: "",
  middleName: "",
  otherNames: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
  birthDay: 1,
  birthMonth: "January",
  birthYear: new Date().getFullYear() - MIN_AGE
});

const handleSubmit = async (
  event: FormSubmitEvent<ApplicationInitiationSchema>
) => {
  try {
    await $fetch("/api/general/applications/initiate", {
      method: "POST",
      body: event.data
    });
    emit("done", event.data);
    if (redirect) {
      await navigateTo(redirect);
    }
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
  <NuxtForm :state :schema="applicationInitiationSchema" @submit="handleSubmit">
    <div class="grid md:grid-cols-2 gap-2.5">
      <div class="md:col-span-2">
        <p class="text-lg font-semibold">Name</p>
      </div>
      <NuxtFormField name="firstName" label="First Name" required>
        <NuxtInput v-model="state.firstName" size="lg" class="w-full" />
      </NuxtFormField>

      <NuxtFormField name="middleName" label="Middle Name">
        <NuxtInput v-model="state.middleName" size="lg" class="w-full" />
      </NuxtFormField>

      <NuxtFormField name="lastName" label="Last Name" required>
        <NuxtInput v-model="state.lastName" size="lg" class="w-full" />
      </NuxtFormField>

      <NuxtFormField name="otherNames" label="Other Names">
        <NuxtInput v-model="state.otherNames" size="lg" class="w-full" />
      </NuxtFormField>

      <div class="mt-5 md:col-span-2">
        <p class="text-lg font-semibold">Birth Data</p>
      </div>
      <div class="md:col-span-2 grid sm:grid-cols-3 gap-2.5">
        <NuxtFormField name="birthDay" label="Day of Birth" required>
          <NuxtSelect
            v-model="state.birthDay"
            :items="Calendar.monthDays()"
            size="lg"
            class="w-full"
          />
        </NuxtFormField>

        <NuxtFormField name="birthMonth" label="Month of Birth" required>
          <NuxtSelect
            v-model="state.birthMonth"
            :items="Calendar.months().long"
            size="lg"
            class="w-full"
          />
        </NuxtFormField>

        <NuxtFormField name="birthYear" label="Day of Birth" required>
          <NuxtSelect
            v-model="state.birthYear"
            :items="Calendar.allowedYears()"
            size="lg"
            class="w-full"
          />
        </NuxtFormField>
      </div>

      <div class="mt-5 md:col-span-2">
        <p class="text-lg font-semibold">Credentials</p>
      </div>

      <NuxtFormField
        name="email"
        label="Email Address"
        required
        class="md:col-span-2"
      >
        <NuxtInput v-model="state.email" size="lg" class="w-full" />
      </NuxtFormField>

      <NuxtFormField name="password" label="Password" required>
        <VuePassword v-model="state.password" size="lg" class="w-full" />
      </NuxtFormField>

      <NuxtFormField name="confirmPassword" label="Confirm Password" required>
        <VuePassword v-model="state.confirmPassword" size="lg" class="w-full" />
      </NuxtFormField>
    </div>

    <div class="flex justify-end gap-2.5 mt-2.5">
      <NuxtButton
        type="button"
        label="Cancel"
        color="neutral"
        variant="soft"
        size="lg"
        @click="emit('cancel')"
      />
      <NuxtButton type="submit" label="Submit" size="lg" loading-auto />
    </div>
  </NuxtForm>
</template>
