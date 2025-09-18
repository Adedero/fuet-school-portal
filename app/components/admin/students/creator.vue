<script setup lang="ts">
import type { FormSubmitEvent } from "@nuxt/ui";
import type { Department } from "~/components/app/faculty-select.vue";
import {
  studentCreationSchema,
  type StudentCreationSchema
} from "~~/shared/schemas/student.schema";

interface Props {
  application: {
    id: string;
    applicationNumber: string;
    course: string | null;
  };
}

const { application } = defineProps<Props>();

const toast = useToast();

const open = defineModel<boolean>("open");

const state = ref<Partial<StudentCreationSchema>>({
  applicationId: application.id
});

const department = ref<Department | undefined>(
  application.course
    ? { label: application.course, value: "", faculty: "" }
    : undefined
);
watch(department, (val) => (state.value.department = val?.label));

const generate = () => {
  if (!department.value?.value) {
    toast.add({
      color: "error",
      title: "Error",
      description: "Please select a department first"
    });
    return;
  }
  const number = generateRegNumber(
    application.applicationNumber,
    department.value.value
  );

  state.value.regNumber = number;
};

const handleSubmit = async (event: FormSubmitEvent<StudentCreationSchema>) => {
  try {
    const { message } = await $fetch(
      `/api/users/admin/applications/${application.id}/create-student`,
      { method: "POST", body: event.data }
    );
    open.value = false;
    state.value = {};
    toast.add({
      color: "success",
      title: "Success",
      description: message
    });
  } catch (err) {
    toast.add({
      color: "error",
      title: "Error",
      description: normalizeException(err).message
    });
  }
};
</script>

<template>
  <NuxtModal v-model:open="open" title="Add Student" :dismissible="false">
    <template #body="{ close }">
      <div>
        <NuxtForm
          :state
          :schema="studentCreationSchema"
          class="grid gap-5"
          @submit.prevent="handleSubmit"
        >
          <NuxtFormField label="Application ID" required>
            <NuxtInput
              :value="state.applicationId"
              disabled
              size="lg"
              class="w-full"
            />
          </NuxtFormField>

          <NuxtFormField
            name="regNumber"
            label="Registration/Matric Number"
            class="relative"
            required
          >
            <NuxtInput v-model="state.regNumber" size="lg" class="w-full" />
            <NuxtButton
              label="generate"
              trailing-icon="lucide:wand-sparkles"
              variant="ghost"
              size="sm"
              class="absolute -top-7 right-0"
              @click="generate"
            />
          </NuxtFormField>

          <NuxtFormField name="studentClass" label="Student's Class" required>
            <AppStudentClassSelect
              v-model="state.studentClass"
              size="lg"
              class="w-full"
            />
          </NuxtFormField>

          <NuxtFormField name="department" label="Department" required>
            <AppFacultySelect
              v-model:department="department"
              item="department"
              size="lg"
              class="w-full"
            />
          </NuxtFormField>

          <div class="flex items-center gap-2 justify-end">
            <NuxtButton
              type="button"
              label="Cancel"
              color="neutral"
              variant="soft"
              @click="close"
            />
            <NuxtButton type="submit" label="Submit" loading-auto />
          </div>
        </NuxtForm>
      </div>
    </template>
  </NuxtModal>
</template>
