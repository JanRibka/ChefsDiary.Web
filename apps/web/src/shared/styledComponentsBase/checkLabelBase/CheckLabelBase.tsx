import { mergeStyles } from "@repo/shared/helpers";
import { CheckLabelBaseProps } from "@repo/shared/interfaces";

import { checkboxLabelBaseVariants } from "./checkboxLabelBaseVariants";

const CheckLabelBase = (props: CheckLabelBaseProps) => {
  // Props
  const { label, required, disable, className, ...restProps } = props;

  return (
    <label
      aria-required={required}
      className={mergeStyles(
        checkboxLabelBaseVariants({ disable: disable }),
        className
      )}
      {...restProps}
    >
      {label + (required ? " *" : "")}
    </label>
  );
};

export default CheckLabelBase;
