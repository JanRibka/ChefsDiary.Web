import HelperTextBaseProps from "../helperTextBaseProps/HelperTextBaseProps";
import InputBaseProps from "../inputBaseProps/InputBaseProps";
import InputLabelBaseProps from "../inputLabelBaseProps/InputLabelBaseProps";

interface AppPasswordFieldProps
  extends Omit<InputBaseProps, "endIcon" | "endIconOnClick" | "type">,
    Omit<InputLabelBaseProps, "htmlFor">,
    HelperTextBaseProps {
  value?: string | null;
}

export default AppPasswordFieldProps;
