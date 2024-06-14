import { GridColumnsInternalCache } from "../hooks/features/columns/gridColumnsInterfaces";
import { GridRowsInternalCache } from "../hooks/features/rows/gridRowState";

export interface GridApiCaches {
  rows: GridRowsInternalCache;
  columns: GridColumnsInternalCache;
}
