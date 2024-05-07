import { useRef } from "react";

import { mergeStyles } from "@repo/shared/helpers";
import { useRipple } from "@repo/shared/hooks";
import { ButtonBaseProps } from "@repo/shared/interfaces";

import buttonBaseVariants from "./buttonBaseVariants";

// TODO: Zkusi dát komponentu do packages
const ButtonBase = (props: ButtonBaseProps) => {
  const refButton = useRef<HTMLButtonElement>(null);
  const { disabled, size, variant, className, children, radius, ...restProps } =
    props;

  // Ripple effect
  useRipple(refButton);

  return (
    <button
      ref={refButton}
      disabled={disabled}
      aria-disabled={disabled}
      className={mergeStyles(
        buttonBaseVariants({
          size: size,
          variant: variant,
          radius: radius,
          disabled: disabled,
        }),
        className
      )}
      {...restProps}
    >
      {children}
    </button>
  );
};

export default ButtonBase;
