import { ReactNode } from "react";

import { mergeStyles } from "@repo/shared/helpers";

import { cellBaseVariants } from "./cellBaseVariants";

export interface GridBodyCellBaseProps
  extends React.HTMLAttributes<HTMLSpanElement> {
  align?: "left" | "center" | "right";
  children: ReactNode;
}

const GridBodyCellBase = (props: GridBodyCellBaseProps) => {
  const { className, align, children, ...restProps } = props;
  return (
    <span
      className={mergeStyles(className, cellBaseVariants({ align: align }))}
      {...restProps}
    >
      {children}
    </span>
  );
};

export default GridBodyCellBase;
