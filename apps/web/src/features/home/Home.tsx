import { useState } from "react";

import AppButton from "../../shared/styledComponents/button/AppButton";
import AppCheckbox from "../../shared/styledComponents/checkbox/AppCheckbox";
import AppPasswordField from "../../shared/styledComponents/passwordField/AppPasswordField";
import AppTextField from "../../shared/styledComponents/textField/AppTextField";

// TODO: Pokud zadám do prohlížeče nějakou stránku a přesměruje mě to na přihlášení, tak po přihlášení mě to musí vrátit tam, kde jsem chtěl původně jít
const Home = () => {
  const [checked, setChecked] = useState<boolean>(false);

  return (
    <div className="mx-2">
      <AppTextField name="sdf" label="Email" radius="full" onBlur={() => {}} />

      <AppPasswordField name="password" label="Heslo" onBlur={() => {}} />

      <AppCheckbox
        checked={checked}
        name="dd"
        label="Gds"
        disabled
        onCheckedChange={() => {
          setChecked((prev) => !prev);
        }}
      />

      <AppButton>Test</AppButton>
    </div>
  );
};

export default Home;
