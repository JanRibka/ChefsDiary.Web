import BaseProps from "../baseProps/BaseProps";

interface LabelBaseProps extends BaseProps {
  label: string;
  htmlFor: string;
  required?: boolean;
}

export default LabelBaseProps;
