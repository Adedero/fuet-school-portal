<script setup lang="ts">
import { VueMultiSelectButton } from "#components";
import handlePreviousClick from "../../utils/handle-previous-click";
import { academicSchema } from "~~/shared/schemas/application.schema";
import { save } from "../../utils/handle-save-click";
import { degrees } from "~/utils/data/faculties";
import { Calendar } from "~/utils/data/calendar";
import type { Department } from "~/components/app/faculty-select.vue";

const { applicationId = "" } = useRouteParams();
const toast = useToast();

const {
  data: app,
  error,
  refresh
} = await useFetch(`/api/users/applicant/applications/${applicationId}`);

const initial = computed(() => {
  return {
    course: app.value?.course ?? undefined,
    degreeType: app.value?.degreeType ?? "",
    jambRegNumber: app.value?.jambRegNumber ?? "",

    secondarySchoolName: app.value?.secondarySchoolName ?? "",
    secondarySchoolAddress: app.value?.secondarySchoolAddress ?? "",
    secondarySchoolGraduationMonth:
      app.value?.secondarySchoolGraduationMonth ?? "",
    secondarySchoolGraduationYear:
      app.value?.secondarySchoolGraduationYear ?? undefined
  };
});
type State = typeof initial.value;

const state = reactive({ ...initial.value });

const hasUnsavedChanges = computed(() => {
  return JSON.stringify(state) !== JSON.stringify(initial.value);
});

const selectedCourse = ref<Department | undefined>(
  state.course ? { label: state.course, value: "", faculty: "" } : undefined
);

watch(selectedCourse, (val) => {
  state.course = val?.label;
});

const saveProgress = async (successFn: () => void) => {
  await save<State>({
    applicationId,
    state: state,
    schema: academicSchema,
    toast,
    onSuccess: () => {
      successFn();
    }
  });
};

const items = [
  {
    label: "Save and Continue",
    onSelect: async () => {
      await saveProgress(() => {
        navigateTo(`/application/portal/${applicationId}/documents`);
      });
    }
  },
  {
    label: "Save Only",
    onSelect: async () => {
      await saveProgress(() => {
        refresh();
      });
    }
  },
  {
    label: "Save and Exit",
    onSelect: async () => {
      await saveProgress(() => {
        navigateTo(`/application/portal`);
      });
    }
  }
];
</script>

<template>
  <div class="w-full">
    <div class="lg:max-w-[70%] mx-auto">
      <header>
        <h1 class="text-xl font-bold">Academic Information</h1>
        <p class="text-sm muted">
          Please provide accurate academic information. You can save your
          progress and return later to complete the application.</p>
      </header>

      <section class="my-5">
        <div v-if="error">
          <FetchErrorAlert :message="normalizeException(error).message" show-retry @retry="refresh" />
        </div>

        <NuxtForm v-else-if="app" :state :schema="academicSchema" :disabled="app.status !== 'pending'">
          <div class="grid md:grid-cols-2 gap-2.5">
            <div class="md:col-span-2">
              <p class="text-lg font-semibold">Course Choice</p>
            </div>
            <NuxtFormField name="course" label="Course of Study" required>
              <!--  <NuxtSelectMenu
                v-model="state.course"
                :items="departments.map((dept) => dept.name)"
                class="w-full"
                size="lg"
              /> -->
              <AppFacultySelect v-model="selectedCourse" item="department" size="lg" class="w-full" />
            </NuxtFormField>

            <NuxtFormField name="degreeType" label="Degree" required>
              <NuxtSelect v-model="state.degreeType" :items="degrees.map((degree) => degree.code)" class="w-full"
                size="lg" />
            </NuxtFormField>

            <div class="mt-5 md:col-span-2">
              <p class="text-lg font-semibold">Institution Data</p>
            </div>
            <NuxtFormField name="jambRegNumber" label="JAMB Registration Number" required>
              <NuxtInput v-model="state.jambRegNumber" class="w-full" size="lg" />
            </NuxtFormField>

            <NuxtFormField name="secondarySchoolName" label="Name of Secondary Institution" required>
              <NuxtInput v-model="state.secondarySchoolName" class="w-full" size="lg" />
            </NuxtFormField>

            <NuxtFormField name="secondarySchoolAddress" label="Address of Secondary Institution" required
              class="md:col-span-2">
              <NuxtInput v-model="state.secondarySchoolAddress" class="w-full" size="lg" />
            </NuxtFormField>

            <NuxtFormField name="secondarySchoolGraduationMonth" label="Month of Graduation" required>
              <NuxtSelectMenu v-model="state.secondarySchoolGraduationMonth" :items="Calendar.months().long"
                class="w-full" size="lg" />
            </NuxtFormField>

            <NuxtFormField name="secondarySchoolGraduationYear" label="Year of Graduation" required>
              <NuxtInputNumber v-model="state.secondarySchoolGraduationYear" class="w-full" size="lg"
                orientation="vertical" :format-options="{
                  useGrouping: 'false'
                }" />
            </NuxtFormField>
          </div>
        </NuxtForm>
      </section>

      <footer v-if="app" class="flex items-center gap-2.5 justify-between">
        <NuxtButton label="Previous" color="neutral" variant="soft" @click="
          handlePreviousClick(
            hasUnsavedChanges,
            `/application/portal/${applicationId}/family-info`
          )
          " />
        <NuxtButton v-if="app.status !== 'pending'" :to="`/application/portal/${applicationId}/documents`"
          label="Next" />
        <VueMultiSelectButton v-else :items />
      </footer>
    </div>
  </div>
</template>
