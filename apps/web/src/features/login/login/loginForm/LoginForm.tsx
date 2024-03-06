import { useEffect, useRef } from "react";
import { useFormStatus } from "react-dom";

import AppPasswordField from "../../../../shared/styledComponents/passwordField/AppPasswordField";
import AppTextField from "../../../../shared/styledComponents/textField/AppTextField";

const LoginForm = () => {
  // References
  const refLogin = useRef<HTMLInputElement>(null);

  // Constants

  // Other
  useEffect(() => {
    refLogin.current?.focus();
  }, []);

  const handleAction = (data: FormData) => {
    const login = data.get("login");

    console.log(login);
  };

  return (
    <div className="flex flex-col items-center">
      <h3 className="!text-3xl mb-7">Přihlášení</h3>
      <form action={handleAction} className="w-full">
        <AppTextField
          ref={refLogin}
          name="login"
          label="Uživatelské jméno"
          className="mb-3"
          required
          tabIndex={0}
          autoComplete="username"
          onBlur={() => {}}
        />
        <AppPasswordField
          name="heslo"
          label="Heslo"
          className="mb-3"
          required
          tabIndex={1}
          autoComplete="current-password"
          onBlur={() => {}}
        />

        <SubmitButton />
      </form>
    </div>
  );
};

const SubmitButton = () => {
  const data = useFormStatus();
  const isLoading = data.pending;

  // TODO: dat do shared
  return <button disabled={isLoading}>Submit</button>;
};

export default LoginForm;
