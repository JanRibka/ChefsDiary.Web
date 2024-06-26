import { flexRender, Header, Table } from "@tanstack/react-table";

import Resizer from "./features/Resizer";

interface TableHeadCellProps<T> {
  header: Header<T, unknown>;
  table: Table<T>;
}

const TableHeadCell = <T extends object>(props: TableHeadCellProps<T>) => {
  const { header, table, ...restProps } = props;

  return (
    <th
      key={header.id}
      onMouseDown={header.getResizeHandler()}
      onTouchStart={header.getResizeHandler()}
      className="relative flex"
      style={{ width: `${header.getSize()}px` }}
      {...restProps}
    >
      <div className="w-full mx-4 my-2 flex justify-center">
        <span className="">
          {header.isPlaceholder
            ? null
            : flexRender(header.column.columnDef.header, header.getContext())}
        </span>
      </div>
      <Resizer<T> header={header} table={table} />
    </th>
  );
};

export default TableHeadCell;
