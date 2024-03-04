import { FieldBaseProps } from "@repo/shared/interfaces";
import { InputBaseSizeType } from "@repo/shared/types";

export interface InputLabelBaseProps extends FieldBaseProps {
  label: string;
  htmlFor: string;
  size?: InputBaseSizeType;
}

const InputLabelBase = (props: InputLabelBaseProps) => {
  const { label, htmlFor, variant, size, required, error, ...restProps } =
    props;

  const variantClassName: string =
    variant === "filled"
      ? " start-2.5 peer-placeholder-shown:translate-y-0"
      : variant === "standard"
        ? " -translate-y-6 top-3 peer-focus:start-0 peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-6"
        : " bg-white px-2 start-2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:px-2";

  let sizeClassName: string = " ";

  switch (size) {
    case "small":
      if (variant === "filled")
        sizeClassName = " -translate-y-3 top-3 peer-focus:-translate-y-3";
      else if (variant === "standard") sizeClassName = " ";
      else
        sizeClassName =
          " -translate-y-3 top-0.5 peer-focus:top-0.5 peer-focus:-translate-y-3";

      break;
    default:
      if (variant === "filled")
        sizeClassName = " -translate-y-4 top-4 peer-focus:-translate-y-4";
      else if (variant === "standard") sizeClassName = " ";
      else
        sizeClassName =
          " -translate-y-4 top-1.5 peer-focus:top-1.5 peer-focus:-translate-y-4";
  }

  const colorClassName: string = error
    ? " text-error"
    : " text-gray-700 peer-focus:text-primary";

  const className: string =
    "absolute text-sm duration-300 transform scale-75 origin-[0] z-10 peer-placeholder-shown:scale-100 peer-focus:scale-75" +
    variantClassName +
    sizeClassName +
    colorClassName;

  return (
    <label
      htmlFor={htmlFor}
      aria-required={required}
      className={className}
      {...restProps}
    >
      {label + (required ? " *" : "")}
    </label>
  );
};

export default InputLabelBase;
