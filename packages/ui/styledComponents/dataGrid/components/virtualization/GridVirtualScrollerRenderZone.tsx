import clsx from "clsx";
import { forwardRef } from "react";

import { unstable_composeClasses as composeClasses } from "@mui/material";
import { styled, SxProps, Theme } from "@mui/material/styles";

import { getDataGridUtilityClass } from "../../constants/gridClasses";
import { useGridRootProps } from "../../hooks/utils/useGridRootProps";
import { DataGridProcessedProps } from "../../models/props/gridProps";

type OwnerState = DataGridProcessedProps;

// const useUtilityClasses = (ownerState: OwnerState) => {
//   const { classes } = ownerState;

//   const slots = {
//     root: ["virtualScrollerRenderZone"],
//   };

//   return composeClasses(slots, getDataGridUtilityClass, classes);
// };

const VirtualScrollerRenderZoneRoot = styled("div", {
  name: "MuiDataGrid",
  slot: "VirtualScrollerRenderZone",
  overridesResolver: (props, styles) => styles.virtualScrollerRenderZone,
})<{ ownerState: OwnerState }>({
  position: "absolute",
  display: "flex", // Prevents margin collapsing when using `getRowSpacing`
  flexDirection: "column",
});

const GridVirtualScrollerRenderZone = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { sx?: SxProps<Theme> }
>(function GridVirtualScrollerRenderZone(props, ref) {
  const { className, ...other } = props;
  // const rootProps = useGridRootProps();
  // const classes = useUtilityClasses(rootProps);

  return (
    <VirtualScrollerRenderZoneRoot
      ref={ref}
      className={clsx(classes.root, className)}
      ownerState={rootProps}
      {...other}
    />
  );
});

export { GridVirtualScrollerRenderZone };
