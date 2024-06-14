import {
  GridInitialStateCommunity,
  GridStateCommunity,
} from "../../models/gridStateCommunity";
import { GridColumnPinningState } from "../features/columnPinning/gridColumnPinningInterface";
import { GridColumnReorderState } from "../features/columnReorder/columnReorderInterfaces";
import { GridColumnResizeState } from "../features/columnResize/columnResizeState";
import {
  GridDetailPanelInitialState,
  GridDetailPanelState,
} from "../features/detailPanel/gridDetailPanelInterface";

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
