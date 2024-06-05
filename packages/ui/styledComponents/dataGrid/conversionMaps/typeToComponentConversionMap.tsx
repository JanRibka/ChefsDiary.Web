import DataGridCellBoolean from "../dataGridCell/DataGridCellBoolean";
import ColumnValueType from "../types/ColumnValueType";
import ComponentRendererType from "../types/ComponentRendererType";

const typeToComponentConversionMap: Record<
  ColumnValueType,
  ComponentRendererType
> = {
  string: (value) => <div>{value as string} </div>,
  number: (value) => <div>{value as string} </div>,
  boolean: (value) => (
    <DataGridCellBoolean
      value={value as boolean}
      indexItem={1}
      indexRow={1}
      name=""
    />
  ),
  date: (value) => <div>{value as string} </div>,
  actions: (value) => <div>{value as string} </div>,
};

export default typeToComponentConversionMap;
