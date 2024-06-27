import { AppDataGrid } from "@repo/ui/styledComponents";

import useGetAllUsersPaginated from "../../../shared/api/apiHooks/user/useGetAllUsersPaginated";
import { columns } from "./usersTableColumnDefinition";

const UsersTable = () => {
  const { paginatedUsers } = useGetAllUsersPaginated();

  return (
    <div className="p-2">
      <AppDataGrid
        columns={columns}
        data={paginatedUsers.data}
        serverSideSorting
      />
    </div>
  );
  // // Table definitions
  // const columns: TableColumnDefinition[] = [
  //   { label: "Login", field: nameof<User>("login"), type: "string" },
  //   { label: "Email", field: nameof<User>("email"), type: "string" },
  //   {
  //     label: "Zda zakázán",
  //     field: nameof<User>("isDisabled"),
  //     type: "boolean",
  //   },
  //   {
  //     label: "Registrován dne",
  //     field: nameof<User>("createdAt"),
  //     type: "date",
  //   },
  //   {
  //     label: "Akce",
  //     field: "actions",
  //     type: "actions",
  //     getActions: ({ id }) => [
  //       {
  //         label: "Upravit",
  //         icon: <CiEdit />,
  //         onClick: () => {
  //           debugger;
  //           console.log("Edit user", id);
  //         },
  //       },
  //       {
  //         label: "Smazat",
  //         icon: <MdDeleteOutline />,
  //         onClick: () => {
  //           console.log("Delete user", id);
  //         },
  //       },
  //     ],
  //   },
  // ];

  // return (
  //   <div>
  //     <AppDataGrid
  //       name="name"
  //       columns={columns}
  //       rows={paginatedUsers.data}
  //       search
  //       getRowId={(row) => row.uuid}
  //     />
  //   </div>
  // );
};

export default UsersTable;
