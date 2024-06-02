import { ReactNode } from "react";

export interface DataGridCellBaseProps {
  name: string;
  indexRow: number;
  indexItem: number;
  children: ReactNode;
}

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
