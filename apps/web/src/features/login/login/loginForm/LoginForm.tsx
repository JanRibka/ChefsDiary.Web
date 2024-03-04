import { useRef } from "react";
import { useFormStatus } from "react-dom";

import { Heading } from "@radix-ui/themes";

import AppPasswordField from "../../../../shared/styledComponents/passwordField/AppPasswordField";
import AppTextField from "../../../../shared/styledComponents/textField/AppTextField";

const LoginForm = () => {
  // References
  const refLogin = useRef<HTMLInputElement>(null);

  // Constants

  // Other

  const handleAction = (data: FormData) => {
    const login = data.get("login");

    console.log(login);
  };

  return (
    <div>
      <Heading size="9" className="!text-3xl">
        Přihlášení
      </Heading>
      <form action={handleAction}>
        <AppTextField
          ref={refLogin}
          name="login"
          label="Uživatelské jméno"
          onBlur={() => {}}
        />
        <AppPasswordField name="heslo" label="Heslo" onBlur={() => {}} />

        <SubmitButton />
      </form>
    </div>
  );
};

const SubmitButton = () => {
  const data = useFormStatus();
  const isLoading = data.pending;

  // TODO: dat do shared
  return <button disabled={isLoading}></button>;
};

export default LoginForm;
