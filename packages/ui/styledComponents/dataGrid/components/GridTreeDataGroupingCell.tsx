import { unstable_composeClasses as composeClasses } from "@mui/material";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";

import { gridFilteredDescendantCountLookupSelector } from "../hooks/features/filter/gridFilterSelector";
import { useGridApiContext } from "../hooks/utils/useGridApiContext";
import { useGridRootProps } from "../hooks/utils/useGridRootProps";
import { useGridSelector } from "../models/api/useGridSelector";
import { GridRenderCellParams } from "../models/params/gridCellParams";
import { isNavigationKey } from "../utils/keyboardUtils";

// type OwnerState = { classes: DataGridProProcessedProps["classes"] };

// const useUtilityClasses = (ownerState: OwnerState) => {
//   const { classes } = ownerState;

//   const slots = {
//     root: ["treeDataGroupingCell"],
//     toggle: ["treeDataGroupingCellToggle"],
//   };

//   return composeClasses(slots, getDataGridUtilityClass, classes);
// };

interface GridTreeDataGroupingCellProps extends GridRenderCellParams {
  hideDescendantCount?: boolean;
}

const GridTreeDataGroupingCell = (props: GridTreeDataGroupingCellProps) => {
  const { id, field, formattedValue, rowNode, hideDescendantCount } = props;

  const rootProps = useGridRootProps();
  const apiRef = useGridApiContext();
  // const ownerState: OwnerState = { classes: rootProps.classes };
  // const classes = useUtilityClasses(ownerState);
  const filteredDescendantCountLookup = useGridSelector(
    apiRef,
    gridFilteredDescendantCountLookupSelector
  );

  const filteredDescendantCount =
    filteredDescendantCountLookup[rowNode.id] ?? 0;

  const Icon = rowNode.childrenExpanded
    ? rootProps.components.TreeDataCollapseIcon
    : rootProps.components.TreeDataExpandIcon;

  const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === " ") {
      event.stopPropagation();
    }
    if (isNavigationKey(event.key) && !event.shiftKey) {
      apiRef.current.publishEvent("cellNavigationKeyDown", props, event);
    }
  };

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    apiRef.current.setRowChildrenExpansion(id, !rowNode.childrenExpanded);
    apiRef.current.setCellFocus(id, field);
    event.stopPropagation(); // TODO remove event.stopPropagation
  };

  return (
    <Box className={classes.root} sx={{ ml: rowNode.depth * 2 }}>
      <div className={classes.toggle}>
        {filteredDescendantCount > 0 && (
          <IconButton
            size="small"
            onClick={handleClick}
            onKeyDown={handleKeyDown}
            tabIndex={-1}
            aria-label={
              rowNode.childrenExpanded
                ? apiRef.current.getLocaleText("treeDataCollapse")
                : apiRef.current.getLocaleText("treeDataExpand")
            }
          >
            <Icon fontSize="inherit" />
          </IconButton>
        )}
      </div>
      <span>
        {formattedValue === undefined ? rowNode.groupingKey : formattedValue}
        {!hideDescendantCount && filteredDescendantCount > 0
          ? ` (${filteredDescendantCount})`
          : ""}
      </span>
    </Box>
  );
};

export { GridTreeDataGroupingCell };
