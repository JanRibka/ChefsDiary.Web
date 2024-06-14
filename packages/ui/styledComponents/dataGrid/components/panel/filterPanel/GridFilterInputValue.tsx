import React, { useCallback, useEffect, useRef, useState } from "react";

import MenuItem from "@mui/material/MenuItem";
import { TextFieldProps } from "@mui/material/TextField";
import { unstable_useId as useId } from "@mui/material/utils";

import { useGridRootProps } from "../../../hooks/utils/useGridRootProps";
import { GridApiCommunity } from "../../../models/api/gridApiCommunity";
import { GridColDef } from "../../../models/colDef/gridColDef";
import { GridLoadIcon } from "../../icons";
import { getValueFromValueOptions } from "./filterPanelUtils";
import { GridFilterInputValueProps } from "./GridFilterInputValueProps";

const warnedOnce: Record<string, boolean> = {};
function warnDeprecatedTypeSupport(type: string) {
  console.warn(
    [
      `MUI: Using GridFilterInputValue with a "${type}" column is deprecated.`,
      "Use GridFilterInputSingleSelect instead.",
    ].join("\n")
  );

  warnedOnce[type] = true;
}

const renderSingleSelectOptions = (
  { valueOptions, valueFormatter, field }: GridColDef,
  api: GridApiCommunity,
  OptionComponent: React.ElementType
) => {
  const iterableColumnValues =
    typeof valueOptions === "function"
      ? ["", ...valueOptions({ field })]
      : ["", ...(valueOptions || [])];

  return iterableColumnValues.map((option) => {
    const isOptionTypeObject = typeof option === "object";

    const key = isOptionTypeObject ? option.value : option;
    const value = isOptionTypeObject ? option.value : option;

    const formattedValue =
      valueFormatter && option !== ""
        ? valueFormatter({ value: option, field, api })
        : option;
    const content = isOptionTypeObject ? option.label : formattedValue;

    return (
      <OptionComponent key={key} value={value}>
        {content}
      </OptionComponent>
    );
  });
};

export const SUBMIT_FILTER_STROKE_TIME = 500;

export interface GridTypeFilterInputValueProps
  extends GridFilterInputValueProps {
  type?: "text" | "number" | "date" | "datetime-local" | "singleSelect";
}

function GridFilterInputValue(
  props: GridTypeFilterInputValueProps & TextFieldProps
) {
  const { item, applyValue, type, apiRef, focusElementRef, ...others } = props;
  if (
    process.env.NODE_ENV !== "production" &&
    ["date", "datetime-local", "singleSelect"].includes(type as string) &&
    !warnedOnce[type as string]
  ) {
    warnDeprecatedTypeSupport(type as string);
  }
  const filterTimeout = useRef<any>();
  const [filterValueState, setFilterValueState] = useState<string>(
    item.value ?? ""
  );
  const [applying, setIsApplying] = React.useState(false);
  const id = useId();
  const rootProps = useGridRootProps();

  const baseSelectProps = rootProps.componentsProps?.baseSelect || {};
  const isSelectNative = baseSelectProps.native ?? true;

  const singleSelectProps: TextFieldProps =
    type === "singleSelect"
      ? {
          select: true,
          SelectProps: {
            native: isSelectNative,
            ...rootProps.componentsProps?.baseSelect,
          },
          children: renderSingleSelectOptions(
            apiRef.current.getColumn(item.columnField),
            apiRef.current,
            isSelectNative ? "option" : MenuItem
          ),
        }
      : {};

  const onFilterChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      let value = event.target.value;
      // NativeSelect casts the value to a string.
      if (type === "singleSelect") {
        const column = apiRef.current.getColumn(item.columnField);
        const columnValueOptions =
          typeof column.valueOptions === "function"
            ? column.valueOptions({ field: column.field })
            : column.valueOptions;
        value = getValueFromValueOptions(value, columnValueOptions);
      }

      clearTimeout(filterTimeout.current);
      setFilterValueState(String(value));

      setIsApplying(true);
      // TODO singleSelect doesn't debounce
      filterTimeout.current = setTimeout(() => {
        applyValue({ ...item, value });
        setIsApplying(false);
      }, SUBMIT_FILTER_STROKE_TIME);
    },
    [apiRef, applyValue, item, type]
  );

  useEffect(() => {
    return () => {
      clearTimeout(filterTimeout.current);
    };
  }, []);

  useEffect(() => {
    const itemValue = item.value ?? "";
    setFilterValueState(String(itemValue));
  }, [item.value]);

  const InputProps = applying
    ? { endAdornment: <GridLoadIcon /> }
    : others.InputProps;

  return (
    <rootProps.components.BaseTextField
      id={id}
      label={apiRef.current.getLocaleText("filterPanelInputLabel")}
      placeholder={apiRef.current.getLocaleText("filterPanelInputPlaceholder")}
      value={filterValueState}
      onChange={onFilterChange}
      variant="standard"
      type={type || "text"}
      InputProps={InputProps}
      InputLabelProps={{
        shrink: true,
      }}
      inputRef={focusElementRef}
      {...singleSelectProps}
      {...others}
      {...rootProps.componentsProps?.baseTextField}
    />
  );
}

export { GridFilterInputValue };
