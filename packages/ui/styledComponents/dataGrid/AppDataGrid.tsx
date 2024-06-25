import { mergeStyles } from "@repo/shared/helpers";
import { getCoreRowModel, useReactTable } from "@tanstack/react-table";

import AppDataGridProps from "./AppDataGridProps";
import TableBody from "./tableBody/TableBody";
import TableHead from "./tableHead/TableHead";

const AppTable = <T extends object>(props: AppDataGridProps<T>) => {
  const { className, columnResizeMode, columnResizeDirection, ...restProps } =
    props;
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

  const table = useReactTable<T>({
    getCoreRowModel: getCoreRowModel(),
    columnResizeMode: resizeMode,
    columnResizeDirection: resizeDirection,
    ...restProps,
  });

  return (
    <div className="w-full">
      <table
        className={mergeStyles("", className)}
        style={{ width: `${table.getCenterTotalSize()}px` }}
      >
        {<TableHead<T> table={table} />}
        {<TableBody<T> table={table} />}
      </table>
    </div>
  );
};

export default AppTable;
