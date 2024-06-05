import { formatDate } from "@repo/shared/helpers";

import DataGridCellBase, { DataGridCellBaseProps } from "./DataGridCellBase";

interface DataGridCellBooleanProps
  extends Omit<DataGridCellBaseProps, "children"> {
  value: Date | null;
  dateFormat?: string;
}

const DataGridCellDate = (props: DataGridCellBooleanProps) => {
  const { value, dateFormat = "yyyy-MM-dd HH:mm:ss", ...restProps } = props;

  return (
    <DataGridCellBase {...restProps}>
      {formatDate(value, dateFormat)}
    </DataGridCellBase>
  );
};

export default DataGridCellDate;
