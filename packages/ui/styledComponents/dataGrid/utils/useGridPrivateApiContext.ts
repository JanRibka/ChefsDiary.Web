import { createContext, useContext } from "react";

export const GridPrivateApiContext = createContext<unknown>(undefined);

export function useGridPrivateApiContext<
  PrivateApi extends GridPrivateApiCommon = GridPrivateApiCommunity,
>(): React.MutableRefObject<PrivateApi> {
  const privateApiRef = useContext(GridPrivateApiContext);

  if (privateApiRef === undefined) {
    throw new Error(
      [
        "Could not find the data grid private context.",
        "It looks like you rendered your component outside of a DataGrid, DataGridPro or DataGridPremium parent component.",
        "This can also happen if you are bundling multiple versions of the data grid.",
      ].join("\n")
    );
  }

  return privateApiRef as React.MutableRefObject<PrivateApi>;
}
