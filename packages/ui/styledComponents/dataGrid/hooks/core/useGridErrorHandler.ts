import * as React from "react";

import { GridApiCommunity } from "../../models/api/gridApiCommunity";
import { DataGridProcessedProps } from "../../models/props/gridProps";
import { useGridApiEventHandler } from "../utils/useGridApiEventHandler";

export function useGridErrorHandler(
  apiRef: React.MutableRefObject<GridApiCommunity>,
  props: Pick<DataGridProcessedProps, "error">
) {
  const handleError = React.useCallback(
    (args: any) => {
      // We are handling error here, to set up the handler as early as possible and be able to catch error thrown at init time.
      apiRef.current.setState((state) => ({ ...state, error: args }));
    },
    [apiRef]
  );

  React.useEffect(() => {
    if (props.error) {
      handleError({ error: props.error });
    } else {
      handleError(null);
    }
  }, [handleError, props.error]);

  useGridApiEventHandler(apiRef, "componentError", handleError);
}
