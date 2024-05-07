import ComponentVariantType from "../../types/component/ComponentVariantType";
import InputSizeType from "../../types/input/InputSizeType";
import LabelBaseProps from "../label/LabelBaseProps";

interface FieldLabelBaseProps extends LabelBaseProps {
  size?: InputSizeType;
  variant?: ComponentVariantType;
  required?: boolean;
  error?: boolean;
}

export default FieldLabelBaseProps;
