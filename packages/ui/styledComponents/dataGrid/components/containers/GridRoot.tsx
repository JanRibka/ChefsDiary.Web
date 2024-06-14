import { forwardRef, HTMLAttributes } from "react";

import { useGridApiContext } from "../../utils/useGridApiContext";
import { useGridRootProps } from "../../utils/useGridRootProps";

export interface GridRootProps extends HTMLAttributes<HTMLDivElement> {}

const GridRoot = forwardRef<HTMLDivElement, GridRootProps>(
  function GridRoot(props, ref) {
    const { children, className, ...restProps } = props;

    const apiRef = useGridApiContext();

    const rootProps = useGridRootProps();

    apiRef.current.rootElementRef = rootContainerRef;

    return (
      <div
        ref={ref}
        role="grid"
        className=""
        aria-multiselectable={!rootProps.disableMultipleSelection}
        aria-label={rootProps["aria-label"]}
        aria-labelledby={rootProps["aria-labelledby"]}
        {...restProps}
      >
        {children}
      </div>
    );
  }
);

export { GridRoot };
