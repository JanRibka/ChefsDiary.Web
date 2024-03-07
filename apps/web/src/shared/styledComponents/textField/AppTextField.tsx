import { forwardRef } from "react";

import { useUniqueId } from "@repo/shared/hooks";
import { AppTextFieldProps } from "@repo/shared/interfaces";

import HelperTextBase from "../../styledComponentsBase/helperTextBase/HelperTextBase";
import InputBase from "../../styledComponentsBase/inputBase/InputBase";
import InputLabelBase from "../../styledComponentsBase/inputLabelBase/InputLabelBase";

const AppTextField = forwardRef<HTMLInputElement, AppTextFieldProps>(
  (props, ref) => {
    // Constants
    const id = useUniqueId(props.name);

    return (
      <div id={props.id} className={props.className}>
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
            radius={props.radius}
            placeholder={props.placeholder}
            required={props.required}
            error={props.error}
            autoComplete={props.autoComplete}
            endIcon={props.endIcon}
            tabIndex={props.tabIndex}
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
