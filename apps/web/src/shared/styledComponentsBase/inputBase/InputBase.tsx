import { ChangeEvent, FocusEvent, HTMLInputTypeAttribute } from "react";

export type InputBaseSizeType = "small" | "normal";
export type InputBaseVariantType = "outlined" | "filled" | "standard";

export interface InputBaseProps {
  id: string;
  value?: string | number | null;
  name: string;
  disable?: boolean;
  placeholder?: string;
  autoComplete?: string;
  type?: HTMLInputTypeAttribute;
  variant?: InputBaseVariantType;
  size?: InputBaseSizeType;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onBlur: (e: FocusEvent<HTMLInputElement, Element>) => void;
}

const InputBase = (props: InputBaseProps) => {
  const { value, disable, placeholder, variant, size, ...restProps } = props;

  const variantClassName: string =
    variant === "filled"
      ? " px-2.5 bg-gray-50 border-0 border-b-2 rounded-t-sm hover:bg-gray-100"
      : variant === "standard"
        ? " px-0 bg-transparent border-0 border-b-2"
        : " px-2.5 bg-transparent rounded-sm border-1";

  let sizeClassName: string = "";

  switch (size) {
    case "small":
      if (variant === "filled") sizeClassName = " pb-1.5 pt-4";
      else if (variant === "standard") sizeClassName = " pb-1 pt-3";
      else sizeClassName = " pb-2 pt-2.5";

      break;
    default:
      if (variant === "filled") sizeClassName = " pb-2.5 pt-5";
      else if (variant === "standard") sizeClassName = " pb-1 pt-4";
      else sizeClassName = " pb-3 pt-3.5";
  }

  const className: string =
    "block w-full text-sm text-gray-950 border-gray-500 appearance-none peer hover:border-black focus:outline-none focus:ring-0 focus:border-primary " +
    variantClassName +
    sizeClassName;

  return (
    <input
      value={value as string | number | undefined}
      placeholder={placeholder || " "}
      className={className}
      disabled={disable}
      aria-disabled={disable}
      {...restProps}
    />
  );
};

export default InputBase;
