import { GridStatePersistenceApi } from "../../hooks/features/statePersistance/gridStatePersistanceInterface";
import { GridCoreApi } from "./gridCoreApi";
import { GridLoggerApi } from "./gridLoggerApi";
import { GridStateApi } from "./gridStateApi";

type GridStateApiUntyped = {
  [key in keyof (GridStateApi<any> & GridStatePersistenceApi<any>)]: any;
};

export interface GridApiCommon
  extends GridCoreApi,
    GridLoggerApi,
    GridStateApiUntyped {}
