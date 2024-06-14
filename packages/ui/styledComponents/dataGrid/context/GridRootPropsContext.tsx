import { createContext } from "react";

const GridRootPropsContext = createContext<unknown>(undefined);

if (process.env.NODE_ENV !== "production") {
  GridRootPropsContext.displayName = "GridRootPropsContext";
}

export { GridRootPropsContext };
