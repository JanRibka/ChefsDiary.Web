import { GridLocaleText } from "../api/gridLocaleTextApi";
import { GridSlotsComponent } from "../gridSlotsComponent";

/**
 * The props of the `DataGrid` component after the pre-processing phase that the user should not be able to override.
 * Those are usually used in feature-hook for which the pro-plan has more advanced features (eg: multi-sorting, multi-filtering, ...).
 */
export type DataGridForcedPropsKey =
  | "apiRef"
  | "checkboxSelectionVisibleOnly"
  | "disableMultipleColumnsFiltering"
  | "disableMultipleColumnsSorting"
  | "disableMultipleSelection"
  | "disableColumnReorder"
  | "disableColumnResize"
  | "keepColumnPositionIfDraggedOutside"
  | "throttleRowsMs"
  | "hideFooterRowCount"
  | "pagination"
  | "signature";

/**
 * The `DataGrid` options with a default value that must be merged with the value given through props.
 */
export interface DataGridPropsWithComplexDefaultValueAfterProcessing {
  components: GridSlotsComponent;
  localeText: GridLocaleText;
}

/**
 * The `DataGrid` options with a default value that must be merged with the value given through props.
 */
export interface DataGridPropsWithComplexDefaultValueBeforeProcessing {
  /**
   * Overrideable components.
   */
  components?: Partial<GridSlotsComponent>;
  /**
   * Set the locale text of the grid.
   * You can find all the translation keys supported in [the source](https://github.com/mui/mui-x/blob/HEAD/packages/grid/x-data-grid/src/constants/localeTextConstants.ts) in the GitHub repository.
   */
  localeText?: Partial<GridLocaleText>;
}
