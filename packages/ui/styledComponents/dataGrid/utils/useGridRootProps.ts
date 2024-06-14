import * as React from "react";

import { GridRootPropsContext } from "../context/GridRootPropsContext";
import { DataGridProcessedProps } from "../models/props/gridProps";

export const useGridRootProps = () => {
  const contextValue = React.useContext(GridRootPropsContext);

  if (!contextValue) {
    throw new Error(
      "MUI: useGridRootProps should only be used inside the DataGrid, DataGridPro or DataGridPremium component."
    );
  }

  return contextValue as DataGridProcessedProps;
};
