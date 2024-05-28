import InputBaseProps from "../../styledComponentsBase/inputBase/InputBaseProps";
import InputLabelBaseProps from "../../styledComponentsBase/inputLabelBase/InputLabelBaseProps";
import DescribedByAreaProps from "../describedByArea/AppDescribedByAreaProps";
import HelperTextProps from "../helperText/AppHelperTextProps";

interface AppSearchFieldProps
  extends InputBaseProps,
    Omit<InputLabelBaseProps, "htmlFor">,
    HelperTextProps,
    DescribedByAreaProps {
  value?: string | null;
}

export default AppSearchFieldProps;
