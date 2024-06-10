import GridActionsCellItemProps from "../actions/GridActionsCellProps";
import ColumnValueType from "../types/ColumnValueType";

interface DataGridColumnDefinition {
  label: string;
  field: string;
  width?: number;
  flex?: number;
  type?: ColumnValueType;
  dateFormat?: string;
  getActions?: (
    id: string | number
  ) => React.ReactElement<
    GridActionsCellItemProps,
    string | React.JSXElementConstructor<any>
  >[];
}

export default DataGridColumnDefinition;
