import { useCallback, useEffect, useMemo } from "react";

import Autocomplete, {
  AutocompleteProps,
  createFilterOptions,
} from "@mui/material/Autocomplete";
import Chip from "@mui/material/Chip";
import { unstable_useId as useId } from "@mui/material/utils";

import { useGridRootProps } from "../../../hooks/utils/useGridRootProps";
import { getValueFromOption } from "./filterPanelUtils";
import { GridFilterInputValueProps } from "./GridFilterInputValueProps";

import type { ValueOptions } from "../../../models/colDef/gridColDef";
export interface GridFilterInputMultipleSingleSelectProps
  extends Omit<
      AutocompleteProps<ValueOptions, true, false, true>,
      | "options"
      | "renderInput"
      | "onChange"
      | "value"
      | "id"
      | "filterOptions"
      | "isOptionEqualToValue"
      | "multiple"
      | "color"
    >,
    GridFilterInputValueProps {
  type?: "singleSelect";
}

const isOptionEqualToValue: AutocompleteProps<
  ValueOptions,
  true,
  false,
  true
>["isOptionEqualToValue"] = (option, value) =>
  getValueFromOption(option) === getValueFromOption(value);

const filter = createFilterOptions<any>();

function GridFilterInputMultipleSingleSelect(
  props: GridFilterInputMultipleSingleSelectProps
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
    variant = "standard",
    ...other
  } = props;
  const TextFieldProps = {
    color,
    error,
    helperText,
    size,
    variant,
  };

  const id = useId();
  const rootProps = useGridRootProps();

  const resolvedColumn = item.columnField
    ? apiRef.current.getColumn(item.columnField)
    : null;
  const resolvedValueOptions = useMemo(() => {
    if (!resolvedColumn?.valueOptions) {
      return [];
    }

    if (typeof resolvedColumn.valueOptions === "function") {
      return resolvedColumn.valueOptions({ field: resolvedColumn.field });
    }

    return resolvedColumn.valueOptions;
  }, [resolvedColumn]);
  const resolvedFormattedValueOptions = useMemo(() => {
    return resolvedValueOptions?.map(getValueFromOption);
  }, [resolvedValueOptions]);

  const { valueFormatter, field } = apiRef.current.getColumn(item.columnField);

  const filterValueOptionFormatter = (option: ValueOptions) => {
    if (typeof option === "object") {
      return option.label;
    }
    return valueFormatter && option !== ""
      ? valueFormatter({ value: option, field, api: apiRef.current })
      : option;
  };

  // The value is computed from the item.value and used directly
  // If it was done by a useEffect/useState, the Autocomplete could receive incoherent value and options
  const filterValues = useMemo(() => {
    if (!Array.isArray(item.value)) {
      return [];
    }
    if (resolvedValueOptions !== undefined) {
      const itemValueIndexes = item.value.map((element) => {
        // get the index matching between values and valueOptions
        const formattedElement = getValueFromOption(element);
        const index =
          resolvedFormattedValueOptions?.findIndex(
            (formatedOption) => formatedOption === formattedElement
          ) || 0;

        return index;
      });

      return itemValueIndexes
        .filter((index) => index >= 0)
        .map((index: number) => resolvedValueOptions[index]);
    }
    return item.value;
  }, [item.value, resolvedValueOptions, resolvedFormattedValueOptions]);

  useEffect(() => {
    if (
      !Array.isArray(item.value) ||
      filterValues.length !== item.value.length
    ) {
      // update the state if the filter value has been cleaned by the component
      applyValue({ ...item, value: filterValues.map(getValueFromOption) });
    }
  }, [item, filterValues, applyValue]);

  const handleChange = useCallback<
    NonNullable<AutocompleteProps<ValueOptions, true, false, true>["onChange"]>
  >(
    (event, value) => {
      applyValue({ ...item, value: [...value.map(getValueFromOption)] });
    },
    [applyValue, item]
  );

  return (
    <Autocomplete<ValueOptions, true, false, true>
      multiple
      options={resolvedValueOptions}
      isOptionEqualToValue={isOptionEqualToValue}
      filterOptions={filter}
      id={id}
      value={filterValues}
      onChange={handleChange}
      renderTags={(value, getTagProps) =>
        value.map((option, index) => (
          <Chip
            variant="outlined"
            size="small"
            label={filterValueOptionFormatter(option)}
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
          type="singleSelect"
          {...TextFieldProps}
          {...rootProps.componentsProps?.baseTextField}
        />
      )}
      {...other}
    />
  );
}

export { GridFilterInputMultipleSingleSelect };
