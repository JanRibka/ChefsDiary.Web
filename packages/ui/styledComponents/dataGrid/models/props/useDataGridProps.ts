import { useMemo } from "react";

import { GridValidRowModel } from "../gridRows";
import {
  DataGridProProps,
  DataGridProPropsWithDefaultValue,
} from "./gridProps";

/**
 * The default values of `DataGridProPropsWithDefaultValue` to inject in the props of DataGridPro.
 */
export const DATA_GRID_PROPS_DEFAULT_VALUES: DataGridProPropsWithDefaultValue =
  {
    ...DATA_GRID_PROPS_DEFAULT_VALUES,
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
  inProps: DataGridProProps<R>
) => {
  const localeText = useMemo(
    () => ({ ...GRID_DEFAULT_LOCALE_TEXT, ...themedProps.localeText }),
    [themedProps.localeText]
  );

  const components = React.useMemo<GridSlotsComponent>(() => {
    const overrides = themedProps.components;

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
  }, [themedProps.components]);

  return React.useMemo<DataGridProProcessedProps<R>>(
    () => ({
      ...DATA_GRID_PRO_PROPS_DEFAULT_VALUES,
      ...themedProps,
      localeText,
      components,
      signature: "DataGridPro",
    }),
    [themedProps, localeText, components]
  );
};
