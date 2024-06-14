import { isValidElement } from "react";

// import { unstable_composeClasses as composeClasses } from "@mui/material";
import IconButton from "@mui/material/IconButton";

import { gridDetailPanelExpandedRowsContentCacheSelector } from "../hooks/features/detailPanel/gridDetailPanelSelector";
import { useGridApiContext } from "../hooks/utils/useGridApiContext";
import { useGridRootProps } from "../hooks/utils/useGridRootProps";
import { GridApi } from "../models/api/gridApi";
import { useGridSelector } from "../models/api/useGridSelector";
import { GridRenderCellParams } from "../models/params/gridCellParams";
import { DataGridProcessedProps } from "../models/props/gridProps";

// type OwnerState = {
//   classes: DataGridProcessedProps["classes"];
//   isExpanded: boolean;
// };

// const useUtilityClasses = (ownerState: OwnerState) => {
//   const { classes, isExpanded } = ownerState;

//   const slots = {
//     root: [
//       "detailPanelToggleCell",
//       isExpanded && "detailPanelToggleCell--expanded",
//     ],
//   };

//   return composeClasses(slots, getDataGridUtilityClass, classes);
// };

const GridDetailPanelToggleCell = (props: GridRenderCellParams) => {
  const { id, value: isExpanded } = props;

  const rootProps = useGridRootProps();
  const apiRef = useGridApiContext<GridApi>();
  // const ownerState: OwnerState = { classes: rootProps.classes, isExpanded };
  // const classes = useUtilityClasses(ownerState);

  const contentCache = useGridSelector(
    apiRef,
    gridDetailPanelExpandedRowsContentCacheSelector
  );
  const hasContent = isValidElement(contentCache[id]);

  const Icon = isExpanded
    ? rootProps.components.DetailPanelCollapseIcon
    : rootProps.components.DetailPanelExpandIcon;

  return (
    <IconButton
      size="small"
      tabIndex={-1}
      disabled={!hasContent}
      className={classes.root}
      aria-label={
        isExpanded
          ? apiRef.current.getLocaleText("collapseDetailPanel")
          : apiRef.current.getLocaleText("expandDetailPanel")
      }
    >
      <Icon fontSize="inherit" />
    </IconButton>
  );
};

export { GridDetailPanelToggleCell };
