import { IoCheckboxOutline } from "react-icons/io5";

import * as Checkbox from "@radix-ui/react-checkbox";
import { useUniqueId } from "@repo/shared/hooks";
import { AppCheckboxProps } from "@repo/shared/interfaces";

import CheckLabelBase from "../../styledComponentsBase/checkLabelBase/CheckLabelBase";

const AppCheckbox = (props: AppCheckboxProps) => {
  // Constants
  const id = useUniqueId(props.name);

  return (
    <div id={props.id} className="flex items-center">
      <Checkbox.Root id={id} checked>
        <Checkbox.Indicator>
          <IoCheckboxOutline />
        </Checkbox.Indicator>
      </Checkbox.Root>

      <CheckLabelBase htmlFor={id} label={props.label} />
    </div>
  );
};

export default AppCheckbox;
