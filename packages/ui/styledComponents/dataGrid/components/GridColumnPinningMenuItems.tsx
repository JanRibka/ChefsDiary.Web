import { MouseEvent } from "react";

import MenuItem from "@mui/material/MenuItem";

import { GridPinnedPosition } from "../hooks/features/columnPinning/gridColumnPinningInterface";
import { useGridApiContext } from "../hooks/utils/useGridApiContext";
import { GridColDef } from "../models/colDef/gridColDef";

interface GridColumnPinningMenuItemsProps {
  column?: GridColDef;
  onClick?: (event: React.MouseEvent<any>) => void;
}

const GridColumnPinningMenuItems = (props: GridColumnPinningMenuItemsProps) => {
  const { column, onClick } = props;
  const apiRef = useGridApiContext();

  const pinColumn =
    (side: GridPinnedPosition) => (event: MouseEvent<HTMLElement>) => {
      apiRef.current.pinColumn(column!.field, side);

      if (onClick) {
        onClick(event);
      }
    };

  const unpinColumn = (event: React.MouseEvent<HTMLElement>) => {
    apiRef.current.unpinColumn(column!.field);

    if (onClick) {
      onClick(event);
    }
  };

  if (!column) {
    return null;
  }

  const side = apiRef.current.isColumnPinned(column.field);

  if (side) {
    const otherSide =
      side === GridPinnedPosition.right
        ? GridPinnedPosition.left
        : GridPinnedPosition.right;
    const label =
      otherSide === GridPinnedPosition.right ? "pinToRight" : "pinToLeft";

    return (
      <>
        <MenuItem onClick={pinColumn(otherSide)}>
          {apiRef.current.getLocaleText(label)}
        </MenuItem>
        <MenuItem onClick={unpinColumn}>
          {apiRef.current.getLocaleText("unpin")}
        </MenuItem>
      </>
    );
  }

  return (
    <>
      <MenuItem onClick={pinColumn(GridPinnedPosition.left)}>
        {apiRef.current.getLocaleText("pinToLeft")}
      </MenuItem>
      <MenuItem onClick={pinColumn(GridPinnedPosition.right)}>
        {apiRef.current.getLocaleText("pinToRight")}
      </MenuItem>
    </>
  );
};

export { GridColumnPinningMenuItems };
