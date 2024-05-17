import { mergeStyles } from "@repo/shared/helpers";

import TableColumnDefinition from "./TableColumnDefinition";
import { tableHeadCellVariants } from "./tableHeadCellVariants";

interface TableHeadProps {
  columns: TableColumnDefinition[];
}

const TableHead = (props: TableHeadProps) => {
  return (
    <thead className="text-xs uppercase bg-gray-100 rounded-lg">
      <tr className="">
        {props.columns.map((column, index) => (
          <th
            key={index}
            className={mergeStyles(
              column.width ? `w-${column.width}` : undefined,
              tableHeadCellVariants({})
            )}
          >
            {column.label}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHead;
