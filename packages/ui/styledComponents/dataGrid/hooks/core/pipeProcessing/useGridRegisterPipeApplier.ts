import { useCallback, useEffect, useRef } from "react";

import { GridApiCommon } from "../../../models/api/gridApiCommon";
import { useFirstRender } from "../../utils/useFirstRender";
import { GridPipeProcessorGroup } from "./gridPipeProcessingApi";

export const useGridRegisterPipeApplier = <
  Api extends GridApiCommon,
  G extends GridPipeProcessorGroup,
>(
  apiRef: React.MutableRefObject<Api>,
  group: G,
  callback: () => void
) => {
  const cleanup = useRef<(() => void) | null>();
  const id = useRef(`mui-${Math.round(Math.random() * 1e9)}`);

  const registerPreProcessor = useCallback(() => {
    cleanup.current = apiRef.current.unstable_registerPipeApplier(
      group,
      id.current,
      callback
    );
  }, [apiRef, callback, group]);

  useFirstRender(() => {
    registerPreProcessor();
  });

  const isFirstRender = useRef(true);
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
    } else {
      registerPreProcessor();
    }

    return () => {
      if (cleanup.current) {
        cleanup.current();
        cleanup.current = null;
      }
    };
  }, [registerPreProcessor]);
};
