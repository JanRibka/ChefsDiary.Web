import { GridRowId } from "../../../models/gridRows";
import { GridState } from "../../../models/gridState";
import { createSelector } from "../../../utils/createSelector";

export const gridDetailPanelExpandedRowIdsSelector = (state: GridState) =>
  state.detailPanel.expandedRowIds;

export const gridDetailPanelExpandedRowsContentCacheSelector = (
  state: GridState
) => state.detailPanel.contentCache;

export const gridDetailPanelRawHeightCacheSelector = (state: GridState) =>
  state.detailPanel.heightCache;

// TODO v6: Make this selector return the full object, including the autoHeight flag
export const gridDetailPanelExpandedRowsHeightCacheSelector = createSelector(
  gridDetailPanelRawHeightCacheSelector,
  (heightCache) =>
    Object.entries(heightCache).reduce<Record<GridRowId, number>>(
      (acc, [id, { height }]) => {
        acc[id] = height || 0;
        return acc;
      },
      {}
    )
);
