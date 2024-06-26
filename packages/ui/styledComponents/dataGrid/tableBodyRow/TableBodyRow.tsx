import { Row } from "@tanstack/react-table";
import { VirtualItem, Virtualizer } from "@tanstack/react-virtual";

import TableBodyCell from "../tableBodyCell/TableBodyCell";

interface TableBodyRowProps<T> {
  row: Row<T>;
  virtualRow: VirtualItem<Element>;
  rowVirtualizer: Virtualizer<HTMLTableSectionElement, Element>;
  index: number;
}

const TableBodyRow = <T extends object>(props: TableBodyRowProps<T>) => {
  return (
    <tr
      ref={(node) => props.rowVirtualizer.measureElement(node)}
      data-index={props.virtualRow.index}
      className="flex absolute w-full"
      style={{
        // height: `${props.virtualRow.size}px`,
        transform: `translateY(${props.virtualRow.start}px)`,
      }}
    >
      {props.row.getVisibleCells().map((cell) => (
        <TableBodyCell key={cell.id} cell={cell} />
      ))}
    </tr>
  );
};

export default TableBodyRow;
