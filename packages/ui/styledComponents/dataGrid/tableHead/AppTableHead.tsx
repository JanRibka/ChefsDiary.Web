import { flexRender, Table } from "@tanstack/react-table";

import TableHeadRow from "../tableHeadRow/TableHeadRow";

interface AppTableHeadProps<T> {
  table: Table<T>;
}

const AppTableHead = <T extends object>(props: AppTableHeadProps<T>) => {
  return (
    <thead>
      {props.table.getHeaderGroups().map((headerGroup) => (
        <TableHeadRow<T> id={headerGroup.id}>
          {headerGroup.headers.map((header) => (
            <th key={header.id}>
              {header.isPlaceholder
                ? null
                : flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
            </th>
          ))}
        </TableHeadRow>
      ))}
    </thead>
  );
};

export default AppTableHead;
