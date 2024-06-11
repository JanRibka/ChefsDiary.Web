import DataGridCellAction from "../dataGridCell/DataGridCellAction";
import DataGridCellBoolean from "../dataGridCell/DataGridCellBoolean";
import DataGridCellDate from "../dataGridCell/DataGridCellDate";
import DataGridCellString from "../dataGridCell/DataGridCellString";
import ColumnValueType from "../types/ColumnValueType";
import ComponentRendererType from "../types/ComponentRendererType";
import ColumnValueDataProps from "./ColumnValueDataProps";

const typeToComponentConversionMap: Record<
  ColumnValueType,
  ComponentRendererType
> = {
  string: ({ value, ...restData }: ColumnValueDataProps) => (
    <DataGridCellString value={value as string | null} {...restData} />
  ),
  number: ({ value }: ColumnValueDataProps) => <div>{value as string} </div>,
  boolean: ({ value, ...restData }: ColumnValueDataProps) => (
    <DataGridCellBoolean value={value as boolean | null} {...restData} />
  ),
  date: ({ value, ...restData }: ColumnValueDataProps) => (
    <DataGridCellDate value={value as Date | null} {...restData} />
  ),
  actions: (props: Omit<ColumnValueDataProps, "value">) => (
    <DataGridCellAction {...props} />
  ),
};

export default typeToComponentConversionMap;
