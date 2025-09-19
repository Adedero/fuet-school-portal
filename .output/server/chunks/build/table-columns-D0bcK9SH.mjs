import { useDateFormat } from '@vueuse/core';
import { h } from 'vue';

const columns = [
  /*  {
    header: "S/N",
    cell: ({ row }) => row.index
  }, */
  {
    accessorKey: "id",
    header: "#",
    cell: ({ row }) => {
      const id = row.getValue("id");
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
    cell: ({ row }) => h("span", { class: "capitalize" }, row.getValue("gender"))
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
    accessorKey: "hasPaidAdmissionFee",
    header: "Admission fee",
    cell: ({ row }) => {
      const hasPaid = row.getValue("hasPaidAdmissionFee");
      return hasPaid ? "Paid" : "Unpaid";
    }
  },
  {
    accessorKey: "updatedAt",
    header: "Submitted",
    cell: ({ row }) => useDateFormat(
      row.getValue("updatedAt"),
      "DD MMM, YYYY hh:mm aa"
    ).value
  }
];

export { columns };
//# sourceMappingURL=table-columns-D0bcK9SH.mjs.map
