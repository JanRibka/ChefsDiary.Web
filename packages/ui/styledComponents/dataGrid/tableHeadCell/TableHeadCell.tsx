import { flexRender, Header } from "@tanstack/react-table";

interface TableHeadCellProps<T> {
  header: Header<T, unknown>;
}

const TableHeadCell = <T extends object>(props: TableHeadCellProps<T>) => {
  return (
    <th key={props.header.id}>
      {props.header.isPlaceholder
        ? null
        : flexRender(
            props.header.column.columnDef.header,
            props.header.getContext()
          )}
    </th>
  );
};

export default TableHeadCell;
