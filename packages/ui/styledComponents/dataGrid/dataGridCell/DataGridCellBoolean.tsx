import DataGridCellBase, { DataGridCellBaseProps } from "./DataGridCellBase";

interface DataGridCellBooleanProps extends DataGridCellBaseProps {
  value: boolean | null;
}

const DataGridCellBoolean = (props: DataGridCellBooleanProps) => {
  return <DataGridCellBase></DataGridCellBase>;
};

export default DataGridCellBoolean;
