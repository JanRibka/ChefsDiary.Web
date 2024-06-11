import { DataGridCellStringProps } from "../models/cell";
import DataGridCellBase from "./DataGridCellBase";

const DataGridCellString = (props: DataGridCellStringProps) => {
  const { value, ...restProps } = props;

  return <DataGridCellBase {...restProps}>{value ?? ""}</DataGridCellBase>;
};

export default DataGridCellString;
