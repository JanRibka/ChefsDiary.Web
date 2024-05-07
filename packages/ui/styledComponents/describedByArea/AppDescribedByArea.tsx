import { mergeStyles } from "@repo/shared/helpers";

import AppDescribedByAreaProps from "./AppDescribedByAreaProps";
import { appDescribedByAreaVariants } from "./appDescribedByAreaVariants";

const AppDescribedByArea = (
  props: Omit<AppDescribedByAreaProps, "children">
) => {
  // Props
  const {
    ariaDescribedByDisplay,
    className,
    ariaDescribedByContent,
    ...restProps
  } = props;

  return (
    <div
      className={mergeStyles(
        appDescribedByAreaVariants({ display: ariaDescribedByDisplay }),
        className
      )}
      {...restProps}
    >
      {ariaDescribedByContent}
    </div>
  );
};

export default AppDescribedByArea;
