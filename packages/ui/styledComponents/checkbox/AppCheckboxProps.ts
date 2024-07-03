import { ChangeEvent } from "react";

import * as Checkbox from "@radix-ui/react-checkbox";

import ComponentCommonProps from "../../shared/props/component/ComponentCommonProps";
import CheckSizeType from "../../shared/types/check/CheckSizeType";
import RadiusType from "../../shared/types/radius/RadiusType";
import CheckLabelBaseProps from "../../styledComponentsBase/checkLabelBase/CheckLabelBaseProps";
import HelperTextProps from "../helperText/AppHelperTextProps";

interface AppCheckboxProps
  extends ComponentCommonProps,
    Omit<CheckLabelBaseProps, "htmlFor">,
    HelperTextProps {
  size?: CheckSizeType;
  radius?: RadiusType;
  checked?: boolean | null;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onCheckedChange?: (state: Checkbox.CheckedState) => void;
}

export default AppCheckboxProps;
