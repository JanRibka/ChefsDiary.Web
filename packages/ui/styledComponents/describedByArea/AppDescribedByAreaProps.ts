import { BaseProps } from "@repo/shared/props";

interface AppDescribedByAreaProps extends BaseProps {
  ariaDescribedByContent?: JSX.Element;
  ariaDescribedByDisplay?: boolean;
}

export default AppDescribedByAreaProps;
