import clsx from "clsx";
import { forwardRef } from "react";

// import { unstable_composeClasses as composeClasses } from "@mui/material";
import { styled, SxProps, Theme } from "@mui/material/styles";

// import { getDataGridUtilityClass } from "../../constants/gridClasses";
import { useGridRootProps } from "../../hooks/utils/useGridRootProps";
import { DataGridProcessedProps } from "../../models/props/gridProps";

type OwnerState = DataGridProcessedProps;

// const useUtilityClasses = (ownerState: OwnerState) => {
//   const { classes } = ownerState;

//   const slots = {
//     root: ["virtualScroller"],
//   };

//   return composeClasses(slots, getDataGridUtilityClass, classes);
// };

const VirtualScrollerRoot = styled("div", {
  name: "MuiDataGrid",
  slot: "VirtualScroller",
  overridesResolver: (props, styles) => styles.virtualScroller,
})<{ ownerState: OwnerState }>({
  overflow: "auto",
  // See https://github.com/mui/mui-x/issues/4360
  position: "relative",
  "@media print": {
    overflow: "hidden",
  },
});

const GridVirtualScroller = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { sx?: SxProps<Theme> }
>(function GridVirtualScroller(props, ref) {
  const { className, ...other } = props;
  // const rootProps = useGridRootProps();
  // const classes = useUtilityClasses(rootProps);

  return (
    <VirtualScrollerRoot
      ref={ref}
      className={clsx(classes.root, className)}
      ownerState={rootProps}
      {...other}
    />
  );
});

export { GridVirtualScroller };
