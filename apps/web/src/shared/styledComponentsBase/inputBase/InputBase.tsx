import { ChangeEvent, forwardRef, useState } from "react";

import { mergeStyles } from "@repo/shared/helpers";
import { InputBaseProps } from "@repo/shared/interfaces";

import Icon from "../../styledComponents/icon/Icon";
import { inputBaseVariants } from "./inputBaseVariants";

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
    radius,
    endIcon,
    className,
    onChange,
    endIconOnClick,
    ...restProps
  } = props;

  // State
  const [actualValue, setActualValue] = useState<string | number | undefined>(
    value as string | number | undefined
  );

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
        className={mergeStyles(
          inputBaseVariants({
            error: error,
            size: size,
            variant: variant,
            radius: radius,
          }),
          className
        )}
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
