import { useAppDispatch } from "../store";
import { actions, AuthState } from "./authSlice";

export const useAuthSlice = () => {
  const dispatch = useAppDispatch();

  const update = (data: Partial<AuthState>) => {
    dispatch(actions.update(data));
  };

  const reset = () => {
    dispatch(actions.reset());
  };

  return { update, reset };
};
