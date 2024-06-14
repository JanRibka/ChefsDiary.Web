import { GridColumnsGroupingState } from "../hooks/features/columnGrouping/gridColumnGroupsInterfaces";
import { GridColumnMenuState } from "../hooks/features/columnMenu/columnMenuState";
import {
  GridColumnsInitialState,
  GridColumnsState,
} from "../hooks/features/columns/gridColumnsInterfaces";
import { GridDensityState } from "../hooks/features/density/densityState";
import {
  GridFilterInitialState,
  GridFilterState,
} from "../hooks/features/filter/gridFilterState";
import {
  GridFocusState,
  GridTabIndexState,
} from "../hooks/features/focus/gridFocusState";
import {
  GridPaginationInitialState,
  GridPaginationState,
} from "../hooks/features/pagination/gridPaginationInterfaces";
import {
  GridPreferencePanelInitialState,
  GridPreferencePanelState,
} from "../hooks/features/preferencePanel/gridPreferencePanelState";
import { GridRowsMetaState } from "../hooks/features/rows/gridRowsMetaState";
import { GridRowsState } from "../hooks/features/rows/gridRowState";
import {
  GridSortingInitialState,
  GridSortingState,
} from "../hooks/features/sorting/gridSortingState";
import { GridEditRowsModel } from "./gridEditRowModel";
import { GridSelectionModel } from "./gridSelectionModel";

/**
 * The state of `DataGrid`
 */
export interface GridStateCommunity {
  rows: GridRowsState;
  rowsMeta: GridRowsMetaState;
  editRows: GridEditRowsModel;
  pagination: GridPaginationState;
  columns: GridColumnsState;
  columnGrouping: GridColumnsGroupingState;
  columnMenu: GridColumnMenuState;
  sorting: GridSortingState;
  focus: GridFocusState;
  tabIndex: GridTabIndexState;
  selection: GridSelectionModel;
  filter: GridFilterState;
  preferencePanel: GridPreferencePanelState;
  density: GridDensityState;
  error?: any;
}

/**
 * The initial state of `DataGrid`
 */
export interface GridInitialStateCommunity {
  pagination?: GridPaginationInitialState;
  columns?: GridColumnsInitialState;
  sorting?: GridSortingInitialState;
  filter?: GridFilterInitialState;
  preferencePanel?: GridPreferencePanelInitialState;
}
