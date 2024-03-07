import { FaCheck } from "react-icons/fa6";

import * as Checkbox from "@radix-ui/react-checkbox";
import { mergeStyles } from "@repo/shared/helpers";
import { useUniqueId } from "@repo/shared/hooks";
import { AppCheckboxProps } from "@repo/shared/interfaces";

import CheckLabelBase from "../../styledComponentsBase/checkLabelBase/CheckLabelBase";
import HelperTextBase from "../../styledComponentsBase/helperTextBase/HelperTextBase";
import { appCheckboxVariants } from "./appCheckboxVariants";

const AppCheckbox = (props: AppCheckboxProps) => {
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
    disable,
    required,
    radius,
    helperText,
    ...restProps
  } = props;

  return (
    <div id={id} className="flex flex-col">
      <div className="flex items-center">
        <Checkbox.Root
          id={uniqueId}
          checked={checked ?? false}
          disabled={disable}
          aria-disabled={disable}
          className={mergeStyles(
            appCheckboxVariants({
              size: size,
              checked: checked,
              radius: radius,
            }),
            className
          )}
          {...restProps}
        >
          <Checkbox.Indicator>{<FaCheck />}</Checkbox.Indicator>
        </Checkbox.Root>

        <CheckLabelBase
          htmlFor={uniqueId}
          label={label}
          required={required}
          disable={disable}
        />
      </div>

      <HelperTextBase error={error} helperText={helperText} />
    </div>
  );
};

export default AppCheckbox;
