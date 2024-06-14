import { GridStatePersistenceApi } from "../../hooks/features/statePersistance/gridStatePersistanceInterface";
import {
  GridInitialStateCommunity,
  GridStateCommunity,
} from "../gridStateCommunity";
import { GridApiCommon } from "./gridApiCommon";
import { GridStateApi } from "./gridStateApi";

type GridStateApiUntyped = {
  [key in keyof (GridStateApi<any> & GridStatePersistenceApi<any>)]: any;
};

/**
 * The api of `DataGrid`.
 */
export interface GridApiCommunity
  extends Omit<GridApiCommon, keyof GridStateApiUntyped>,
    GridStateApi<GridStateCommunity>,
    GridStatePersistenceApi<GridInitialStateCommunity> {}
