import { GridStateCommunity } from "../../../models/gridStateCommunity";
import { createSelector } from "../../../utils/createSelector";

/**
 * @category ColumnGrouping
 * @ignore - do not document.
 */
export const gridColumnGroupingSelector = (state: GridStateCommunity) =>
  state.columnGrouping;

export const gridColumnGroupsLookupSelector = createSelector(
  gridColumnGroupingSelector,
  (columnGrouping) => columnGrouping.lookup
);
