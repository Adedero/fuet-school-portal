<script setup lang="ts">
export interface ApplicationFilter {
  status: "all" | "accepted" | "rejected";
  order: "asc" | "desc";
}

const value = defineModel<ApplicationFilter>("filters", {
  default: { status: "all", admissionFees: "all" }
});
</script>

<template>
  <NuxtPopover title="Filters">
    <slot>
      <NuxtButton
        icon="lucide:arrow-up-a-z"
        color="neutral"
        variant="ghost"
        size="sm"
      />
    </slot>

    <template #content>
      <div class="p-5">
        <p class="font-bold">Sort</p>
        <div class="mt-2.5">
          <div class="grid gap-2">
            <p class="text-sm font-semibold text-muted">Values</p>
            <NuxtRadioGroup
              v-model="value.status"
              :items="['all', 'accepted', 'rejected']"
            />
          </div>

          <NuxtSeparator class="my-2.5" />

          <div class="grid gap-2">
            <p class="text-sm font-semibold text-muted">Order</p>
            <NuxtRadioGroup v-model="value.order" :items="['asc', 'desc']" />
          </div>
        </div>
      </div>
    </template>
  </NuxtPopover>
</template>
