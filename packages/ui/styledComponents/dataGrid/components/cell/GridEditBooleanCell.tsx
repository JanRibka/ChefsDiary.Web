import { useCallback, useEffect, useRef, useState } from "react";

import { unstable_composeClasses as composeClasses } from "@mui/material";
import {
  unstable_useEnhancedEffect as useEnhancedEffect,
  unstable_useId as useId,
} from "@mui/material/utils";

import { useGridApiContext } from "../../hooks/utils/useGridApiContext";
import { useGridRootProps } from "../../hooks/utils/useGridRootProps";
import { GridRenderEditCellParams } from "../../models/params/gridCellParams";
import { DataGridProcessedProps } from "../../models/props/gridProps";

type OwnerState = { classes: DataGridProcessedProps["classes"] };

const useUtilityClasses = (ownerState: OwnerState) => {
  const { classes } = ownerState;

  const slots = {
    root: ["editBooleanCell"],
  };

  return composeClasses(slots, getDataGridUtilityClass, classes);
};

export interface GridEditBooleanCellProps
  extends GridRenderEditCellParams,
    Omit<
      React.DetailedHTMLProps<
        React.LabelHTMLAttributes<HTMLLabelElement>,
        HTMLLabelElement
      >,
      "id" | "tabIndex"
    > {
  /**
   * Callback called when the value is changed by the user.
   * @param {React.ChangeEvent<HTMLInputElement>} event The event source of the callback.
   * @param {boolean} newValue The value that is going to be passed to `apiRef.current.setEditCellValue`.
   * @returns {Promise<void> | void} A promise to be awaited before calling `apiRef.current.setEditCellValue`
   */
  onValueChange?: (
    event: React.ChangeEvent<HTMLInputElement>,
    newValue: boolean
  ) => Promise<void> | void;
}

function GridEditBooleanCell(props: GridEditBooleanCellProps) {
  const {
    id: idProp,
    value,
    formattedValue,
    api,
    field,
    row,
    rowNode,
    colDef,
    cellMode,
    isEditable,
    tabIndex,
    className,
    getValue,
    hasFocus,
    isValidating,
    isProcessingProps,
    error,
    onValueChange,
    ...other
  } = props;

  const apiRef = useGridApiContext();
  const inputRef = useRef<HTMLInputElement>(null);
  const id = useId();
  const [valueState, setValueState] = useState(value);
  const rootProps = useGridRootProps();
  const ownerState = { classes: rootProps.classes };
  const classes = useUtilityClasses(ownerState);

  const handleChange = useCallback(
    async (event: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = event.target.checked;

      if (onValueChange) {
        await onValueChange(event, newValue);
      }

      setValueState(newValue);
      await apiRef.current.setEditCellValue(
        { id: idProp, field, value: newValue },
        event
      );
    },
    [apiRef, field, idProp, onValueChange]
  );

  useEffect(() => {
    setValueState(value);
  }, [value]);

  useEnhancedEffect(() => {
    if (hasFocus) {
      inputRef.current!.focus();
    }
  }, [hasFocus]);

  return (
    <label htmlFor={id} className={clsx(classes.root, className)} {...other}>
      <rootProps.components.BaseCheckbox
        id={id}
        inputRef={inputRef}
        checked={Boolean(valueState)}
        onChange={handleChange}
        size="small"
        {...rootProps.componentsProps?.baseCheckbox}
      />
    </label>
  );
}

export { GridEditBooleanCell };

export const renderEditBooleanCell = (params: GridEditBooleanCellProps) => (
  <GridEditBooleanCell {...params} />
);
