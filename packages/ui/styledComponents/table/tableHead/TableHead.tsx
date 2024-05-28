import { mergeStyles } from "@repo/shared/helpers";

import { tableHeadCellVariants } from "./tableHeadCellVariants";
import TableHeadProps from "./TableHeadProps";

const TableHead = (props: TableHeadProps) => {
  return (
    <thead className="text-xs uppercase bg-gray-100 rounded-lg">
      <tr className="">
        {props.columns.map((column, index) => (
          <th
            key={`table-head-row_${props.name}_${index}`}
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
