import InputBaseProps from "../../styledComponentsBase/inputBase/InputBaseProps";
import InputLabelBaseProps from "../../styledComponentsBase/inputLabelBase/InputLabelBaseProps";
import DescribedByAreaProps from "../describedByArea/AppDescribedByAreaProps";
import HelperTextProps from "../helperText/AppHelperTextProps";

interface AppTextFieldProps
  extends InputBaseProps,
    Omit<InputLabelBaseProps, "htmlFor">,
    HelperTextProps,
    DescribedByAreaProps {
  value?: string | null;
  type?: "text" | "password" | "email" | "tel" | "search";
}

export default AppTextFieldProps;
