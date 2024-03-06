import { mergeStyles } from "@repo/shared/helpers";
import { HelperTextBaseProps } from "@repo/shared/interfaces";

import { helperTextVariants } from "./helperTextBaseVariants";

const HelperTextBase = (props: HelperTextBaseProps) => {
  // Props
  const { className, error, helperText, ...restProps } = props;

  if (!helperText) return undefined;

  return (
    <p
      className={mergeStyles(helperTextVariants({ error: error }), className)}
      {...restProps}
    >
      {helperText}
    </p>
  );
};

export default HelperTextBase;
