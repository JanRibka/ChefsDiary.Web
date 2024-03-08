import { mergeStyles } from "@repo/shared/helpers";
import { ButtonBaseProps } from "@repo/shared/interfaces";

import buttonBaseVariants from "./buttonBaseVariants";

const ButtonBase = (props: ButtonBaseProps) => {
  const { disabled, size, variant, className, children, ...restProps } = props;
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
      {children}
    </button>
  );
};

export default ButtonBase;
