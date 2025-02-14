import { useMemo, useState } from "react";
import { CiEdit } from "react-icons/ci";

import {
  AppButtonIcon,
  AppDataGrid,
  AppDialog,
  GridBodyCellActions,
  GridBodyCellBoolean,
  GridBodyCellString,
  GridHeaderCell,
} from "@repo/ui/styledComponents";
import { createColumnHelper } from "@tanstack/react-table";

import User from "../../../entities/user/User";
import useGetAllUsersPaginated from "../../../shared/api/apiHooks/user/useGetAllUsersPaginated";

const UsersTable = () => {
  // Api
  const { paginatedUsers } = useGetAllUsersPaginated();

  // State
  const [editDialogOpen, setEditDialogOpen] = useState<boolean>(false);
  const [editDialogData, setEditDialogData] = useState<Partial<User>>({
    login: "",
    uuid: "",
  });

  // Constants
  const columnHelper = createColumnHelper<User>();

  // Handlers
  const handleOnClickEditUser = (uuid: string, login: string) => {
    setEditDialogData({ uuid: uuid, login: login });
    setEditDialogOpen(true);
  };

  // Column definition
  const columns = useMemo(
    () => [
      columnHelper.display({
        id: "actions",
        header: () => <GridHeaderCell align="left">Akce</GridHeaderCell>,
        cell: (info) => (
          <GridBodyCellActions
            title="Editovat uživatele"
            actionButtons={[
              <AppButtonIcon
                onClick={() =>
                  handleOnClickEditUser(
                    info.row.original.uuid,
                    info.row.original.login
                  )
                }
              >
                <CiEdit />
              </AppButtonIcon>,
            ]}
          />
        ),
        size: 100,
        minSize: 80,
        maxSize: 200,
        enableHiding: false,
      }),
      columnHelper.accessor("login", {
        header: () => <GridHeaderCell align="left">Login</GridHeaderCell>,
        cell: (info) => (
          <GridBodyCellString value={info.getValue()} align="left" />
        ),
        size: 200,
        minSize: 50,
        maxSize: 500,
        enableResizing: true,
        enableSorting: true,
        enableColumnFilter: true,
      }),
      columnHelper.accessor("email", {
        header: () => <GridHeaderCell align="left">Email</GridHeaderCell>,
        cell: (info) => (
          <GridBodyCellString value={info.getValue()} align="left" />
        ),
        size: 250,
        minSize: 50,
        maxSize: 500,
        enableResizing: true,
      }),
      columnHelper.accessor("isDisabled", {
        header: () => (
          <GridHeaderCell align="center">Zda zakázán</GridHeaderCell>
        ),
        cell: (info) => (
          <GridBodyCellBoolean value={info.getValue()} align="center" />
        ),
        size: 155,
        minSize: 100,
        maxSize: 300,
        enableResizing: true,
      }),
    ],
    []
  );

  return (
    <>
      <div className="p-2">
        <AppDataGrid<User>
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          columns={columns as any}
          data={paginatedUsers?.data ?? []}
          serverSideSorting
          pageSizeList={[10, 25, 50]}
        />
      </div>

      <AppDialog
        open={editDialogOpen}
        setOpen={setEditDialogOpen}
        title={`Editace uživatele ${editDialogData.login}`}
        content={<div>sdf</div>}
      />
    </>
  );
};

export default UsersTable;
