import { forwardRef } from "react";

import { gridDensityRowHeightSelector } from "../hooks/features/density/densitySelector";
import { useGridApiContext } from "../hooks/utils/useGridApiContext";
import { useGridSelector } from "../models/api/useGridSelector";
import { GridOverlay, GridOverlayProps } from "./containers/GridOverlay";

export interface ErrorOverlayProps extends GridOverlayProps {
  error?: Error;
  hasError: boolean;
  errorInfo: any;
}

// TODO v6: rename to GridErrorOverlay
export const ErrorOverlay = forwardRef<HTMLDivElement, ErrorOverlayProps>(
  function ErrorOverlay(props: ErrorOverlayProps, ref) {
    const { error, hasError, errorInfo, ...other } = props;
    const apiRef = useGridApiContext();
    const defaultLabel = apiRef.current.getLocaleText(
      "errorOverlayDefaultLabel"
    );
    const rowHeight = useGridSelector(apiRef, gridDensityRowHeightSelector);

    return (
      <GridOverlay
        ref={ref}
        sx={{ width: "100%", minHeight: 2 * rowHeight }}
        {...other}
      >
        {error?.message || defaultLabel}
      </GridOverlay>
    );
  }
);
