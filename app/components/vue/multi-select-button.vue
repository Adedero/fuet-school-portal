<script setup lang="ts">
import type { ButtonProps, DropdownMenuItem } from "@nuxt/ui";

interface MultiSelectButtonItem {
  label?: string;
  icon?: string;
  onSelect?: (e: Event) => Promise<void> | void;
}

interface Props {
  items?: MultiSelectButtonItem[];
  buttonProps?: {
    color?: ButtonProps["color"];
    variant?: ButtonProps["variant"];
  };
  selectorProps?: {
    color?: ButtonProps["color"];
    variant?: ButtonProps["variant"];
    icon?: string;
  };
  size?: ButtonProps["size"];
}

const {
  items = [],
  size = "md",
  buttonProps = {},
  selectorProps = { variant: "subtle", icon: "lucide:chevron-down" }
} = defineProps<Props>();

// track selected item
const selected = ref<MultiSelectButtonItem | null>(items[0] ?? null);

watch(
  () => items,
  (value) => (selected.value = value[0] ?? null)
);

// dropdown menu items
const dropdownItems = computed<DropdownMenuItem[]>(() =>
  items.map((item) => ({
    label: item.label,
    icon: item.icon,
    onSelect: () => {
      selected.value = item;
    }
  }))
);
</script>

<template>
  <NuxtButtonGroup>
    <!-- Main action button -->
    <NuxtButton
      :label="selected?.label"
      :icon="selected?.icon"
      :size="size"
      v-bind="buttonProps"
      loading-auto
      @click="(event: Event) => selected?.onSelect?.(event)"
    />

    <!-- Dropdown to change selection -->
    <NuxtDropdownMenu :items="dropdownItems">
      <NuxtButton v-bind="selectorProps" :size="size" />
    </NuxtDropdownMenu>
  </NuxtButtonGroup>
</template>
