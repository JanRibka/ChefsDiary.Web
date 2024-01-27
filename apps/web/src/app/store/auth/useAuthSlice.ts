import { useAppDispatch } from "../store";
import { actions, AuthSlice } from "./authSlice";

export const useAuthSlice = () => {
  const dispatch = useAppDispatch();

  const update = (data: Partial<AuthSlice>) => {
    dispatch(actions.update(data));
  };

  return { update };
};
