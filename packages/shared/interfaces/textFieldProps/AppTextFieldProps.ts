import DescribedByAreaProps from "../describedByAreaProps/DescribedByAreaProps";
import HelperTextBaseProps from "../helperTextProps/HelperTextProps";
import InputBaseProps from "../inputBaseProps/InputBaseProps";
import InputLabelBaseProps from "../inputLabelBaseProps/InputLabelBaseProps";

interface AppTextFieldProps
  extends InputBaseProps,
    Omit<InputLabelBaseProps, "htmlFor">,
    HelperTextBaseProps,
    DescribedByAreaProps {
  value?: string | null;
  type?: "text" | "password" | "email" | "tel" | "search";
}

export default AppTextFieldProps;
