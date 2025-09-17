<script setup lang="ts">
export interface ApplicationFilter {
  status: "all" | "accepted" | "rejected";
  admissionFees: "all" | "paid" | "unpaid";
}

const value = defineModel<ApplicationFilter>("filters", {
  default: { status: "all", admissionFees: "all" }
});
</script>

<template>
  <NuxtPopover title="Filters">
    <slot>
      <NuxtButton
        icon="lucide:filter"
        color="neutral"
        variant="ghost"
        size="sm"
      />
    </slot>

    <template #content>
      <div class="p-5">
        <p class="font-bold">Filters</p>
        <div class="mt-2.5">
          <div class="grid gap-2">
            <p class="text-sm font-semibold text-muted">Admission Status</p>
            <NuxtRadioGroup
              v-model="value.status"
              :items="['all', 'accepted', 'rejected']"
            />
          </div>

          <NuxtSeparator class="my-2.5" />

          <div class="grid gap-2">
            <p class="text-sm font-semibold text-muted">Admission Fees</p>
            <NuxtRadioGroup
              v-model="value.admissionFees"
              :items="['all', 'paid', 'unpaid']"
            />
          </div>
        </div>
      </div>
    </template>
  </NuxtPopover>
</template>
