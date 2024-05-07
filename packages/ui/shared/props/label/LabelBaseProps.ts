import BaseProps from "../base/BaseProps";

interface LabelBaseProps extends BaseProps {
  label: string;
  htmlFor: string;
  required?: boolean;
}

export default LabelBaseProps;
