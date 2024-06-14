import { forwardRef } from "react";

import { useGridApiContext } from "../hooks/utils/useGridApiContext";
import { GridOverlay, GridOverlayProps } from "./containers/GridOverlay";

const GridNoRowsOverlay = forwardRef<HTMLDivElement, GridOverlayProps>(
  function GridNoRowsOverlay(props, ref) {
    const apiRef = useGridApiContext();
    const noRowsLabel = apiRef.current.getLocaleText("noRowsLabel");

    return (
      <GridOverlay ref={ref} {...props}>
        {noRowsLabel}
      </GridOverlay>
    );
  }
);

export { GridNoRowsOverlay };
