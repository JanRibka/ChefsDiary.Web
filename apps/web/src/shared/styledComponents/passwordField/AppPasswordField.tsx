import { forwardRef, useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

import { useUniqueId } from "@repo/shared/hooks";

import HelperTextBase, {
  HelperTextBaseProps,
} from "../../styledComponentsBase/helperTextBase/HelperTextBase";
import InputBase, {
  InputBaseProps,
} from "../../styledComponentsBase/inputBase/InputBase";
import InputLabelBase, {
  InputLabelBaseProps,
} from "../../styledComponentsBase/inputLabelBase/InputLabelBase";

export interface AppPasswordProps
  extends Omit<InputBaseProps, "id" | "endIcon" | "type">,
    Omit<InputLabelBaseProps, "htmlFor">,
    HelperTextBaseProps {
  value?: string | null;
}

const AppPasswordField = forwardRef<HTMLInputElement, AppPasswordProps>(
  (props, ref) => {
    // Constants
    const id = useUniqueId(props.name);

    // State
    const [showPassword, setShowPassword] = useState<boolean>(false);

    // Other
    const handleOnClickShowPassword = () => {
      setShowPassword((prev) => !prev);
    };

    return (
      <div>
        <div className="relative">
          <InputBase
            ref={ref}
            id={id}
            value={props.value ?? ""}
            name={props.name}
            disable={props.disable}
            variant={props.variant}
            size={props.size}
            type={showPassword ? "text" : "password"}
            placeholder={props.placeholder}
            required={props.required}
            error={props.error}
            autoComplete={props.autoComplete}
            endIcon={showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
            onChange={props.onChange}
            onBlur={props.onBlur}
            endIconOnClick={handleOnClickShowPassword}
          />
          <InputLabelBase
            htmlFor={id}
            label={props.label}
            variant={props.variant}
            size={props.size}
            required={props.required}
            error={props.error}
          />
        </div>
        <HelperTextBase helperText={props.helperText} error={props.error} />
      </div>
    );
  }
);

export default AppPasswordField;
