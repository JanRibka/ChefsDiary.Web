import GridActionsCellItemProps from "../actions/GridActionsCellProps";

interface TableColumnDefinition {
  label: string;
  field: string;
  width?: number;
  type?: "string" | "number" | "boolean" | "date" | "actions";
  getActions?: (
    id: string | number
  ) => React.ReactElement<
    GridActionsCellItemProps,
    string | React.JSXElementConstructor<any>
  >[];
}

export default TableColumnDefinition;
