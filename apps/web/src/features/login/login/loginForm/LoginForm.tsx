import { useRef } from "react";

import { Heading } from "@radix-ui/themes";

import AppPasswordField from "../../../../shared/styledComponents/passwordField/AppPasswordField";
import AppTextField from "../../../../shared/styledComponents/textField/AppTextField";

const LoginForm = () => {
  // References
  const refLogin = useRef<HTMLInputElement>(null);

  return (
    <div>
      <Heading size="9" className="!text-3xl">
        Přihlášení
      </Heading>
      <form>
        <AppTextField
          ref={refLogin}
          name="login"
          label="Uživatelské jméno"
          onBlur={() => {}}
        />
        <AppPasswordField name="heslo" label="Heslo" onBlur={() => {}} />
      </form>
    </div>
  );
};

export default LoginForm;
