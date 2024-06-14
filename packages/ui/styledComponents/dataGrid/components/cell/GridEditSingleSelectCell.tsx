import { useRef, useState } from "react";

import MenuItem from "@mui/material/MenuItem";
import { SelectChangeEvent, SelectProps } from "@mui/material/Select";
import { unstable_useEnhancedEffect as useEnhancedEffect } from "@mui/material/utils";

import { useGridApiContext } from "../../hooks/utils/useGridApiContext";
import { useGridRootProps } from "../../hooks/utils/useGridRootProps";
import { ValueOptions } from "../../models/colDef/gridColDef";
import { GridEditModes } from "../../models/gridEditRowModel";
import {
  GridRenderEditCellParams,
  GridValueFormatterParams,
} from "../../models/params/gridCellParams";
import { isEscapeKey } from "../../utils/keyboardUtils";
import { getValueFromValueOptions } from "../panel/filterPanel/filterPanelUtils";

const renderSingleSelectOptions = (
  option: ValueOptions,
  OptionComponent: React.ElementType
) => {
  const isOptionTypeObject = typeof option === "object";

  const key = isOptionTypeObject ? option.value : option;
  const value = isOptionTypeObject ? option.value : option;
  const content = isOptionTypeObject ? option.label : option;

  return (
    <OptionComponent key={key} value={value}>
      {content}
    </OptionComponent>
  );
};

export interface GridEditSingleSelectCellProps
  extends GridRenderEditCellParams,
    Omit<SelectProps, "id" | "tabIndex" | "value"> {
  /**
   * Callback called when the value is changed by the user.
   * @param {SelectChangeEvent<any>} event The event source of the callback.
   * @param {any} newValue The value that is going to be passed to `apiRef.current.setEditCellValue`.
   * @returns {Promise<void> | void} A promise to be awaited before calling `apiRef.current.setEditCellValue`
   */
  onValueChange?: (
    event: SelectChangeEvent<any>,
    newValue: any
  ) => Promise<void> | void;
  /**
   * If true, the select opens by default.
   */
  initialOpen?: boolean;
}

function isKeyboardEvent(event: any): event is React.KeyboardEvent {
  return !!event.key;
}

function GridEditSingleSelectCell(props: GridEditSingleSelectCellProps) {
  const rootProps = useGridRootProps();
  const {
    id,
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
    initialOpen = rootProps.editMode === GridEditModes.Cell,
    ...other
  } = props;

  const apiRef = useGridApiContext();
  const ref = useRef<any>();
  const inputRef = useRef<any>();
  const [open, setOpen] = useState(initialOpen);

  const baseSelectProps = rootProps.componentsProps?.baseSelect || {};
  const isSelectNative = baseSelectProps.native ?? false;

  let valueOptionsFormatted: Array<ValueOptions>;
  if (typeof colDef.valueOptions === "function") {
    valueOptionsFormatted = colDef.valueOptions!({ id, row, field });
  } else {
    valueOptionsFormatted = colDef.valueOptions!;
  }

  if (colDef.valueFormatter) {
    valueOptionsFormatted = valueOptionsFormatted.map((option) => {
      if (typeof option === "object") {
        return option;
      }

      const params: GridValueFormatterParams = { field, api, value: option };
      return {
        value: option,
        label: String(colDef.valueFormatter!(params)),
      };
    });
  }

  const handleChange: SelectProps["onChange"] = async (event) => {
    setOpen(false);
    const target = event.target as HTMLInputElement;
    // NativeSelect casts the value to a string.
    const formattedTargetValue = getValueFromValueOptions(
      target.value,
      valueOptionsFormatted
    );

    if (onValueChange) {
      await onValueChange(event, formattedTargetValue);
    }

    const isValid = await apiRef.current.setEditCellValue(
      { id, field, value: formattedTargetValue },
      event
    );

    if (rootProps.experimentalFeatures?.newEditingApi) {
      return;
    }

    // We use isValid === false because the default return is undefined which evaluates to true with !isValid
    if (rootProps.editMode === GridEditModes.Row || isValid === false) {
      return;
    }

    const canCommit = await Promise.resolve(
      apiRef.current.commitCellChange({ id, field }, event)
    );
    if (canCommit) {
      apiRef.current.setCellMode(id, field, "view");

      if ((event as any).key) {
        // TODO v6: remove once we stop ignoring events fired from portals
        const params = apiRef.current.getCellParams(id, field);
        apiRef.current.publishEvent(
          "cellNavigationKeyDown",
          params,
          event as any as React.KeyboardEvent<HTMLElement>
        );
      }
    }
  };

  const handleClose = (event: React.KeyboardEvent, reason: string) => {
    if (rootProps.editMode === GridEditModes.Row) {
      setOpen(false);
      return;
    }
    if (reason === "backdropClick" || isEscapeKey(event.key)) {
      if (rootProps.experimentalFeatures?.newEditingApi) {
        apiRef.current.stopCellEditMode({
          id,
          field,
          ignoreModifications: true,
        });
      } else {
        apiRef.current.setCellMode(id, field, "view");
      }
    }
  };

  const handleOpen: SelectProps["onOpen"] = (event) => {
    if (isKeyboardEvent(event) && event.key === "Enter") {
      return;
    }
    setOpen(true);
  };

  useEnhancedEffect(() => {
    if (hasFocus) {
      inputRef.current.focus();
    }
  }, [hasFocus]);

  return (
    <rootProps.components.BaseSelect
      ref={ref}
      inputRef={inputRef}
      value={value}
      onChange={handleChange}
      open={open}
      onOpen={handleOpen}
      MenuProps={{
        onClose: handleClose,
      }}
      error={error}
      native={isSelectNative}
      fullWidth
      {...other}
      {...rootProps.componentsProps?.baseSelect}
    >
      {valueOptionsFormatted.map((valueOptions) =>
        renderSingleSelectOptions(
          valueOptions,
          isSelectNative ? "option" : MenuItem
        )
      )}
    </rootProps.components.BaseSelect>
  );
}

export { GridEditSingleSelectCell };

export const renderEditSingleSelectCell = (
  params: GridEditSingleSelectCellProps
) => <GridEditSingleSelectCell {...params} />;
