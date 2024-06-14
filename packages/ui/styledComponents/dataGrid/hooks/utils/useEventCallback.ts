import { useCallback, useEffect, useRef } from "react";

function useEventCallback<Args extends unknown[], Return>(
  fn: (...args: Args) => Return
): (...args: Args) => Return {
  const ref = useRef(fn);

  // Uložení aktuální funkce do ref při každé změně
  useEffect(() => {
    ref.current = fn;
  }, [fn]);

  return useCallback((...args: Args) => (0, ref.current)(...args), []);
}

export default useEventCallback;
