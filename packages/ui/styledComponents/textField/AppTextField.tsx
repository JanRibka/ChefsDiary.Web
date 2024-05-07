import { forwardRef } from "react";

import { useUniqueId } from "@repo/shared/hooks";

import InputBase from "../../styledComponentsBase/inputBase/InputBase";
import InputLabelBase from "../../styledComponentsBase/inputLabelBase/InputLabelBase";
import DescribedByArea from "../describedByArea/DescribedByArea";
import HelperText from "../helperText/HelperText";
import AppTextFieldProps from "./AppTextFieldProps";

const AppTextField = forwardRef<HTMLInputElement, AppTextFieldProps>(
  (props, ref) => {
    // Props
    const {
      id,
      value,
      name,
      className,
      type,
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
            type={type ?? "text"}
            required={required}
            error={error}
            ariaDescribedBy={ariaDescribedBy}
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

export default AppTextField;
