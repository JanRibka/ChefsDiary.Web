import { Table } from "@tanstack/react-table";

import TableHeadRow from "../tableHeadRow/TableHeadRow";

interface AppTableHeadProps<T> {
  table: Table<T>;
}

const AppTableHead = <T extends object>(props: AppTableHeadProps<T>) => {
  return (
    <thead>
      {props.table.getHeaderGroups().map((headerGroup) => (
        <TableHeadRow<T> headerGroup={headerGroup} />
      ))}
    </thead>
  );
};

export default AppTableHead;
