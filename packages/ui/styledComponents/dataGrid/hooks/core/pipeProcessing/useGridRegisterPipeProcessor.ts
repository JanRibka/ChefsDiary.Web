import { useCallback, useEffect, useRef } from "react";

import { GridApiCommon } from "../../../models/api/gridApiCommon";
import { useFirstRender } from "../../utils/useFirstRender";
import {
  GridPipeProcessor,
  GridPipeProcessorGroup,
} from "./gridPipeProcessingApi";

export const useGridRegisterPipeProcessor = <
  Api extends GridApiCommon,
  G extends GridPipeProcessorGroup,
>(
  apiRef: React.MutableRefObject<Api>,
  group: G,
  callback: GridPipeProcessor<G>
) => {
  const cleanup = useRef<(() => void) | null>();
  const id = useRef(`mui-${Math.round(Math.random() * 1e9)}`);

  const registerPreProcessor = useCallback(() => {
    cleanup.current = apiRef.current.unstable_registerPipeProcessor(
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
