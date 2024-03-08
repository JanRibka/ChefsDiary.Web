import { mergeStyles } from "@repo/shared/helpers";
import { ButtonBaseProps } from "@repo/shared/interfaces";

import buttonBaseVariants from "./buttonBaseVariants";

const ButtonBase = (props: ButtonBaseProps) => {
  const { label, disabled, size, variant, className, ...restProps } = props;
  return (
    <button
      disabled={disabled}
      aria-disabled={disabled}
      className={mergeStyles(
        buttonBaseVariants({ size: size, variant: variant }),
        className
      )}
      {...restProps}
    >
      {label}
    </button>
  );
};

export default ButtonBase;
