import { formatDate } from "@repo/shared/helpers";

import { DataGridCellDateProps } from "../models/cell";
import DataGridCellBase from "./DataGridCellBase";

const DataGridCellDate = (props: DataGridCellDateProps) => {
  const { value, dateFormat = "yyyy-MM-dd HH:mm:ss", ...restProps } = props;

  return (
    <DataGridCellBase {...restProps}>
      {formatDate(value, dateFormat)}
    </DataGridCellBase>
  );
};

export default DataGridCellDate;
