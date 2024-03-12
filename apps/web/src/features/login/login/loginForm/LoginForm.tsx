import { FocusEvent, useEffect, useRef, useState } from "react";

import * as Checkbox from "@radix-ui/react-checkbox";

import useLogin from "../../../../shared/api/apiHooks/auth/useLogin";
import SubmitButton from "../../../../shared/components/submitButton/SubmitButton";
import AppCheckbox from "../../../../shared/styledComponents/checkbox/AppCheckbox";
import AppPasswordField from "../../../../shared/styledComponents/passwordField/AppPasswordField";
import AppTextField from "../../../../shared/styledComponents/textField/AppTextField";

const LoginForm = () => {
  // References
  const refLogin = useRef<HTMLInputElement>(null);

  // State
  const [userLogin, setUserLogin] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [stayLogged, setStayLogged] = useState<boolean>(false);

  // Constants
  const { loginUser } = useLogin();

  // Other
  useEffect(() => {
    refLogin.current?.focus();
  }, []);

  const handleOnBlurLogin = (e: FocusEvent<HTMLInputElement, Element>) => {
    const value = e.target.value;

    setUserLogin(value);
  };

  const handleOnBlurPassword = (e: FocusEvent<HTMLInputElement, Element>) => {
    const value = e.target.value;

    setPassword(value);
  };

  const handleOnCheckedChange = (state: Checkbox.CheckedState) => {
    const value: boolean = state as boolean;

    setStayLogged(value);
  };

  const handleAction = async (data: FormData) => {
    const response = await loginUser(data);
    // TODO: udelat nejaky helper na vyhodnoceni response. BUDE GENERICKY jak na error, bude genericky tak asi i na data
    debugger;
  };

  return (
    <div className="flex flex-col items-center">
      <h3 className="!text-3xl mb-7">Přihlášení</h3>
      <form action={handleAction} className="w-full">
        <AppTextField
          ref={refLogin}
          value={userLogin}
          name="login"
          label="Uživatelské jméno"
          className="mb-3"
          // required
          autoComplete="username"
          onBlur={handleOnBlurLogin}
        />

        <AppPasswordField
          value={password}
          name="password"
          label="Heslo"
          className="mb-3"
          // required
          autoComplete="current-password"
          onBlur={handleOnBlurPassword}
        />

        <AppCheckbox
          checked={stayLogged}
          name="stayLogged"
          label="Zůstat přihlášený "
          className="mb-3"
          onCheckedChange={handleOnCheckedChange}
        />

        <SubmitButton className="w-full" variant="contained">
          Přihlásit
        </SubmitButton>
      </form>
    </div>
  );
};

export default LoginForm;
