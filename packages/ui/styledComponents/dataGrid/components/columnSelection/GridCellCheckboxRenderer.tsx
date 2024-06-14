import * as React from "react";

import { unstable_composeClasses as composeClasses } from "@mui/material";
import { useForkRef } from "@mui/material/utils";

import { getDataGridUtilityClass } from "../../constants/gridClasses";
import { useGridApiContext } from "../../hooks/utils/useGridApiContext";
import { useGridRootProps } from "../../hooks/utils/useGridRootProps";
import { GridRenderCellParams } from "../../models/params/gridCellParams";
import { GridRowSelectionCheckboxParams } from "../../models/params/gridRowSelectionCheckboxParams";
import { DataGridProcessedProps } from "../../models/props/gridProps";
import { isNavigationKey, isSpaceKey } from "../../utils/keyboardUtils";

type OwnerState = { classes: DataGridProcessedProps["classes"] };

const useUtilityClasses = (ownerState: OwnerState) => {
  const { classes } = ownerState;

  const slots = {
    root: ["checkboxInput"],
  };

  return composeClasses(slots, getDataGridUtilityClass, classes);
};

interface TouchRippleActions {
  stop: (event: any, callback?: () => void) => void;
}

const GridCellCheckboxForwardRef = React.forwardRef<
  HTMLInputElement,
  GridRenderCellParams
>(function GridCellCheckboxRenderer(props, ref) {
  const {
    field,
    id,
    value: isChecked,
    formattedValue,
    row,
    rowNode,
    colDef,
    isEditable,
    cellMode,
    hasFocus,
    tabIndex,
    getValue,
    api,
    ...other
  } = props;
  const apiRef = useGridApiContext();
  const rootProps = useGridRootProps();
  const ownerState = { classes: rootProps.classes };
  const classes = useUtilityClasses(ownerState);
  const checkboxElement = React.useRef<HTMLInputElement | null>(null);

  const rippleRef = React.useRef<TouchRippleActions>();
  const handleRef = useForkRef(checkboxElement, ref);
  const element = apiRef.current.getCellElement(id, field);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const params: GridRowSelectionCheckboxParams = {
      value: event.target.checked,
      id,
    };
    apiRef.current.publishEvent("rowSelectionCheckboxChange", params, event);
  };

  React.useLayoutEffect(() => {
    if (tabIndex === 0 && element) {
      element!.tabIndex = -1;
    }
  }, [element, tabIndex]);

  React.useEffect(() => {
    if (hasFocus) {
      const input = checkboxElement.current?.querySelector("input");
      input?.focus({ preventScroll: true });
    } else if (rippleRef.current) {
      // Only available in @mui/material v5.4.1 or later
      rippleRef.current.stop({});
    }
  }, [hasFocus]);

  const handleKeyDown = React.useCallback(
    (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (isSpaceKey(event.key)) {
        event.stopPropagation();
      }
      if (isNavigationKey(event.key) && !event.shiftKey) {
        apiRef.current.publishEvent("cellNavigationKeyDown", props, event);
      }
    },
    [apiRef, props]
  );

  if (rowNode.position === "footer") {
    return null;
  }

  const isSelectable = apiRef.current.isRowSelectable(id);

  const label = apiRef.current.getLocaleText(
    isChecked ? "checkboxSelectionUnselectRow" : "checkboxSelectionSelectRow"
  );

  if (rowNode.isPinned) {
    return null;
  }

  return (
    <rootProps.components.BaseCheckbox
      ref={handleRef}
      tabIndex={tabIndex}
      checked={isChecked}
      onChange={handleChange}
      className={classes.root}
      inputProps={{ "aria-label": label }}
      onKeyDown={handleKeyDown}
      disabled={!isSelectable}
      touchRippleRef={rippleRef}
      {...rootProps.componentsProps?.baseCheckbox}
      {...other}
    />
  );
});

export { GridCellCheckboxForwardRef };

export const GridCellCheckboxRenderer = GridCellCheckboxForwardRef;
