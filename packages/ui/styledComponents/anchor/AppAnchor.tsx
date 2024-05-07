import { mergeStyles } from "@repo/shared/helpers";

import AppAnchorProps from "./AppAnchorProps";

const AppAnchor = (props: AppAnchorProps) => {
  // Props
  const { children, className, ...restProps } = props;

  return (
    <a
      className={mergeStyles("text-primary hover:text-primary-dark", className)}
      {...restProps}
    >
      {children}
    </a>
  );
};

export default AppAnchor;
