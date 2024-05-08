import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  AppButton,
  AppCheckbox,
  AppPasswordField,
  AppTextField,
} from "@repo/ui/styledComponents";

import { AppRoutes } from "../../app/routes/appRoutes";
import { useAuthSlice } from "../../app/store/auth/useAuthSlice";
import {
  useLogoutMutation,
  useTestMutation,
} from "../../shared/api/auth/authApi";

// TODO: Pokud zadám do prohlížeče nějakou stránku a přesměruje mě to na přihlášení, tak po přihlášení mě to musí vrátit tam, kde jsem chtěl původně jít
const Home = () => {
  const [checked, setChecked] = useState<boolean>(false);
  const [test] = useTestMutation();
  const [logout] = useLogoutMutation();
  const navigate = useNavigate();
  const { reset } = useAuthSlice();

  const handleTest = async () => {
    await test();
  };

  const handleLogout = async () => {
    await logout();
    reset();
    navigate(AppRoutes.Home);
  };

  return (
    <div className="mx-2">
      <AppTextField name="sdf" label="Email" radius="full" onBlur={() => {}} />

      <AppPasswordField name="password" label="Heslo" onBlur={() => {}} />
      <button
        onClick={() => {
          handleTest();
        }}
      >
        Test
      </button>

      <button
        onClick={() => {
          handleLogout();
        }}
      >
        Logout
      </button>

      <AppCheckbox
        checked={checked}
        name="dd"
        label="Gds"
        onCheckedChange={() => {
          setChecked((prev) => !prev);
        }}
      />

      <AppButton variant="outlined">Test</AppButton>
    </div>
  );
};

export default Home;
