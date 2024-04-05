import { useState } from "react";

import {
  useLogoutMutation,
  useRefreshTokenMutation,
} from "../../shared/api/auth/authApi";
import AppButton from "../../shared/styledComponents/button/AppButton";
import AppCheckbox from "../../shared/styledComponents/checkbox/AppCheckbox";
import AppPasswordField from "../../shared/styledComponents/passwordField/AppPasswordField";
import AppTextField from "../../shared/styledComponents/textField/AppTextField";

// TODO: Pokud zadám do prohlížeče nějakou stránku a přesměruje mě to na přihlášení, tak po přihlášení mě to musí vrátit tam, kde jsem chtěl původně jít
const Home = () => {
  const [checked, setChecked] = useState<boolean>(false);
  const [logout] = useLogoutMutation();
  const [refreshToken] = useRefreshTokenMutation();

  return (
    <div className="mx-2">
      <AppTextField name="sdf" label="Email" radius="full" onBlur={() => {}} />

      <AppPasswordField name="password" label="Heslo" onBlur={() => {}} />
      <button
        onClick={() => {
          logout();
        }}
      >
        Logout
      </button>

      <button
        onClick={() => {
          refreshToken();
        }}
      >
        Refresh token
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
