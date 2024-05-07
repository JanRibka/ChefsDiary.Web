import * as Checkbox from "@radix-ui/react-checkbox";

import ComponentCommonProps from "../../shared/props/component/ComponentCommonProps";
import CheckSizeType from "../../shared/types/check/CheckSizeType";
import RadiusType from "../../shared/types/radius/RadiusType";
import CheckLabelBaseProps from "../../styledComponentsBase/checkLabelBase/CheckLabelBaseProps";
import HelperTextProps from "../helperText/HelperTextProps";

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
