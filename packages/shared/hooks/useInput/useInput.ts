import useLocalStorage from "../useLocalStorage/useLocalStorage";

const useInput = <T>(
  key: string,
  initValue: T
): [
  value: T,
  reset: () => void,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  attributeObj: { value: T; onBlur: (e: any) => void },
] => {
  const [value, setValue] = useLocalStorage<T>(key, initValue);

  const reset = () => setValue(initValue);

  const attributeObj = {
    value,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onBlur: (e: any) => setValue(e.target.value),
  };

  return [value, reset, attributeObj];
};

export default useInput;
