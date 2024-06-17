import { createColumnHelper } from "@tanstack/react-table";

import User from "../../../entities/user/User";

const columnHelper = createColumnHelper<User>();

export const columns = [
  columnHelper.accessor("login", {
    header: "Login",
    cell: (info) => info.getValue(),
    size: 150,
    minSize: 50,
    maxSize: 500,
    enableResizing: true,
  }),
  columnHelper.accessor("email", {
    header: "Email",
    cell: (info) => info.getValue(),
    size: 150,
    minSize: 50,
    maxSize: 500,
    enableResizing: true,
  }),
];
