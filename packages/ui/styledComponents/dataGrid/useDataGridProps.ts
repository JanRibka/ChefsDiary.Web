import { useMemo } from "react";

import AppDataGridProps from "../props/AppDataGridProps";
import { GridValidRowModel } from "./types/gridRows";
import { useProps } from "./utils/useProps";

export const useDataGridProps = <R extends GridValidRowModel>(
  inProps: AppDataGridProps<R>
) => {
  const props = useProps(inProps);

  const slots = useMemo(() => {}, []);
};
