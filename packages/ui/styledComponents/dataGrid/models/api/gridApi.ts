import { GridColumnPinningApi } from "../../hooks/features/columnPinning/gridColumnPinningInterface";
import { GridDetailPanelApi } from "../../hooks/features/detailPanel/gridDetailPanelInterface";
import { GridRowPinningApi } from "../../hooks/features/rowPinning/gridRowPinningInterface";
import { GridStatePersistenceApi } from "../../hooks/features/statePersistance/gridStatePersistanceInterface";
import { GridInitialState, GridState } from "../gridState";
import { GridApiCommon } from "./gridApiCommon";
import { GridStateApi } from "./gridStateApi";

type GridStateApiUntyped = {
  [key in keyof (GridStateApi<any> & GridStatePersistenceApi<any>)]: any;
};

/**
 * The api of `DataGridPro`.
 */
export interface GridApi
  extends Omit<GridApiCommon, keyof GridStateApiUntyped>,
    GridStateApi<GridState>,
    GridStatePersistenceApi<GridInitialState>,
    GridColumnPinningApi,
    GridDetailPanelApi,
    GridRowPinningApi {}
