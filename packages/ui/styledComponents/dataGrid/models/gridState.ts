import { GridColumnPinningState } from "../hooks/features/columnPinning/gridColumnPinningInterface";
import { GridColumnReorderState } from "../hooks/features/columnReorder/columnReorderInterfaces";
import { GridColumnResizeState } from "../hooks/features/columnResize/columnResizeState";
import {
  GridDetailPanelInitialState,
  GridDetailPanelState,
} from "../hooks/features/detailPanel/gridDetailPanelInterface";
import {
  GridInitialStateCommunity,
  GridStateCommunity,
} from "./gridStateCommunity";

/**
 * The state of `DataGrid`.
 */
export interface GridState extends GridStateCommunity {
  columnReorder: GridColumnReorderState;
  columnResize: GridColumnResizeState;
  pinnedColumns: GridColumnPinningState;
  detailPanel: GridDetailPanelState;
}

/**
 * The initial state of `DataGrid`.
 */
export interface GridInitialState extends GridInitialStateCommunity {
  pinnedColumns?: GridColumnPinningState;
  detailPanel?: GridDetailPanelInitialState;
}
