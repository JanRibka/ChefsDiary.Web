import { HeaderGroup } from "@tanstack/react-table";

import TableHeadCell from "../tableHeadCell/TableHeadCell";

interface TableHeadRowProps<T> {
  headerGroup: HeaderGroup<T>;
}

const TableHeadRow = <T extends object>(props: TableHeadRowProps<T>) => {
  return (
    <tr key={props.headerGroup.id}>
      {props.headerGroup.headers.map((header) => (
        <TableHeadCell<T> key={`header_cell_${header.id}`} header={header} />
      ))}
    </tr>
  );
};

export default TableHeadRow;
