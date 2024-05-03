import { forwardRef, useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

import { useUniqueId } from "@repo/shared/hooks";
import { AppPasswordFieldProps } from "@repo/shared/interfaces";

import InputBase from "../../styledComponentsBase/inputBase/InputBase";
import InputLabelBase from "../../styledComponentsBase/inputLabelBase/InputLabelBase";
import DescribedByArea from "../describedByArea/DescribedByArea";
import HelperText from "../helperText/HelperText";

const AppPasswordField = forwardRef<HTMLInputElement, AppPasswordFieldProps>(
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

    // State
    const [showPassword, setShowPassword] = useState<boolean>(false);

    // Other
    const handleOnClickShowPassword = () => {
      setShowPassword((prev) => !prev);
    };

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
            type={showPassword ? "text" : "password"}
            required={required}
            error={error}
            buttonAriaLabel="Přepnout viditelnost hesla"
            endIcon={showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
            endIconOnClick={handleOnClickShowPassword}
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

export default AppPasswordField;
