import { useRef } from "react";

import { flexRender, Header, Table } from "@tanstack/react-table";

import Filter from "./features/Filter";
import Resizer from "./features/Resizer";
import Sorter from "./features/Sorter";

interface TableHeadCellProps<T> {
  header: Header<T, unknown>;
  table: Table<T>;
}

const TableHeadCell = <T extends object>(props: TableHeadCellProps<T>) => {
  // References
  const ref = useRef<HTMLTableHeaderCellElement>(null);

  // Props
  const { header, table, ...restProps } = props;

  // Handlers
  const handleOnEnter = () => {
    const resizers = ref.current?.getElementsByClassName("cell-filter");

    Array.from(resizers ?? []).forEach((resizer: Element) => {
      resizer.classList.add("opacity-100");
    });
  };

  const handleOnLeave = () => {
    const resizers = ref.current?.getElementsByClassName("cell-filter");

    Array.from(resizers ?? []).forEach((resizer: Element) => {
      resizer.classList.remove("opacity-100");
    });
  };

  return (
    <th
      ref={ref}
      key={header.id}
      colSpan={header.colSpan}
      onMouseDown={header.getResizeHandler()}
      onTouchStart={header.getResizeHandler()}
      onMouseEnter={handleOnEnter}
      onMouseLeave={handleOnLeave}
      className="relative flex items-center"
      style={{ width: `${header.getSize()}px` }}
      {...restProps}
    >
      <div className="w-full mx-4 my-2 flex justify-center ">
        <Sorter<T> header={header}>
          {header.isPlaceholder
            ? null
            : flexRender(header.column.columnDef.header, header.getContext())}
        </Sorter>
      </div>
      <Filter<T> header={header} />
      <Resizer<T> header={header} table={table} />
    </th>
  );
};

export default TableHeadCell;
