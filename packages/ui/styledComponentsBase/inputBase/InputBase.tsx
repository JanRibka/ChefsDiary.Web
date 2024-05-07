import { ChangeEvent, forwardRef, useState } from "react";

import { mergeStyles } from "@repo/shared/helpers";

import Icon from "../../styledComponents/icon/Icon";
import InputBaseProps from "./InputBaseProps";
import { inputBaseVariants } from "./inputBaseVariants";

// TODO: Dat kolem inputu a cudlu div a nastylovat ho jako input (border a tak) at neni cudl na divu, ale vedle n2ho
const InputBase = forwardRef<HTMLInputElement, InputBaseProps>((props, ref) => {
  // Props
  const {
    value,
    disabled,
    placeholder,
    required,
    error,
    variant,
    size,
    radius,
    endIcon,
    className,
    buttonAriaLabel,
    ariaDescribedBy,
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
        disabled={disabled}
        aria-disabled={disabled}
        required={required}
        aria-required={required}
        onChange={handleOnChange}
        aria-describedby={ariaDescribedBy}
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
      {endIcon && ( // TODO: Tady bude iconButton
        <button
          type="button"
          className="absolute end-0 pe-3 inset-y-0"
          aria-label={buttonAriaLabel}
          onClick={endIconOnClick}
        >
          <Icon icon={endIcon} />
        </button>
      )}
    </>
  );
});

export default InputBase;
