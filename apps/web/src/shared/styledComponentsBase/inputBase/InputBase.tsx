import {
  ChangeEvent,
  FocusEvent,
  forwardRef,
  HTMLInputTypeAttribute,
  useState,
} from "react";

import { FieldBaseProps } from "@repo/shared/interfaces";
import { InputBaseSizeType } from "@repo/shared/types";

import Icon from "../../styledComponents/icon/Icon";

export interface InputBaseProps extends FieldBaseProps {
  id: string;
  value?: string | number | null;
  name: string;
  disable?: boolean;
  placeholder?: string;
  autoComplete?: string;
  type?: HTMLInputTypeAttribute;
  size?: InputBaseSizeType;
  endIcon?: JSX.Element;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onBlur: (e: FocusEvent<HTMLInputElement, Element>) => void;
  endIconOnClick?: () => void;
}

const InputBase = forwardRef<HTMLInputElement, InputBaseProps>((props, ref) => {
  // Props
  const {
    value,
    disable,
    placeholder,
    required,
    error,
    variant,
    size,
    endIcon,
    onChange,
    endIconOnClick,
    ...restProps
  } = props;

  // State
  const [actualValue, setActualValue] = useState<string | number | undefined>(
    value as string | number | undefined
  );

  // Styles
  const variantClassName: string =
    variant === "filled"
      ? " px-2.5 bg-gray-50 border-0 border-b-2 rounded-t-sm hover:bg-gray-100 disabled:bg-gray-200 focus:ring-0"
      : variant === "standard"
        ? " px-0 bg-transparent border-0 border-b-2 focus:ring-0"
        : " px-2.5 bg-transparent rounded-sm border-1 focus:ring-1";

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

  const borderColorClassName: string = error
    ? " border-error ring-error"
    : " border-gray-500 hover:border-black disabled:hover:border-gray-500 focus:border-primary ring-primary";

  const className: string =
    "block w-full text-sm text-gray-950 appearance-none peer disabled:text-gray-700 focus:outline-none" +
    variantClassName +
    sizeClassName +
    borderColorClassName;

  // Other
  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value: string = e.target.value;

    setActualValue(value);
    onChange?.(e);
  };

  return (
    <>
      <input
        ref={ref}
        value={actualValue}
        placeholder={placeholder || " "}
        disabled={disable}
        aria-disabled={disable}
        required={required}
        aria-required={required}
        onChange={handleOnChange}
        className={className}
        {...restProps}
      />
      {endIcon && (
        <button
          className="absolute end-0 pe-3 inset-y-0"
          onClick={endIconOnClick}
        >
          <Icon icon={endIcon} />
        </button>
      )}
    </>
  );
});

export default InputBase;
