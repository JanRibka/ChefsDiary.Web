import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { AppRoutes } from "../../app/routes/appRoutes";
import useLogout from "../../shared/api/apiHooks/auth/useLogout";
import AppButton from "../../shared/styledComponents/button/AppButton";
import AppCheckbox from "../../shared/styledComponents/checkbox/AppCheckbox";
import AppPasswordField from "../../shared/styledComponents/passwordField/AppPasswordField";
import AppTextField from "../../shared/styledComponents/textField/AppTextField";

// TODO: Pokud zadám do prohlížeče nějakou stránku a přesměruje mě to na přihlášení, tak po přihlášení mě to musí vrátit tam, kde jsem chtěl původně jít
const Home = () => {
  const [checked, setChecked] = useState<boolean>(false);
  const { logoutUser } = useLogout();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logoutUser();
    navigate(AppRoutes.Home);
  };

  return (
    <div className="mx-2">
      <AppTextField name="sdf" label="Email" radius="full" onBlur={() => {}} />

      <AppPasswordField name="password" label="Heslo" onBlur={() => {}} />
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
