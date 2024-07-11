import { useRef } from "react";

import { Row, Table } from "@tanstack/react-table";
import { useVirtualizer } from "@tanstack/react-virtual";

import TableBodyRow from "../tableBodyRow/TableBodyRow";

interface TableBodyProps<T> {
  table: Table<T>;
}

const TableBody = <T extends object>(props: TableBodyProps<T>) => {
  // References
  const refTableBody = useRef<HTMLTableSectionElement>(null);

  // Constants
  const { rows } = props.table.getRowModel();

  // TODO: Až bude react 19 můžu pustit virtualizaci

  const rowVirtualizer = useVirtualizer({
    count: rows.length,
    // Estimate row height for accurate scrollbar
    estimateSize: () => 33, // TODO: Dat do props
    getScrollElement: () => refTableBody.current,
    // Measure dynamic row height, except in firefox because it measures table border height incorrectly
    measureElement:
      typeof window !== "undefined" &&
      navigator.userAgent.indexOf("Firefox") === -1
        ? (element) => element?.getBoundingClientRect().height
        : undefined,
    overscan: 5,
  });

  return (
    <tbody
      ref={refTableBody}
      className="relative"
      style={{ height: `${rowVirtualizer.getTotalSize()}px` }}
    >
      {rowVirtualizer.getVirtualItems().map((virtualRow, index) => {
        const row = rows[virtualRow.index] as Row<T>;

        return (
          <TableBodyRow
            key={row.id}
            row={row}
            virtualRow={virtualRow}
            rowVirtualizer={rowVirtualizer}
            index={index}
          />
        );
      })}
    </tbody>
  );
};

export default TableBody;
