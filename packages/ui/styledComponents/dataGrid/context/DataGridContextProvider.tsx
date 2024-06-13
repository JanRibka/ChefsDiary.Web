import { MutableRefObject, ReactNode, useRef } from "react";

import { GridPrivateApiContext } from "../utils/useGridPrivateApiContext";
import { GridRootPropsContext } from "./GridRootPropsContext";

type DataGridContextProviderProps = {
  privateApiRef: MutableRefObject<GridPrivateApiCommunity>;
  props: {};
  children: ReactNode;
};

export const DataGridContextProvider = (
  props: DataGridContextProviderProps
) => {
  const apiRef = useRef(props.privateApiRef.current.getPublicApi());

  return (
    <GridRootPropsContext.Provider value={props.props}>
      <GridPrivateApiContext.Provider value={props.privateApiRef}>
        <GridApiContext></GridApiContext>
      </GridPrivateApiContext.Provider>
    </GridRootPropsContext.Provider>
  );
};
