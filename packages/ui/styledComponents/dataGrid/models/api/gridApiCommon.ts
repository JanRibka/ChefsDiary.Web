import { GridPipeProcessingApi } from "../../hooks/core/pipeProcessing/gridPipeProcessingApi";
import { GridStrategyProcessingApi } from "../../hooks/core/strategyProcessing/gridStrategyProcessingApi";
import { GridDimensionsApi } from "../../hooks/features/dimensions/gridDimensionsApi";
import { GridPaginationApi } from "../../hooks/features/pagination/gridPaginationInterfaces";
import { GridStatePersistenceApi } from "../../hooks/features/statePersistance/gridStatePersistanceInterface";
import { GridClipboardApi } from "./gridClipboardApi";
import { GridColumnApi } from "./gridColumnApi";
import { GridColumnGroupingApi } from "./gridColumnGroupingApi";
import { GridColumnMenuApi } from "./gridColumnMenuApi";
import { GridColumnSpanningApi } from "./gridColumnSpanning";
import { GridCoreApi } from "./gridCoreApi";
import { GridCsvExportApi } from "./gridCsvExportApi";
import { GridDensityApi } from "./gridDensityApi";
import { GridDisableVirtualizationApi } from "./gridDisableVirtualizationApi";
import { GridEditingApi } from "./gridEditingApi";
import { GridFilterApi } from "./gridFilterApi";
import { GridFocusApi } from "./gridFocusApi";
import { GridLocaleTextApi } from "./gridLocaleTextApi";
import { GridLoggerApi } from "./gridLoggerApi";
import { GridParamsApi } from "./gridParamsApi";
import { GridPreferencesPanelApi } from "./gridPreferencesPanelApi";
import { GridPrintExportApi } from "./gridPrintExportApi";
import { GridRowApi } from "./gridRowApi";
import { GridRowsMetaApi } from "./gridRowsMetaApi";
import { GridScrollApi } from "./gridScrollApi";
import { GridSelectionApi } from "./gridSelectionApi";
import { GridSortApi } from "./gridSortApi";
import { GridStateApi } from "./gridStateApi";
import { GridVirtualScrollerApi } from "./gridVirtualScrollerApi";

type GridStateApiUntyped = {
  [key in keyof (GridStateApi<any> & GridStatePersistenceApi<any>)]: any;
};

export interface GridApiCommon
  extends GridCoreApi,
    GridLoggerApi,
    GridPipeProcessingApi,
    GridStrategyProcessingApi,
    GridDensityApi,
    GridDimensionsApi,
    GridRowApi,
    GridRowsMetaApi,
    GridEditingApi,
    GridParamsApi,
    GridColumnApi,
    GridSelectionApi,
    GridSortApi,
    GridPaginationApi,
    GridCsvExportApi,
    GridFocusApi,
    GridFilterApi,
    GridColumnMenuApi,
    GridPreferencesPanelApi,
    GridPrintExportApi,
    GridDisableVirtualizationApi,
    GridVirtualScrollerApi,
    GridLocaleTextApi,
    GridClipboardApi,
    GridScrollApi,
    GridColumnSpanningApi,
    GridStateApiUntyped,
    GridColumnGroupingApi {}
