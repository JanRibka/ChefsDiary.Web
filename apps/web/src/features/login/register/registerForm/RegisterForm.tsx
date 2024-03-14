import { ChangeEvent, useEffect, useRef, useState } from "react";

import { validateLogin } from "@repo/shared/validations";

import useRegister from "../../../../shared/api/apiHooks/auth/useRegister";
import SubmitButton from "../../../../shared/components/submitButton/SubmitButton";
import AppConfirmPassword from "../../../../shared/styledComponents/confirmPassword/AppConfirmPassword";
import AppTextField from "../../../../shared/styledComponents/textField/AppTextField";
import ConfirmPasswordDescribedByArea from "./confirmPasswordDescribedByArea/ConfirmPasswordDescribedByArea";
import LoginDescribedByArea from "./loginDescribedByArea/LoginDescribedByArea";
import PasswordDescribedByArea from "./passwordDescribedByArea/PasswordDescribedByArea";

const RegisterForm = () => {
  // References
  const refLogin = useRef<HTMLInputElement>(null);
  const refErrorMessage = useRef<HTMLParagraphElement>(null);

  // State
  const [login, setLogin] = useState<string>("");
  const [loginFocus, setLoginFocus] = useState<boolean>(false);
  const [loginValid, setLoginValid] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  // Constants
  const {
    registerUser,
    errorMessage,
    setErrorMessage,
    loginErrorMessage,
    setLoginErrorMessage,
    emailErrorMessage,
    setEmailErrorMessage,
    passwordErrorMessage,
    setPasswordErrorMessage,
    confirmPasswordErrorMessage,
    setConfirmPasswordErrorMessage,
  } = useRegister();

  // Other
  useEffect(() => {
    refLogin.current?.focus();
  }, []);

  useEffect(() => {
    resetErrors();
  }, [login, email, password, confirmPassword]);

  const handleAction = async (data: FormData) => {
    const response = await registerUser(data);
    debugger;
    if (response) {
      // update({
      //   uuid: response.uuid,
      //   login: response.login,
      //   userRoles: response.userRoles,
      //   accessToken: response.accessToken,
      // });
      // TODO: Tady bude jest2 validace a pokud neco nebude validn9 tak ze zobraz9 hl83ka u dan0ho inputu
      // TODO: Po prihlaseni presmerobvat na login a zobrazit hl83ku ze refggistrace byla cajk
      // TODO: Na cudlu nebude disable, ale bude se validovat po kliku na cudl
    } else {
      refErrorMessage.current?.focus();
    }
  };

  const handleOnChangeLogin = (e: ChangeEvent<HTMLInputElement>) => {
    const value: string = e.target.value;

    setLogin(value);

    if (loginValid) {
      const valid = validateLogin(value);

      setLoginValid(valid);
    }
  };

  const handleOnBlurLogin = () => {
    setLoginFocus(false);

    const valid = validateLogin(login);

    setLoginValid(valid);
  };

  const resetErrors = () => {
    setErrorMessage("");
    setLoginErrorMessage("");
    setEmailErrorMessage("");
    setPasswordErrorMessage("");
    setConfirmPasswordErrorMessage("");
  };
  // TODO: Položky nebudou required a pude se validovat po kliku na submit
  // TODO: Pokud nejsou polozky validn9 a jsou vyplnene, budou lehce podbarveny vervene jinak zxelene
  return (
    <section>
      <div className="flex flex-col items-center">
        <h3 className="!text-3xl mb-7">Registrace</h3>
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
            value={login}
            name="login"
            label="Uživatelské jméno"
            className="mb-3"
            // required
            error={!!loginErrorMessage}
            helperText={loginErrorMessage}
            autoComplete="off"
            ariaDescribedBy="loginNote"
            ariaDescribedByContent={<LoginDescribedByArea login={login} />}
            ariaDescribedByDisplay={!!login && loginFocus && !loginValid}
            onChange={handleOnChangeLogin}
            onBlur={handleOnBlurLogin}
            onFocus={() => setLoginFocus(true)}
          />

          <AppTextField
            value={email}
            name="email"
            label="Email"
            type="email"
            className="mb-3"
            // required
            error={!!emailErrorMessage}
            helperText={emailErrorMessage}
            autoComplete="email"
            onBlur={(e) => setEmail(e.target.value)}
          />

          <AppConfirmPassword
            password={password}
            setPassword={setPassword}
            passwordErrorMessage={passwordErrorMessage}
            passwordAriaDescribedByContent={
              <PasswordDescribedByArea password={password} />
            }
            confirmPassword={confirmPassword}
            setConfirmPassword={setConfirmPassword}
            confirmPasswordErrorMessage={confirmPasswordErrorMessage}
            confirmPasswordAriaDescribedByContent={
              <ConfirmPasswordDescribedByArea />
            }
          />

          <SubmitButton className="w-full" variant="contained">
            Registrovat
          </SubmitButton>
        </form>
      </div>
    </section>
  );
};

export default RegisterForm;
