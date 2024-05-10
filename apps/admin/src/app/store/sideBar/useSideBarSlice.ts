import { useAppDispatch } from "../store";
import { actions } from "./sideBarSlice";

export const useSideBarSlice = () => {
  const dispatch = useAppDispatch();

  const setOpen = (open: boolean) => {
    dispatch(actions.setOpen(open));
  };

  const setActualValue = (actualValue: string) => {
    dispatch(actions.setActualValue(actualValue));
  };

  return { setOpen, setActualValue };
};
