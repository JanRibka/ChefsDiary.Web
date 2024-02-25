import { ChangeEvent, useState } from "react";

import InputBase, {
  InputBaseProps,
} from "../../styledComponentsBase/inputBase/InputBase";
import InputLabelBase, {
  InputLabelBaseProps,
} from "../../styledComponentsBase/inputLabelBase/InputLabelBase";

export interface AppTextFieldProps
  extends InputBaseProps,
    Omit<InputLabelBaseProps, "children"> {
  type?: "text" | "password" | "email" | "tel";
}

const AppTextField = (props: AppTextFieldProps) => {
  // State
  const [value, setValue] = useState<string>(props.value ?? "");

  // Other
  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value: string = e.target.value;

    setValue(value);
    props.onChange?.(e);
  };

  return (
    <div className="">
      <InputLabelBase label={props.label}>
        <InputBase
          value={value}
          name={props.name}
          type={props.type ?? "text"}
          placeholder={props.placeholder}
          autocomplete={props.autocomplete}
          onChange={handleOnChange}
          onBlur={props.onBlur}
        />
      </InputLabelBase>
    </div>
  );
};

export default AppTextField;
