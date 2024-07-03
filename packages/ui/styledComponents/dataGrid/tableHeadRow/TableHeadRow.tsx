import { useRef } from "react";

import { HeaderGroup, Table } from "@tanstack/react-table";

import TableHeadCell from "../tableHeadCell/TableHeadCell";

interface TableHeadRowProps<T> {
  headerGroup: HeaderGroup<T>;
  table: Table<T>;
}

const TableHeadRow = <T extends object>(props: TableHeadRowProps<T>) => {
  // References
  const ref = useRef<HTMLTableRowElement>(null);

  const { headerGroup, table } = props;

  // Handlers
  const handleOnEnter = () => {
    const resizers = ref.current?.getElementsByClassName("can-resize");

    Array.from(resizers ?? []).forEach((resizer: Element) => {
      resizer.classList.add("opacity-100");
    });
  };

  const handleOnLeave = () => {
    const resizers = ref.current?.getElementsByClassName("can-resize");

    Array.from(resizers ?? []).forEach((resizer: Element) => {
      resizer.classList.remove("opacity-100");
    });
  };

  return (
    <tr
      className="flex w-full"
      ref={ref}
      onMouseEnter={handleOnEnter}
      onMouseLeave={handleOnLeave}
    >
      {headerGroup.headers.map((header) => (
        <TableHeadCell<T> key={header.id} header={header} table={table} />
      ))}
    </tr>
  );
};

export default TableHeadRow;
