<script setup lang="ts">
import { VueMultiSelectButton } from "#components";
import { Calendar } from "~/utils/data/calendar";
import countries from "~/utils/data/countries";
import { getLGAs, states } from "~/utils/data/states-and-lgas";
import handlePreviousClick from "../../utils/handle-previous-click";
import { personalSchema } from "~~/shared/schemas/application.schema";
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
    firstName: app.value?.firstName ?? "",
    middleName: app.value?.middleName ?? "",
    otherNames: app.value?.otherNames ?? "",
    lastName: app.value?.lastName ?? "",

    phoneNumber: app.value?.phoneNumber ?? "",
    gender: app.value?.gender ?? "male",

    birthDay: app.value?.birthDay ?? 1,
    birthMonth: app.value?.birthMonth ?? Calendar.months().long[0],
    birthYear: app.value?.birthYear ?? Calendar.allowedYears()[0],

    nationality: app.value?.nationality ?? "Nigeria",
    stateOfOrigin: app.value?.stateOfOrigin ?? "",
    lga: app.value?.lga ?? "",
    nin: app.value?.nin ?? ""
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
    schema: personalSchema,
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
        navigateTo(`/application/portal/${applicationId}/family-info`);
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
        <h1 class="text-xl font-bold">Personal Information</h1>
        <p class="text-sm muted">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
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
          :schema="personalSchema"
          :disabled="app.status !== 'pending'"
        >
          <div class="grid md:grid-cols-2 gap-2.5">
            <NuxtFormField name="firstName" label="First Name" required>
              <NuxtInput v-model="state.firstName" class="w-full" size="lg" />
            </NuxtFormField>

            <NuxtFormField name="middleName" label="Middle Name">
              <NuxtInput v-model="state.middleName" class="w-full" size="lg" />
            </NuxtFormField>

            <NuxtFormField name="otherNames" label="Other Names">
              <NuxtInput v-model="state.otherNames" class="w-full" size="lg" />
            </NuxtFormField>

            <NuxtFormField name="lastName" label="Last Name" required>
              <NuxtInput v-model="state.lastName" class="w-full" size="lg" />
            </NuxtFormField>

            <NuxtFormField
              name="email"
              label="Email Address"
              required
              class="md:col-span-2"
            >
              <NuxtInput
                :value="app.user.email"
                disabled
                class="w-full"
                size="lg"
              />
            </NuxtFormField>

            <NuxtFormField name="phoneNumber" label="Phone Number" required>
              <NuxtInput v-model="state.phoneNumber" class="w-full" size="lg" />
            </NuxtFormField>

            <NuxtFormField name="gender" label="Gender" required>
              <NuxtSelect
                v-model="state.gender"
                :items="['male', 'female']"
                class="w-full"
                size="lg"
              />
            </NuxtFormField>

            <div class="md:col-span-2 grid gap-2.5 md:grid-cols-3">
              <NuxtFormField name="birthDay" label="Day of Birth" required>
                <NuxtSelect
                  v-model="state.birthDay"
                  :items="Calendar.monthDays()"
                  class="w-full"
                  size="lg"
                />
              </NuxtFormField>

              <NuxtFormField name="birthMonth" label="Month of Birth" required>
                <NuxtSelect
                  v-model="state.birthMonth"
                  :items="Calendar.months().long"
                  class="w-full"
                  size="lg"
                />
              </NuxtFormField>

              <NuxtFormField name="birthYear" label="Year of Birth" required>
                <NuxtSelect
                  v-model="state.birthYear"
                  :items="Calendar.allowedYears()"
                  class="w-full"
                  size="lg"
                />
              </NuxtFormField>
            </div>

            <NuxtFormField name="nationality" label="Nationality" required>
              <NuxtSelectMenu
                v-model="state.nationality"
                :items="countries.map((c) => c.name)"
                size="lg"
                class="w-full"
              />
            </NuxtFormField>

            <NuxtFormField
              v-if="state.nationality.toLowerCase() === 'nigeria'"
              name="stateOfOrigin"
              label="State of Origin"
              required
            >
              <NuxtSelectMenu
                v-model="state.stateOfOrigin"
                :items="states"
                size="lg"
                class="w-full"
              />
            </NuxtFormField>

            <NuxtFormField
              v-else
              name="stateOfOrigin"
              label="State of Origin"
              required
            >
              <NuxtInput
                v-model="state.stateOfOrigin"
                size="lg"
                class="w-full"
              />
            </NuxtFormField>

            <NuxtFormField name="lga" label="L.G.A/Town" required>
              <NuxtSelectMenu
                v-model="state.lga"
                :items="getLGAs(state.stateOfOrigin)"
                size="lg"
                class="w-full"
              />
            </NuxtFormField>

            <NuxtFormField
              name="nin"
              label="NIN / Government-Issued ID Number"
              required
            >
              <NuxtInput v-model="state.nin" size="lg" class="w-full" />
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
              `/application/portal/${applicationId}`
            )
          "
        />
        <NuxtButton
          v-if="app.status !== 'pending'"
          :to="`/application/portal/${applicationId}/family-info`"
          label="Next"
        />
        <VueMultiSelectButton v-else :items />
      </footer>
    </div>
  </div>
</template>
