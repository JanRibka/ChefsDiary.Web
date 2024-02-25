import { ChangeEvent, FocusEvent, HTMLInputTypeAttribute } from "react";

export interface InputBaseProps {
  value: string | null;
  name: string;
  placeholder?: string;
  type?: HTMLInputTypeAttribute;
  size?: "small" | "normal";
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onBlur: (e: FocusEvent<HTMLInputElement, Element>) => void;
}

const InputBase = (props: InputBaseProps) => {
  return (
    <input
      value={props.value ?? ""}
      name={props.name}
      type={props.type ?? "text"}
      placeholder={props.placeholder || " "}
      className="block w-full px-2.5 text-sm text-primary appearance-none bg-white border-solid border-gray-300 border-2"
      onChange={props.onChange}
      onBlur={props.onBlur}
    />
  );
};

export default InputBase;
