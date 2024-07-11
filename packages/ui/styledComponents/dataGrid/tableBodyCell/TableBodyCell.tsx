import { Cell, flexRender } from "@tanstack/react-table";

interface TableBodyCellProps<T> {
  cell: Cell<T, unknown>;
}

const TableBodyCell = <T extends object>(props: TableBodyCellProps<T>) => {
  return (
    <td
      className="w-full flex items-center  box-border px-4 py-2"
      style={{ width: `${props.cell.column.getSize()}px` }}
    >
      {flexRender(props.cell.column.columnDef.cell, props.cell.getContext())}
    </td>
  );
};

export default TableBodyCell;
