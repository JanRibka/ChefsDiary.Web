import BaseProps from "../baseProps/BaseProps";

interface DescribedByAreaProps extends BaseProps {
  ariaDescribedByContent?: JSX.Element;
  ariaDescribedByDisplay?: boolean;
}

export default DescribedByAreaProps;
