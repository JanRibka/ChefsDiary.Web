import { renderEditSingleSelectCell } from "../components/cell/GridEditSingleSelectCell";
import { GridColTypeDef } from "../models/colDef/gridColDef";
import {
  getGridSingleSelectOperators,
  getGridSingleSelectQuickFilterFn,
} from "./gridSingleSelectOperators";
import { GRID_STRING_COL_DEF } from "./gridStringColDef";

export const GRID_SINGLE_SELECT_COL_DEF: GridColTypeDef = {
  ...GRID_STRING_COL_DEF,
  type: "singleSelect",
  renderEditCell: renderEditSingleSelectCell,
  filterOperators: getGridSingleSelectOperators(),
  getApplyQuickFilterFn: getGridSingleSelectQuickFilterFn,
};
