import InputBaseProps from "../../styledComponentsBase/inputBase/InputBaseProps";
import InputLabelBaseProps from "../../styledComponentsBase/inputLabelBase/InputLabelBaseProps";
import DescribedByAreaProps from "../describedByArea/DescribedByAreaProps";
import HelperTextProps from "../helperText/HelperTextProps";

interface AppPasswordFieldProps
  extends Omit<InputBaseProps, "endIcon" | "endIconOnClick" | "type">,
    Omit<InputLabelBaseProps, "htmlFor">,
    HelperTextProps,
    DescribedByAreaProps {
  value?: string | null;
}

export default AppPasswordFieldProps;
