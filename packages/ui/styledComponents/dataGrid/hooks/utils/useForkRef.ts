import { Ref, useCallback } from "react";

function useForkRef<T>(...refs: Array<Ref<T> | null>): Ref<T> {
  return useCallback(
    (node: T | null) => {
      refs.forEach((ref) => {
        if (typeof ref === "function") {
          ref(node);
        } else if (ref !== null && typeof ref === "object") {
          (ref as React.MutableRefObject<T | null>).current = node;
        }
      });
    },
    [refs]
  );
}

export default useForkRef;
