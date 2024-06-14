import { forwardRef, HTMLAttributes, useRef, useState } from "react";

import { gridVisibleColumnDefinitionsSelector } from "../../hooks/features/columns/gridColumnsSelector";
import {
  gridDensityHeaderGroupingMaxDepthSelector,
  gridDensityValueSelector,
} from "../../hooks/features/density/densitySelector";
import {
  gridPinnedRowsCountSelector,
  gridRowCountSelector,
} from "../../hooks/features/rows/gridRowsSelector";
import useEnhancedEffect from "../../hooks/utils/useEnhancedEffect";
import useForkRef from "../../hooks/utils/useForkRef";
import { useGridApiContext } from "../../hooks/utils/useGridApiContext";
import { useGridRootProps } from "../../hooks/utils/useGridRootProps";
import { useGridSelector } from "../../models/api/useGridSelector";
import { GridRootContainerRef } from "../../models/gridRootContainerRef";

export interface GridRootProps extends HTMLAttributes<HTMLDivElement> {}

const GridRoot = forwardRef<HTMLDivElement, GridRootProps>(
  function GridRoot(props, ref) {
    const { children, className, ...restProps } = props;

    const apiRef = useGridApiContext();
    const rootContainerRef: GridRootContainerRef = useRef<HTMLDivElement>(null);
    const handleRef = useForkRef(rootContainerRef, ref);

    const rootProps = useGridRootProps();
    const visibleColumns = useGridSelector(
      apiRef,
      gridVisibleColumnDefinitionsSelector
    );
    const totalRowCount = useGridSelector(apiRef, gridRowCountSelector);
    const densityValue = useGridSelector(apiRef, gridDensityValueSelector);
    const headerGroupingMaxDepth = useGridSelector(
      apiRef,
      gridDensityHeaderGroupingMaxDepthSelector
    );
    const pinnedRowsCount = useGridSelector(
      apiRef,
      gridPinnedRowsCountSelector
    );

    const ownerState = {
      ...rootProps,
      density: densityValue,
    };

    apiRef.current.rootElementRef = rootContainerRef;

    // Our implementation of <NoSsr />
    const [mountedState, setMountedState] = useState(false);
    useEnhancedEffect(() => {
      setMountedState(true);
    }, []);

    useEnhancedEffect(() => {
      if (mountedState) {
        apiRef.current.unstable_updateGridDimensionsRef();
      }
    }, [apiRef, mountedState]);

    if (!mountedState) {
      return null;
    }

    return (
      <div
        ref={handleRef}
        role="grid"
        className=""
        aria-colcount={visibleColumns.length}
        aria-rowcount={
          headerGroupingMaxDepth + 1 + pinnedRowsCount + totalRowCount
        }
        aria-multiselectable={!rootProps.disableMultipleSelection}
        aria-label={rootProps["aria-label"]}
        aria-labelledby={rootProps["aria-labelledby"]}
        // ownerState={ownerState}
        {...restProps}
      >
        {children}
      </div>
    );
  }
);

export { GridRoot };
