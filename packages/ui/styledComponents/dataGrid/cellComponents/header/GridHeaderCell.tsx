import { ReactNode } from "react";

import { mergeStyles } from "@repo/shared/helpers";

import { gridHeaderCellVariants } from "./gridHeaderCellVariants";

export interface GridBodyCellBaseProps
  extends React.HTMLAttributes<HTMLSpanElement> {
  align?: "left" | "center" | "right";
  children: ReactNode;
}

const GridHeaderCell = (props: GridBodyCellBaseProps) => {
  // Props
  const { className, align, children, ...restProps } = props;

  return (
    <span
      className={mergeStyles(
        className,
        gridHeaderCellVariants({ align: align })
      )}
      {...restProps}
    >
      {children}
    </span>
  );
};

export default GridHeaderCell;
