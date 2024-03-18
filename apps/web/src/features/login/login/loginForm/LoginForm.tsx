import { FocusEvent, useEffect, useRef, useState } from "react";

import * as Checkbox from "@radix-ui/react-checkbox";

import { useAuthSlice } from "../../../../app/store/auth/useAuthSlice";
import useLogin from "../../../../shared/api/apiHooks/auth/useLogin";
import AppSubmitButton from "../../../../shared/components/submitButton/AppSubmitButton";
import AppAnchor from "../../../../shared/styledComponents/anchor/AppAnchor";
import AppCheckbox from "../../../../shared/styledComponents/checkbox/AppCheckbox";
import AppHoverCard from "../../../../shared/styledComponents/hoverCard/AppHoverCard";
import AppPasswordField from "../../../../shared/styledComponents/passwordField/AppPasswordField";
import AppTextField from "../../../../shared/styledComponents/textField/AppTextField";

const LoginForm = () => {
  // References
  const refLogin = useRef<HTMLInputElement>(null);
  const refErrorMessage = useRef<HTMLParagraphElement>(null);

  // State
  const [userLogin, setUserLogin] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [stayLogged, setStayLogged] = useState<boolean>(
    JSON.parse(localStorage.getItem("persist") ?? String(false))
  );

  // Constants
  const {
    loginUser,
    errorMessage,
    setErrorMessage,
    loginErrorMessage,
    setLoginErrorMessage,
    passwordErrorMessage,
    setPasswordErrorMessage,
  } = useLogin();
  const { update } = useAuthSlice();

  // Other
  useEffect(() => {
    refLogin.current?.focus();
  }, []);

  useEffect(() => {
    resetErrors();
  }, [userLogin, password]);

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
    localStorage.setItem("persist", JSON.stringify(value));
  };

  const handleAction = async (data: FormData) => {
    const response = await loginUser(data);

    if (response) {
      update({
        uuid: response.uuid,
        login: response.login,
        userRoles: response.userRoles,
        accessToken: response.accessToken,
      });
    } else {
      refErrorMessage.current?.focus();
    }
  };

  const resetErrors = () => {
    setErrorMessage("");
    setLoginErrorMessage("");
    setPasswordErrorMessage("");
  };

  return (
    <section>
      <div className="flex flex-col items-center">
        <h3 className="!text-3xl mb-7">Přihlášení</h3>
        {errorMessage && (
          <p
            ref={refErrorMessage}
            className="text-center text-error border-error border-1 rounded-sm p-2.5 mb-3 w-full text-sm bg-red-100 transition-all"
          >
            {errorMessage}
          </p>
        )}

        <form action={handleAction} className="w-full">
          <AppTextField
            ref={refLogin}
            value={userLogin}
            name="login"
            label="Uživatelské jméno"
            className="mb-3"
            // required
            error={!!loginErrorMessage}
            helperText={loginErrorMessage}
            autoComplete="username"
            onBlur={handleOnBlurLogin}
          />

          <AppPasswordField
            value={password}
            name="password"
            label="Heslo"
            className="mb-3"
            // required
            error={!!passwordErrorMessage}
            helperText={passwordErrorMessage}
            autoComplete="current-password"
            onBlur={handleOnBlurPassword}
          />

          <div className="flex items-center justify-between mb-3">
            <div>
              <AppHoverCard
                trigger={
                  <AppCheckbox
                    checked={stayLogged}
                    name="stayLogged"
                    label="Zůstat přihlášený"
                    onCheckedChange={handleOnCheckedChange}
                  />
                }
                content={"Odškrtněte, pokud jste na veřejném počítači"}
              />
            </div>

            <p>
              <AppAnchor href={"#"}>Zapomněli jste heslo?</AppAnchor>
            </p>
          </div>

          <AppSubmitButton className="w-full" variant="contained">
            Přihlásit
          </AppSubmitButton>
        </form>
      </div>
    </section>
  );
};

export default LoginForm;
