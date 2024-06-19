import { Table } from "@tanstack/react-table";

import TableHeadRow from "../tableHeadRow/TableHeadRow";

interface AppTableHeadProps<T> {
  table: Table<T>;
}

const TableHead = <T extends object>(props: AppTableHeadProps<T>) => {
  const { table } = props;

  return (
    <thead>
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
