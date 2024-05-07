import { forwardRef } from "react";
import { FaCheck } from "react-icons/fa6";

import * as Checkbox from "@radix-ui/react-checkbox";
import { mergeStyles } from "@repo/shared/helpers";
import { useUniqueId } from "@repo/shared/hooks";

import CheckLabelBase from "../../styledComponentsBase/checkLabelBase/CheckLabelBase";
import HelperTextBase from "../helperText/HelperText";
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
          <span className="bg-transparent hover:bg-primary hover:bg-opacity-5 inline-flex p-2.5 rounded-full">
            <Checkbox.Root
              id={uniqueId}
              checked={checked ?? false}
              disabled={disabled}
              aria-disabled={disabled}
              className={mergeStyles(
                appCheckboxVariants({
                  size: size,
                  checked: checked,
                  radius: radius,
                }),
                ""
              )}
              {...restProps}
            >
              <Checkbox.Indicator>{<FaCheck />}</Checkbox.Indicator>
            </Checkbox.Root>
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
