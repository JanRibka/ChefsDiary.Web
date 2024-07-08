import { mergeStyles } from "@repo/shared/helpers";
import {
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";

import AppDataGridProps from "./AppDataGridProps";
import TableBody from "./tableBody/TableBody";
import TableFooter from "./tableFooter/TableFooter";
import TableHead from "./tableHead/TableHead";

const AppDataGrid = <T extends object>(props: AppDataGridProps<T>) => {
  // Props
  const {
    className,
    columnResizeMode,
    columnResizeDirection,
    serverSideSorting,
    serverSidePagination,
    ...restProps
  } = props;

  // Constants
  const enableResizing = props.columns.some((column) => column.enableResizing);
  const resizeMode = enableResizing
    ? columnResizeMode
      ? columnResizeMode
      : "onChange"
    : undefined;
  const resizeDirection = enableResizing
    ? columnResizeDirection
      ? columnResizeDirection
      : "ltr"
    : undefined;

  // Table definition
  const table = useReactTable<T>({
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: serverSideSorting ? undefined : getSortedRowModel(), // Client-side sorting
    columnResizeMode: resizeMode,
    columnResizeDirection: resizeDirection,
    manualPagination: serverSidePagination,
    getPaginationRowModel: serverSidePagination
      ? undefined
      : getPaginationRowModel(), // Client-side pagination
    ...restProps,
  });

  return (
    <div className="w-full">
      <table
        className={mergeStyles("grid", className)}
        style={{ width: `${table.getCenterTotalSize()}px` }}
      >
        {<TableHead<T> table={table} />}
        {<TableBody<T> table={table} />}
        {<TableFooter<T> table={table} />}
        {}
      </table>
    </div>
  );
};

export default AppDataGrid;
