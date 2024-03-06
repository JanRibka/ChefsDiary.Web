import { CheckLabelBaseProps } from "@repo/shared/interfaces";

import { checkboxLabelBaseVariants } from "./checkboxLabelBaseVariants";

const CheckLabelBase = (props: CheckLabelBaseProps) => {
  // Props
  const { label, required, className, ...restProps } = props;

  return (
    <label
      aria-required={required}
      className={(checkboxLabelBaseVariants({}), className)}
      {...restProps}
    >
      {label + (required ? " *" : "")}
    </label>
  );
};

export default CheckLabelBase;
