import * as React from "react";

import { useGridApiContext } from "../../../hooks/utils/useGridApiContext";
import { GridColumnMenuContainer } from "./GridColumnMenuContainer";
import { GridColumnMenuProps } from "./GridColumnMenuProps";
import { GridColumnsMenuItem } from "./GridColumnsMenuItem";
import { GridFilterMenuItem } from "./GridFilterMenuItem";
import { HideGridColMenuItem } from "./HideGridColMenuItem";
import { SortGridMenuItems } from "./SortGridMenuItems";

const GridColumnMenu = React.forwardRef<HTMLUListElement, GridColumnMenuProps>(
  function GridColumnMenu(props: GridColumnMenuProps, ref) {
    const { hideMenu, currentColumn } = props;
    const apiRef = useGridApiContext();

    const defaultButtons = [
      <SortGridMenuItems onClick={hideMenu} column={currentColumn!} />, // TODO update types to allow `onClick` and `column` to be optional
      <GridFilterMenuItem onClick={hideMenu} column={currentColumn!} />,
      <HideGridColMenuItem onClick={hideMenu} column={currentColumn!} />,
      <GridColumnsMenuItem onClick={hideMenu} column={currentColumn!} />,
    ];

    const preProcessedButtons = apiRef.current.unstable_applyPipeProcessors(
      "columnMenu",
      defaultButtons,
      currentColumn
    );

    return (
      <GridColumnMenuContainer ref={ref} {...props}>
        {preProcessedButtons.map((button: any, index: number) =>
          React.cloneElement(button, {
            key: index,
            onClick: hideMenu,
            column: currentColumn,
          })
        )}
      </GridColumnMenuContainer>
    );
  }
);

export { GridColumnMenu };
