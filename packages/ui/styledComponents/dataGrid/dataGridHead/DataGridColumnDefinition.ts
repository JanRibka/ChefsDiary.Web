import { GridRowParams } from "../../params/gridRowParams";
import GridActionsCellItemProps from "../actions/GridActionsCellProps";
import ColumnValueType from "../types/ColumnValueType";

interface DataGridColumnDefinitionBase {
  label: string;
  field: string;
  width?: number;
  flex?: number;
  type?: Omit<ColumnValueType, "actions" | "date">;
}

export interface DataGridColumnDefinitionDate
  extends Omit<DataGridColumnDefinitionBase, "type"> {
  type?: "date";
  dateFormat?: string;
}

interface DataGridColumnDefinitionActions
  extends Omit<DataGridColumnDefinitionBase, "type"> {
  type?: "actions";
  getActions?: (
    params: GridRowParams
  ) => React.ReactElement<GridActionsCellItemProps>[];
}

type DataGridColumnDefinition =
  | DataGridColumnDefinitionBase
  | DataGridColumnDefinitionDate
  | DataGridColumnDefinitionActions;

export default DataGridColumnDefinition;
