import PropTypes from "prop-types";
import * as React from "react";

import { gridVisibleTopLevelRowCountSelector } from "../hooks/features/filter/gridFilterSelector";
import { gridTopLevelRowCountSelector } from "../hooks/features/rows/gridRowsSelector";
import { selectedGridRowsCountSelector } from "../hooks/features/selection/gridSelectionSelector";
import { useGridApiContext } from "../hooks/utils/useGridApiContext";
import { useGridRootProps } from "../hooks/utils/useGridRootProps";
import { useGridSelector } from "../hooks/utils/useGridSelector";
import {
  GridFooterContainer,
  GridFooterContainerProps,
} from "./containers/GridFooterContainer";
import { GridRowCount } from "./GridRowCount";
import { GridSelectedRowCount } from "./GridSelectedRowCount";

const GridFooter = React.forwardRef<HTMLDivElement, GridFooterContainerProps>(
  function GridFooter(props, ref) {
    const apiRef = useGridApiContext();
    const rootProps = useGridRootProps();
    const totalTopLevelRowCount = useGridSelector(
      apiRef,
      gridTopLevelRowCountSelector
    );
    const selectedRowCount = useGridSelector(
      apiRef,
      selectedGridRowsCountSelector
    );
    const visibleTopLevelRowCount = useGridSelector(
      apiRef,
      gridVisibleTopLevelRowCountSelector
    );

    const selectedRowCountElement =
      !rootProps.hideFooterSelectedRowCount && selectedRowCount > 0 ? (
        <GridSelectedRowCount selectedRowCount={selectedRowCount} />
      ) : (
        <div />
      );

    const rowCountElement =
      !rootProps.hideFooterRowCount && !rootProps.pagination ? (
        <GridRowCount
          rowCount={totalTopLevelRowCount}
          visibleRowCount={visibleTopLevelRowCount}
        />
      ) : null;

    const paginationElement = rootProps.pagination &&
      !rootProps.hideFooterPagination &&
      rootProps.components.Pagination && (
        <rootProps.components.Pagination
          {...rootProps.componentsProps?.pagination}
        />
      );

    return (
      <GridFooterContainer ref={ref} {...props}>
        {selectedRowCountElement}
        {rowCountElement}
        {paginationElement}
      </GridFooterContainer>
    );
  }
);

GridFooter.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  sx: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])
    ),
    PropTypes.func,
    PropTypes.object,
  ]),
} as any;

export { GridFooter };
