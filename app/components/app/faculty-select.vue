<script setup lang="ts">
interface Props {
  item: "faculty" | "department";
}
const { item } = defineProps<Props>();

defineEmits<{
  select: [value: { label: string; value: string }];
}>();

const { data, error, status, execute } = useFetch("/api/general/faculties", {
  lazy: true
});

const faculties = computed(() => {
  return (data.value ?? [])
    .map((d) => ({ label: d.name, value: d.code }))
    .sort((a, b) => a.label.localeCompare(b.label));
});

const departments = computed(() => {
  return (data.value ?? []).flatMap((faculty) =>
    faculty.departments.map((dept) => ({
      label: dept.name,
      value: dept.code,
      faculty: faculty.name
    }))
  );
});

export type Faculty = (typeof faculties.value)[number];
export type Department = (typeof departments.value)[number];

const fac = defineModel<Faculty>("faculty", { default: undefined });
const dept = defineModel<Department>("department", { default: undefined });

const getDepartment = (by: "name" | "code" | "faculty", value: string) => {
  if (by === "name") {
    return departments.value.find((dept) => dept.label === value);
  }
  if (by === "code") {
    return departments.value.find((dept) => dept.value === value);
  }
  if (by === "faculty") {
    return departments.value.find((dept) => dept.faculty === value);
  }
};

defineExpose({ getDepartment });

onMounted(async () => {
  await execute();
});
</script>

<template>
  <div>
    <div v-if="status === 'pending' || data">
      <NuxtSelectMenu
        v-if="item === 'faculty'"
        v-model="fac"
        :items="faculties"
        :loading="status === 'pending'"
        v-bind="$attrs"
        @update:model-value="(value) => $emit('select', value)"
      />

      <NuxtSelectMenu
        v-if="item === 'department'"
        v-model="dept"
        :items="departments"
        :loading="status === 'pending'"
        v-bind="$attrs"
      />
    </div>

    <FetchErrorAlert
      v-else-if="error"
      :message="`Failed to get ${item} data`"
      show-retry
      @retry="execute"
    />
  </div>
</template>
