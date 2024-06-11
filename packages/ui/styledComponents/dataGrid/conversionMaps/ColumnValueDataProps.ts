import { GridRowParams } from "../../params/gridRowParams";
import { DataGridCellActionItemProps } from "../models/cell";
import { GridRowId } from "../types/gridRows";

interface ColumnValueDataProps {
  value: string | number | boolean | Date | null;
  indexItem: number;
  indexRow: number;
  name: string;
  dateFormat?: string;
  rowId?: GridRowId;
  getActions?: (params: GridRowParams) => DataGridCellActionItemProps[];
}

export default ColumnValueDataProps;
