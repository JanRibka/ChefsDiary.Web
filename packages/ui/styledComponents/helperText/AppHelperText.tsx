import { mergeStyles } from "@repo/shared/helpers";

import AppHelperTextProps from "./AppHelperTextProps";
import { appHelperTextVariants } from "./appHelperTextVariants";

const AppHelperText = (props: AppHelperTextProps) => {
  // Props
  const { className, error, helperText, ...restProps } = props;

  if (!helperText) return undefined;

  return (
    <p
      className={mergeStyles(
        appHelperTextVariants({ error: error }),
        className
      )}
      {...restProps}
    >
      {helperText}
    </p>
  );
};

export default AppHelperText;
