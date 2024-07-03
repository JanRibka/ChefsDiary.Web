import { Table } from "@tanstack/react-table";

import TableHeadRow from "../tableHeadRow/TableHeadRow";

interface TableHeadProps<T> {
  table: Table<T>;
}

const TableHead = <T extends object>(props: TableHeadProps<T>) => {
  const { table } = props;

  return (
    <thead className="grid sticky top-0 z-[1]">
      {table.getHeaderGroups().map((headerGroup) => (
        <TableHeadRow<T>
          key={headerGroup.id}
          headerGroup={headerGroup}
          table={table}
        />
      ))}
    </thead>
  );
};

export default TableHead;
