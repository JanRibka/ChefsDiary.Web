import { useRef } from "react";

import { GridPrivateApiCommunity } from "../models/api/gridApiCommunity";
import { GridRootPropsContext } from "./GridRootPropsContext";

type GridContextProviderProps = {
  privateApiRef: React.MutableRefObject<GridPrivateApiCommunity>;
  props: {};
  children: React.ReactNode;
};

export const GridContextProvider = (props: GridContextProviderProps) => {
  const apiRef = useRef(props.privateApiRef.current.getPublicApi());

  return (
    <GridRootPropsContext.Provider
      value={props.props}
    ></GridRootPropsContext.Provider>
  );
};
