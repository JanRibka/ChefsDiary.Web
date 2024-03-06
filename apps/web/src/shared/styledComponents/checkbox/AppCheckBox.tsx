import { IoCheckboxOutline } from "react-icons/io5";

import * as Checkbox from "@radix-ui/react-checkbox";
import { useUniqueId } from "@repo/shared/hooks";
import { CheckLabelBaseProps } from "@repo/shared/interfaces";

import CheckLabelBase from "../../styledComponentsBase/checkLabelBase/CheckLabelBase";

export interface AppCheckboxProps
  extends Omit<CheckLabelBaseProps, "id" | "tabIndex"> {}

const AppCheckbox = (props: AppCheckboxProps) => {
  // Constants
  const id = useUniqueId(props.name);

  return (
    <div className="flex items-center">
      <Checkbox.Root id={id} checked>
        <Checkbox.Indicator>
          <IoCheckboxOutline />
        </Checkbox.Indicator>
      </Checkbox.Root>

      <CheckLabelBase htmlFor={id} />
    </div>
  );
};

export default AppCheckbox;
