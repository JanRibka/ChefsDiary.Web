import {
  GridBodyCellBoolean,
  GridBodyCellString,
} from "@repo/ui/styledComponents";
import { createColumnHelper } from "@tanstack/react-table";

import User from "../../../entities/user/User";

const columnHelper = createColumnHelper<User>();

export const columns = [
  columnHelper.accessor("login", {
    header: "Login",
    cell: (info) => (
      <GridBodyCellString value={info.getValue()} align="center" />
    ),
    size: 200,
    minSize: 50,
    maxSize: 500,
    enableResizing: true,
    enableSorting: true,
    enableColumnFilter: true,
  }),
  columnHelper.accessor("email", {
    header: "Email",
    cell: (info) => (
      <GridBodyCellString value={info.getValue()} align="center" />
    ),
    size: 250,
    minSize: 50,
    maxSize: 500,
    enableResizing: true,
  }),
  columnHelper.accessor("isDisabled", {
    header: "Zda zakázán",
    cell: (info) => (
      <GridBodyCellBoolean value={info.getValue()} align="center" />
    ),
    size: 200,
    minSize: 50,
    maxSize: 500,
    enableResizing: true,
  }),
];
