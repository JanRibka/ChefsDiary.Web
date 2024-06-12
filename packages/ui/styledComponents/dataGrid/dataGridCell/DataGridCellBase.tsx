import { mergeStyles } from "@repo/shared/helpers";

import { DataGridCellBaseProps } from "../models/cell";

const DataGridCellBase = (props: DataGridCellBaseProps) => {
  return (
    <td
      key={`table-row_${props.name}_${props.indexRow}_${props.indexItem}`}
      className={mergeStyles("px-6 py-4", props.className)}
    >
      {props.children}
    </td>
  );
};

export default DataGridCellBase;
