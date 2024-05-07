import { mergeStyles } from "@repo/shared/helpers";

import CheckLabelBaseProps from "./CheckLabelBaseProps";
import { checkboxLabelBaseVariants } from "./checkLabelBaseVariants";

const CheckLabelBase = (props: CheckLabelBaseProps) => {
  // Props
  const { label, required, disabled, className, ...restProps } = props;

  return (
    <label
      aria-required={required}
      className={mergeStyles(
        checkboxLabelBaseVariants({ disable: disabled }),
        className
      )}
      {...restProps}
    >
      {label + (required ? " *" : "")}
    </label>
  );
};

export default CheckLabelBase;
