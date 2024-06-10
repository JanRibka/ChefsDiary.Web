import { mergeStyles } from "@repo/shared/helpers";

import { dataGridHeadCellVariants } from "./dataGridHeadCellVariants";
import TableHeadProps from "./DataGridHeadProps";

const DataGridHead = (props: TableHeadProps) => {
  return (
    <thead className="text-xs uppercase bg-gray-100 rounded-lg">
      <tr className="">
        {props.columns.map((column, index) => (
          <th
            key={`table-head-row_${props.name}_${index}`}
            className={mergeStyles(
              column.width ? `w-${column.width}` : undefined,
              dataGridHeadCellVariants()
            )}
          >
            {column.label}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default DataGridHead;
