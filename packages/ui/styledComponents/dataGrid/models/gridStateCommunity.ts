import {
  GridColumnsInitialState,
  GridColumnsState,
} from "../hooks/features/columns/gridColumnsInterfaces";
import {
  GridFilterInitialState,
  GridFilterState,
} from "../hooks/features/filter/gridFilterState";
import {
  GridPaginationInitialState,
  GridPaginationState,
} from "../hooks/features/pagination/gridPaginationInterfaces";
import { GridRowsState } from "../hooks/features/rows/gridRowState";
import {
  GridSortingInitialState,
  GridSortingState,
} from "../hooks/features/sorting/gridSortingState";

/**
 * The state of `DataGrid`
 */
export interface GridStateCommunity {
  rows: GridRowsState;
  pagination: GridPaginationState;
  columns: GridColumnsState;
  sorting: GridSortingState;
  filter: GridFilterState;
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
}
