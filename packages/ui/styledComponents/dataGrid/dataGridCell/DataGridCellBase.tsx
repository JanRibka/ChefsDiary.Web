import { DataGridCellBaseProps } from "../models/cell";

const DataGridCellBase = (props: DataGridCellBaseProps) => {
  return (
    <td
      key={`table-row_${props.name}_${props.indexRow}_${props.indexItem}`}
      className="px-6 py-4"
    >
      {props.children}
    </td>
  );
};

export default DataGridCellBase;
