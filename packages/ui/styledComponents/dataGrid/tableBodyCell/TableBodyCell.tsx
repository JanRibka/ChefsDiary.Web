import { Cell, flexRender } from "@tanstack/react-table";

interface TableBodyCellProps<T> {
  cell: Cell<T, unknown>;
}

const TableBodyCell = <T extends object>(props: TableBodyCellProps<T>) => {
  return (
    <th style={{ width: `${props.cell.column.getSize()}px` }}>
      {flexRender(props.cell.column.columnDef.cell, props.cell.getContext())}
    </th>
  );
};

export default TableBodyCell;
