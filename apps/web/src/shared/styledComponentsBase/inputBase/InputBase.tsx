import { ChangeEvent, FocusEvent, HTMLInputTypeAttribute } from "react";

export type InputBaseSizeType = "small" | "normal";

export interface InputBaseProps {
  id: string;
  value?: string | number | null;
  name: string;
  placeholder?: string;
  autocomplete?: string;
  type?: HTMLInputTypeAttribute;
  variant?: "outlined" | "filled" | "standard";
  size?: InputBaseSizeType;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onBlur: (e: FocusEvent<HTMLInputElement, Element>) => void;
}

const InputBase = (props: InputBaseProps) => {
  const { value, autocomplete, variant, size, ...restProps } = props;

  const variantClassName: string =
    variant === "filled"
      ? " bg-gray-50 text-gray-900 border-gray-300 border-0 border-b-2 rounded-t-sm hover:bg-gray-100"
      : variant === "standard"
        ? " bg-white"
        : " bg-white";

  let sizeClassName: string = "";

  switch (size) {
    case "small":
      if (variant === "filled") sizeClassName = " pb-1.5 pt-4";
      else if (variant === "outlined") sizeClassName = " pb-1.5 pt-3";
      else sizeClassName = " py-2";

      break;
    default:
      if (variant === "filled") sizeClassName = " pb-2.5 pt-5";
      else if (variant === "outlined") sizeClassName = " pb-2.5 pt-4";
      else sizeClassName = " py-2.5";
  }

  const className: string =
    "block w-full px-2.5 text-sm text-primary appearance-none peer hover:border-black focus:outline-none focus:ring-0 focus:border-primary " +
    sizeClassName +
    variantClassName;

  return (
    <input
      value={value as string | number}
      autoComplete={autocomplete || " "}
      className={className}
      {...restProps}
    />
  );
};

export default InputBase;
