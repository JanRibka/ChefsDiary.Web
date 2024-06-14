import { useEffect, useLayoutEffect } from "react";

const useEnhancedEffect: typeof useEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

export default useEnhancedEffect;
