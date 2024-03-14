import * as Checkbox from "@radix-ui/react-checkbox";

import { RadiusType } from "../../types";
import CheckSizeType from "../../types/check/CheckSizeType";
import CheckLabelBaseProps from "../checkLabelBaseProps/CheckLabelBaseProps";
import ComponentCommonProps from "../componentCommonProps/ComponentCommonProps";
import HelperTextProps from "../helperTextProps/HelperTextProps";

interface AppCheckboxProps
  extends ComponentCommonProps,
    Omit<CheckLabelBaseProps, "htmlFor">,
    HelperTextProps {
  size?: CheckSizeType;
  radius?: RadiusType;
  checked?: boolean | null;
  onCheckedChange: (state: Checkbox.CheckedState) => void;
}

export default AppCheckboxProps;
