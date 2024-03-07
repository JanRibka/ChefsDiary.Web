import AppCheckbox from "../../shared/styledComponents/checkbox/AppCheckbox";
import AppPasswordField from "../../shared/styledComponents/passwordField/AppPasswordField";
import AppTextField from "../../shared/styledComponents/textField/AppTextField";

// TODO: Pokud zadám do prohlížeče nějakou stránku a přesměruje mě to na přihlášení, tak po přihlášení mě to musí vrátit tam, kde jsem chtěl původně jít
const Home = () => {
  return (
    <div className="mx-2">
      <AppTextField name="sdf" label="Email" radius="full" onBlur={() => {}} />

      <AppPasswordField name="password" label="Heslo" onBlur={() => {}} />

      <AppCheckbox name="dd" label="gds" />
    </div>
  );
};

export default Home;
