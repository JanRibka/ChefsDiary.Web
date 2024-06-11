import { GridRowParams } from "../../params/gridRowParams";
import { DataGridCellActionItemProps } from "../models/cell";
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

export interface DataGridColumnDefinitionActions
  extends Omit<DataGridColumnDefinitionBase, "type"> {
  type?: "actions";
  getActions?: (params: GridRowParams) => DataGridCellActionItemProps[];
}

type DataGridColumnDefinition =
  | DataGridColumnDefinitionBase
  | DataGridColumnDefinitionDate
  | DataGridColumnDefinitionActions;

export default DataGridColumnDefinition;
