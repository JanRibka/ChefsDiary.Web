import { useContext } from "react";

import { GridApiContext } from "../context/GridApiContext";
import { GridApiCommon } from "../models/api/gridApiCommon";
import { GridApiCommunity } from "../models/api/gridApiCommunity";

export function useGridApiContext<
  Api extends GridApiCommon = GridApiCommunity,
>(): React.MutableRefObject<Api> {
  const apiRef = useContext(GridApiContext);

  if (apiRef === undefined) {
    throw new Error(
      [
        "Could not find the data grid context.",
        "It looks like you rendered your component outside of a DataGrid, DataGridPro or DataGridPremium parent component.",
        "This can also happen if you are bundling multiple versions of the data grid.",
      ].join("\n")
    );
  }

  return apiRef as React.MutableRefObject<Api>;
}
