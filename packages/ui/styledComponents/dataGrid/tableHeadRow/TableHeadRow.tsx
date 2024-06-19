import { HeaderGroup, Table } from "@tanstack/react-table";

import TableHeadCell from "../tableHeadCell/TableHeadCell";

interface TableHeadRowProps<T> {
  headerGroup: HeaderGroup<T>;
  table: Table<T>;
}

const TableHeadRow = <T extends object>(props: TableHeadRowProps<T>) => {
  const { headerGroup, table } = props;

  return (
    <tr>
      {headerGroup.headers.map((header) => (
        <TableHeadCell<T> key={header.id} header={header} table={table} />
      ))}
    </tr>
  );
};

export default TableHeadRow;
