import { FocusEvent, useEffect, useRef, useState } from "react";

import useRegister from "../../../../shared/api/apiHooks/auth/useRegister";
import AppTextField from "../../../../shared/styledComponents/textField/AppTextField";

const RegisterForm = () => {
  // References
  const refLogin = useRef<HTMLInputElement>(null);
  const refErrorMessage = useRef<HTMLParagraphElement>(null);

  // State
  const [userLogin, setUserLogin] = useState<string>("");
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
  }, [userLogin, email, password, confirmPassword]);

  const handleOnBlurLogin = (e: FocusEvent<HTMLInputElement, Element>) => {
    const value = e.target.value;

    setUserLogin(value);
  };

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
    } else {
      refErrorMessage.current?.focus();
    }
  };

  const resetErrors = () => {
    setErrorMessage("");
    setLoginErrorMessage("");
    setEmailErrorMessage("");
    setPasswordErrorMessage("");
    setConfirmPasswordErrorMessage("");
  };

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
            value={userLogin}
            name="login"
            label="Uživatelské jméno"
            className="mb-3"
            // required
            error={!!loginErrorMessage}
            helperText={loginErrorMessage}
            autoComplete="off"
            ariaDescribedBy="loginnote"
            onBlur={handleOnBlurLogin}
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
            onBlur={handleOnBlurLogin}
          />
        </form>
      </div>
    </section>
  );
};

export default RegisterForm;
