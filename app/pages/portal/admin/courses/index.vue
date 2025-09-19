<script setup lang="ts">
import type { TableColumn } from "@nuxt/ui";
import { getPaginationRowModel } from "@tanstack/vue-table";

definePageMeta({
  layout: "portal-admin"
});

const table = useTemplateRef("table");
const editor = useTemplateRef("editor");
const deleter = useTemplateRef("deleter");

const Badge = resolveComponent("NuxtBadge");
const Button = resolveComponent("NuxtButton");

const open = ref<boolean>(false);
const search = ref<string>("");
const pagination = ref({
  pageIndex: 0,
  pageSize: 10
});

const { data, error, pending, refresh } = await useFetch(
  `/api/general/courses`
);

const courses = computed(() => {
  if (!data.value) {
    return [];
  }
  const searchValue = search.value.toLowerCase();

  return data.value
    .map((item) => {
      return {
        id: item.id,
        code: item.code,
        level: item.level,
        title: item.title,
        description: item.description,
        semester: item.semester,
        department: item.department.name,
        faculty: item.faculty.name
      };
    })
    .filter((course) => {
      return (
        course.code.toLowerCase().includes(searchValue) ||
        course.title.toLowerCase().includes(searchValue) ||
        (course.description?.toLowerCase() ?? "").includes(searchValue) ||
        course.department.toLowerCase().includes(searchValue) ||
        course.faculty.toLowerCase().includes(searchValue)
      );
    });
});
export type Course = NonNullable<typeof courses.value>[number];

const selectedCourse = ref<Course | null>(null);

const columns: TableColumn<Course>[] = [
  {
    id: "expand",
    cell: ({ row }) =>
      h(Button, {
        color: "neutral",
        variant: "ghost",
        icon: "i-lucide-chevron-down",
        square: true,
        "aria-label": "Expand",
        ui: {
          leadingIcon: [
            "transition-transform",
            row.getIsExpanded() ? "duration-200 rotate-180" : ""
          ]
        },
        onClick: () => row.toggleExpanded()
      })
  },
  { accessorKey: "code", header: "Code" },
  { accessorKey: "title", header: "Title" },
  { accessorKey: "level", header: "Level" },
  {
    accessorKey: "semester",
    header: "Semester",
    cell: ({ row }) => {
      const value: string = row.getValue("semester");
      const color = value === "rain" ? "primary" : "secondary";
      return h(Badge, { color, variant: "subtle" }, value);
    }
  },
  { accessorKey: "department", header: "Department" },
  { accessorKey: "faculty", header: "Faculty" },
  {
    id: "edit",
    cell: ({ row }) => {
      return h(Button, {
        label: "Edit",
        icon: "lucide:edit",
        color: "neutral",
        variant: "soft",
        size: "sm",
        onClick: () => {
          selectCourse(row.original.id);
          editor.value?.open();
        }
      });
    }
  },
  {
    id: "delete",
    cell: ({ row }) => {
      return h(Button, {
        label: "Delete",
        icon: "lucide:trash-2",
        color: "error",
        variant: "soft",
        size: "sm",
        onClick: () => {
          selectCourse(row.original.id);
          deleter.value?.open();
        }
      });
    }
  }
];

function selectCourse(id: string) {
  selectedCourse.value =
    courses.value.find((course) => course.id === id) ?? null;
}
</script>

<template>
  <div class="p-5">
    <header>
      <div class="flex items-center gap-5 justify-between">
        <div class="text-lg font-bold flex items-center gap-1">
          <h1>Courses</h1>
          <NuxtBadge :label="courses.length" variant="subtle" />
        </div>

        <div>
          <NuxtButton
            label="New Course"
            icon="lucide:plus"
            @click="open = true"
          />
          <AdminCourseCreator v-model:open="open" @done="() => refresh()" />
        </div>
      </div>
    </header>

    <section class="mt-2.5">
      <div v-if="error">
        <FetchErrorAlert
          :message="normalizeException(error).message"
          show-retry
          @retry="refresh"
        />
      </div>

      <div>
        <NuxtButtonGroup class="w-full md:w-fit">
          <NuxtInput
            v-model="search"
            placeholder="Search..."
            class="w-full md:w-fit"
          />
          <NuxtButton icon="lucide:search" color="neutral" variant="outline" />
        </NuxtButtonGroup>
      </div>
    </section>

    <div class="mt-5">
      <NuxtTable
        ref="table"
        v-model:pagination="pagination"
        :data="courses"
        :columns
        :pagination-options="{
          getPaginationRowModel: getPaginationRowModel()
        }"
        :loading="pending"
        :ui="{ tr: 'data-[expanded=true]:bg-elevated/50' }"
      >
        <template #expanded="{ row }">
          <div class="space-y-1.5">
            <p class="text-sm text-muted font-semibold">Course Description:</p>
            <div class="whitespace-pre-wrap font-mono">
              {{ row.original.description }}
            </div>
          </div>
        </template>
      </NuxtTable>

      <div class="flex justify-center gap-1.5 border-t border-default pt-4">
        <NuxtPagination
          :default-page="
            (table?.tableApi?.getState().pagination.pageIndex || 0) + 1
          "
          :items-per-page="table?.tableApi?.getState().pagination.pageSize"
          :total="table?.tableApi?.getFilteredRowModel().rows.length"
          :sibling-count="1"
          @update:page="(p) => table?.tableApi?.setPageIndex(p - 1)"
        />

        <NuxtSelect
          v-model="pagination.pageSize"
          :items="[5, 10, 15, 20, 25, 30, 40, 50, 100]"
          class="w-20"
        />
      </div>

      <div v-if="selectedCourse">
        <AdminCourseEditor
          ref="editor"
          :course="selectedCourse"
          @done="() => refresh()"
        />
        <AdminCourseDeleter
          ref="deleter"
          :course-id="selectedCourse.id"
          @done="() => refresh()"
        />
      </div>
    </div>
  </div>
</template>
