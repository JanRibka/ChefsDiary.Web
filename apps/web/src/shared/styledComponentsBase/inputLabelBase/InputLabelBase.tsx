import { mergeStyles } from "@repo/shared/helpers";
import { FieldBaseProps } from "@repo/shared/interfaces";
import { InputBaseSizeType } from "@repo/shared/types";

import { inputLabelBaseVariants } from "./inputLabelBaseVariants";

export interface InputLabelBaseProps extends FieldBaseProps {
  label: string;
  htmlFor: string;
  size?: InputBaseSizeType;
}

const InputLabelBase = (props: InputLabelBaseProps) => {
  // Props
  const {
    label,
    htmlFor,
    variant,
    size,
    required,
    error,
    className,
    ...restProps
  } = props;

  return (
    <label
      htmlFor={htmlFor}
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
