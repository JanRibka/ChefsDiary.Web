import { FocusEvent } from "react";

import useLocalStorage from "../useLocalStorage/useLocalStorage";

const useInput = (
  key: string,
  initValue: string
): [
  value: string,
  reset: () => void,
  attributeObj: {
    value: string;
    onBlur: (e: FocusEvent<HTMLInputElement, Element>) => void;
  },
] => {
  const [value, setValue] = useLocalStorage<string>(key, initValue);

  const reset = () => setValue(initValue);

  const attributeObj = {
    value,
    onBlur: (e: FocusEvent<HTMLInputElement, Element>) =>
      setValue(e.target.value),
  };

  return [value, reset, attributeObj];
};

export default useInput;
