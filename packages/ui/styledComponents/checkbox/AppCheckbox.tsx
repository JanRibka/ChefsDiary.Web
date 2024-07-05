import { forwardRef } from "react";
import { FaCheck } from "react-icons/fa";

import { mergeStyles } from "@repo/shared/helpers";
import { useUniqueId } from "@repo/shared/hooks";

import CheckLabelBase from "../../styledComponentsBase/checkLabelBase/CheckLabelBase";
import HelperTextBase from "../helperText/AppHelperText";
import AppCheckboxProps from "./AppCheckboxProps";
import { appCheckboxVariants } from "./appCheckboxVariants";

// TODO: Odstranit forward ref a presunout ho do Props
const AppCheckbox = forwardRef<HTMLDivElement, AppCheckboxProps>(
  (props, ref) => {
    // Constants
    const uniqueId = useUniqueId(props.name);

    // Props
    const {
      checked,
      id,
      error,
      size,
      className,
      label,
      disabled,
      required,
      radius,
      helperText,
      ...restProps
    } = props;

    return (
      <div
        ref={ref}
        id={id}
        className={mergeStyles("flex flex-col", className)}
      >
        <div className="flex items-center">
          <span className="relative bg-transparent hover:bg-primary hover:bg-opacity-5 inline-flex justify-center items-center p-2.5 rounded-full">
            <input
              type="checkbox"
              id={uniqueId}
              checked={checked ?? false}
              disabled={disabled}
              aria-disabled={disabled}
              className={mergeStyles(
                appCheckboxVariants({
                  size: size,
                  checked: checked ?? undefined,
                  radius: radius,
                }),
                ""
              )}
              {...restProps}
            />
            {checked && (
              <FaCheck className="absolute text-white scale-[0.85] pointer-events-none" />
            )}
          </span>

          <CheckLabelBase
            htmlFor={uniqueId}
            label={label}
            required={required}
            disabled={disabled}
          />
        </div>

        <HelperTextBase error={error} helperText={helperText} />
      </div>
    );
  }
);

export default AppCheckbox;
