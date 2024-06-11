import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";

import { nameof } from "@repo/shared/helpers";
import { AppDataGrid, TableColumnDefinition } from "@repo/ui/styledComponents";

import User from "../../../entities/user/User";
import useGetAllUsersPaginated from "../../../shared/api/apiHooks/user/useGetAllUsersPaginated";

const UsersTable = () => {
  const { paginatedUsers } = useGetAllUsersPaginated();

  // Table definitions
  const columns: TableColumnDefinition[] = [
    { label: "Login", field: nameof<User>("login"), type: "string" },
    { label: "Email", field: nameof<User>("email"), type: "string" },
    {
      label: "Zda zakázán",
      field: nameof<User>("isDisabled"),
      type: "boolean",
    },
    {
      label: "Registrován dne",
      field: nameof<User>("createdAt"),
      type: "date",
    },
    {
      label: "Akce",
      field: "actions",
      type: "actions",
      getActions: ({ id }) => [
        {
          label: "Upravit",
          icon: <CiEdit />,
          onClick: () => {
            debugger;
            console.log("Edit user", id);
          },
        },
        {
          label: "Smazat",
          icon: <MdDeleteOutline />,
          onClick: () => {
            console.log("Delete user", id);
          },
        },
      ],
    },
  ];

  return (
    <div>
      <AppDataGrid
        name="name"
        columns={columns}
        rows={paginatedUsers.data}
        search
      />
    </div>
  );
};

export default UsersTable;
