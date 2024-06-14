import { useCallback, useRef } from "react";

import { GridApi } from "../../../models/api/gridApi";
import {
  GridRowEntry,
  GridRowId,
  GridRowModel,
} from "../../../models/gridRows";
import { GridPipeProcessor } from "../../core/pipeProcessing/gridPipeProcessingApi";
import { useGridRegisterPipeProcessor } from "../../core/pipeProcessing/useGridRegisterPipeProcessor";
import { GridHydrateRowsValue } from "../rows/gridRowState";

import type {
  GridPinnedRowsProp,
  GridRowPinningInternalCache,
} from "./gridRowPinningInterface";
type GridPinnedRowPosition = keyof GridPinnedRowsProp;

export function addPinnedRow({
  groupingParams,
  rowModel,
  rowId,
  position,
  apiRef,
  isAutoGenerated,
}: {
  groupingParams: GridHydrateRowsValue;
  rowModel: GridRowModel;
  rowId: GridRowId;
  position: GridPinnedRowPosition;
  apiRef: React.MutableRefObject<GridApi>;
  isAutoGenerated: boolean;
}) {
  const idRowsLookup = { ...groupingParams.idRowsLookup };
  const tree = { ...groupingParams.tree };

  // TODO: warn if id is already present in `props.rows`
  idRowsLookup[rowId] = rowModel;
  // Do not push it to ids list so that pagination is not affected by pinned rows
  // ids.push(rowId);
  tree[rowId] = {
    id: rowId,
    isAutoGenerated,
    parent: null,
    depth: 0,
    groupingKey: null,
    groupingField: null,
    isPinned: true,
  };

  apiRef.current.unstable_caches.rows.idRowsLookup[rowId] = { ...rowModel };
  apiRef.current.unstable_caches.rows.idToIdLookup[rowId] = rowId;

  const previousPinnedRows =
    groupingParams.additionalRowGroups?.pinnedRows || {};

  const newPinnedRow: GridRowEntry = { id: rowId, model: rowModel };

  return {
    ...groupingParams,
    idRowsLookup,
    tree,
    additionalRowGroups: {
      ...groupingParams.additionalRowGroups,
      pinnedRows: {
        ...previousPinnedRows,
        [position]: [...(previousPinnedRows[position] || []), newPinnedRow],
      },
    },
  };
}

export function removePinnedRow({
  groupingParams,
  rowId,
  apiRef,
}: {
  groupingParams: GridHydrateRowsValue;
  rowId: GridRowId;
  apiRef: React.MutableRefObject<GridApi>;
}) {
  const idRowsLookup = { ...groupingParams.idRowsLookup };
  const tree = { ...groupingParams.tree };

  delete idRowsLookup[rowId];
  delete tree[rowId];

  delete apiRef.current.unstable_caches.rows.idRowsLookup[rowId];
  delete apiRef.current.unstable_caches.rows.idToIdLookup[rowId];
}

export const useGridRowPinningPreProcessors = (
  apiRef: React.MutableRefObject<GridApi>
) => {
  const previousPinnedRowsCacheRef = useRef<GridRowPinningInternalCache | null>(
    null
  );

  const addPinnedRows = useCallback<GridPipeProcessor<"hydrateRows">>(
    (groupingParams) => {
      const pinnedRowsCache = apiRef.current.unstable_caches.pinnedRows || {};

      const previousPinnedRowsCache = previousPinnedRowsCacheRef.current;
      previousPinnedRowsCacheRef.current = pinnedRowsCache;

      let newGroupingParams = {
        ...groupingParams,
        additionalRowGroups: {
          ...groupingParams.additionalRowGroups,
          // reset pinned rows state
          pinnedRows: {},
        },
      };

      if (previousPinnedRowsCache) {
        previousPinnedRowsCache.topIds?.forEach((rowId) => {
          removePinnedRow({
            groupingParams: newGroupingParams,
            rowId,
            apiRef,
          });
        });

        previousPinnedRowsCache.bottomIds?.forEach((rowId) => {
          removePinnedRow({
            groupingParams: newGroupingParams,
            rowId,
            apiRef,
          });
        });
      }

      pinnedRowsCache.topIds?.forEach((rowId) => {
        newGroupingParams = addPinnedRow({
          groupingParams: newGroupingParams,
          rowModel: pinnedRowsCache.idLookup[rowId],
          rowId,
          position: "top",
          apiRef,
          isAutoGenerated: false,
        });
      });
      pinnedRowsCache.bottomIds?.forEach((rowId) => {
        newGroupingParams = addPinnedRow({
          groupingParams: newGroupingParams,
          rowModel: pinnedRowsCache.idLookup[rowId],
          rowId,
          position: "bottom",
          apiRef,
          isAutoGenerated: false,
        });
      });

      // If row with the same `id` is present both in `rows` and `pinnedRows` - remove it from `ids`
      newGroupingParams.ids = newGroupingParams.ids.filter((rowId) => {
        if (
          newGroupingParams.tree[rowId] &&
          newGroupingParams.tree[rowId].isPinned
        ) {
          return false;
        }
        return true;
      });

      return newGroupingParams;
    },
    [apiRef]
  );

  useGridRegisterPipeProcessor(apiRef, "hydrateRows", addPinnedRows);
};
