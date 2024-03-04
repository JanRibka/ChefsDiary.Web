import { useMemo } from "react";

const useUniqueId = (name: string): string => {
  return useMemo(() => {
    const randomNumber: string = (Math.random() * 10000).toFixed(0);

    return `${name}-${randomNumber}`;
  }, [name]);
};

export default useUniqueId;
