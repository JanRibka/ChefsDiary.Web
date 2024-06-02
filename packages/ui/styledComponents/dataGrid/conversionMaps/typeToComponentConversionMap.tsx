import ColumnValueType from "../types/ColumnValueType";
import ComponentRendererType from "../types/ComponentRendererType";

const typeToComponentConversionMap: Record<
  ColumnValueType,
  ComponentRendererType
> = {
  string: (value: string) => <div>fdsdf</div>,
  number: "number",
  boolean: "boolean",
  date: "date",
  actions: "actions",
};

export default typeToComponentConversionMap;
