import clsx from "clsx";
import { useEffect, useRef } from "react";

// import { unstable_composeClasses as composeClasses } from "@mui/material";
import ClickAwayListener, {
  ClickAwayListenerProps,
} from "@mui/material/ClickAwayListener";
import Grow, { GrowProps } from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper, { PopperProps } from "@mui/material/Popper";
import { styled } from "@mui/material/styles";
import { HTMLElementType } from "@mui/utils";

import {
  getDataGridUtilityClass,
  gridClasses,
} from "../../constants/gridClasses";
import { useGridApiContext } from "../../hooks/utils/useGridApiContext";
import { useGridRootProps } from "../../hooks/utils/useGridRootProps";
import { DataGridProcessedProps } from "../../models/props/gridProps";

type MenuPosition =
  | "bottom-end"
  | "bottom-start"
  | "bottom"
  | "left-end"
  | "left-start"
  | "left"
  | "right-end"
  | "right-start"
  | "right"
  | "top-end"
  | "top-start"
  | "top"
  | undefined;

type OwnerState = DataGridProcessedProps;

// const useUtilityClasses = (ownerState: OwnerState) => {
//   const { classes } = ownerState;

//   const slots = {
//     root: ["menu"],
//   };

//   return composeClasses(slots, getDataGridUtilityClass, classes);
// };

const GridMenuRoot = styled(Popper, {
  name: "MuiDataGrid",
  slot: "Menu",
  overridesResolver: (props, styles) => styles.menu,
})<{ ownerState: OwnerState }>(({ theme }) => ({
  zIndex: theme.zIndex.modal,
  [`& .${gridClasses.menuList}`]: {
    outline: 0,
  },
}));

export interface GridMenuProps
  extends Omit<PopperProps, "onKeyDown" | "children"> {
  open: boolean;
  target: HTMLElement | null;
  onClickAway: ClickAwayListenerProps["onClickAway"];
  position?: MenuPosition;
  onExited?: GrowProps["onExited"];
  children: React.ReactNode;
}

const transformOrigin = {
  "bottom-start": "top left",
  "bottom-end": "top right",
};

const GridMenu = (props: GridMenuProps) => {
  const {
    open,
    target,
    onClickAway,
    children,
    position,
    className,
    onExited,
    ...other
  } = props;
  const apiRef = useGridApiContext();
  const prevTarget = useRef(target);
  const prevOpen = useRef(open);
  const rootProps = useGridRootProps();
  // const classes = useUtilityClasses(rootProps);

  useEffect(() => {
    if (prevOpen.current && prevTarget.current) {
      (prevTarget.current as HTMLElement).focus();
    }

    // Emit menuOpen or menuClose events
    const eventName = open ? "menuOpen" : "menuClose";
    apiRef.current.publishEvent(eventName, { target });

    prevOpen.current = open;
    prevTarget.current = target;
  }, [apiRef, open, target]);

  const handleExited =
    (popperOnExited: (() => {}) | undefined) => (node: HTMLElement) => {
      if (popperOnExited) {
        popperOnExited();
      }

      if (onExited) {
        onExited(node);
      }
    };

  return (
    <GridMenuRoot
      as={rootProps.components.BasePopper}
      className={clsx(className, classes.root)}
      ownerState={rootProps}
      open={open}
      anchorEl={target as any}
      transition
      placement={position}
      {...other}
      {...rootProps.componentsProps?.basePopper}
    >
      {({ TransitionProps, placement }) => (
        <ClickAwayListener onClickAway={onClickAway} mouseEvent="onMouseDown">
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                transformOrigin[placement as keyof typeof transformOrigin],
            }}
            onExited={handleExited(TransitionProps?.onExited)}
          >
            <Paper>{children}</Paper>
          </Grow>
        </ClickAwayListener>
      )}
    </GridMenuRoot>
  );
};

export { GridMenu };
