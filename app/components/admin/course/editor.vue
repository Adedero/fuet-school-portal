<script setup lang="ts">
import type { FormSubmitEvent } from "@nuxt/ui";
import type { Course } from "~/pages/portal/admin/courses/index.vue";
import { levels, semesters } from "~/utils/data/school";
import {
  courseEditSchema,
  type CourseEditSchema
} from "~~/shared/schemas/course.schema";

const toast = useToast();

const { course } = defineProps<{
  course: Course;
}>();

const emit = defineEmits<{
  done: [];
}>();

const state = ref<CourseEditSchema>({
  ...course,
  department: { label: course.department, value: "", faculty: course.faculty }
});
watch(
  () => course,
  (value) => {
    state.value = {
      ...value,
      department: {
        label: value.department,
        value: "",
        faculty: value.faculty
      }
    };
  }
);

async function handleSubmit(event: FormSubmitEvent<CourseEditSchema>) {
  try {
    const { message } = await $fetch(`/api/users/admin/courses/${course.id}`, {
      method: "PUT",
      body: event.data
    });
    emit("done");
    close();
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

const isOpen = ref<boolean>(false);

function open() {
  isOpen.value = true;
}
function close() {
  isOpen.value = false;
}

defineExpose({ open, close });
</script>

<template>
  <NuxtModal
    v-model:open="isOpen"
    :title="`Edit ${course.code}`"
    :description="course.title"
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
