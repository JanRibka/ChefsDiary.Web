import { mergeStyles } from "@repo/shared/helpers";

import InputLabelBaseProps from "./InputLabelBaseProps";
import { inputLabelBaseVariants } from "./inputLabelBaseVariants";

const InputLabelBase = (props: InputLabelBaseProps) => {
  // Props
  const { label, variant, size, required, error, className, ...restProps } =
    props;

  return (
    <label
      aria-required={required}
      className={mergeStyles(
        inputLabelBaseVariants({ error: error, size: size, variant: variant }),
        className
      )}
      {...restProps}
    >
      {label + (required ? " *" : "")}
    </label>
  );
};

export default InputLabelBase;
