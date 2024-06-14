import {
  forwardRef,
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useState,
} from "react";

import { unstable_composeClasses as composeClasses } from "@mui/material";

import { gridVisibleSortedRowIdsSelector } from "../../hooks/features/filter/gridFilterSelector";
import { gridTabIndexColumnHeaderSelector } from "../../hooks/features/focus/gridFocusStateSelector";
import { gridPaginatedVisibleSortedGridRowIdsSelector } from "../../hooks/features/pagination/gridPaginationSelector";
import { gridSelectionStateSelector } from "../../hooks/features/selection/gridSelectionSelector";
import { useGridApiContext } from "../../hooks/utils/useGridApiContext";
import { useGridRootProps } from "../../hooks/utils/useGridRootProps";
import { useGridSelector } from "../../models/api/useGridSelector";
import { GridRowId } from "../../models/gridRows";
import { GridColumnHeaderParams } from "../../models/params/gridColumnHeaderParams";
import { GridHeaderSelectionCheckboxParams } from "../../models/params/gridHeaderSelectionCheckboxParams";
import { DataGridProcessedProps } from "../../models/props/gridProps";
import { isNavigationKey } from "../../utils/keyboardUtils";

type OwnerState = { classes: DataGridProcessedProps["classes"] };

const useUtilityClasses = (ownerState: OwnerState) => {
  const { classes } = ownerState;

  const slots = {
    root: ["checkboxInput"],
  };

  return composeClasses(slots, getDataGridUtilityClass, classes);
};

const GridHeaderCheckbox = forwardRef<HTMLInputElement, GridColumnHeaderParams>(
  function GridHeaderCheckbox(props, ref) {
    const { field, colDef, ...other } = props;
    const [, forceUpdate] = useState(false);
    const apiRef = useGridApiContext();
    const rootProps = useGridRootProps();
    const ownerState = { classes: rootProps.classes };
    const classes = useUtilityClasses(ownerState);
    const tabIndexState = useGridSelector(
      apiRef,
      gridTabIndexColumnHeaderSelector
    );
    const selection = useGridSelector(apiRef, gridSelectionStateSelector);
    const visibleRowIds = useGridSelector(
      apiRef,
      gridVisibleSortedRowIdsSelector
    );
    const paginatedVisibleRowIds = useGridSelector(
      apiRef,
      gridPaginatedVisibleSortedGridRowIdsSelector
    );

    const filteredSelection = useMemo(() => {
      if (typeof rootProps.isRowSelectable !== "function") {
        return selection;
      }

      return selection.filter((id) => {
        // The row might have been deleted
        if (!apiRef.current.getRow(id)) {
          return false;
        }

        return rootProps.isRowSelectable!(apiRef.current.getRowParams(id));
      });
    }, [apiRef, rootProps.isRowSelectable, selection]);

    // All the rows that could be selected / unselected by toggling this checkbox
    const selectionCandidates = useMemo(() => {
      const rowIds =
        !rootProps.pagination || !rootProps.checkboxSelectionVisibleOnly
          ? visibleRowIds
          : paginatedVisibleRowIds;

      // Convert to an object to make O(1) checking if a row exists or not
      // TODO create selector that returns visibleRowIds/paginatedVisibleRowIds as an object
      return rowIds.reduce<Record<GridRowId, true>>((acc, id) => {
        acc[id] = true;
        return acc;
      }, {});
    }, [
      rootProps.pagination,
      rootProps.checkboxSelectionVisibleOnly,
      paginatedVisibleRowIds,
      visibleRowIds,
    ]);

    // Amount of rows selected and that are visible in the current page
    const currentSelectionSize = useMemo(
      () => filteredSelection.filter((id) => selectionCandidates[id]).length,
      [filteredSelection, selectionCandidates]
    );

    const isIndeterminate =
      currentSelectionSize > 0 &&
      currentSelectionSize < Object.keys(selectionCandidates).length;

    const isChecked = currentSelectionSize > 0;

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const params: GridHeaderSelectionCheckboxParams = {
        value: event.target.checked,
      };

      apiRef.current.publishEvent("headerSelectionCheckboxChange", params);
    };

    const tabIndex =
      tabIndexState !== null && tabIndexState.field === props.field ? 0 : -1;
    useLayoutEffect(() => {
      const element = apiRef.current.getColumnHeaderElement(props.field);
      if (tabIndex === 0 && element) {
        element!.tabIndex = -1;
      }
    }, [tabIndex, apiRef, props.field]);

    const handleKeyDown = useCallback(
      (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === " ") {
          // imperative toggle the checkbox because Space is disable by some preventDefault
          apiRef.current.publishEvent("headerSelectionCheckboxChange", {
            value: !isChecked,
          });
        }
        // TODO v6 remove columnHeaderNavigationKeyDown events which are not used internally anymore
        if (isNavigationKey(event.key) && !event.shiftKey) {
          apiRef.current.publishEvent(
            "columnHeaderNavigationKeyDown",
            props,
            event
          );
        }
      },
      [apiRef, props, isChecked]
    );

    const handleSelectionChange = useCallback(() => {
      forceUpdate((p) => !p);
    }, []);

    useEffect(() => {
      return apiRef.current.subscribeEvent(
        "selectionChange",
        handleSelectionChange
      );
    }, [apiRef, handleSelectionChange]);

    const label = apiRef.current.getLocaleText(
      isChecked
        ? "checkboxSelectionUnselectAllRows"
        : "checkboxSelectionSelectAllRows"
    );

    return (
      <rootProps.components.BaseCheckbox
        ref={ref}
        indeterminate={isIndeterminate}
        checked={isChecked}
        onChange={handleChange}
        className={classes.root}
        inputProps={{ "aria-label": label }}
        tabIndex={tabIndex}
        onKeyDown={handleKeyDown}
        {...rootProps.componentsProps?.baseCheckbox}
        {...other}
      />
    );
  }
);

export { GridHeaderCheckbox };
