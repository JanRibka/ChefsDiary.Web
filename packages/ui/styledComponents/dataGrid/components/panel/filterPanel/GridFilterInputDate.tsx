import { useCallback, useEffect, useRef, useState } from "react";

import { TextFieldProps } from "@mui/material/TextField";
import { unstable_useId as useId } from "@mui/material/utils";

import { useGridRootProps } from "../../../hooks/utils/useGridRootProps";
import { GridLoadIcon } from "../../icons";
import { GridFilterInputValueProps } from "./GridFilterInputValueProps";

export type GridFilterInputDateProps = GridFilterInputValueProps &
  TextFieldProps & { type?: "date" | "datetime-local" };

export const SUBMIT_FILTER_DATE_STROKE_TIME = 500;

function GridFilterInputDate(props: GridFilterInputDateProps) {
  const {
    item,
    applyValue,
    type,
    apiRef,
    focusElementRef,
    InputProps,
    ...other
  } = props;
  const filterTimeout = useRef<any>();
  const [filterValueState, setFilterValueState] = useState(item.value ?? "");
  const [applying, setIsApplying] = useState(false);
  const id = useId();
  const rootProps = useGridRootProps();

  const onFilterChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const value = event.target.value;

      clearTimeout(filterTimeout.current);
      setFilterValueState(String(value));

      setIsApplying(true);
      filterTimeout.current = setTimeout(() => {
        applyValue({ ...item, value });
        setIsApplying(false);
      }, SUBMIT_FILTER_DATE_STROKE_TIME);
    },
    [applyValue, item]
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
      InputProps={{
        ...(applying ? { endAdornment: <GridLoadIcon /> } : {}),
        ...InputProps,
        inputProps: {
          max: type === "datetime-local" ? "9999-12-31T23:59" : "9999-12-31",
          ...InputProps?.inputProps,
        },
      }}
      {...other}
      {...rootProps.componentsProps?.baseTextField}
    />
  );
}

export { GridFilterInputDate };
