import { useMemo } from "react";

import { DATA_GRID_DEFAULT_SLOTS_COMPONENTS } from "./constants/defaultGridSlotsComponents";
import { GRID_DEFAULT_LOCALE_TEXT } from "./constants/localeTextConstants";
import { GridDensityTypes } from "./models/gridDensity";
import { GridEditModes } from "./models/gridEditRowModel";
import { GridFeatureModeConstant } from "./models/gridFeatureMode";
import { GridValidRowModel } from "./models/gridRows";
import { GridSlotsComponent } from "./models/gridSlotsComponent";
import {
  DataGridProcessedProps,
  DataGridProps,
  DataGridPropsWithDefaultValues,
} from "./models/props/gridProps";

/**
 * The default values of `DataGridProPropsWithDefaultValue` to inject in the props of DataGridPro.
 */
export const DATA_GRID_PROPS_DEFAULT_VALUES: DataGridPropsWithDefaultValues = {
  autoHeight: false,
  autoPageSize: false,
  checkboxSelection: false,
  checkboxSelectionVisibleOnly: false,
  columnBuffer: 3,
  rowBuffer: 3,
  columnThreshold: 3,
  rowThreshold: 3,
  density: GridDensityTypes.Standard,
  disableExtendRowFullWidth: false,
  disableColumnFilter: false,
  disableColumnMenu: false,
  disableColumnSelector: false,
  disableDensitySelector: false,
  disableMultipleColumnsFiltering: false,
  disableMultipleSelection: false,
  disableMultipleColumnsSorting: false,
  disableSelectionOnClick: false,
  disableVirtualization: false,
  disableIgnoreModificationsIfProcessingProps: false,
  editMode: GridEditModes.Cell,
  filterMode: GridFeatureModeConstant.client,
  headerHeight: 56,
  hideFooter: false,
  hideFooterPagination: false,
  hideFooterRowCount: false,
  hideFooterSelectedRowCount: false,
  logger: console,
  logLevel:
    process.env.NODE_ENV === "production"
      ? ("error" as const)
      : ("warn" as const),
  pagination: false,
  paginationMode: GridFeatureModeConstant.client,
  rowHeight: 52,
  rowsPerPageOptions: [25, 50, 100],
  rowSpacingType: "margin",
  showCellRightBorder: false,
  showColumnRightBorder: false,
  sortingOrder: ["asc" as const, "desc" as const, null],
  sortingMode: GridFeatureModeConstant.client,
  throttleRowsMs: 0,
  disableColumnReorder: false,
  disableColumnResize: false,
  keepNonExistentRowsSelected: false,
  scrollEndThreshold: 80,
  treeData: false,
  defaultGroupingExpansionDepth: 0,
  disableColumnPinning: false,
  keepColumnPositionIfDraggedOutside: false,
  disableChildrenFiltering: false,
  disableChildrenSorting: false,
  rowReordering: false,
  rowsLoadingMode: GridFeatureModeConstant.client,
  getDetailPanelHeight: () => 500,
};

export const useDataGridProps = <R extends GridValidRowModel>(
  inProps: DataGridProps<R>
) => {
  const localeText = useMemo(
    () => ({ ...GRID_DEFAULT_LOCALE_TEXT, ...inProps.localeText }),
    [inProps.localeText]
  );

  const components = useMemo<GridSlotsComponent>(() => {
    const overrides = inProps.components;

    if (!overrides) {
      return { ...DATA_GRID_DEFAULT_SLOTS_COMPONENTS };
    }

    const mergedComponents = {} as GridSlotsComponent;

    type GridSlots = keyof GridSlotsComponent;
    Object.entries(DATA_GRID_DEFAULT_SLOTS_COMPONENTS).forEach(
      ([key, defaultComponent]) => {
        mergedComponents[key as GridSlots] =
          overrides[key as GridSlots] === undefined
            ? defaultComponent
            : overrides[key as GridSlots];
      }
    );

    return mergedComponents;
  }, [inProps.components]);

  return useMemo<DataGridProcessedProps<R>>(
    () => ({
      ...DATA_GRID_PROPS_DEFAULT_VALUES,
      ...inProps,
      localeText,
      components,
      signature: "DataGridPro",
    }),
    [inProps, localeText, components]
  );
};
