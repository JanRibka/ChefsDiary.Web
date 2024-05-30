import { nameof } from "@repo/shared/helpers";
import { AppTable, TableColumnDefinition } from "@repo/ui/styledComponents";

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
    },
  ];

  return (
    <div>
      <AppTable
        name="name"
        columns={columns}
        rows={paginatedUsers.data}
        search
      />
    </div>
  );
};

export default UsersTable;
