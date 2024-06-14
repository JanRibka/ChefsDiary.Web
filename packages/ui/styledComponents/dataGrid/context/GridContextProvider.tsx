import { MutableRefObject, ReactNode } from "react";

import { GridApiCommunity } from "../models/api/gridApiCommunity";
import { GridApiContext } from "./GridApiContext";
import { GridRootPropsContext } from "./GridRootPropsContext";

type GridContextProviderProps = {
  apiRef: MutableRefObject<GridApiCommunity>;
  props: {};
  children: ReactNode;
};

export const DataGridContextProvider = (props: GridContextProviderProps) => {
  return (
    <GridRootPropsContext.Provider value={props.props}>
      <GridApiContext.Provider value={props.apiRef}>
        {props.children}
      </GridApiContext.Provider>
    </GridRootPropsContext.Provider>
  );
};
