<script setup lang="ts">
import type { TableColumn } from "@nuxt/ui";
import { useDateFormat } from "@vueuse/core";
import { getPaginationRowModel } from "@tanstack/vue-table";
import type { Row } from "@tanstack/vue-table";

const Badge = resolveComponent("NuxtBadge");
const DropdownMenu = resolveComponent("NuxtDropdownMenu");
const Button = resolveComponent("NuxtButton");

definePageMeta({
  layout: "portal-admin"
});

const {
  data: sessions,
  error,
  pending,
  refresh
} = await useFetch(`/api/general/academic-sessions`);

export type Session = NonNullable<typeof sessions.value>[number];

const table = useTemplateRef("table");

const columns = computed<TableColumn<Session>[]>(() => {
  return [
    {
      accessorKey: "id",
      header: "#",

      cell: ({ row }) => {
        const id: string = row.getValue("id");
        return h("span", { title: id }, `${id.slice(0, 6)}...`);
      }
    },
    {
      accessorKey: "name",
      header: "Name"
    },
    {
      accessorKey: "startYear",
      header: "Offical Year Started"
    },
    {
      accessorKey: "currentYear",
      header: "Actual Year Sarted"
    },
    {
      accessorKey: "isCurrent",
      header: "Current Session",
      cell: ({ row }) => {
        const isCurrent: boolean = row.getValue("isCurrent");
        return h(
          Badge,
          {
            class: "capitalize",
            variant: "subtle",
            color: isCurrent ? "success" : "error"
          },
          () => `${isCurrent}`
        );
      }
    },
    {
      accessorKey: "createdAt",
      header: "Created",
      cell: ({ row }) =>
        useDateFormat(
          row.getValue("createdAt") as string,
          "DD MMM, YYYY hh:mm aa"
        ).value
    },
    {
      accessorKey: "updatedAt",
      header: "Updated",
      cell: ({ row }) =>
        useDateFormat(
          row.getValue("updatedAt") as string,
          "DD MMM, YYYY hh:mm aa"
        ).value
    },
    {
      id: "actions",
      cell: ({ row }) => {
        return h(
          "div",
          { class: "text-right" },
          h(
            DropdownMenu,
            {
              content: {
                align: "end"
              },
              items: getRowItems(row),
              "aria-label": "Actions dropdown"
            },
            () =>
              h(Button, {
                icon: "i-lucide-ellipsis-vertical",
                color: "neutral",
                variant: "ghost",
                class: "ml-auto",
                "aria-label": "Actions dropdown"
              })
          )
        );
      }
    }
  ];
});

const open = ref<boolean>(false);
const openSetCurrent = ref<boolean>(false);

function getRowItems(row: Row<Session>) {
  return [
    {
      type: "label",
      label: "Actions"
    },
    {
      label: "Edit Session",
      onSelect() {
        handleEditSelect(row.original.id, open);
      }
    },
    {
      label: "Set as current",
      onSelect() {
        handleEditSelect(row.original.id, openSetCurrent);
      }
    },
    {
      type: "separator"
    },
    {
      label: "Delete session"
    }
  ];
}

const pagination = ref({
  pageIndex: 0,
  pageSize: 10
});

const currentSession = ref<Session | null>(null);

function handleEditSelect(id: string, opener: Ref<boolean>) {
  currentSession.value =
    sessions.value?.find((session) => session.id === id) ?? null;
  if (currentSession.value) {
    opener.value = true;
  }
}

async function onUpdate(opener: boolean) {
  await refresh();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  opener = false;
  currentSession.value = null;
}
</script>

<template>
  <div class="p-5">
    <header>
      <div class="flex items-center gap-5 justify-between">
        <h1 class="text-lg font-bold">Academic Sessions</h1>

        <div>
          <AdminAcademicSessionCreator v-if="sessions" @add="() => refresh()" />
        </div>
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

      <div v-else-if="sessions">
        <NuxtTable
          ref="table"
          v-model:pagination="pagination"
          :data="sessions"
          :columns
          :loading="pending"
          :pagination-options="{
            getPaginationRowModel: getPaginationRowModel()
          }"
        />
        <div class="flex justify-center border-t border-default pt-4">
          <NuxtPagination
            :default-page="
              (table?.tableApi?.getState().pagination.pageIndex || 0) + 1
            "
            :items-per-page="table?.tableApi?.getState().pagination.pageSize"
            :total="table?.tableApi?.getFilteredRowModel().rows.length"
            @update:page="(p) => table?.tableApi?.setPageIndex(p - 1)"
          />
        </div>

        <div v-if="currentSession">
          <NuxtModal v-model:open="open" title="Edit Session">
            <template #body>
              <AdminAcademicSessionEditor
                :session="currentSession"
                @update="() => onUpdate(open)"
              />
            </template>
          </NuxtModal>

          <NuxtModal v-model:open="openSetCurrent" title="Set Current Session">
            <template #body>
              <AdminAcademicSessionSetCurrent
                :session-id="currentSession.id"
                @update="() => onUpdate(openSetCurrent)"
              />
            </template>
          </NuxtModal>
        </div>
      </div>
    </section>
  </div>
</template>
