import { mergeStyles } from "@repo/shared/helpers";
import { HelperTextProps } from "@repo/shared/interfaces";

import { helperTextVariants } from "./helperTextVariants";

const HelperText = (props: HelperTextProps) => {
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

export default HelperText;
