import { cloneElement, ReactElement } from "react";

import GridBodyCellBase, { GridBodyCellBaseProps } from "./GridBodyCellBase";

interface GridBodyCellActionsProps
  extends Omit<GridBodyCellBaseProps, "children"> {
  actionButtons: ReactElement[];
}

const GridBodyCellActions = (props: GridBodyCellActionsProps) => {
  const { align, actionButtons, ...restProps } = props;

  return (
    <GridBodyCellBase align={align} {...restProps}>
      {actionButtons.map((item, index) =>
        cloneElement(item, { key: `action-button_${index}` })
      )}
    </GridBodyCellBase>
  );
};

export default GridBodyCellActions;
