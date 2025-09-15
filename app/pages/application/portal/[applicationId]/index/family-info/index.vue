<script setup lang="ts">
import { VueMultiSelectButton } from "#components";
import handlePreviousClick from "../../utils/handle-previous-click";
import { applicationFamilySchema } from "~~/shared/schemas/application.schema";
import { save } from "../../utils/handle-save-click";

const { applicationId = "" } = useRouteParams();
const toast = useToast();

const {
  data: app,
  error,
  refresh
} = await useFetch(`/api/users/applicant/applications/${applicationId}`);

const initial = computed(() => {
  return {
    firstParentName: app.value?.firstParentName ?? "",
    firstParentAddress: app.value?.firstParentAddress ?? "",
    firstParentStatus: app.value?.firstParentStatus ?? "living",

    secondParentName: app.value?.secondParentName ?? "",
    secondParentAddress: app.value?.secondParentAddress ?? "",
    secondParentStatus: app.value?.secondParentStatus ?? "living",

    nextOfKinName: app.value?.nextOfKinName ?? "",
    nextOfKinAddress: app.value?.nextOfKinAddress ?? "",
    nextOfKinPhoneNumber: app.value?.nextOfKinPhoneNumber ?? "",
    nextOfKinRelationship: app.value?.nextOfKinRelationship ?? ""
  };
});
type State = typeof initial.value;

const state = reactive({ ...initial.value });

const hasUnsavedChanges = computed(() => {
  return JSON.stringify(state) !== JSON.stringify(initial.value);
});

const saveProgress = async (successFn: () => void) => {
  await save<State>({
    applicationId,
    state: state,
    schema: applicationFamilySchema,
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
        navigateTo(`/application/portal/${applicationId}/academic-info`);
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
        <h1 class="text-xl font-bold">Family Information</h1>
        <p class="text-sm muted">
          Please provide accurate information about your parents and next of kin.
          This information is essential for your application process.
        </p>
      </header>

      <section class="my-5">
        <div v-if="error">
          <FetchErrorAlert
            :message="normalizeException(error).message"
            show-retry
            @retry="refresh"
          />
        </div>

        <NuxtForm
          v-else-if="app"
          :state
          :schema="applicationFamilySchema"
          :disabled="app.status === 'closed' || !!app.isSubmitted"
        >
          <div class="grid md:grid-cols-2 gap-2.5">
            <div class="md:col-span-2">
              <p class="text-lg font-semibold">Parent 1</p>
            </div>
            <NuxtFormField name="firstParentName" label="Full Name" required>
              <NuxtInput
                v-model="state.firstParentName"
                class="w-full"
                size="lg"
              />
            </NuxtFormField>

            <NuxtFormField name="firstParentStatus" label="Status" required>
              <NuxtSelect
                v-model="state.firstParentStatus"
                :items="['living', 'deceased']"
                class="w-full"
                size="lg"
              />
            </NuxtFormField>

            <NuxtFormField
              name="otherNames"
              label="Address"
              required
              class="md:col-span-2"
            >
              <NuxtInput
                v-model="state.firstParentAddress"
                class="w-full"
                size="lg"
              />
            </NuxtFormField>

            <div class="mt-5 md:col-span-2">
              <p class="text-lg font-semibold">Parent 2</p>
            </div>
            <NuxtFormField name="secondParentName" label="Full Name" required>
              <NuxtInput
                v-model="state.secondParentName"
                class="w-full"
                size="lg"
              />
            </NuxtFormField>

            <NuxtFormField name="secondParentStatus" label="Status" required>
              <NuxtSelect
                v-model="state.secondParentStatus"
                :items="['living', 'deceased']"
                class="w-full"
                size="lg"
              />
            </NuxtFormField>

            <NuxtFormField
              name="otherNames"
              label="Address"
              required
              class="md:col-span-2"
            >
              <NuxtInput
                v-model="state.secondParentAddress"
                class="w-full"
                size="lg"
              />
            </NuxtFormField>

            <div class="mt-5 md:col-span-2">
              <p class="text-lg font-semibold">Next of Kin</p>
            </div>
            <NuxtFormField name="nextOfKinName" label="Full Name" required>
              <NuxtInput
                v-model="state.nextOfKinName"
                class="w-full"
                size="lg"
              />
            </NuxtFormField>

            <NuxtFormField
              name="nextOfKinRelationship"
              label="Relationship"
              required
            >
              <NuxtInput
                v-model="state.nextOfKinRelationship"
                class="w-full"
                size="lg"
              />
            </NuxtFormField>

            <NuxtFormField
              name="nextOfKinPhoneNumber"
              label="Phone Number"
              required
            >
              <NuxtInput
                v-model="state.nextOfKinPhoneNumber"
                class="w-full"
                size="lg"
              />
            </NuxtFormField>

            <NuxtFormField name="nextOfKinAddress" label="Address" required>
              <NuxtInput
                v-model="state.nextOfKinAddress"
                class="w-full"
                size="lg"
              />
            </NuxtFormField>
          </div>
        </NuxtForm>
      </section>

      <footer v-if="app" class="flex items-center gap-2.5 justify-between">
        <NuxtButton
          label="Previous"
          color="neutral"
          variant="soft"
          @click="
            handlePreviousClick(
              hasUnsavedChanges,
              `/application/portal/${applicationId}/personal-info`
            )
          "
        />
        <NuxtButton
          v-if="app.status === 'closed' || !!app.isSubmitted"
          :to="`/application/portal/${applicationId}/academic-info`"
          label="Next"
        />
        <VueMultiSelectButton v-else :items />
      </footer>
    </div>
  </div>
</template>
