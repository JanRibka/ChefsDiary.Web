import { mergeStyles } from "@repo/shared/helpers";
import { ButtonBaseProps } from "@repo/shared/interfaces";

import buttonBaseVariants from "./buttonBaseVariants";

const ButtonBase = (props: ButtonBaseProps) => {
  const { disabled, size, variant, className, children, radius, ...restProps } =
    props;
  return (
    <button
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
