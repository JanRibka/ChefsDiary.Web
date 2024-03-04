import { ChangeEvent, useState } from "react";

import useUniqueId from "@repo/shared/useUniqueId";

import InputBase, {
  InputBaseProps,
} from "../../styledComponentsBase/inputBase/InputBase";
import InputLabelBase, {
  InputLabelBaseProps,
} from "../../styledComponentsBase/inputLabelBase/InputLabelBase";

export interface AppTextFieldProps
  extends Omit<InputBaseProps, "id">,
    Omit<InputLabelBaseProps, "htmlFor"> {
  value?: string | null;
  type?: "text" | "password" | "email" | "tel" | "search";
}

const AppTextField = (props: AppTextFieldProps) => {
  // Constants
  const id = useUniqueId(props.name);

  // State
  const [value, setValue] = useState<string>(props.value ?? "");

  // Other
  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value: string = e.target.value;

    setValue(value);
    props.onChange?.(e);
  };
  //TODO: Pridat helper text
    //TODO: Pridat required
    //TODO: Pokud kliknu na input, bude border 2
    //TODO: Pokud error, tak bude vše červené, krom textu
  //TODO: ZKusit, co se všechno renderuje, když zapisuju do state na onchange a popř úředělat na signal
  return (
    <div className="relative">
      <InputBase
        id={id}
        value={value}
        name={props.name}
        disable={props.disable}
        variant={props.variant}
        size={props.size}
        type={props.type ?? "text"}
        placeholder={props.placeholder}
        autoComplete={props.autoComplete}
        onChange={handleOnChange}
        onBlur={props.onBlur}
      />
      <InputLabelBase
        htmlFor={id}
        label={props.label}
        variant={props.variant}
        size={props.size}
        disable={props.disable}
      />
    </div>
  );
};

export default AppTextField;
