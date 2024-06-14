import { useCallback } from "react";

import { GridApiCommunity } from "../../../models/api/gridApiCommunity";
import { DataGridProcessedProps } from "../../../models/props/gridProps";
import { isDeepEqual } from "../../../utils/utils";
import { GridPipeProcessor } from "../../core/pipeProcessing/gridPipeProcessingApi";
import { useGridRegisterPipeProcessor } from "../../core/pipeProcessing/useGridRegisterPipeProcessor";
import {
  hasGroupPath,
  unwrapGroupingColumnModel,
} from "./useGridColumnGrouping";

export const useGridColumnGroupingPreProcessors = (
  apiRef: React.MutableRefObject<GridApiCommunity>,
  props: DataGridProcessedProps
) => {
  const addHeaderGroups = useCallback<GridPipeProcessor<"hydrateColumns">>(
    (columnsState) => {
      if (!props.experimentalFeatures?.columnGrouping) {
        return columnsState;
      }
      const unwrappedGroupingModel = unwrapGroupingColumnModel(
        props.columnGroupingModel
      );

      columnsState.all.forEach((field) => {
        const newGroupPath = unwrappedGroupingModel[field] ?? [];

        const lookupElement = columnsState.lookup[field];
        if (
          hasGroupPath(lookupElement) &&
          isDeepEqual(newGroupPath, lookupElement?.groupPath)
        ) {
          // Avoid modifying the pointer to allow shadow comparison in https://github.com/mui/mui-x/blob/f90afbf10a1264ee8b453d7549dd7cdd6110a4ed/packages/grid/x-data-grid/src/hooks/features/columns/gridColumnsUtils.ts#L446:L453
          return;
        }
        columnsState.lookup[field] = {
          ...columnsState.lookup[field],
          groupPath: unwrappedGroupingModel[field] ?? [],
        };
      });
      return columnsState;
    },
    [props.columnGroupingModel, props.experimentalFeatures?.columnGrouping]
  );

  useGridRegisterPipeProcessor(apiRef, "hydrateColumns", addHeaderGroups);
};
