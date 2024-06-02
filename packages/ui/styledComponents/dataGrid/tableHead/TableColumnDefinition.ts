import GridActionsCellItemProps from "../actions/GridActionsCellProps";
import ColumnValueType from "../types/ColumnValueType";

interface TableColumnDefinition {
  label: string;
  field: string;
  width?: number;
  type?: ColumnValueType;
  getActions?: (
    id: string | number
  ) => React.ReactElement<
    GridActionsCellItemProps,
    string | React.JSXElementConstructor<any>
  >[];
}

export default TableColumnDefinition;
