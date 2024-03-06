import { IoCheckboxOutline } from "react-icons/io5";

import * as Checkbox from "@radix-ui/react-checkbox";
import { useUniqueId } from "@repo/shared/hooks";
import { CheckLabelBaseProps } from "@repo/shared/interfaces";

import CheckLabelBase from "../../styledComponentsBase/checkLabelBase/CheckLabelBase";

export interface AppCheckboxProps
  extends Omit<CheckLabelBaseProps, "id" | "htmlFor"> {}

const AppCheckbox = (props: AppCheckboxProps) => {
  const { label, ...restProps } = props;
  // Constants
  const id = useUniqueId(props.name);

  return (
    <div className="flex items-center">
      <Checkbox.Root id={id} checked {...restProps}>
        <Checkbox.Indicator>
          <IoCheckboxOutline />
        </Checkbox.Indicator>
      </Checkbox.Root>

      <CheckLabelBase htmlFor={id} label={label} />
    </div>
  );
};

export default AppCheckbox;
