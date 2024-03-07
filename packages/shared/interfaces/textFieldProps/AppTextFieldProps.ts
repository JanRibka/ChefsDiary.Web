import HelperTextBaseProps from "../helperTextBaseProps/HelperTextBaseProps";
import InputBaseProps from "../inputBaseProps/InputBaseProps";
import InputLabelBaseProps from "../inputLabelBaseProps/InputLabelBaseProps";

interface AppTextFieldProps
  extends InputBaseProps,
    Omit<InputLabelBaseProps, "htmlFor">,
    HelperTextBaseProps {
  value?: string | null;
  type?: "text" | "password" | "email" | "tel" | "search";
}

export default AppTextFieldProps;
