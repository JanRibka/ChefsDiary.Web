import { useCallback } from "react";

import { GridApi } from "../../../models/api/gridApi";
import { GridFeatureModeConstant } from "../../../models/gridFeatureMode";
import { GridRowId } from "../../../models/gridRows";
import {
  DataGridProcessedProps,
  GridExperimentalFeatures,
} from "../../../models/props/gridProps";
import { GridPipeProcessor } from "../../core/pipeProcessing/gridPipeProcessingApi";
import { useGridRegisterPipeProcessor } from "../../core/pipeProcessing/useGridRegisterPipeProcessor";

export const GRID_SKELETON_ROW_ROOT_ID = "auto-generated-skeleton-row-root";

const getSkeletonRowId = (index: number) =>
  `${GRID_SKELETON_ROW_ROOT_ID}-${index}`;

export const useGridLazyLoaderPreProcessors = (
  apiRef: React.MutableRefObject<GridApi>,
  props: Pick<
    DataGridProcessedProps,
    "rowCount" | "rowsLoadingMode" | "experimentalFeatures"
  >
) => {
  const { lazyLoading } = (props.experimentalFeatures ??
    {}) as GridExperimentalFeatures;

  const addSkeletonRows = useCallback<GridPipeProcessor<"hydrateRows">>(
    (groupingParams) => {
      if (
        !lazyLoading ||
        props.rowsLoadingMode !== GridFeatureModeConstant.server ||
        !props.rowCount ||
        groupingParams.ids.length >= props.rowCount
      ) {
        return groupingParams;
      }

      const newRowsIds: GridRowId[] = [...groupingParams.ids];

      for (let i = 0; i < props.rowCount - groupingParams.ids.length; i += 1) {
        const skeletonId = getSkeletonRowId(i);
        newRowsIds.push(skeletonId);
      }

      return {
        ...groupingParams,
        ids: newRowsIds,
      };
    },
    [props.rowCount, props.rowsLoadingMode, lazyLoading]
  );

  useGridRegisterPipeProcessor(apiRef, "hydrateRows", addSkeletonRows);
};
