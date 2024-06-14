import { useCallback, useEffect, useMemo, useState } from "react";

import MenuItem from "@mui/material/MenuItem";
import { TextFieldProps } from "@mui/material/TextField";
import { unstable_useId as useId } from "@mui/material/utils";

import { useGridRootProps } from "../../../hooks/utils/useGridRootProps";
import { GridApiCommunity } from "../../../models/api/gridApiCommunity";
import { GridColDef } from "../../../models/colDef/gridColDef";
import { getValueFromValueOptions } from "./filterPanelUtils";
import { GridFilterInputValueProps } from "./GridFilterInputValueProps";

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

export type GridFilterInputSingleSelectProps = GridFilterInputValueProps &
  TextFieldProps & { type?: "singleSelect" };

function GridFilterInputSingleSelect(props: GridFilterInputSingleSelectProps) {
  const { item, applyValue, type, apiRef, focusElementRef, ...others } = props;
  const [filterValueState, setFilterValueState] = useState(item.value ?? "");
  const id = useId();
  const rootProps = useGridRootProps();

  const baseSelectProps = rootProps.componentsProps?.baseSelect || {};
  const isSelectNative = baseSelectProps.native ?? true;

  const currentColumn = item.columnField
    ? apiRef.current.getColumn(item.columnField)
    : null;

  const currentValueOptions = useMemo(() => {
    if (currentColumn === null) {
      return undefined;
    }
    return typeof currentColumn.valueOptions === "function"
      ? currentColumn.valueOptions({ field: currentColumn.field })
      : currentColumn.valueOptions;
  }, [currentColumn]);

  const onFilterChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      let value = event.target.value;

      // NativeSelect casts the value to a string.
      value = getValueFromValueOptions(value, currentValueOptions);

      setFilterValueState(String(value));
      applyValue({ ...item, value });
    },
    [applyValue, item, currentValueOptions]
  );

  useEffect(() => {
    let itemValue;

    if (currentValueOptions !== undefined) {
      // sanitize if valueOptions are provided
      itemValue = getValueFromValueOptions(item.value, currentValueOptions);
      if (itemValue !== item.value) {
        applyValue({ ...item, value: itemValue });
        return;
      }
    } else {
      itemValue = item.value;
    }

    itemValue = itemValue ?? "";

    setFilterValueState(String(itemValue));
  }, [item, currentValueOptions, applyValue]);

  return (
    <rootProps.components.BaseTextField
      id={id}
      label={apiRef.current.getLocaleText("filterPanelInputLabel")}
      placeholder={apiRef.current.getLocaleText("filterPanelInputPlaceholder")}
      value={filterValueState}
      onChange={onFilterChange}
      variant="standard"
      type={type || "text"}
      InputLabelProps={{
        shrink: true,
      }}
      inputRef={focusElementRef}
      select
      SelectProps={{
        native: isSelectNative,
        ...rootProps.componentsProps?.baseSelect,
      }}
      {...others}
      {...rootProps.componentsProps?.baseTextField}
    >
      {renderSingleSelectOptions(
        apiRef.current.getColumn(item.columnField),
        apiRef.current,
        isSelectNative ? "option" : MenuItem
      )}
    </rootProps.components.BaseTextField>
  );
}

export { GridFilterInputSingleSelect };
