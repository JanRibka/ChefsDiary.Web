import { forwardRef } from "react";

import { GridOverlay, GridOverlayProps } from "./containers/GridOverlay";

const GridLoadingOverlay = forwardRef<HTMLDivElement, GridOverlayProps>(
  function GridLoadingOverlay(props, ref) {
    return (
      <GridOverlay ref={ref} {...props}>
        {/* <CircularProgress /> */}
        <div>Loading...</div>
      </GridOverlay>
    );
  }
);

export { GridLoadingOverlay };
