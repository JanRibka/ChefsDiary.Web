import { forwardRef } from "react";

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

export interface AppTextFieldProps
  extends Omit<InputBaseProps, "id">,
    Omit<InputLabelBaseProps, "htmlFor">,
    HelperTextBaseProps {
  value?: string | null;
  type?: "text" | "password" | "email" | "tel" | "search";
}

const AppTextField = forwardRef<HTMLInputElement, AppTextFieldProps>(
  (props, ref) => {
    // Constants
    const id = useUniqueId(props.name);

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
            type={props.type ?? "text"}
            placeholder={props.placeholder}
            required={props.required}
            error={props.error}
            autoComplete={props.autoComplete}
            endIcon={props.endIcon}
            onChange={props.onChange}
            onBlur={props.onBlur}
            endIconOnClick={props.endIconOnClick}
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

export default AppTextField;
