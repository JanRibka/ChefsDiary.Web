import * as Checkbox from "@radix-ui/react-checkbox";

import { HelperTextBaseProps } from "../";
import { RadiusType } from "../../types";
import CheckSizeType from "../../types/check/CheckSizeType";
import CheckLabelBaseProps from "../checkLabelBaseProps/CheckLabelBaseProps";
import ComponentCommonProps from "../componentCommonProps/ComponentCommonProps";

interface AppCheckboxProps
  extends ComponentCommonProps,
    Omit<CheckLabelBaseProps, "htmlFor">,
    HelperTextBaseProps {
  size?: CheckSizeType;
  radius?: RadiusType;
  checked?: boolean | null;
  onCheckedChange: (e: Checkbox.CheckedState) => void;
}

export default AppCheckboxProps;
