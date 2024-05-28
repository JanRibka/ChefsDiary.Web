import { forwardRef } from "react";
import { IoSearchSharp } from "react-icons/io5";

import { useUniqueId } from "@repo/shared/hooks";

import InputBase from "../../styledComponentsBase/inputBase/InputBase";
import InputLabelBase from "../../styledComponentsBase/inputLabelBase/InputLabelBase";
import DescribedByArea from "../describedByArea/AppDescribedByArea";
import HelperText from "../helperText/AppHelperText";
import AppSearchFieldProps from "./AppSearchFieldProps";

const AppSearchField = forwardRef<HTMLInputElement, AppSearchFieldProps>(
  (props, ref) => {
    // Props
    const {
      id,
      value,
      name,
      className,
      label,
      variant,
      size,
      required,
      error,
      helperText,
      ariaDescribedBy,
      ariaDescribedByContent,
      ariaDescribedByDisplay,
      ...restProps
    } = props;

    // Constants
    const uniqueId = useUniqueId(name);

    return (
      <div id={id} className={className}>
        <div className="relative">
          <InputBase
            ref={ref}
            id={uniqueId}
            value={value ?? ""}
            name={name}
            variant={variant}
            size={size}
            type="search"
            required={required}
            error={error}
            ariaDescribedBy={ariaDescribedBy}
            endIcon={<IoSearchSharp />}
            {...restProps}
          />
          <InputLabelBase
            htmlFor={uniqueId}
            label={label}
            variant={variant}
            size={size}
            required={required}
            error={error}
          />
        </div>
        <HelperText helperText={helperText} error={error} />

        <DescribedByArea
          id={ariaDescribedBy}
          ariaDescribedByContent={ariaDescribedByContent}
          ariaDescribedByDisplay={ariaDescribedByDisplay}
        />
      </div>
    );
  }
);

export default AppSearchField;
