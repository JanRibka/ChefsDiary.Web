import { Row } from "@tanstack/react-table";
import { VirtualItem, Virtualizer } from "@tanstack/react-virtual";

import TableBodyCell from "../tableBodyCell/TableBodyCell";

interface TableBodyRowProps<T> {
  row: Row<T>;
  virtualRow?: VirtualItem;
  rowVirtualizer?: Virtualizer<HTMLTableSectionElement, Element>;
  index: number;
}

const TableBodyRow = <T extends object>(props: TableBodyRowProps<T>) => {
  return (
    <tr
      data-index={props.virtualRow?.index ?? 0}
      ref={(node) => props.rowVirtualizer?.measureElement(node)}
      // className={`h-[${props.virtualRow.size}px] translate-y-[${props.virtualRow.start - index *  props.virtualRow?.start ?? 0}px]`}
    >
      {props.row.getVisibleCells().map((cell) => (
        <TableBodyCell key={cell.id} cell={cell} />
      ))}
    </tr>
  );
};

export default TableBodyRow;
