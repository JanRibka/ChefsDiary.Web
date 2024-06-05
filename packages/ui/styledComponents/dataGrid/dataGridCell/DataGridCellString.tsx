import DataGridCellBase, { DataGridCellBaseProps } from "./DataGridCellBase";

interface DataGridCellBooleanProps
  extends Omit<DataGridCellBaseProps, "children"> {
  value: string | null;
}

const DataGridCellString = (props: DataGridCellBooleanProps) => {
  const { value, ...restProps } = props;

  return <DataGridCellBase {...restProps}>{value ?? ""}</DataGridCellBase>;
};

export default DataGridCellString;
