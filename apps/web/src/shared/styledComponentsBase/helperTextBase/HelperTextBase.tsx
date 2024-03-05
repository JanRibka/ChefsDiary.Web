import { mergeStyles } from "@repo/shared/helpers";
import { FieldBaseProps } from "@repo/shared/interfaces";

import { helperTextVariants } from "./helperTextBaseVariants";

export interface HelperTextBaseProps extends FieldBaseProps {
  helperText?: string;
}

const HelperTextBase = (props: HelperTextBaseProps) => {
  if (!props.helperText) return undefined;

  return (
    <p
      className={mergeStyles(
        helperTextVariants({ error: props.error }),
        props.className
      )}
    >
      {props.helperText}
    </p>
  );
};

export default HelperTextBase;
