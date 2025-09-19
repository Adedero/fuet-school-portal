<script setup lang="ts">
import type { Session } from "~/components/app/session-select.vue";
import type { ApplicationFilter } from "~/components/application/filter-select.vue";
import { columns } from "./utils/table-columns";
import type { TableRow } from "@nuxt/ui";

definePageMeta({
  layout: "portal-admin"
});

const selectedSession = ref<Session>();
const filters = ref<ApplicationFilter>({ status: "all", admissionFees: "all" });
const limit = ref<number>(20);
const page = ref<number>(0);
const offset = computed(() => limit.value * page.value);
const search = ref<string>();

const query = computed(() => {
  const searchParams = new URLSearchParams();
  if (filters.value.status !== "all") {
    searchParams.set("admissionStatus", filters.value.status);
  }
  if (filters.value.admissionFees !== "all") {
    searchParams.set(
      "hasPaidAdmissionFee",
      filters.value.admissionFees === "paid" ? "true" : ""
    );
  }
  if (selectedSession.value) {
    searchParams.set("schoolSessionName", selectedSession.value.name);
  }
  if (search.value) {
    searchParams.set("search", search.value);
  }
  searchParams.set("limit", limit.value.toString());
  searchParams.set("offset", offset.value.toString());
  return Object.fromEntries(searchParams.entries());
});

const {
  data: applications,
  error,
  refresh
} = await useFetch("/api/users/admin/applications", {
  query
});

export type ApplicationItem = NonNullable<typeof applications.value>[number];

const allLoaded = computed(
  () => (applications.value?.length ?? 0) < limit.value
);

function onSelect(row: TableRow<ApplicationItem>) {
  const id = row.getValue("id");
  navigateTo(`/portal/admin/applications/${id}`);
}
</script>

<template>
  <div class="p-5">
    <header>
      <div class="flex items-center gap-5 justify-between">
        <h1 class="text-lg font-bold">Applications</h1>

        <div class="flex items-center gap-2">
          <AppSessionSelect v-model="selectedSession" size="sm" />
          <ApplicationFilterSelect v-model:filters="filters" />
          <!-- <ApplicationSortSelect /> -->
        </div>
      </div>

      <div class="mt-3">
        <NuxtButtonGroup class="w-full md:w-fit">
          <NuxtInput
            v-model="search"
            size="sm"
            placeholder="Search..."
            class="w-full md:w-fit"
          />
          <NuxtButton
            icon="lucide:search"
            color="neutral"
            variant="outline"
            size="sm"
          />
        </NuxtButtonGroup>
      </div>
    </header>

    <section class="mt-5">
      <div v-if="error">
        <FetchErrorAlert
          :message="normalizeException(error).message"
          show-retry
          @retry="refresh"
        />
      </div>
      

      <div v-else-if="applications">
        <NuxtTable :data="applications" :columns="columns" @select="onSelect" />

        <div class="flex justify-center border-t border-default pt-4">
          <VuePagination
            v-model:page="page"
            :rows="limit"
            :length="applications.length"
            :all-loaded="allLoaded"
          />
        </div>
      </div>
    </section>
  </div>
</template>
