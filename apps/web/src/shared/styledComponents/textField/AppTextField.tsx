import { forwardRef } from "react";

import { useUniqueId } from "@repo/shared/hooks";
import { AppTextFieldProps } from "@repo/shared/interfaces";

import HelperTextBase from "../../styledComponentsBase/helperTextBase/HelperTextBase";
import InputBase from "../../styledComponentsBase/inputBase/InputBase";
import InputLabelBase from "../../styledComponentsBase/inputLabelBase/InputLabelBase";

const AppTextField = forwardRef<HTMLInputElement, AppTextFieldProps>(
  (props, ref) => {
    // Props
    const {
      id,
      value,
      type,
      label,
      variant,
      size,
      required,
      error,
      helperText,
      ...restProps
    } = props;

    // Constants
    const uniqueId = useUniqueId(props.name);

    return (
      <div id={id} className={props.className}>
        <div className="relative">
          <InputBase
            ref={ref}
            id={uniqueId}
            value={value ?? ""}
            variant={variant}
            size={size}
            type={type ?? "text"}
            required={required}
            error={error}
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
        <HelperTextBase helperText={helperText} error={error} />
      </div>
    );
  }
);

export default AppTextField;
