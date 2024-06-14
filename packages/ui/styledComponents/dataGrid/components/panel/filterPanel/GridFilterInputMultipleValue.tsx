import { useCallback, useEffect, useState } from "react";

import Autocomplete, { AutocompleteProps } from "@mui/material/Autocomplete";
import Chip from "@mui/material/Chip";
import { unstable_useId as useId } from "@mui/material/utils";

import { useGridRootProps } from "../../../hooks/utils/useGridRootProps";
import { GridFilterInputValueProps } from "./GridFilterInputValueProps";

export type GridFilterInputMultipleValueProps = {
  type?: "text" | "number";
} & GridFilterInputValueProps &
  Omit<AutocompleteProps<string, true, false, true>, "options" | "renderInput">;

function GridFilterInputMultipleValue(
  props: GridFilterInputMultipleValueProps
) {
  const {
    item,
    applyValue,
    type,
    apiRef,
    focusElementRef,
    color,
    error,
    helperText,
    size,
    variant,
    ...other
  } = props;
  const TextFieldProps = {
    color,
    error,
    helperText,
    size,
    variant,
  };

  const [filterValueState, setFilterValueState] = useState(item.value || []);
  const id = useId();

  const rootProps = useGridRootProps();

  useEffect(() => {
    const itemValue = item.value ?? [];
    setFilterValueState(itemValue.map(String));
  }, [item.value]);

  const handleChange = useCallback<
    NonNullable<AutocompleteProps<string, true, false, true>["onChange"]>
  >(
    (event, value) => {
      setFilterValueState(value.map(String));
      applyValue({ ...item, value: [...value] });
    },
    [applyValue, item]
  );

  return (
    <Autocomplete<string, true, false, true>
      multiple
      freeSolo
      options={[]}
      filterOptions={(options, params) => {
        const { inputValue } = params;
        return inputValue == null || inputValue === "" ? [] : [inputValue];
      }}
      id={id}
      value={filterValueState}
      onChange={handleChange}
      renderTags={(value, getTagProps) =>
        value.map((option, index) => (
          <Chip
            variant="outlined"
            size="small"
            label={option}
            {...getTagProps({ index })}
          />
        ))
      }
      renderInput={(params) => (
        <rootProps.components.BaseTextField
          {...params}
          label={apiRef.current.getLocaleText("filterPanelInputLabel")}
          placeholder={apiRef.current.getLocaleText(
            "filterPanelInputPlaceholder"
          )}
          InputLabelProps={{
            ...params.InputLabelProps,
            shrink: true,
          }}
          inputRef={focusElementRef}
          type={type || "text"}
          {...TextFieldProps}
          {...rootProps.componentsProps?.baseTextField}
        />
      )}
      {...other}
    />
  );
}

export { GridFilterInputMultipleValue };
