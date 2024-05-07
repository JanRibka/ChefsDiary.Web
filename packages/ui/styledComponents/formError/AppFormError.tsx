import { forwardRef } from "react";

import { mergeStyles } from "@repo/shared/helpers";

import AppFormErrorProps from "./AppFormErrorProps";

const AppFormError = forwardRef<HTMLParagraphElement, AppFormErrorProps>(
  (props, ref) => {
    // Props
    const { children, className, ...restProps } = props;

    if (!children) return undefined;

    return (
      <p
        ref={ref}
        className={mergeStyles(
          "text-center text-error border-error border-1 rounded-sm p-2.5 mb-3 w-full text-sm bg-red-100 transition-all",
          className
        )}
        {...restProps}
      >
        {children}
      </p>
    );
  }
);

export default AppFormError;
