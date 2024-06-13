import { forwardRef, HTMLAttributes } from "react";

import { mergeStyles } from "@repo/shared/helpers";

export interface DataGridRootProps extends HTMLAttributes<HTMLTableElement> {}

const DataGridRoot = forwardRef<HTMLTableElement, DataGridRootProps>(
  function GridRoot(props, ref) {
    const { children, className, ...restProps } = props;

    return (
      <table
        ref={ref}
        {...restProps}
        className={mergeStyles("w-full text-sm text-left", className)}
      >
        {children}
      </table>
    );
  }
);

export default DataGridRoot;
