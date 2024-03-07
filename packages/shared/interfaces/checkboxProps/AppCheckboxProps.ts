import CheckLabelBaseProps from "../checkLabelBaseProps/CheckLabelBaseProps";
import ComponentCommonProps from "../componentCommonProps/ComponentCommonProps";

interface AppCheckboxProps
  extends ComponentCommonProps,
    Omit<CheckLabelBaseProps, "htmlFor"> {
  checked?: boolean | null;
}

export default AppCheckboxProps;
