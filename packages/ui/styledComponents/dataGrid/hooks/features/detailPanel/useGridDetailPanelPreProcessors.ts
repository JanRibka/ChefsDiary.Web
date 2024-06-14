import { MutableRefObject, useCallback } from "react";

import { GridApi } from "../../../models/api/gridApi";
import { DataGridProcessedProps } from "../../../models/props/gridProps";
import { GridPipeProcessor } from "../../core/pipeProcessing/gridPipeProcessingApi";
import { useGridRegisterPipeProcessor } from "../../core/pipeProcessing/useGridRegisterPipeProcessor";
import { gridDetailPanelExpandedRowIdsSelector } from "./gridDetailPanelSelector";
import {
  GRID_DETAIL_PANEL_TOGGLE_COL_DEF,
  GRID_DETAIL_PANEL_TOGGLE_FIELD,
} from "./gridDetailPanelToggleColDef";

export const useGridDetailPanelPreProcessors = (
  apiRef: MutableRefObject<GridApi>,
  props: DataGridProcessedProps
) => {
  const addToggleColumn = useCallback<GridPipeProcessor<"hydrateColumns">>(
    (columnsState) => {
      if (props.getDetailPanelContent == null) {
        // Remove the toggle column, when it exists
        if (columnsState.lookup[GRID_DETAIL_PANEL_TOGGLE_FIELD]) {
          delete columnsState.lookup[GRID_DETAIL_PANEL_TOGGLE_FIELD];
          columnsState.all = columnsState.all.filter(
            (field) => field !== GRID_DETAIL_PANEL_TOGGLE_FIELD
          );
        }
        return columnsState;
      }

      // Don't add the toggle column if there's already one
      // The user might have manually added it to have it in a custom position
      if (columnsState.lookup[GRID_DETAIL_PANEL_TOGGLE_FIELD]) {
        return columnsState;
      }

      // Othewise, add the toggle column at the beginning
      columnsState.all = [GRID_DETAIL_PANEL_TOGGLE_FIELD, ...columnsState.all];
      columnsState.lookup[GRID_DETAIL_PANEL_TOGGLE_FIELD] = {
        ...GRID_DETAIL_PANEL_TOGGLE_COL_DEF,
        headerName: apiRef.current.getLocaleText("detailPanelToggle"),
      };
      return columnsState;
    },
    [apiRef, props.getDetailPanelContent]
  );

  const addExpandedClassToRow = useCallback<GridPipeProcessor<"rowClassName">>(
    (classes, id) => {
      if (props.getDetailPanelContent == null) {
        return classes;
      }

      const expandedRowIds = gridDetailPanelExpandedRowIdsSelector(
        apiRef.current.state
      );
      if (!expandedRowIds.includes(id)) {
        return classes;
      }

      return [...classes, "MuiDataGrid-row--detailPanelExpanded"];
    },
    [apiRef, props.getDetailPanelContent]
  );

  useGridRegisterPipeProcessor(apiRef, "hydrateColumns", addToggleColumn);
  useGridRegisterPipeProcessor(apiRef, "rowClassName", addExpandedClassToRow);
};
