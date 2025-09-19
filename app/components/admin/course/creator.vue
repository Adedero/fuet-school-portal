<script setup lang="ts">
import type { FormSubmitEvent } from "@nuxt/ui";
import { levels, semesters } from "~/utils/data/school";
import {
  courseEditSchema,
  type CourseEditSchema
} from "~~/shared/schemas/course.schema";

const toast = useToast();

const emit = defineEmits<{
  done: [];
}>();

const state = ref<Partial<CourseEditSchema>>({});
  
const open = defineModel<boolean>("open", { default: false });
watch(open, (value) => {
  if (value === false) {
    state.value = {};
  }
});

async function handleSubmit(event: FormSubmitEvent<CourseEditSchema>) {
  try {
    const { message } = await $fetch("/api/users/admin/courses", {
      method: "POST",
      body: event.data
    });
    emit("done");
    state.value = {};
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
  <NuxtModal
    v-model:open="open"
    :title="`New Course: ${state.code}`"
    :description="state.title"
    :dismissible="false"
  >
    <template #body="{ close: closeModal }">
      <div>
        <NuxtForm
          :state
          :schema="courseEditSchema"
          class="space-y-5"
          @submit="handleSubmit"
        >
          <NuxtFormField name="code" label="Code" required>
            <NuxtInput v-model="state.code" size="lg" class="w-full" />
          </NuxtFormField>

          <NuxtFormField name="title" label="Title" required>
            <NuxtInput v-model="state.title" size="lg" class="w-full" />
          </NuxtFormField>

          <NuxtFormField name="level" label="Level" required>
            <NuxtSelect
              v-model="state.level"
              :items="levels"
              size="lg"
              class="w-full"
            />
          </NuxtFormField>

          <NuxtFormField name="semester" label="Semester" required>
            <NuxtSelect
              v-model="state.semester"
              :items="semesters"
              size="lg"
              class="w-full"
            />
          </NuxtFormField>

          <NuxtFormField name="department" label="Department">
            <AppFacultySelect
              v-model:department="state.department"
              item="department"
              size="lg"
              class="w-full"
            />
          </NuxtFormField>

          <NuxtFormField name="description" label="Description">
            <NuxtTextarea
              v-model="state.description"
              :rows="3"
              class="w-full"
            />
          </NuxtFormField>

          <div class="flex items-center gap-2.5 justify-end">
            <NuxtButton
              type="button"
              label="Cancel"
              color="neutral"
              variant="soft"
              @click="closeModal"
            />
            <NuxtButton type="submit" label="Submit" loading-auto />
          </div>
        </NuxtForm>
      </div>
    </template>
  </NuxtModal>
</template>
