import type { TableColumn } from "@nuxt/ui";
import type { ApplicationItem } from "../index.vue";
import { useDateFormat } from "@vueuse/core";

export const columns: TableColumn<ApplicationItem>[] = [
  /*  {
    header: "S/N",
    cell: ({ row }) => row.index
  }, */
  {
    accessorKey: "id",
    header: "#",

    cell: ({ row }) => {
      const id: string = row.getValue("id");
      return h("span", { title: id }, `${id.slice(0, 8)}...`);
    }
  },
  {
    accessorKey: "applicationNumber",
    header: "App. Number"
  },
  {
    accessorKey: "firstName",
    header: "First Name"
  },
  {
    accessorKey: "lastName",
    header: "Last Name"
  },
  {
    accessorKey: "gender",
    header: "Gender",
    cell: ({ row }) =>
      h("span", { class: "capitalize" }, row.getValue("gender"))
  },
  {
    accessorKey: "stateOfOrigin",
    header: "State of Origin"
  },
  {
    accessorKey: "course",
    header: "Course"
  },
  {
    header: "Admission fee",
    cell: ({ row }) => {
      const hasPaid: boolean = row.getValue("hasPaidAdmissionFee");
      return hasPaid ? "Paid" : "Unpaid";
    }
  },
  {
    accessorKey: "updatedAt",
    header: "Submitted",
    cell: ({ row }) =>
      useDateFormat(
        row.getValue("updatedAt") as string,
        "DD MMM, YYYY hh:mm aa"
      ).value
  }
];
