import { ChangeEvent, FocusEvent, HTMLInputTypeAttribute } from "react";

export interface InputBaseProps {
  value: string | null;
  name: string;
  placeholder?: string;
  autocomplete?: string;
  type?: HTMLInputTypeAttribute;
  size?: "small" | "normal";
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onBlur: (e: FocusEvent<HTMLInputElement, Element>) => void;
}

const InputBase = (props: InputBaseProps) => {
  const XXXX = () => {
    return 2;
  };

  return (
    <input
      value={props.value ?? ""}
      name={props.name}
      type={props.type ?? "text"}
      placeholder={props.placeholder || " "}
      autoComplete={props.autocomplete}
      className="block w-full px-2.5 text-sm text-primary appearance-none bg-white border-solid border-gray-300 border-1"
      onChange={props.onChange}
      onBlur={props.onBlur}
    />
  );
};

export default InputBase;
